/* BUILT 2026-11-15 · house-1b (Peaches 2c: red scarf, smaller eyes; cache-busted) · house-1a · adhotbox.com/house.js - THE HOUSE ADS, ONE COPY, ROTATED BY ADHOTBOX.
   Mark: "all our sites cross-advertise through house placements" (28 Sep) / "these ads should rotate through adhotbox" /
   "every ad of every company has a logo and that is how an ad will show with minimal text" / "branding matters always" /
   "we have to make sure gigapoo is on all finance sites as an ad please" / "stick to the branding please" (15 Nov 2026).
   Each ad wears the advertised site's own logo and colours, a few words, and is labelled "Advertisement" (28 Sep rule).
   Gigapoo always shows first; two more rotate beside it; a site never advertises itself.
   A page includes <script src="https://adhotbox.com/house.js" defer></script>. The strip goes into <div data-house-ads></div>
   where a page has one, otherwise just above the page's <footer> (or at the end of the page). */
(function () {
  if (window.__houseAds) return; window.__houseAds = 1;
  var ADS = [
    { key: "gigapoo",   host: "gigapoo.com",    href: "https://gigapoo.com/meetings.html", logo: "https://gigapoo.com/peaches.svg?v=3",              name: "Gigapoo",       words: "Every stockholder meeting, with directions. Meet other owners there.", bg: "#eaf4fb", fg: "#12283d", acc: "#f28c28", always: true },
    { key: "warrantwire", host: "warrantwire.com", href: "https://warrantwire.com/",        logo: "https://warrantwire.com/apple-touch-icon.png", name: "Warrant Wire",  words: "The finance cops: warrant deals, read.", bg: "#ffffff", fg: "#14150f", acc: "#b23a2b" },
    { key: "8k10q",     host: "8k10q.com",      href: "https://8k10q.com/",                logo: "https://8k10q.com/apple-touch-icon.png",       name: "8K10Q",         words: "We read any filing for you.", bg: "#00208B", fg: "#ffffff", acc: "#FF4A00" },
    { key: "shellmkt",  host: "shellmkt.com",   href: "https://shellmkt.com/",             logo: "https://shellmkt.com/apple-touch-icon.png",    name: "Shell Market",  words: "Shell companies trading: who is the shell.", bg: "#11161b", fg: "#ecebe6", acc: "#e0a63a" },
    { key: "newsweed",  host: "newsweed.com",   href: "https://newsweed.com/",             logo: "https://newsweed.com/apple-touch-icon.png",    name: "Newsweed",      words: "Real news.", bg: "#f7f6f1", fg: "#1d2470", acc: "#00a651" },
    { key: "wisesleuth", host: "wisesleuth.com", href: "https://wisesleuth.com/",          logo: "https://wisesleuth.com/apple-touch-icon.png",  name: "Wise Sleuth",   words: "The research club.", bg: "#000000", fg: "#ffffff", acc: "#764a24" },
    { key: "adhotbox",  host: "adhotbox.com",   href: "https://adhotbox.com/advertise.html", logo: "https://adhotbox.com/apple-touch-icon.png",  name: "AdHotBox",      words: "Your ad here, from $20. Local businesses, local sites.", bg: "#F2F4F8", fg: "#0C1220", acc: "#FF4A00" }
  ];
  /* ?house_as=site.com previews the strip as that site would show it (for checking a page before it is pushed) */
  var here = ((location.search.match(/[?&]house_as=([a-z0-9.\-]+)/) || [])[1] || location.hostname).replace(/^www\./, "");
  /* house-1c (15 Nov 2026): a host can put chosen ads first, in its own words. Mark: "advertisements for the other
     sites belong on triggeredshort.com: find out who is using a triggered short with warrantwire" / "8k10q ads as well". */
  var HOST = {
    "triggeredshort.com": { first: ["warrantwire", "8k10q", "shellmkt"], max: 4, words: {   /* + Mark: "shellmkt ads as well" */
      warrantwire: "Find out who is using a triggered short with Warrant Wire.",
      "8k10q": "Find out what the filings really say with 8K10Q.",
      shellmkt: "Find out which shell companies are trading with Shell Market." } }
  };
  var hs = HOST[here] || null;
  var pool = ADS.filter(function (a) { return here.indexOf(a.host) < 0; }).map(function (a) {
    var c = {}; for (var k in a) c[k] = a[k];
    if (hs && hs.words[a.key]) c.words = hs.words[a.key];
    return c;
  });
  var pinned = hs ? hs.first.map(function (k) { return pool.filter(function (a) { return a.key === k; })[0]; }).filter(Boolean) : [];
  var first = pinned.concat(pool.filter(function (a) { return a.always && pinned.indexOf(a) < 0; }));
  var rest = pool.filter(function (a) { return first.indexOf(a) < 0; });
  /* rotate: a different pair each visit */
  for (var i = rest.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = rest[i]; rest[i] = rest[j]; rest[j] = t; }
  var show = first.concat(rest).slice(0, (hs && hs.max) || 3);
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var css = ".hads1{max-width:1100px;margin:18px auto;padding:0 16px;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif}"
    + ".hads1 .lab{font:600 10.5px ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;opacity:.6;margin:0 0 6px}"
    + ".hads1 .row{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px}"
    + ".hads1 a{display:flex;align-items:center;gap:12px;border-radius:12px;padding:10px 12px;text-decoration:none;border:2px solid var(--acc);background:var(--bg);color:var(--fg)}"
    + ".hads1 img{width:46px;height:46px;border-radius:10px;flex:0 0 auto;background:#fff;object-fit:contain}"
    + ".hads1 b{display:block;font-size:15px}.hads1 small{display:block;font-size:12.5px;line-height:1.35;opacity:.85}"
    + ".hads1 .go{margin-left:auto;font-weight:800;color:var(--acc)}";
  var draw = function () {
    if (!show.length || document.querySelector(".hads1")) return;
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var box = document.createElement("aside"); box.className = "hads1"; box.setAttribute("aria-label", "Advertisement");
    box.innerHTML = '<p class="lab">Advertisement &middot; via AdHotBox</p><div class="row">' + show.map(function (a) {
      return '<a href="' + a.href + '" style="--bg:' + a.bg + ';--fg:' + a.fg + ';--acc:' + a.acc + '"><img src="' + a.logo + '" alt="' + esc(a.name) + ' logo" width="46" height="46"><span><b>' + esc(a.name) + '</b><small>' + esc(a.words) + '</small></span><span class="go">&rarr;</span></a>';
    }).join("") + '</div>';
    var slot = document.querySelector("[data-house-ads]"), foot = document.querySelector("footer");
    if (slot) slot.appendChild(box); else if (foot && foot.parentNode) foot.parentNode.insertBefore(box, foot); else document.body.appendChild(box);
  };
  /* ============================================================
     house-1d (15 Nov 2026) - ADS BETWEEN THE PARAGRAPHS, PAID FIRST.
     Mark: "they should blend in between paragraphs as well if we ever get paid ads how do we program that in?"
     A page puts <div data-house-inline></div> between its sections. Each one asks the AdHotBox server
     (the same one box.js uses) for a paid placement booked for this site. A paid ad shows, labelled
     "Sponsor"; the click and the view go through the server so they are counted and billed.
     No paid ad (or the server is down) -> one of our own logo ads, a different one in each slot.
     How a paid ad gets here: advertiser pays on adhotbox.com/advertise -> campaign in ab_campaigns
     -> Mark approves it for his sites -> it fills these slots by itself. Nothing to change on the page.
     ============================================================ */
  var API = "https://adhotbox.realroofers.workers.dev";
  var order = first.concat(rest);
  var css2 = ".hin{margin:26px 0;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif}"
    + ".hin .lab{font:600 10px ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;opacity:.55;margin:0 0 5px}"
    + ".hin a{display:flex;align-items:center;gap:14px;border-radius:12px;padding:12px 16px;text-decoration:none;border:2px solid var(--acc);background:var(--bg);color:var(--fg)}"
    + ".hin img{width:54px;height:54px;border-radius:10px;flex:0 0 auto;background:#fff;object-fit:contain}"
    + ".hin img.wide{width:120px;height:auto;max-height:80px;border-radius:6px}"
    + ".hin b{display:block;font-size:16.5px;line-height:1.3}.hin small{display:block;font-size:14px;line-height:1.4;opacity:.85}"
    + ".hin .go{margin-left:auto;font-weight:800;color:var(--acc);white-space:nowrap;font-size:14px}";
  function houseInline(box, i) {
    var a = order[i % order.length]; if (!a) return;
    box.innerHTML = '<p class="lab">Advertisement &middot; via AdHotBox</p><a href="' + a.href + '" style="--bg:' + a.bg + ';--fg:' + a.fg + ';--acc:' + a.acc + '"><img src="' + a.logo + '" alt="' + esc(a.name) + ' logo" width="54" height="54"><span><b>' + esc(a.name) + '</b><small>' + esc(a.words) + '</small></span><span class="go">Visit &rarr;</span></a>';
  }
  function paidInline(box, ad) {
    var q = "c=" + encodeURIComponent(ad.code) + "&site=" + encodeURIComponent(here) + "&shape=inline";
    var acc = ad.accent || "#8a8b80";
    box.innerHTML = '<p class="lab">Sponsor &middot; via AdHotBox</p><a rel="noopener sponsored" href="' + API + '?go=1&' + q + '" style="--bg:' + (ad.bg || "#fff") + ';--fg:#1a1a17;--acc:' + esc(acc) + '">'
      + (ad.image ? '<img class="wide" src="' + esc(ad.image) + '" alt="' + esc(ad.alt || "") + '">' : '')
      + '<span><b>' + esc(ad.head || "") + '</b>' + (ad.body ? '<small>' + esc(ad.body) + '</small>' : '') + '</span>'
      + '<span class="go">' + esc(ad.cta || "Visit") + ' &rarr;</span></a>'
      + (ad.paidfor ? '<p class="lab" style="margin-top:5px">Paid for by ' + esc(ad.paidfor) + '</p>' : '');
    /* the view is counted once, when half the ad is on screen */
    var link = box.querySelector("a");
    var beacon = function () { try { var u = API + "?log=1&e=imp&" + q; if (navigator.sendBeacon) navigator.sendBeacon(u); else fetch(u, { mode: "no-cors", keepalive: true }); } catch (e) {} };
    if (window.IntersectionObserver) { var io = new IntersectionObserver(function (en) { if (en[0] && en[0].isIntersecting) { beacon(); io.disconnect(); } }, { threshold: 0.5 }); io.observe(link); } else beacon();
  }
  var drawInline = function () {
    var slots = document.querySelectorAll("[data-house-inline]"); if (!slots.length) return;
    var st = document.createElement("style"); st.textContent = css2; document.head.appendChild(st);
    Array.prototype.forEach.call(slots, function (box, i) {
      box.className = (box.className ? box.className + " " : "") + "hin"; box.setAttribute("aria-label", "Advertisement");
      houseInline(box, i);   /* shown at once; replaced if a paid placement answers */
      fetch(API + "?serve=1&site=" + encodeURIComponent(here) + "&shape=inline")
        .then(function (r) { return r.json(); })
        .then(function (d) { var ad = d && d.ok && d.ads && d.ads[0]; if (ad && ad.kind !== "house" && ad.kind !== "demo") paidInline(box, ad); })
        .catch(function () {});
    });
  };
  var both = function () { draw(); drawInline(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", both); else both();
})();
