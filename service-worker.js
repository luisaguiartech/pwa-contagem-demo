// service-worker.js
const CACHE_NAME = 'pwa-contagem-v1';
const urlsToCache = [
  '/pwa-contagem-demo/',
  '/pwa-contagem-demo/index.html',
  '/pwa-contagem-demo/manifest.json',
  '/pwa-contagem-demo/icon-192.png',
  '/pwa-contagem-demo/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});