const CACHE_NAME = 'cubonix-v5';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css?v=5',
  '/app.js?v=5',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/images/wheel-shapes.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  url.searchParams.delete('v');
  const cleanReq = new Request(url, e.request);
  e.respondWith(
    caches.match(e.request)
      .then(r => r || caches.match(cleanReq))
      .then(r => r || fetch(e.request))
  );
});
