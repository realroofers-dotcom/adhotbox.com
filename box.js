/* BUILT 2026-08-29 13:04 ET */
/* ============================================================
   box.js — ADHOTBOX
   The ad server for every property.

   ONE FILE. Everything is in the two tables below: SITES, and
   CAMPAIGNS. Add a site with one line. Add a campaign with one block.
   Nothing else is ever edited.

   ------------------------------------------------------------
   TO ADD A SITE
   1. Add one line to SITES below — domain and what it is about.
   2. On that site, put a slot where you want an ad:
        <div data-ad="rail"></div>
      and once, before </body>:
        <script src="https://adhotbox.com/box.js"></script>
   That is the whole installation.

   ------------------------------------------------------------
   SHAPES
     rail     tall, for a sidebar
     card     a box in a column
     inline   between rows in a list
     leader   wide strip, top or bottom

   OPTIONS on the div
     data-slot="army"       force one campaign, no rotation
     data-ticker="TOVX"     override the page ticker
     data-topic="markets"   override the site topic
     data-dark="1"          reversed palette for a dark page

   TELL A PAGE WHAT IT IS ABOUT — optional, in <head>
     <meta name="ad-topic"  content="markets">
     <meta name="ad-ticker" content="TOVX">
   A ?ticker= in the URL is picked up on its own.

   Any campaign text may contain {TICKER}. It is replaced with the
   company the reader is already looking at. A campaign marked
   needs:"ticker" sits out when there is not one.
   ============================================================ */

(function () {

/* ============================================================
   1 · SETTINGS
   ============================================================ */

var COUNT_URL = "https://triggeredshort-wire.realroofers.workers.dev";
var POLICY    = "https://adhotbox.com/#policy";
var COUNTING  = true;          /* set false to stop all beacons */

/* ============================================================
   2 · THE SITES.  One line each. This is the whole roster.

   topic   what the site is about, so campaigns can target it
   name    printed on the rate card at adhotbox.com
   live    false stops serving to it without removing it
   ============================================================ */

var SITES = [
  { domain: "triggeredshort.com", topic: "markets",  name: "Triggered Short", live: true },
  { domain: "8k10q.com",          topic: "markets",  name: "8K10Q",           live: true },
  { domain: "warrantwire.com",    topic: "markets",  name: "Warrant Wire",    live: true },
  { domain: "newsweed.com",       topic: "cannabis", name: "Newsweed",        live: true },
  { domain: "jobcreation.us",     topic: "jobs",     name: "JobCreation.us",  live: true },
  { domain: "realroofers.com",    topic: "roofing",  name: "Real Roofers",    live: true },
  { domain: "goodsolar.com",      topic: "solar",    name: "Good Solar",      live: true },
  { domain: "marknejmeh.com",     topic: "general",  name: "Mark Nejmeh",     live: true },
  { domain: "adhotbox.com",       topic: "general",  name: "AdHotBox",        live: false }
];

/* ============================================================
   3 · THE CAMPAIGNS.  Edit here, nowhere else.

   sites   ["*"] everywhere · ["8k10q.com"] only there
           ["!warrantwire.com"] everywhere EXCEPT there
   topics  ["*"] any page · ["markets","cannabis"] only those
   needs   "ticker" if the campaign is meaningless without one
   weight  how often it comes up against the others
   live    false pulls it without deleting it
   ============================================================ */

var CAMPAIGNS = [

  /* ---------- ticker-aware: the strongest one we have ---------- */
  {
    id: "read-ticker", live: true, weight: 6, kind: "house",
    sites: ["*"], topics: ["markets"], needs: "ticker",
    eyebrow: "$11",
    head: "Read {TICKER}'s filings in plain English",
    body: "Every filing and every exhibit, with the sections that matter " +
          "marked. We make evaluation of filings easy.",
    cta: "Read {TICKER}", href: "https://8k10q.com/?ticker={TICKER}",
    accent: "#1F6B4F"
  },
  {
    id: "dive-ticker", live: true, weight: 4, kind: "house",
    sites: ["*"], topics: ["markets"], needs: "ticker",
    eyebrow: "$149",
    head: "The whole of {TICKER}",
    body: "Every filing read, all ten questions answered, and who is behind " +
          "each financing.",
    cta: "Order the deep dive", href: "https://8k10q.com/?ticker={TICKER}&deep=1",
    accent: "#1F6B4F"
  },

  /* ---------- the Army: everywhere, every topic ---------- */
  {
    id: "army", live: true, weight: 4, kind: "house",
    sites: ["*"], topics: ["*"],
    eyebrow: "Free to join",
    head: "The 8K10Q Army",
    body: "Shareholders who read the filing, vote the proxy and show up. " +
          "No rank, no application. There are rules.",
    cta: "Enlist", href: "https://8k10q.com/army.html",
    accent: "#FF4A00"
  },

  /* ---------- the wire: not on warrantwire itself ---------- */
  {
    id: "wire60", live: true, weight: 4, kind: "house",
    sites: ["!warrantwire.com"], topics: ["markets"],
    eyebrow: "$5 a month · $60 a year",
    head: "Every warrant financing, as it is filed",
    body: "Five free without an account. Ten a month with an email. " +
          "Everything, every day, for the price of a coffee.",
    cta: "warrantwire.com", href: "https://warrantwire.com",
    accent: "#8A6A1C"
  },

  /* ---------- the docket: not on triggeredshort itself ---------- */
  {
    id: "docket", live: true, weight: 3, kind: "house",
    sites: ["!triggeredshort.com"], topics: ["markets"],
    eyebrow: "Free, always",
    head: "The research docket",
    body: "What we found, what happened after, and what we got wrong. " +
          "Every figure carries the accession number it came from.",
    cta: "triggeredshort.com", href: "https://triggeredshort.com",
    accent: "#12355B"
  },

  /* ---------- 8k10q: not on 8k10q ---------- */
  {
    id: "read11", live: true, weight: 3, kind: "house",
    sites: ["!8k10q.com"], topics: ["*"],
    eyebrow: "$11 a filing",
    head: "Read it in plain English",
    body: "Any filing, any exhibit, with the sections that matter marked.",
    cta: "8k10q.com", href: "https://8k10q.com",
    accent: "#1F6B4F"
  },

  /* ---------- for the non-markets properties ---------- */
  {
    id: "jobcreation", live: true, weight: 2, kind: "house",
    sites: ["*"], topics: ["*"],
    eyebrow: "Nonprofit · 501(c)(3)",
    head: "JobCreation.us",
    body: "Capital pulled into financing structures never reaches the " +
          "companies that create jobs. That is the whole argument.",
    cta: "jobcreation.us", href: "https://jobcreation.us",
    accent: "#12355B"
  },

  /* ---------- SOLD CAMPAIGNS GO HERE ----------------------------
     Copy the shape. kind:"sponsor" prints the label, adds
     rel="sponsored" and the paid-placement line underneath.

  {
    id: "acme-law", live: true, weight: 5, kind: "sponsor",
    sponsor: "Acme Law LLP",
    sites: ["triggeredshort.com","8k10q.com"], topics: ["markets"],
    eyebrow: "Sponsor",
    head: "Securities counsel for shareholders",
    body: "One line about what they do.",
    cta: "acmelaw.com", href: "https://acmelaw.com",
    accent: "#12355B"
  },
  ------------------------------------------------------------- */
];

/* ============================================================
   4 · THE RULE, kept with the code so it travels

   No advertising is accepted from an issuer any of these sites
   covers, from its officers, or from anyone paid by it — including
   investor relations firms and stock promoters. That is why no
   third-party ad network runs here: a network serves whatever it
   wants, and would eventually serve an issuer's ad on the page
   listing that issuer's filing.

   Every campaign above is either a house ad or sold directly and
   named in the sponsor line.
   ============================================================ */

/* ============================================================
   5 · CONTEXT — what is this page about
   ============================================================ */

function meta(n){
  var m = document.querySelector('meta[name="' + n + '"]');
  return m ? (m.getAttribute("content") || "").trim() : "";
}

var HOST = (location.hostname || "").replace(/^www\./, "").toLowerCase();

var PAGE = {
  site:   HOST,
  topic:  (meta("ad-topic") || guessTopic()).toLowerCase(),
  ticker: (meta("ad-ticker")
           || new URLSearchParams(location.search).get("ticker")
           || new URLSearchParams(location.search).get("q")
           || "").toUpperCase().replace(/[^A-Z.\-]/g, "")
};

/* the roster decides the topic — that is the point of the roster */
function siteRecord(){
  for (var i = 0; i < SITES.length; i++) {
    if (HOST.indexOf(SITES[i].domain.replace(/^www\./, "")) > -1) return SITES[i];
  }
  return null;
}

function guessTopic(){
  var r = siteRecord();
  return r ? r.topic : "general";
}

/* a site that is not on the roster, or switched off, serves nothing */
function siteLive(){
  var r = siteRecord();
  if (!r) return location.hostname === "localhost" || /pages\.dev$/.test(HOST);
  return r.live !== false;
}

/* ============================================================
   6 · MATCHING
   ============================================================ */

function siteOK(c){
  var list = c.sites || ["*"];
  var excluded = false, included = false, anyInclude = false;
  for (var i = 0; i < list.length; i++) {
    var s = list[i];
    if (s === "*") { included = true; anyInclude = true; continue; }
    if (s.charAt(0) === "!") {
      if (PAGE.site.indexOf(s.slice(1)) > -1) excluded = true;
    } else {
      anyInclude = true;
      if (PAGE.site.indexOf(s) > -1) included = true;
    }
  }
  if (excluded) return false;
  return anyInclude ? included : true;
}

function topicOK(c){
  var list = c.topics || ["*"];
  if (list.indexOf("*") > -1) return true;
  return list.indexOf(PAGE.topic) > -1;
}

function needsOK(c, ticker){
  if (c.needs === "ticker") return !!ticker;
  return true;
}

function fill(str, ticker){
  return String(str || "").replace(/\{TICKER\}/g, ticker || "");
}

/* ============================================================
   7 · Rendering
   ============================================================ */

var CSS = ''
+ '.tsad{font:14px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;'
+   'display:block;text-decoration:none;color:inherit;border:1px solid #d8d8d1;'
+   'background:#fff;border-radius:4px;overflow:hidden;position:relative}'
+ '.tsad:hover{border-color:#8a8b80}'
+ '.tsad .bar{position:absolute;left:0;top:0;bottom:0;width:3px}'
+ '.tsad .in{display:block;padding:15px 17px 15px 20px}'
+ '.tsad .eb{display:block;font-family:ui-monospace,Menlo,monospace;font-size:9.5px;'
+   'letter-spacing:.14em;text-transform:uppercase;color:#8a8b80;margin:0 0 6px}'
+ '.tsad h5{font:600 16px/1.25 inherit;margin:0 0 6px;color:#23241d}'
+ '.tsad p{margin:0 0 11px;font-size:13.5px;line-height:1.55;color:#5c5d53}'
+ '.tsad .cta{display:inline-block;font-family:ui-monospace,Menlo,monospace;font-size:11px;'
+   'letter-spacing:.06em;padding:7px 13px;border-radius:3px;border:1px solid;background:transparent}'
+ '.tsad .tag{position:absolute;top:8px;right:10px;font-family:ui-monospace,Menlo,monospace;'
+   'font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:#a9a99e}'
+ '.tsad-rail{max-width:260px;margin:0 0 16px}'
+ '.tsad-card{max-width:340px;margin:0 0 16px}'
+ '.tsad-inline{margin:14px 0}'
+ '.tsad-leader{margin:18px 0}'
+ '.tsad-leader .in{display:flex;align-items:center;gap:18px;flex-wrap:wrap;padding:14px 18px 14px 22px}'
+ '.tsad-leader .eb{margin:0}'
+ '.tsad-leader h5{margin:0;flex:0 0 auto}'
+ '.tsad-leader p{margin:0;flex:1 1 260px;min-width:200px}'
+ '.tsad-leader .cta{margin-left:auto}'
+ '.tsad-dark{background:#1c1e16;border-color:#2e3125}'
+ '.tsad-dark:hover{border-color:#4a4e3c}'
+ '.tsad-dark h5{color:#eceae0}'
+ '.tsad-dark p{color:#a8aa9a}'
+ '.tsad-dark .eb,.tsad-dark .tag{color:#767a68}'
+ '.tsad-foot{font-family:ui-monospace,Menlo,monospace;font-size:9px;letter-spacing:.1em;'
+   'text-transform:uppercase;color:#a9a99e;margin:5px 0 0}'
+ '.tsad-foot a{color:#a9a99e}';

function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g, function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }

function styles(){
  if (document.getElementById("tsad-css")) return;
  var e = document.createElement("style");
  e.id = "tsad-css"; e.textContent = CSS;
  document.head.appendChild(e);
}

var used = [];

function pick(force, ticker){
  var pool = CAMPAIGNS.filter(function(c){
    return c.live !== false && siteOK(c) && topicOK(c) && needsOK(c, ticker);
  });
  if (!pool.length) return null;

  if (force) {
    var f = pool.filter(function(c){ return c.id === force; });
    if (f.length) return f[0];
  }
  var fresh = pool.filter(function(c){ return used.indexOf(c.id) === -1; });
  if (fresh.length) pool = fresh;

  var total = 0, i;
  for (i = 0; i < pool.length; i++) total += (pool[i].weight || 1);
  var r = Math.random() * total;
  for (i = 0; i < pool.length; i++) {
    r -= (pool[i].weight || 1);
    if (r <= 0) { used.push(pool[i].id); return pool[i]; }
  }
  return pool[0];
}

function count(kind, id, shape){
  if (!COUNTING) return;
  try {
    var u = COUNT_URL + "?adlog=1&e=" + kind + "&id=" + encodeURIComponent(id)
          + "&site=" + encodeURIComponent(PAGE.site)
          + "&shape=" + encodeURIComponent(shape)
          + "&topic=" + encodeURIComponent(PAGE.topic)
          + "&ticker=" + encodeURIComponent(PAGE.ticker || "");
    if (navigator.sendBeacon) navigator.sendBeacon(u);
    else fetch(u, { mode: "no-cors", keepalive: true }).catch(function(){});
  } catch (e) {}
}

function render(box){
  var shape  = box.getAttribute("data-ad") || "card";
  var dark   = box.getAttribute("data-dark") === "1";
  var ticker = (box.getAttribute("data-ticker") || PAGE.ticker || "").toUpperCase();
  var topic  = box.getAttribute("data-topic");
  if (topic) PAGE.topic = topic.toLowerCase();

  var ad = pick(box.getAttribute("data-slot"), ticker);
  if (!ad) { box.style.display = "none"; return; }

  var a = document.createElement("a");
  a.className = "tsad tsad-" + shape + (dark ? " tsad-dark" : "");
  a.href = fill(ad.href, ticker);
  a.setAttribute("rel", ad.kind === "sponsor" ? "noopener sponsored" : "noopener");

  a.innerHTML =
      '<span class="bar" style="background:' + esc(ad.accent || "#8a8b80") + '"></span>'
    + '<span class="tag">' + (ad.kind === "sponsor" ? "Sponsor" : "8K10Q") + '</span>'
    + '<span class="in">'
    +   '<span class="eb">' + esc(fill(ad.eyebrow, ticker)) + '</span>'
    +   '<h5>' + esc(fill(ad.head, ticker)) + '</h5>'
    +   '<p>' + esc(fill(ad.body, ticker)) + '</p>'
    +   '<span class="cta" style="color:' + esc(ad.accent) + ';border-color:' + esc(ad.accent) + '">'
    +     esc(fill(ad.cta, ticker)) + ' &rarr;</span>'
    + '</span>';

  a.addEventListener("click", function(){ count("click", ad.id, shape); });

  box.innerHTML = "";
  box.appendChild(a);

  if (ad.kind === "sponsor") {
    var f = document.createElement("p");
    f.className = "tsad-foot";
    f.innerHTML = 'Paid placement by ' + esc(ad.sponsor)
                + ' &middot; <a href="' + POLICY + '">what we will not take</a>';
    box.appendChild(f);
  }

  /* count the impression only when it is actually on screen */
  if (window.IntersectionObserver) {
    var seen = false;
    var io = new IntersectionObserver(function(en){
      if (!seen && en[0] && en[0].isIntersecting) {
        seen = true; count("imp", ad.id, shape); io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(a);
  } else {
    count("imp", ad.id, shape);
  }
}

function go(){
  if (!siteLive()) return;
  styles();
  var boxes = document.querySelectorAll("[data-ad]");
  for (var i = 0; i < boxes.length; i++) render(boxes[i]);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go);
else go();

})();
