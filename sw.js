/* BUILT 2026-08-29 14:39 ET */
/* AdHotBox — service worker
   The shell is cached so the app opens instantly and works with no
   signal. Anything from the API is never cached: a stale number is
   worse than no number. */

var SHELL = "adhotbox-shell-v1";
var FILES = ["./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(SHELL).then(function (c) {
    return c.addAll(FILES).catch(function () {});
  }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) {
      if (k !== SHELL) return caches.delete(k);
    }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  var url = e.request.url;

  /* never cache the API — numbers must be live or absent */
  if (url.indexOf("workers.dev") > -1 || url.indexOf("?") > -1) return;
  if (e.request.method !== "GET") return;

  e.respondWith(
    caches.match(e.request).then(function (hit) {
      return hit || fetch(e.request).then(function (res) {
        if (res && res.status === 200 && res.type === "basic") {
          var copy = res.clone();
          caches.open(SHELL).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      }).catch(function () {
        return caches.match("./index.html");
      });
    })
  );
});
