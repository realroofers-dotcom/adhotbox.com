/* BUILT 2026-08-29 13:34 ET */
/* ============================================================
   box.js — ADHOTBOX
   The tag every site carries. It holds no campaigns and no prices.
   It asks the server what may run on this page, and renders it.

   ------------------------------------------------------------
   INSTALL — two lines, once per page.

     <div data-ad="rail"></div>          where the ad goes
     <script src="https://adhotbox.com/box.js"></script>

   SHAPES   rail · card · inline · leader

   OPTIONS on the div
     data-ticker="TOVX"     the company this page is about
     data-topic="markets"   override the site's subject
     data-dark="1"          reversed palette for a dark page

   OR in <head>, for the whole page
     <meta name="ad-topic"  content="markets">
     <meta name="ad-ticker" content="TOVX">
   A ?ticker= in the address is picked up on its own.

   ------------------------------------------------------------
   A SITE THAT IS NOT APPROVED SERVES NOTHING. The server checks the
   domain against its own books before it returns anything, so
   copying this tag onto another site shows nothing and earns
   nothing. There is no list of advertisers in this file and no
   rates — pulling it apart tells you nothing about either.
   ============================================================ */

(function () {

var API = "https://adhotbox.realroofers.workers.dev";

function meta(n){
  var m = document.querySelector('meta[name="' + n + '"]');
  return m ? (m.getAttribute("content") || "").trim() : "";
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
+ '.abx-foot{font-family:ui-monospace,Menlo,monospace;font-size:9px;letter-spacing:.1em;'
+   'text-transform:uppercase;color:#a9a99e;margin:5px 0 0}'
+ '.abx-foot a{color:#a9a99e}';

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
  a.className = "abx abx-" + shape + (dark ? " abx-dark" : "");
  a.href = ad.href;
  a.setAttribute("rel", ad.kind === "house" ? "noopener" : "noopener sponsored");

  a.innerHTML =
      '<span class="bar" style="background:' + esc(ad.accent || "#8a8b80") + '"></span>'
    + '<span class="tag">' + (ad.kind === "house" ? "AdHotBox" : "Sponsor") + '</span>'
    + '<span class="in">'
    +   (ad.eyebrow ? '<span class="eb">' + esc(ad.eyebrow) + '</span>' : '')
    +   '<h5>' + esc(ad.head) + '</h5>'
    +   (ad.body ? '<p>' + esc(ad.body) + '</p>' : '')
    +   (ad.cta ? '<span class="cta" style="color:' + esc(ad.accent)
    +     ';border-color:' + esc(ad.accent) + '">' + esc(ad.cta) + ' &rarr;</span>' : '')
    + '</span>';

  a.addEventListener("click", function(){ count("click", ad.code, shape, ticker); });

  box.innerHTML = "";
  box.appendChild(a);

  if (ad.kind !== "house") {
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

function go(){
  styles();
  var boxes = document.querySelectorAll("[data-ad]");
  for (var i = 0; i < boxes.length; i++) render(boxes[i]);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go);
else go();

})();
