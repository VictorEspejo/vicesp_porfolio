const CACHE_STATIC = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";
const INMUTABLE_CACHE = "inmutable-v1";
const API_URL = "https://victor-espejo.vercel.app/";

const sw = self;

const APP_SHELL = [
  "/",
  "/index.html",
  "/victorlogo.png",
  "/vite.svg",
  "/manifest.json",
  "/victorlogo_144.png",
  "/victorlogo_192.png",
  "/victorlogo_384.png",
  "/victorlogo_512.png",
];

const APP_SHELL_INMUTABLE = [
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
];

function cacheFirstAndNetworkFallback(request, cacheName) {
  return caches.match(request).then((response) => {
    if (response) return response;
    else {
      return fetch(request).then((networkResponse) => {
        if (!networkResponse.ok) return networkResponse;
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

  const cacheInmutable = caches
    .open(INMUTABLE_CACHE)
    .then((cache) => cache.addAll(APP_SHELL_INMUTABLE))
    .catch(console.error);

  e.waitUntil(Promise.all([cacheCallback, cacheInmutable]));
});

self.addEventListener("activate", (e) => {
  const respuesta = caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key !== CACHE_STATIC && key.includes("static")) {
        return caches.delete(key);
      }
      if (key !== DYNAMIC_CACHE && key.includes("dynamic")) {
        return caches.delete(key);
      }
    });
  });

  e.waitUntil(respuesta);
});

sw.addEventListener("fetch", (e) => {
  let response;
  if (e.request.url.includes(API_URL)) {
    response = cacheFirstAndNetworkFallback(e.request, DYNAMIC_CACHE);
  } else {
    response = fetch(e.request);
  }

  e.respondWith(response);
});
