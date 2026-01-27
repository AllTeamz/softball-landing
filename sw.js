// Service Worker for offline capability and performance
const CACHE_VERSION = 'softball-bound-v2';
const CACHE_ASSETS = [
  '/',
  '/assets/css/style.css',
  '/assets/yellow_ss.svg',
  '/assets/sbicon.jpeg',
  '/assets/appstore.png',
  '/assets/js/mobile-analytics.js',
  '/assets/js/review-cycle.js',
  '/assets/js/app-price.js'
];

// Install event - cache critical assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(function(cache) {
        return cache.addAll(CACHE_ASSETS);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', function(event) {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // Check if valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response and cache it
        const responseToCache = response.clone();
        caches.open(CACHE_VERSION)
          .then(function(cache) {
            cache.put(event.request, responseToCache);
          });

        return response;
      })
      .catch(function() {
        // Network failed, try cache
        return caches.match(event.request);
      })
  );
});
