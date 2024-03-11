const CACHE_STATIC = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";
const API_URL = "https://victor-espejo.vercel.app/";

const sw = self;

const APP_SHELL = ["/", "/index.html", "/victorlogo.png", "/vite.svg"];

function cacheFirstAndNetworkFallback(request, cacheName) {
  return caches.match(request).then((response) => {
    if (response) return response;
    else {
      return fetch(request).then((networkResponse) => {
        if (!networkResponse.ok) return fetch(request);
        caches
          .open(cacheName)
          .then((cache) => cache.put(request, networkResponse));
        return networkResponse.clone();
      });
    }
  });
}

sw.addEventListener("install", (e) => {
  const cacheCallback = caches
    .open(CACHE_STATIC)
    .then((cache) => cache.addAll(APP_SHELL))
    .catch(console.error);

  e.waitUntil(cacheCallback);
});

sw.addEventListener("fetch", (e) => {
  let response = fetch(e.request);
  if (e.request.url.includes(API_URL) && e.request.url.includes("assets")) {
    console.log(e.request.url);
    response = cacheFirstAndNetworkFallback(e.request, DYNAMIC_CACHE);
  }

  e.respondWith(response);
});
