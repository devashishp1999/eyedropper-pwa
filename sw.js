self.addEventListener("install", (e) => {
  console.log(e);
  e.waitUntil(
    caches
      .open("color-pwa")
      .then((cache) =>
        cache.addAll(["/eyedropper-pwa/", "/eyedropper-pwa/index.html", "/eyedropper-pwa/src/index.js", "/eyedropper-pwa/src/method.js"])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
