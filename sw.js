const CACHE_NAME = "bktech-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./login.html",
  "./signup.html",
  "./profile.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
