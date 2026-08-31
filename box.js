/* BUILT 2026-08-31 17:12 ET */
/* ============================================================
   box.js — ADHOTBOX
   The tag every site carries. It holds no campaigns and no prices.
   It asks the server what may run on this page, and renders it.

   ------------------------------------------------------------
   INSTALL — ONE LINE, and it places the advertisements itself.

     <script src="https://adhotbox.com/box.js" data-auto></script>

   With data-auto the script reads the page and puts slots in sensible
   places on its own: after the opening paragraphs, in a sidebar if
   there is one, and above the footer. Nothing to edit, no HTML to
   paste into a page, no code block.

   It will not put an advertisement in a header, a navigation bar, a
   form, or inside another advertisement. It will not put two within
   600 pixels of each other. And it does nothing at all on a page with
   almost no text on it, because that is usually a checkout, a login,
   or a contact page.

   TO CONTROL IT
     data-auto="2"            at most two on a page (default 3)
     data-in="article, .post" only look inside these
     data-not=".no-ads"       never inside these

   TO PLACE THEM BY HAND INSTEAD — leave data-auto off and put slots
   where you want them:

     <div data-ad="rail"></div>
     <script src="https://adhotbox.com/box.js"></script>

   SHAPES
     TEXT     rail 300x600 · card 300x250 · inline 728x180 · leader 970x120
     IMAGE    banner 600x200 · square 400x400
              — and any shape above accepts an image above the words

   IMAGES ARE SERVED FROM ADHOTBOX.COM, never from the advertiser's
   own host. An image loaded from somebody else's server is a
   tracking pixel: it hands them the reader's address, browser and
   the page. The server drops any creative that is not ours.

   OPTIONS on the div
     data-ticker="TOVX"     the company this page is about
     data-topic="markets"   override the site's subject
     data-dark="1"          reversed palette for a dark page

   OR in <head>, for the whole page
     <meta name="ad-topic"  content="markets">
     <meta name="ad-ticker" content="TOVX">
   A ?ticker= in the address is picked up on its own.

   ------------------------------------------------------------
   A SITE THAT IS NOT ON THE NETWORK gets one advertisement of ours,
   labelled a demonstration, so a publisher who has just pasted the
   line can see it working straight away. It earns nobody anything
   and no real advertiser reaches a site nobody has approved.

   There is no list of advertisers in this file and no rates —
   pulling it apart tells you nothing about either.
   ============================================================ */

(function () {

var API = "https://adhotbox.realroofers.workers.dev";

function meta(n){
  var m = document.querySelector('meta[name="' + n + '"]');
  return m ? (m.getAttribute("content") || "").trim() : "";
}
function mmss(n){
  n = parseInt(n, 10) || 0;
  var m = Math.floor(n / 60), s2 = n % 60;
  return m + ":" + (s2 < 10 ? "0" : "") + s2;
}

function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g, function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }

var HOST = (location.hostname || "").replace(/^www\./, "").toLowerCase();
var PAGE = {
  topic:  meta("ad-topic").toLowerCase(),
  ticker: (meta("ad-ticker")
           || new URLSearchParams(location.search).get("ticker")
           || new URLSearchParams(location.search).get("q")
           || "").toUpperCase().replace(/[^A-Z.\-]/g, "")
};

var CSS = ''
+ '.abx{font:14px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;'
+   'display:block;text-decoration:none;color:inherit;border:1px solid #d8d8d1;'
+   'background:#fff;border-radius:4px;overflow:hidden;position:relative}'
+ '.abx:hover{border-color:#8a8b80}'
+ '.abx .bar{position:absolute;left:0;top:0;bottom:0;width:3px}'
+ '.abx .in{display:block;padding:15px 17px 15px 20px}'
+ '.abx .eb{display:block;font-family:ui-monospace,Menlo,monospace;font-size:9.5px;'
+   'letter-spacing:.14em;text-transform:uppercase;color:#8a8b80;margin:0 0 6px}'
+ '.abx h5{font:600 16px/1.25 inherit;margin:0 0 6px;color:#23241d}'
+ '.abx p{margin:0 0 11px;font-size:13.5px;line-height:1.55;color:#5c5d53}'
+ '.abx .cta{display:inline-block;font-family:ui-monospace,Menlo,monospace;font-size:11px;'
+   'letter-spacing:.06em;padding:7px 13px;border-radius:3px;border:1px solid;background:transparent}'
+ '.abx .tag{position:absolute;top:8px;right:10px;font-family:ui-monospace,Menlo,monospace;'
+   'font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:#a9a99e}'
+ '.abx-rail{max-width:260px;margin:0 0 16px}'
+ '.abx-card{max-width:340px;margin:0 0 16px}'
+ '.abx-inline{margin:14px 0}'
+ '.abx-leader{margin:18px 0}'
+ '.abx-leader .in{display:flex;align-items:center;gap:18px;flex-wrap:wrap;padding:14px 18px 14px 22px}'
+ '.abx-leader .eb{margin:0}'
+ '.abx-leader h5{margin:0;flex:0 0 auto}'
+ '.abx-leader p{margin:0;flex:1 1 260px;min-width:200px}'
+ '.abx-leader .cta{margin-left:auto}'
+ '.abx-dark{background:#1c1e16;border-color:#2e3125}'
+ '.abx-dark:hover{border-color:#4a4e3c}'
+ '.abx-dark h5{color:#eceae0}'
+ '.abx-dark p{color:#a8aa9a}'
+ '.abx-dark .eb,.abx-dark .tag{color:#767a68}'
/* image creative */
+ '.abx .pic{display:block;line-height:0;background:#f3f2ee}'
+ '.abx .pic.vid{position:relative;aspect-ratio:16/9;background:#14150f;cursor:pointer}'
+ '.abx .pic.vid img{width:100%;height:100%;object-fit:cover}'
+ '.abx .pic.vid .noposter{display:block;width:100%;height:100%;background:#14150f}'
+ '.abx .pic.vid .play{position:absolute;left:50%;top:50%;width:62px;height:44px;'
+   'margin:-22px 0 0 -31px;background:rgba(12,18,32,.78);border-radius:10px}'
+ '.abx .pic.vid .play:after{content:"";position:absolute;left:24px;top:13px;'
+   'border:9px solid transparent;border-left:14px solid #fff;border-right:0}'
+ '.abx .pic.vid:hover .play{background:#FF4A00}'
+ '.abx .pic.vid:hover .play:after{border-left-color:#180B05}'
+ '.abx .pic.vid .len{position:absolute;right:8px;bottom:8px;background:rgba(12,18,32,.82);'
+   'color:#fff;font:600 11px ui-monospace,Menlo,monospace;padding:2px 6px;border-radius:3px;'
+   'line-height:1.4}'
+ '.abx .pic.vid .vnote{position:absolute;left:8px;bottom:8px;background:rgba(12,18,32,.82);'
+   'color:#C9D1E2;font:600 9.5px -apple-system,sans-serif;padding:3px 7px;border-radius:3px;'
+   'line-height:1.4;letter-spacing:.02em}'
+ '.abx .pic.vid.playing{cursor:default}'
+ '.abx .pic.vid.playing .play,.abx .pic.vid.playing .len,'
+ '.abx .pic.vid.playing .vnote{display:none}'
+ '.abx .pic.vid iframe,.abx .pic.vid video{width:100%;height:100%;display:block;'
+   'border:0;background:#000}'
+ '.abx-video{margin:16px 0;max-width:560px}'
+ '.abx .pic img{display:block;width:100%;height:auto}'
+ '.abx-img .in{padding-top:13px}'
+ '.abx-dark .pic{background:#23261c}'
+ '.abx-banner{margin:16px 0}'
+ '.abx-square{max-width:400px;margin:0 0 16px}'
+ '.abx-leader.abx-img .in{display:block}'
+ '.abx-foot{font-family:ui-monospace,Menlo,monospace;font-size:9px;letter-spacing:.1em;'
+   'text-transform:uppercase;color:#a9a99e;margin:5px 0 0}'
+ '.abx-foot a{color:#a9a99e}'
+ '.abx-demo{color:#1f6b4f;font-size:9.5px}'
+ '.abx-demo a{color:#1f6b4f;font-weight:700}'
+ '.abx-paid{font-family:ui-monospace,Menlo,monospace;font-size:10px;'
+   'letter-spacing:.04em;color:#5c5d53;margin:5px 0 0;line-height:1.45}';

function styles(){
  if (document.getElementById("abx-css")) return;
  var e = document.createElement("style");
  e.id = "abx-css"; e.textContent = CSS;
  document.head.appendChild(e);
}

function count(kind, code, shape, ticker){
  try {
    var u = API + "?log=1&e=" + kind + "&c=" + encodeURIComponent(code)
          + "&site=" + encodeURIComponent(HOST)
          + "&shape=" + encodeURIComponent(shape)
          + "&topic=" + encodeURIComponent(PAGE.topic || "")
          + "&ticker=" + encodeURIComponent(ticker || "");
    if (navigator.sendBeacon) navigator.sendBeacon(u);
    else fetch(u, { mode:"no-cors", keepalive:true }).catch(function(){});
  } catch (e) {}
}

function paint(box, ad, dark, shape, ticker){
  var a = document.createElement("a");
  a.className = "abx abx-" + shape + (dark ? " abx-dark" : "")
              + (ad.image ? " abx-img" : "");
  /* the link goes through our own server, which writes the click and
     sends the reader on. A click a publisher reports could be invented;
     one the server sees cannot. */
  a.href = API + "?go=1&c=" + encodeURIComponent(ad.code)
         + "&site=" + encodeURIComponent(HOST)
         + "&shape=" + encodeURIComponent(shape)
         + "&topic=" + encodeURIComponent(PAGE.topic || "")
         + "&ticker=" + encodeURIComponent(ticker || "");
  a.setAttribute("rel", ad.kind === "house" ? "noopener" : "noopener sponsored");
  if (ad.bg) a.style.background = ad.bg;

  /* An image only ever arrives from our own host — the server drops
     anything else, because a remote image is a tracking pixel. */
  var pic = ad.image
    ? '<span class="pic"><img src="' + esc(ad.image) + '" alt="' + esc(ad.alt || "")
      + '" loading="lazy" decoding="async"></span>'
    : '';

  /* A video is a still and a play button until the reader presses it.

     Our own file is best: nothing third-party is involved at any
     point, before or after. A YouTube id is the fallback, and even
     then nothing is requested from YouTube until the press. */
  if (ad.file || ad.video) {
    var ours = !!ad.file;
    pic = '<span class="pic vid" data-f="' + esc(ad.file || "") + '"'
        + ' data-v="' + esc(ad.video || "") + '">'
        + (ad.poster
            ? '<img src="' + esc(ad.poster) + '" alt="' + esc(ad.alt || "") + '" '
              + 'loading="lazy" decoding="async">'
            : '<span class="noposter"></span>')
        + '<span class="play" aria-hidden="true"></span>'
        + (ad.seconds ? '<span class="len">' + mmss(ad.seconds) + '</span>' : '')
        + '<span class="vnote">'
        + (ours ? 'Press to play' : 'Press to play &middot; nothing loads until you do')
        + '</span>'
        + '</span>';
  }

  a.innerHTML =
      '<span class="bar" style="background:' + esc(ad.accent || "#8a8b80") + '"></span>'
    + '<span class="tag">' + (ad.kind === "demo" ? "Demonstration"
        : (ad.kind === "house" ? "AdHotBox" : "Sponsor")) + '</span>'
    + pic
    + '<span class="in">'
    +   (ad.eyebrow ? '<span class="eb">' + esc(ad.eyebrow) + '</span>' : '')
    +   '<h5>' + esc(ad.head) + '</h5>'
    +   (ad.body ? '<p>' + esc(ad.body) + '</p>' : '')
    +   (ad.cta ? '<span class="cta" style="color:' + esc(ad.accent)
    +     ';border-color:' + esc(ad.accent) + '">' + esc(ad.cta) + ' &rarr;</span>' : '')
    + '</span>';


  box.innerHTML = "";
  box.appendChild(a);

  /* pressing the still swaps in the player — and only then */
  var v = a.querySelector(".pic.vid");
  if (v) {
    a.addEventListener("click", function(e){
      if (!e.target.closest(".pic.vid")) return;   /* the words still go to the link */
      e.preventDefault();
      var file = v.getAttribute("data-f");
      var id   = v.getAttribute("data-v");
      v.innerHTML = "";

      if (file) {
        /* our own file. No third party at all. */
        var p2 = document.createElement("video");
        p2.src = file;
        p2.controls = true;
        p2.autoplay = true;
        p2.playsInline = true;
        p2.setAttribute("playsinline", "");
        p2.preload = "auto";
        v.appendChild(p2);
      } else {
        var f = document.createElement("iframe");
        f.src = "https://www.youtube-nocookie.com/embed/" + id
              + "?autoplay=1&rel=0&modestbranding=1&playsinline=1";
        f.setAttribute("title", "Advertisement");
        f.setAttribute("frameborder", "0");
        f.setAttribute("allow", "accelerometer; autoplay; encrypted-media; picture-in-picture");
        f.setAttribute("allowfullscreen", "");
        f.setAttribute("loading", "lazy");
        v.appendChild(f);
      }
      v.classList.add("playing");
      count("play", ad.code, shape, ticker);
    });
  }

  /* a political advertisement carries who paid for it, on the face of it */
  if (ad.paidfor) {
    var pf = document.createElement("p");
    pf.className = "abx-paid";
    pf.textContent = "Paid for by " + ad.paidfor;
    box.appendChild(pf);
  }

  if (ad.kind === "demo") {
    var d = document.createElement("p");
    d.className = "abx-foot abx-demo";
    d.innerHTML = 'It is working. This is one of our own advertisements, shown '
                + 'because this site is not on the network yet. '
                + '<a href="https://adhotbox.com/join.html">Apply &mdash; it is free</a>';
    box.appendChild(d);
  } else if (ad.kind !== "house") {
    var f = document.createElement("p");
    f.className = "abx-foot";
    f.innerHTML = 'Paid placement &middot; '
                + '<a href="https://adhotbox.com/#policy">what we will not take</a>';
    box.appendChild(f);
  }

  if (window.IntersectionObserver) {
    var seen = false;
    var io = new IntersectionObserver(function(en){
      if (!seen && en[0] && en[0].isIntersecting) {
        seen = true; count("imp", ad.code, shape, ticker); io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(a);
  } else {
    count("imp", ad.code, shape, ticker);
  }
}

function render(box){
  var shape  = box.getAttribute("data-ad") || "card";
  var dark   = box.getAttribute("data-dark") === "1";
  var ticker = (box.getAttribute("data-ticker") || PAGE.ticker || "").toUpperCase();
  var topic  = (box.getAttribute("data-topic") || PAGE.topic || "");

  var u = API + "?serve=1&site=" + encodeURIComponent(HOST)
        + "&shape=" + encodeURIComponent(shape)
        + "&topic=" + encodeURIComponent(topic)
        + "&ticker=" + encodeURIComponent(ticker);

  fetch(u)
    .then(function(r){ return r.json(); })
    .then(function(d){
      if (!d.ok || !d.ads || !d.ads.length) { box.style.display = "none"; return; }
      paint(box, d.ads[0], dark, shape, ticker);
    })
    .catch(function(){ box.style.display = "none"; });
}

/* ============================================================
   PLACING THEM WITHOUT BEING TOLD

   The second paste is the part people get wrong or never do. So if
   the tag says data-auto, find the places a person would have chosen
   and put the slots there.

   The rules are conservative on purpose. An advertisement in the
   wrong place costs the publisher a reader, and that costs us the
   publisher.
   ============================================================ */

var SKIP = "header,nav,footer,aside nav,form,button,table,pre,code,"
         + "[data-ad],.adhotbox-slot,.no-ads,.menu,.navigation,.comments,"
         + "#comments,.widget-area .widget";

function tag(){
  var t = document.currentScript
       || document.querySelector('script[src*="box.js"]');
  return t || null;
}

function autoWanted(){
  var t = tag();
  if (!t) return 0;
  if (!t.hasAttribute("data-auto")) return 0;
  var n = parseInt(t.getAttribute("data-auto"), 10);
  return (isFinite(n) && n > 0) ? Math.min(n, 6) : 3;
}

function inside(el, sel){
  try { return !!el.closest(sel); } catch (e) { return false; }
}

function bodyText(){
  var b = document.body;
  return b ? (b.innerText || b.textContent || "").trim().length : 0;
}

function place(){
  var want = autoWanted();
  if (!want) return;

  /* a page with almost nothing on it is a checkout, a login or a
     contact form. Leave it alone. */
  if (bodyText() < 900) return;

  var t = tag();
  var only = t && t.getAttribute("data-in");
  var never = t && t.getAttribute("data-not");

  var root = null;
  if (only) { try { root = document.querySelector(only); } catch (e) {} }
  if (!root) {
    root = document.querySelector("article, main, .entry-content, .post-content, .content")
        || document.body;
  }

  var made = 0;
  var lastY = -9999;

  /* 1 — a rail in the sidebar, if the page has one */
  var side = document.querySelector("aside, .sidebar, #sidebar, .widget-area");
  if (side && !inside(side, SKIP) && !(never && inside(side, never))
      && side.offsetWidth >= 240 && made < want) {
    var rail = document.createElement("div");
    rail.setAttribute("data-ad", "rail");
    rail.className = "adhotbox-slot adhotbox-auto";
    side.insertBefore(rail, side.firstChild);
    made++;
  }

  /* 2 — in the flow, after a run of real paragraphs */
  var ps = root.querySelectorAll("p");
  var run = 0;
  for (var i = 0; i < ps.length && made < want; i++) {
    var p = ps[i];
    var words = (p.innerText || p.textContent || "").trim().split(/\s+/).length;
    if (words < 12) { run = 0; continue; }
    if (inside(p, SKIP)) { run = 0; continue; }
    if (never && inside(p, never)) { run = 0; continue; }

    run++;
    /* after the third paragraph, then every fifth */
    if (run < 3) continue;

    var y = p.getBoundingClientRect().top + window.scrollY;
    if (y - lastY < 600) continue;          /* never two close together */

    var slot = document.createElement("div");
    slot.setAttribute("data-ad", "inline");
    slot.className = "adhotbox-slot adhotbox-auto";
    slot.style.margin = "26px 0";
    p.parentNode.insertBefore(slot, p.nextSibling);
    made++; lastY = y; run = 0;
  }

  /* 3 — a leader above the footer, if nothing else landed */
  if (!made) {
    var foot = document.querySelector("footer");
    if (foot && foot.parentNode) {
      var lead = document.createElement("div");
      lead.setAttribute("data-ad", "leader");
      lead.className = "adhotbox-slot adhotbox-auto";
      lead.style.margin = "30px auto";
      lead.style.maxWidth = "980px";
      foot.parentNode.insertBefore(lead, foot);
      made++;
    }
  }
}

function go(){
  styles();
  place();
  var boxes = document.querySelectorAll("[data-ad]");
  for (var i = 0; i < boxes.length; i++) render(boxes[i]);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go);
else go();

})();
