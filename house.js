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
    { key: "adhotbox",  host: "adhotbox.com",   href: "https://adhotbox.com/advertise.html", logo: "https://adhotbox.com/apple-touch-icon.png",  name: "AdHotBox",      words: "Your ad here, from $20. Local businesses, local sites.", bg: "#F2F4F8", fg: "#0C1220", acc: "#FF4A00", always: true },
    /* house-1f (15 Nov 2026, Mark: "every site we have should be advertised through newsweed especially wallstdomains and all others").
       Logos are each site's own icon; colours read from each site's own stylesheet. Not here (Mark's call): nejmehvstheriva.com (the court site). */
    { key: "wallstdomains", host: "wallstdomains.com", href: "https://wallstdomains.com/", logo: "https://wallstdomains.com/apple-touch-icon.png", always: true, name: "Wall St Domains", words: "List your domain or completed project. No commission, just $15 per month.",   /* Mark 15 Nov: "wallstdomains.com List No commission/just $15 per month completed projects too" */ bg: "#0f172a", fg: "#ffffff", acc: "#e8b230" },
    { key: "triggeredshort", host: "triggeredshort.com", href: "https://triggeredshort.com/", logo: "https://triggeredshort.com/favicon.png", name: "Triggered Short", words: "The theory: warrants, good news, and the shares that meet the buyers.", bg: "#fbfaf6", fg: "#1a1a17", acc: "#b8321f" },
    { key: "jobcreation", host: "jobcreation.us", href: "https://jobcreation.us/", logo: "https://jobcreation.us/apple-touch-icon.png", name: "JobCreation.us", words: "The Foundation for Job Creation.", bg: "#ffffff", fg: "#1b1f23", acc: "#1f4e79" },
    { key: "achplug", host: "achplug.com", href: "https://achplug.com/", logo: "https://achplug.com/apple-touch-icon.png", name: "ACHplug", words: "Collect payments by ACH, straight from the bank.", bg: "#F7F9F6", fg: "#17251F", acc: "#1E6B4E" },
    { key: "realroofers", host: "realroofers.com", href: "https://realroofers.com/", logo: "https://realroofers.com/apple-touch-icon.png", name: "Real Roofers", words: "Roof repairs.", bg: "#EAF5FF", fg: "#1D2A31", acc: "#E07B24" },
    { key: "magkinetics", host: "magkinetics.com", href: "https://magkinetics.com/", logo: "https://magkinetics.com/apple-touch-icon.png", name: "MagKinetics", words: "Electricity from moving traffic.", bg: "#f6f8f5", fg: "#13221a", acc: "#2f8f2a" },
    { key: "stockfraudaudit", host: "stockfraudaudit.com", href: "https://stockfraudaudit.com/", logo: "https://stockfraudaudit.com/apple-touch-icon.png", name: "Stock Fraud Audit", words: "Stock loss forensic review: dilution, broker problems, pump and dump.", bg: "#070b10", fg: "#e8edf2", acc: "#16c784" },
    { key: "nycfraudaudit", host: "nycfraudaudit.com", href: "https://nycfraudaudit.com/", logo: "https://nycfraudaudit.com/apple-touch-icon.png", name: "NYC Fraud Audit", words: "Forensic accountant, New York City and New York.", bg: "#fbfaf7", fg: "#17202a", acc: "#a8741d" },
    { key: "vegasforensicaudit", host: "vegasforensicaudit.com", href: "https://vegasforensicaudit.com/", logo: "https://vegasforensicaudit.com/apple-touch-icon.png", name: "Vegas Forensic Audit", words: "Forensic accountant, Las Vegas and Nevada.", bg: "#fbfaf7", fg: "#17202a", acc: "#1f4e79" },
    { key: "marknejmeh", host: "marknejmeh.com", href: "https://marknejmeh.com/", logo: "https://marknejmeh.com/apple-touch-icon.png", name: "Mark Nejmeh", words: "Inventor, builder, and founder of these sites.", bg: "#f6f4ef", fg: "#1b1f23", acc: "#a3361f" }
  ];
  /* ?house_as=site.com previews the strip as that site would show it (for checking a page before it is pushed) */
  /* house-1i (15 Nov 2026, Mark: "on adhotbox we should list our advertisers showing all our logos"): the one list,
     read by adhotbox.com's advertiser wall (window.HouseAds.list) - a new advertiser added here shows on the wall too. */
  window.HouseAds = { list: ADS.slice() };
  var here = ((location.search.match(/[?&]house_as=([a-z0-9.\-]+)/) || [])[1] || location.hostname).replace(/^www\./, "");
  /* house-1c (15 Nov 2026): a host can put chosen ads first, in its own words. Mark: "advertisements for the other
     sites belong on triggeredshort.com: find out who is using a triggered short with warrantwire" / "8k10q ads as well". */
  var HOST = {
    "triggeredshort.com": { first: ["warrantwire", "8k10q", "shellmkt"], max: 6, words: {   /* + Mark: "shellmkt ads as well" */
      warrantwire: "Find out who is using a triggered short with Warrant Wire.",
      "8k10q": "Find out what the filings really say with 8K10Q.",
      shellmkt: "Find out which shell companies are trading with Shell Market." } },
    /* Mark: "every site we have should be advertised through newsweed especially wallstdomains and all others" */
    "newsweed.com": { first: ["wallstdomains"], max: 4, words: {} }
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
  /* house-1h (15 Nov 2026, Mark: "do we have every ad in these especially adhotbox and wall st domains. adhotbox should be on
     every page"): AdHotBox and Wall St Domains are always on (like Gigapoo); the strip holds 4, so one more rotates. */
  var show = first.concat(rest).slice(0, (hs && hs.max) || 4);
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
    /* the in-between spaces carry on where the strip stopped, so a page shows as many different sites as it has spaces */
    var a = order[(i + (document.querySelector(".hads1") ? show.length : 0)) % order.length]; if (!a) return;
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
  /* house-1e (15 Nov 2026) - AUTO PLACEMENT for sites whose pages are many and varied.
     Mark: "newsweed should have all our ads everywhere" / "throughout every section".
     A host listed here gets an ad space after every Nth section (or every Nth long paragraph on a story page),
     never in the header, menu or footer, never two in a row, at most `max` a page. */
  var AUTO = {
    "newsweed.com": { sel: "main section.block, main .block, section.block", every: 2, paras: 4, max: 8 }
  };
  function autoPlace() {
    var cfg = AUTO[here]; if (!cfg) return;
    var bad = "header,nav,footer,[data-house-inline],.hads1,.hin,form";
    var inBad = function (el) { try { return !!el.closest(bad); } catch (e) { return false; } };
    var blocks = Array.prototype.filter.call(document.querySelectorAll(cfg.sel), function (b) { return !inBad(b) && !b.querySelector(".block"); });
    var made = 0, n = 0;
    var put = function (after) { var d = document.createElement("div"); d.setAttribute("data-house-inline", ""); after.parentNode.insertBefore(d, after.nextSibling); made++; };
    if (blocks.length >= 3) {
      blocks.forEach(function (b, i) { if (made >= cfg.max || i === blocks.length - 1) return; if ((i + 1) % cfg.every === 0) put(b); });
      return;
    }
    /* a story page: after every few long paragraphs */
    var ps = Array.prototype.filter.call(document.querySelectorAll("article p, main p"), function (p) { return !inBad(p) && (p.textContent || "").trim().split(/\s+/).length >= 25; });
    ps.forEach(function (p, i) { if (made >= cfg.max || i === ps.length - 1) return; n++; if (n % cfg.paras === 0) put(p); });
  }
  /* house-1g (15 Nov 2026, Mark: "in between stories as well like a real newspaper"): a page that draws its story lists
     late (Newsweed's sections load from the feed) puts <li data-house-inline data-mini></li> between stories and calls
     window.houseInline() - only the new, unfilled spaces are drawn. Small ones (data-mini) are one line, like a paper. */
  css2 += ".hin.mini{margin:6px 0;list-style:none}.hin.mini .lab{display:none}.hin.mini a{padding:6px 10px;gap:10px;border-width:1px;border-radius:8px}"
    + ".hin.mini img{width:30px;height:30px;border-radius:6px}.hin.mini b{font-size:14px;display:inline}.hin.mini small{font-size:12.5px}"
    + ".hin.mini .go{font-size:12px}.hin.mini:before{content:'Advertisement';display:block;font:600 9px ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin:0 0 2px}";
  var placed = false, styled = false, count = 0;
  var drawInline = function () {
    if (!placed) { placed = true; autoPlace(); }
    var slots = document.querySelectorAll("[data-house-inline]:not([data-done])"); if (!slots.length) return;
    if (!styled) { styled = true; var st = document.createElement("style"); st.textContent = css2; document.head.appendChild(st); }
    Array.prototype.forEach.call(slots, function (box) {
      var i = count++;
      box.setAttribute("data-done", "1");
      box.className = (box.className ? box.className + " " : "") + "hin" + (box.hasAttribute("data-mini") ? " mini" : ""); box.setAttribute("aria-label", "Advertisement");
      houseInline(box, i);   /* shown at once; replaced if a paid placement answers */
      fetch(API + "?serve=1&site=" + encodeURIComponent(here) + "&shape=inline")
        .then(function (r) { return r.json(); })
        .then(function (d) { var ad = d && d.ok && d.ads && d.ads[0]; if (ad && ad.kind !== "house" && ad.kind !== "demo") paidInline(box, ad); })
        .catch(function () {});
    });
  };
  window.houseInline = drawInline;
  var both = function () { draw(); drawInline(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", both); else both();
})();
