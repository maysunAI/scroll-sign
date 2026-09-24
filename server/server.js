// PJ87 Scroll Sign — multi-phone live control signaling server (mobile req 2026-09-23,
// round 16, "plan A" from the 3-option comparison in mobile_reply.md req46 answer #2).
//
// What this does: one phone becomes the "controller", generates a 4-digit room code.
// Other phones ("displays") join that room with the code. The controller sees each
// display appear with an assigned position number as it connects, can push the message/
// look settings to all of them at once, and can trigger a synced start — the server
// stamps the target start time so every display computes its own start delay from the
// SAME clock (the server's), instead of each phone guessing off its own clock like the
// existing manual "position/total + fine-tune ms" fallback still does.
//
// Deliberately NOT built: persistence (rooms are pure in-memory, gone on restart —
// acceptable, a signage room is a same-session, same-room-of-phones affair, nobody
// needs a room to survive a server reboot), auth (room codes are the only gate — fine
// for "a few phones on the same table", not meant for anything more adversarial),
// horizontal scaling (single Node process; this is a hobby-scale signage tool, not a
// service with expected concurrent-room load).

const http = require('http');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 5187;

// room code -> { controlWs, displays: Map<ws, {index:number, joinedAt:number}>, nextIndex:number }
const rooms = new Map();

function makeRoomCode(){
  let code;
  do { code = String(Math.floor(1000 + Math.random() * 9000)); } while (rooms.has(code));
  return code;
}

function send(ws, obj){
  if (ws && ws.readyState === ws.OPEN) ws.send(JSON.stringify(obj));
}

function broadcastDeviceList(room){
  const r = rooms.get(room);
  if (!r) return;
  const devices = [...r.displays.values()]
    .sort((a, b) => a.joinedAt - b.joinedAt)
    .map((d, i) => ({ index: i + 1 })); // renumber contiguously as phones join/leave
  // also push each display its OWN current index/total (may shift if an earlier phone left)
  let i = 0;
  for (const [dispWs, meta] of [...r.displays.entries()].sort((a, b) => a[1].joinedAt - b[1].joinedAt)) {
    i++;
    meta.index = i;
    send(dispWs, { type: 'joined', index: i, total: r.displays.size });
  }
  send(r.controlWs, { type: 'devices', total: r.displays.size, devices });
}

function cleanupRoomIfEmpty(room){
  const r = rooms.get(room);
  if (!r) return;
  if (!r.controlWs && r.displays.size === 0) rooms.delete(room);
}

const server = http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); res.end('ok'); return; }
  res.writeHead(404); res.end();
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  let joinedRoom = null;
  let role = null; // 'control' | 'display'

  ws.on('message', (raw) => {
    let msg;
    try { msg = JSON.parse(raw); } catch { return; }

    if (msg.type === 'ping') {
      send(ws, { type: 'pong', t: msg.t, serverTime: Date.now() });
      return;
    }

    if (msg.type === 'create_room') {
      const room = makeRoomCode();
      rooms.set(room, { controlWs: ws, displays: new Map(), nextIndex: 1 });
      joinedRoom = room; role = 'control';
      send(ws, { type: 'room_created', room });
      return;
    }

    if (msg.type === 'join' && msg.role === 'display' && typeof msg.room === 'string') {
      const room = msg.room.trim();
      let r = rooms.get(room);
      if (!r) { send(ws, { type: 'join_error', reason: 'room_not_found' }); return; }
      r.displays.set(ws, { index: 0, joinedAt: Date.now() });
      joinedRoom = room; role = 'display';
      broadcastDeviceList(room);
      return;
    }

    // only the controller of its own room may configure/start
    if (!joinedRoom || role !== 'control') return;
    const r = rooms.get(joinedRoom);
    if (!r || r.controlWs !== ws) return;

    if (msg.type === 'configure' && msg.settings) {
      for (const dispWs of r.displays.keys()) send(dispWs, { type: 'configure', settings: msg.settings });
      return;
    }
    if (msg.type === 'start' && typeof msg.atServerTime === 'number') {
      for (const dispWs of r.displays.keys()) send(dispWs, { type: 'start', atServerTime: msg.atServerTime });
      return;
    }
  });

  ws.on('close', () => {
    if (!joinedRoom) return;
    const r = rooms.get(joinedRoom);
    if (!r) return;
    if (role === 'control' && r.controlWs === ws) {
      r.controlWs = null;
      for (const dispWs of r.displays.keys()) send(dispWs, { type: 'controller_left' });
    } else if (role === 'display') {
      r.displays.delete(ws);
      broadcastDeviceList(joinedRoom);
    }
    cleanupRoomIfEmpty(joinedRoom);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`PJ87 signal server listening on 127.0.0.1:${PORT}`);
});
