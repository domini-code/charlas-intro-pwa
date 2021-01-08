"use strict";

const falconCacheName =['static-v3'];

const assetsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/js/service.js',
  '/js/swRegister.js',
  '/imgs/loader.svg',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://bootswatch.com/4/superhero/bootstrap.css',
  'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2969754bc52865ea520fa0bdfa979d7a&hash=78f5f6452549771ab88981a4c55acf80'
];


self.addEventListener('install', (event)=> {
  console.log('Install->', event);

  const preCache = async () => {
    const cache = await caches.open(falconCacheName);
    return cache.addAll(assetsToCache)
  }

  event.waitUntil(preCache());
});

self.addEventListener('activate', (event)=> {
  console.log('activate->', event);
});


self.addEventListener('fetch', (event)=> {
  // console.log('activate->', event);

  event.respondWith( 
    caches.match(event.request).then( cachesRes => {
      return cachesRes || fetch(event.request)
    }));
});



