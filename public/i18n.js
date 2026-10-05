// Runtime translation for Scroll Sign. English is the source language (written in index.html);
// this file maps the exact English strings to Japanese (ja) and Simplified Chinese (zh).
// Pick a language with ?lang=ja / ?lang=zh, the language selector, or the browser language.
(function () {
  var D = { ja: {}, zh: {} };
  function add(en, ja, zh) { var k = norm(en); D.ja[k] = ja; D.zh[k] = zh; }
  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }

  add('Turn this phone into a scrolling text sign. Tap the display to come back here.', 'このスマホを電光掲示板（スクロール文字）にします。表示中に画面をタップするとここに戻ります。', '把这部手机变成滚动文字的电子显示牌。显示时点一下屏幕就能回到这里。');
  add('↺ Restore defaults', '↺ 初期設定に戻す', '↺ 恢复默认设置');
  add('ℹ️ info', 'ℹ️ 情報', 'ℹ️ 信息');
  add('build v20', 'ビルド v20', '版本 v20');
  add('🔄 Check for latest version', '🔄 最新バージョンを確認', '🔄 检查最新版本');
  add('If you don\'t see "build v20" above, you\'re on an old cached copy — tap "Check for latest version" above, or for a guaranteed-fresh look, open this link in a Private/Incognito tab (that never has an old cached version installed).', '上に「ビルド v20」と表示されない場合は、古いキャッシュを見ています。上の「最新バージョンを確認」をタップするか、確実に最新を見るために、このリンクをプライベート（シークレット）タブで開いてください（古いバージョンが残っていません）。', '如果上面没有显示“版本 v20”，说明你看到的是旧的缓存版本——请点上面的“检查最新版本”，或者用隐私（无痕）标签页打开这个链接，保证看到最新的（无痕页不会保留旧版本）。');
  add('Preview', 'プレビュー', '预览');
  add('Entry', '入る向き', '进入方向');
  add('Rotate', '文字の回転', '文字旋转');
  add('Order', '読む順', '文字顺序');
  add('ⓘ What do these mean?', 'ⓘ これは何？', 'ⓘ 这些是什么意思？');
  add('— pick the edge your text enters from (arrow points the way it travels). Defaults to entering from the left, travelling right — the most common way to use this as a sign.', '— 文字が入ってくる辺を選びます（矢印は進む向き）。初期値は左から入って右へ進む、看板として最も一般的な向きです。', '— 选择文字从哪一边进入（箭头表示移动方向）。默认从左边进入、向右移动，这是当作显示牌最常见的用法。');
  add('— which way the text itself faces: → upright (0°) · ↓ rotated 90° · ← upside down (180°) · ↑ rotated 270°. Independent of Entry and Order — this rotates the text itself, not which way it scrolls or which order the characters read in.', '— 文字そのものの向き：→ 正立（0°）・↓ 90°回転・← 上下逆さま（180°）・↑ 270°回転。入る向きや読む順とは別です。文字自体を回転させるもので、スクロールの向きや読む順は変わりません。', '— 文字本身朝向哪里：→ 正向（0°）· ↓ 旋转 90° · ← 倒置（180°）· ↑ 旋转 270°。与进入方向和文字顺序互不影响——它只旋转文字本身，不改变滚动方向，也不改变阅读顺序。');
  add('— reading order for short text (e.g. 2 characters): AB normal order · A/B stacked top-to-bottom · BA reversed order · B/A stacked bottom-to-top, tap again to cycle back to AB. Independent of Entry — e.g. stacked characters can still travel left to right as one column.', '— 短い文字（例：2文字）の並べ方：AB 通常 ・ A/B 上から下に縦積み ・ BA 逆順 ・ B/A 下から上に縦積み。もう一度タップすると AB に戻ります。入る向きとは別なので、縦積みでも一列のまま左から右へ進めます。', '— 短文字（比如 2 个字）的排列方式：AB 正常顺序 · A/B 从上到下竖排 · BA 倒序 · B/A 从下到上竖排，再点一次回到 AB。与进入方向互不影响——比如竖排的字仍可以作为一列从左向右移动。');
  add('Text (any language — English, Japanese, Chinese, Korean…)', 'テキスト（どの言語でも — 英語、日本語、中国語、韓国語…）', '文字（任何语言——英文、日文、中文、韩文……）');
  add('Type your message...', 'メッセージを入力…', '输入要显示的文字……');
  add('Emoji / picture — tap to insert into your text above (mixed in with the words, not a separate animation)', '絵文字／画像 — タップして上のテキストに挿入します（文字と一緒に並び、別のアニメーションではありません）', '表情／图片——点一下插入到上面的文字里（和文字混排在一起，不是单独的动画）');
  add('Picture inserted ·', '画像を挿入しました ·', '已插入图片 ·');
  add('remove picture', '画像を削除', '移除图片');
  add('Font', 'フォント', '字体');
  add('Default (sans-serif)', '標準（ゴシック体）', '默认（无衬线体）');
  add('Serif', '明朝体', '衬线体');
  add('Monospace', '等幅', '等宽');
  add('Condensed / bold sign', '縦長・太字の看板風', '窄体／粗体招牌风格');
  add('Casual', 'カジュアル', '手写风');
  add('Font size', '文字サイズ', '字号');
  add('(defaults to fill the screen)', '（初期値は画面いっぱい）', '（默认撑满屏幕）');
  add('Speed', '速度', '速度');
  add('Text color', '文字色', '文字颜色');
  add('Background color', '背景色', '背景颜色');
  add('🌈 Rainbow (each character a different color, flowing)', '🌈 レインボー（文字ごとに色が変わり、流れます）', '🌈 彩虹（每个字不同颜色，并且流动变化）');
  add('🔗 Multi-phone combo display', '🔗 複数スマホ連結表示', '🔗 多手机拼屏显示');
  add('ⓘ how does this work?', 'ⓘ 仕組みは？', 'ⓘ 这是怎么工作的？');
  add("Line up several phones side by side (any mix of Android/iPhone — this uses each phone's own clock, not an app-specific protocol). Each phone shows the SAME message, but starts its scroll at a synced clock time with a per-device offset — when phones are the same width and placed in order, the moving line looks continuous across screens. Best-effort sync only (no server): works well on the same wifi/time zone, can drift a little over long sessions — tap \"Start display\" again on all phones to realign anytime. Font size automatically multiplies by \"Total phones\" — with 4 phones, the text renders 4× bigger than the \"Font size\" slider says, so one giant character spans across all 4 screens together instead of each phone showing its own small copy.",
    '複数のスマホを横に並べます（AndroidとiPhoneの混在OK。各スマホ自身の時計を使い、専用の通信方式は使いません）。どのスマホにも同じメッセージを入れ、時計に合わせて端末ごとにずらした位置からスクロールを始めます。同じ幅のスマホを順番に並べれば、流れる文字が画面をまたいでつながって見えます。サーバーを使わない簡易同期なので、同じWi-Fi／同じタイムゾーンならよく合いますが、長く表示するとずれることがあります。そのときは全スマホで「表示開始」をもう一度タップすると合わせ直せます。文字サイズは「スマホの台数」に応じて自動で大きくなり、4台なら「文字サイズ」の4倍で描画されるので、1文字が4台の画面にまたがって表示されます。',
    '把几部手机并排放好（安卓和 iPhone 可以混用——用的是各手机自己的时钟，不需要专门的协议）。每部手机显示同样的文字，按同步的时钟时间、再加上各自的偏移量开始滚动；手机宽度相同、按顺序摆放时，滚动的文字在几块屏幕上看起来是连续的。这只是尽力而为的同步（不用服务器）：在同一个 Wi-Fi／同一时区下效果很好，长时间显示可能会慢慢错开——随时在所有手机上再点一次“开始显示”就能重新对齐。字号会自动乘以“手机总数”：4 部手机时，文字会比“字号”滑块显示的大 4 倍，这样一个大字能横跨 4 块屏幕，而不是每部手机各显示一个小的。');
  add('This phone\'s position / total phones (e.g. "1 / 4" = leftmost of 4)', 'このスマホの位置／スマホの台数（例：「1 / 4」＝4台のいちばん左）', '这部手机的位置／手机总数（例如“1 / 4”＝4 部中最左边的一部）');
  add('Manual fine-tune (ms)', '手動の微調整（ミリ秒）', '手动微调（毫秒）');
  add('0ms', '0ms', '0ms');
  add('If this phone still looks slightly ahead/behind the others after starting, nudge it here (negative = start a bit earlier, positive = start a bit later) and tap "Start display" again.', '開始後もこのスマホが他より少し進んで／遅れて見えるときは、ここで調整します（マイナス＝少し早く、プラス＝少し遅く開始）。調整したら「表示開始」をもう一度タップしてください。', '开始后如果这部手机仍比其他手机略快或略慢，可以在这里微调（负数＝提前一点开始，正数＝晚一点开始），然后再点一次“开始显示”。');
  add('🎮 Live Control (auto-sync, beta)', '🎮 ライブコントロール（自動同期・ベータ）', '🎮 实时控制（自动同步，测试版）');
  add("One phone becomes the Controller and gets a 4-digit room code. Every other phone joins that code as a Display. The Controller pushes the message/look to all joined phones and starts them together — the start moment comes from the server's own clock (not each phone guessing), so this is tighter sync than the manual position/offset fallback above. Needs internet access (not just the same wifi) — this talks to sign.maysuns.uk's own small control server. The inline picture (🖼️) is NOT sent to other phones — only text, size, speed, colors, font, rainbow, direction, and rotation.",
    '1台が「コントローラー」になり、4桁のルームコードが発行されます。ほかのスマホはそのコードで「ディスプレイ」として参加します。コントローラーがメッセージと見た目を全員に送り、同時に開始します。開始の瞬間はサーバーの時計で決まる（各スマホの推測ではない）ので、上の手動の位置／オフセット方式より正確に合います。インターネット接続が必要です（同じWi-Fiだけでは不足）— sign.maysuns.uk の小さな制御サーバーと通信します。文中の画像（🖼️）はほかのスマホには送られません。送られるのは文字、サイズ、速度、色、フォント、レインボー、方向、回転だけです。',
    '一部手机当“控制器”，会得到一个 4 位数字的房间码；其他手机输入这个码，作为“显示器”加入。控制器把文字和样式推送给所有已加入的手机，并让它们同时开始——开始的时刻由服务器的时钟决定（而不是各手机自己估计），所以比上面手动设置位置／偏移的方法同步得更准。需要联网（只在同一个 Wi-Fi 下不够）——它会连接 sign.maysuns.uk 自己的小型控制服务器。文字中插入的图片（🖼️）不会发送给其他手机——只发送文字、大小、速度、颜色、字体、彩虹、方向和旋转。');
  add('🎮 Become Controller', '🎮 コントローラーになる', '🎮 成为控制器');
  add('📱 Join as Display', '📱 ディスプレイとして参加', '📱 作为显示器加入');
  add('Room code — have every other phone tap "Join as Display" and enter this:', 'ルームコード — ほかのスマホで「ディスプレイとして参加」をタップし、これを入力してください：', '房间码——请让其他每部手机点“作为显示器加入”，然后输入这个码：');
  add('📡 Push settings + Start all', '📡 設定を送信して全員開始', '📡 推送设置并全部开始');
  add('Room code (ask the Controller phone for it)', 'ルームコード（コントローラーのスマホで確認）', '房间码（向控制器手机询问）');
  add('e.g. 4720', '例：4720', '例如 4720');
  add('Join', '参加', '加入');
  add('📲 Install this app', '📲 このアプリをインストール', '📲 安装这个应用');
  add('📲 How to install / add to home screen', '📲 インストール／ホーム画面に追加する方法', '📲 如何安装／添加到主屏幕');
  add('Android (Chrome/Edge):', 'Android（Chrome／Edge）：', '安卓（Chrome／Edge）：');
  add('tap "📲 Install this app" above if it\'s showing — if not: tap the ⋮ menu (top right) → "Install app" / "Add to Home screen".', '上に「📲 このアプリをインストール」が出ていればそれをタップ。出ていない場合は、右上の ⋮ メニュー →「アプリをインストール」または「ホーム画面に追加」。', '如果上面出现“📲 安装这个应用”，直接点它；没有的话，点右上角的 ⋮ 菜单 →“安装应用”或“添加到主屏幕”。');
  add('iPhone/iPad (Safari):', 'iPhone／iPad（Safari）：', 'iPhone／iPad（Safari）：');
  add('Apple doesn\'t let websites trigger this automatically, so it\'s a few manual taps: 1) tap the Share icon (square with an arrow, in the bottom/top toolbar) 2) scroll down and tap "Add to Home Screen" 3) tap "Add" — an app icon appears on your home screen that opens straight to the display, no browser bar.', 'Apple の仕様でサイトから自動では追加できないため、手動で操作します：1) 共有アイコン（矢印つきの四角、画面の下／上のツールバー）をタップ 2) 下にスクロールして「ホーム画面に追加」をタップ 3) 「追加」をタップ — ホーム画面にアイコンができ、ブラウザのバーなしでそのまま表示画面が開きます。', '苹果不允许网站自动触发这个操作，所以需要手动点几下：1）点“分享”图标（带箭头的方框，在屏幕下方或上方的工具栏）2）向下滑，点“添加到主屏幕”3）点“添加”——主屏幕上会出现一个图标，点开就直接是显示界面，没有浏览器栏。');
  add('This is also the only way to get a real fullscreen look on iPhone', 'これは iPhone で本当の全画面表示にする唯一の方法でもあります', '这也是在 iPhone 上获得真正全屏效果的唯一办法');
  add('— opening this page in a normal Safari tab and tapping "Start display" will NOT hide Safari\'s browser bar (Apple doesn\'t allow websites to request that); only the installed home-screen app version does.', '— 通常の Safari のタブでこのページを開いて「表示開始」をタップしても、Safari のバーは隠れません（Apple はサイトからの要求を認めていません）。ホーム画面に追加したアプリ版だけが隠せます。', '——在普通的 Safari 标签页里打开本页再点“开始显示”，并不会隐藏 Safari 的浏览器栏（苹果不允许网站这样要求）；只有添加到主屏幕的应用版才可以。');
  add('📱 iPhone tip: for a real fullscreen sign (no Safari address bar), add this to your Home Screen first — see "How to install" above — then open it from the home screen icon instead of this browser tab.', '📱 iPhone のヒント：Safari のアドレスバーなしの本当の全画面にするには、先にホーム画面に追加し（上の「インストール方法」参照）、このブラウザのタブではなくホーム画面のアイコンから開いてください。', '📱 iPhone 小提示：想要真正的全屏显示牌（没有 Safari 地址栏），请先把它添加到主屏幕（见上面的“如何安装”），然后从主屏幕图标打开，而不是在这个浏览器标签页里。');
  add('☕ Support this project', '☕ このプロジェクトを応援する', '☕ 支持这个项目');
  add('▶ Start display', '▶ 表示開始', '▶ 开始显示');
  add('tap ⏸ to pause/resume · ✕ to edit', '⏸ をタップで一時停止／再開 ・ ✕ で編集に戻る', '点 ⏸ 暂停／继续 · 点 ✕ 返回编辑');
  // dynamic messages (exact text or pattern)
  add('Checking for the latest version…', '最新バージョンを確認中…', '正在检查最新版本……');
  add('Cleared old version, reloading…', '古いバージョンを消去しました。再読み込みします…', '已清除旧版本，正在重新加载……');
  add('Connecting…', '接続中…', '正在连接……');
  add('Waiting for phones to join…', '参加するスマホを待っています…', '正在等待手机加入……');
  add('Disconnected — reload the page and tap "Become Controller" again to retry.', '切断されました — ページを再読み込みして、もう一度「コントローラーになる」をタップしてください。', '连接已断开——请重新加载页面，再点一次“成为控制器”。');
  add('Enter the 4-digit code shown on the Controller phone.', 'コントローラーのスマホに表示されている4桁のコードを入力してください。', '请输入控制器手机上显示的 4 位数字。');
  add('Room not found — check the code and try again.', 'ルームが見つかりません — コードを確認してもう一度お試しください。', '找不到这个房间——请检查房间码后重试。');
  add('Starting…', '開始中…', '正在开始……');
  add('Controller disconnected.', 'コントローラーが切断されました。', '控制器已断开连接。');
  add('Disconnected — tap Join again to retry.', '切断されました — もう一度「参加」をタップしてください。', '连接已断开——请再点一次“加入”。');
  var PAT = {
    ja: [[/^This phone: #(\d+) of (\d+)$/, '$1 / $2 台目のスマホ'], [/^Starting in ([\d.]+)s.*$/, '$1 秒後に開始します — 全スマホを数秒以内に開始すると、いちばんよく合います。'], [/^Could not auto-update \((.*)\).*$/, '自動更新できませんでした（$1）— このタブ／アプリを完全に閉じてから開き直してください。'], [/^Sent — displays will start together in ~(\d+)s\.$/, '送信しました — 約 $1 秒後に全ディスプレイが同時に開始します。'], [/^Connected as #(\d+) of (\d+).*$/, '$1 / $2 台目として接続しました — コントローラーを待っています…']],
    zh: [[/^This phone: #(\d+) of (\d+)$/, '第 $1 部（共 $2 部）'], [/^Starting in ([\d.]+)s.*$/, '$1 秒后开始——请让所有手机在几秒内一起开始，同步效果最好。'], [/^Could not auto-update \((.*)\).*$/, '无法自动更新（$1）——请完全关闭这个标签页／应用后重新打开。'], [/^Sent — displays will start together in ~(\d+)s\.$/, '已发送——约 $1 秒后所有显示器同时开始。'], [/^Connected as #(\d+) of (\d+).*$/, '已连接，是第 $1 部（共 $2 部）——正在等待控制器……']]
  };
  var ATTRS = ['placeholder', 'title', 'aria-label'];
  var lang = 'en';
  function tr(s) {
    var core = norm(s); if (!core) return null;
    var d = D[lang][core]; if (d) return d;
    var p = PAT[lang]; for (var i = 0; i < p.length; i++) { if (p[i][0].test(core)) return core.replace(p[i][0], p[i][1]); }
    var m = core.match(/^build v(\d+)$/); if (m) return D[lang]['build v20'].replace('19', m[1]);
    return null;
  }
  var orig = new WeakMap(), done = new WeakMap();
  function doNode(n) {
    if (n.nodeType === 3) {
      var cur = n.nodeValue, src, last = done.get(n);
      if (last !== undefined && cur === last) src = orig.get(n); else { src = cur; orig.set(n, cur); }
      if (lang === 'en') { if (cur !== src) n.nodeValue = src; done.delete(n); return; }
      var t = tr(src);
      if (t == null) { done.delete(n); return; }
      var lead = (src.match(/^\s*/) || [''])[0], trail = (src.match(/\s*$/) || [''])[0], nv = lead + t + trail;
      if (cur !== nv) n.nodeValue = nv; done.set(n, nv);
    } else if (n.nodeType === 1) {
      if (/^(SCRIPT|STYLE)$/.test(n.tagName)) return;
      ATTRS.forEach(function (a) { if (n.hasAttribute(a)) { var key = 'data-en-' + a; if (!n.hasAttribute(key)) n.setAttribute(key, n.getAttribute(a)); var base = n.getAttribute(key); var t = lang === 'en' ? base : tr(base); if (t != null && n.getAttribute(a) !== t) n.setAttribute(a, t); } });
      for (var c = n.firstChild; c; c = c.nextSibling) doNode(c);
    }
  }
  var busy = false;
  function run() { doNode(document.body); document.documentElement.lang = lang; document.title = lang === 'ja' ? 'スクロールサイン' : lang === 'zh' ? '滚动显示牌' : 'Scroll Sign'; }
  function pick() {
    var q = (location.search.match(/[?&]lang=(en|ja|zh)/) || [])[1]; if (q) { try { localStorage.setItem('ss_lang', q); } catch (e) {} return q; }
    try { var s = localStorage.getItem('ss_lang'); if (s) return s; } catch (e) {}
    var n = (navigator.language || 'en').toLowerCase(); return n.indexOf('ja') === 0 ? 'ja' : n.indexOf('zh') === 0 ? 'zh' : 'en';
  }
  function setLang(l) { lang = l; try { localStorage.setItem('ss_lang', l); } catch (e) {} run(); var sel = document.getElementById('langSel'); if (sel) sel.value = l; }
  function init() {
    lang = pick();
    var h = document.getElementById('infoToggle') && document.getElementById('infoToggle').parentNode;
    if (h && !document.getElementById('langSel')) {
      var sel = document.createElement('select'); sel.id = 'langSel'; sel.setAttribute('aria-label', 'Language'); sel.style.cssText = 'font-size:0.85em;margin-left:10px;max-width:6.2em;padding:2px';
      [['en', 'English'], ['ja', '日本語'], ['zh', '中文']].forEach(function (o) { var op = document.createElement('option'); op.value = o[0]; op.textContent = o[1]; sel.appendChild(op); });
      sel.value = lang; sel.onchange = function () { setLang(sel.value); }; h.appendChild(sel);
    }
    var h1 = document.querySelector('#settings h1'); if (h1) h1.style.whiteSpace = 'nowrap';
    run();
    new MutationObserver(function (muts) { if (lang === 'en') return; muts.forEach(function (m) { if (m.type === 'characterData') doNode(m.target); else m.addedNodes.forEach(doNode); }); }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  window.ScrollSignI18n = { setLang: setLang, tr: tr };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
