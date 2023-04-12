'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "812b7cf216f6ea2a678f2090caf76673",
"assets/assets/resimler/%25C3%25A7ocuk.jpg": "be79017d6449bd484d9fc54eb4b3dc77",
"assets/assets/resimler/1984.jpg": "8d93511c2ac3909dd9099a38b8d5bfb1",
"assets/assets/resimler/abartma.jpg": "a4a8a65586a84f2093e0bbbec9215f91",
"assets/assets/resimler/ak%25C4%25B1ll%25C4%25B1.jpg": "21ffb25dfd53dbc36f61608555a179d2",
"assets/assets/resimler/b%25C3%25B6yles%25C3%25B6yledi.jpg": "a78444e75587fe27419fccb6c7da9d4b",
"assets/assets/resimler/ben.jpg": "4a846d0be4e3df2da3165ffce4a01a1f",
"assets/assets/resimler/beyin.jpg": "e31f1b64d20fbf8ecc7b42a5db070af9",
"assets/assets/resimler/beyoglu.jpg": "ab45dda33bac2a8a99b6ed6af2fbe48f",
"assets/assets/resimler/bu%25C3%25BClke.jpg": "81c258a54108a4f905a2e052ffac7dfa",
"assets/assets/resimler/bulanti.jpg": "96d0a4ca748502c6c8e90994562e7b7e",
"assets/assets/resimler/cesuryeni.jpg": "0c3e793631f241e52a76126aae35a56e",
"assets/assets/resimler/cinali.jpg": "78ba97e4e71f62a05ee3455cb12e6b0f",
"assets/assets/resimler/coksatann.jpg": "047a3ccde341d7b7e98e259633d7714c",
"assets/assets/resimler/d%25C3%25BC%25C5%259F%25C3%25BC%25C5%259F.jpg": "e101dc3aa048e363e2bd1dd2b81270d7",
"assets/assets/resimler/dalga.jpg": "040c0f5bc359fe291998ee87491564c1",
"assets/assets/resimler/devlet.jpg": "b09dffda659175373081ba6791d1996b",
"assets/assets/resimler/dune.jpg": "6f1751435e95de937ef2dfb7495aea04",
"assets/assets/resimler/empati.jpg": "fa315e0621bdec59b79ffe809df53ad6",
"assets/assets/resimler/ermis.jpg": "0e17e670690a6d3e20dc629b959af0a8",
"assets/assets/resimler/fahr.jpg": "207730d503af1b902ef20b7cdcdf7e6f",
"assets/assets/resimler/fare.jpg": "7711846544c076d95f94237273e3e53b",
"assets/assets/resimler/geceyarisi.jpg": "2e6294ae4ec8b7c80366fa50c0211787",
"assets/assets/resimler/hatira.jpg": "a386901b5b069486116566fdd101a2dc",
"assets/assets/resimler/images.jpg": "2c6a5bc37f53e738179e3036c8025d09",
"assets/assets/resimler/indir.jpg": "c4c28b561b139dfc58ce945ec6d96a65",
"assets/assets/resimler/indirr.jpg": "19bd9f925abe3f663417bfe0e36155d7",
"assets/assets/resimler/insanlar.jpg": "a3546117826dd3ff63ff5326c3c413f6",
"assets/assets/resimler/jane.jpg": "b2f221066d7a893f1d55f2de41af3a6d",
"assets/assets/resimler/k%25C3%25B6rl%25C3%25BCk.jpg": "558c1bd138d277e8df744a68c2170938",
"assets/assets/resimler/k%25C3%25BC%25C3%25A7%25C3%25BCk.jpg": "49ab238180b45f1a63c4ce7c358055a7",
"assets/assets/resimler/k%25C4%25B1rm%25C4%25B1z%25C4%25B1.jpg": "ee0703ba90720bbcca203901e533ebfc",
"assets/assets/resimler/k%25C4%25B1sat.jpg": "8ce0712c56641ef421f910d093bfe2cf",
"assets/assets/resimler/karakitap.jpg": "e0e297e48b873959f8d5230cae96a326",
"assets/assets/resimler/kitapsec.jpg": "a49cb7777004164bdaf5e6141c25e55e",
"assets/assets/resimler/m%25C3%25BClks.jpg": "a7fa4aa28ef9799ef4acc9e38f808049",
"assets/assets/resimler/marsl%25C4%25B1.jpg": "d3208a4895a002e6edc936a89fd1084f",
"assets/assets/resimler/o.jpg": "e4c52c0a02fe86387e7b30c0290d5afd",
"assets/assets/resimler/olas%25C4%25B1l%25C4%25B1k.jpg": "1aa922ff7ec1d9670f8bcfef81296b7b",
"assets/assets/resimler/otostop.jpg": "5b5ae4c55d6d7f3f384419b4e699818b",
"assets/assets/resimler/resim.jpg": "26532b311b2a7c72ea2aef52d1a653c0",
"assets/assets/resimler/sa%25C3%25A7.jpg": "d0a9d738de07c984d4808a6ee232235c",
"assets/assets/resimler/seker.jpg": "05e0c3d19dfb5fec9caba260b98761d8",
"assets/assets/resimler/sinek.jpg": "2d5ff149117b78b9bb8fb0e0eacefa8c",
"assets/assets/resimler/sofie.jpg": "8736318120746f49e860e4d273795e37",
"assets/assets/resimler/sokrates.jpg": "85e112fe0343479a718bae856f7f5fbe",
"assets/assets/resimler/toprak.jpg": "b73f47e02c46227d045b6e3a6449e210",
"assets/assets/resimler/veba.jpg": "36046932bbca0ff277a2eefc955a7028",
"assets/assets/resimler/y%25C3%25BCzy%25C4%25B1ll%25C4%25B1k.jpg": "f7ab2c243378ce0d43178dd0fce52997",
"assets/assets/resimler/yasli.jpg": "01126a920da6f56c45cd6d9f6cdd8098",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e12090dbc3946feff90007be514df8c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "838aa9a1a9df9f6d560c209a9a96c43e",
"/": "838aa9a1a9df9f6d560c209a9a96c43e",
"main.dart.js": "8c767ba89cd1651caa751e83f63284dc",
"manifest.json": "bbb61d58118b1126c5c5d3f29f532f77",
"version.json": "af6fb5b37b5d6dcc27ceea9b3c54ddaf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
