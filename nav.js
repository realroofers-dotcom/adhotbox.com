/* BUILT 2026-08-31 16:59 ET */
/* ============================================================
   nav.js — the menu, on every page
   One file. Change it here and it changes everywhere.

   Put this once in each page, immediately after <body>:
     <div id="ahb-nav"></div>
   and once before </body>:
     <script src="/nav.js"></script>

   It marks the current page on its own from the address.
   ============================================================ */

(function () {

var LINKS = [
  { href: "/",               label: "The network" },
  { href: "/advertise.html", label: "Advertise" },
  { href: "/start.html",     label: "Start here", cta: true },
  { href: "/join.html",      label: "Carry ads" },
  { href: "/compare.html",   label: "How we compare" },
  { href: "/install.html",   label: "Install it" },
  { href: "/wordpress.html", label: "WordPress" },
  { href: "/app/",           label: "The app" },
  { href: "/desk.html",      label: "Your desk" }
];

var CSS = ''
+ '#ahb-nav{position:sticky;top:0;z-index:60;background:#0C1220;'
+   'border-bottom:1px solid #1E2740}'
+ '#ahb-nav .in{max-width:1100px;margin:0 auto;padding:0 20px;'
+   'display:flex;align-items:center;gap:4px;min-height:52px}'
+ '#ahb-nav .mk{font:900 16px/1 Rubik,system-ui,sans-serif;letter-spacing:-.02em;'
+   'color:#fff;text-decoration:none;margin-right:14px;white-space:nowrap}'
+ '#ahb-nav .mk i{font-style:normal;color:#FF4A00}'
+ '#ahb-nav a.l{font:600 14px Rubik,system-ui,sans-serif;color:#9FAAC6;'
+   'text-decoration:none;padding:8px 11px;border-radius:6px;white-space:nowrap}'
+ '#ahb-nav a.l:hover{color:#fff;background:#161E33}'
+ '#ahb-nav a.l.on{color:#fff;background:#1E2740}'
+ '#ahb-nav a.l.cta{color:#180B05;background:#FF4A00;font-weight:700;margin-left:4px}'
+ '#ahb-nav a.l.cta:hover{opacity:.9;background:#FF4A00;color:#180B05}'
+ '#ahb-nav .sp{margin-left:auto}'
+ '#ahb-nav .burger{display:none;margin-left:auto;background:none;border:0;'
+   'color:#fff;font-size:22px;line-height:1;padding:8px 6px;cursor:pointer}'
+ '@media(max-width:900px){'
+   '#ahb-nav .in{flex-wrap:wrap;padding:0 16px}'
+   '#ahb-nav .burger{display:block}'
+   '#ahb-nav .links{display:none;width:100%;flex-direction:column;'
+     'align-items:stretch;padding:6px 0 14px;gap:2px}'
+   '#ahb-nav.open .links{display:flex}'
+   '#ahb-nav a.l{padding:13px 12px;font-size:15.5px}'
+   '#ahb-nav a.l.cta{margin:6px 0 0;text-align:center}'
+ '}'
+ '@media(min-width:901px){#ahb-nav .links{display:flex;align-items:center;gap:2px}}';

function here(href) {
  var p = location.pathname.replace(/\/index\.html$/, "/");
  if (href === "/")      return p === "/" || p === "";
  if (href === "/app/")  return p.indexOf("/app") === 0;
  return p === href;
}

function build() {
  var box = document.getElementById("ahb-nav");
  if (!box) return;

  var s = document.createElement("style");
  s.textContent = CSS;
  document.head.appendChild(s);

  var links = LINKS.map(function (l) {
    return '<a class="l' + (l.cta ? " cta" : "") + (here(l.href) ? " on" : "") + '"'
         + ' href="' + l.href + '">' + l.label + '</a>';
  }).join("");

  box.innerHTML =
      '<div class="in">'
    +   '<a class="mk" href="/">ADHOT<i>BOX</i></a>'
    +   '<button class="burger" aria-label="Menu">&#9776;</button>'
    +   '<nav class="links">' + links + '</nav>'
    + '</div>';

  var b = box.querySelector(".burger");
  if (b) b.addEventListener("click", function () { box.classList.toggle("open"); });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
else build();

})();
