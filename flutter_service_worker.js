'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/apple-icon-144x144.png": "dbd0e11efef307e119569bdb6a21f83d",
"icons/apple-icon-72x72.png": "5c8fa9c31550332f04f781223721d458",
"icons/apple-icon-180x180.png": "ff97a677670e90d923bb382118c62d92",
"icons/apple-icon-76x76.png": "94b5ad6ef86d79235aa00809f5159aba",
"icons/apple-icon.png": "8f43677b773f41ebd426f2df87a299d6",
"icons/android-icon-48x48.png": "223220304e4681b5721f8bc49623cfd3",
"icons/favicon-32x32.png": "67d31a638e9c4e56095dd33ddbe7bc8c",
"icons/android-icon-72x72.png": "5c8fa9c31550332f04f781223721d458",
"icons/apple-icon-57x57.png": "d37feb7f2a573376c8c2120ef07321c0",
"icons/apple-icon-precomposed.png": "8f43677b773f41ebd426f2df87a299d6",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/apple-icon-152x152.png": "55688be937222047cf92266bc3a10cd5",
"icons/favicon-16x16.png": "6fef6480254df5e259f2b20d9c2377c1",
"icons/ms-icon-150x150.png": "3300e332b5572c162e5a3ba8fde34ff0",
"icons/apple-icon-120x120.png": "2c62b2dd8fac4b8cbc224b04da53e44d",
"icons/ms-icon-310x310.png": "093202a175a20c29ac873d89a34d5636",
"icons/android-icon-96x96.png": "9cd960d0c99cd03f377b0ad6db4da499",
"icons/favicon-96x96.png": "9cd960d0c99cd03f377b0ad6db4da499",
"icons/ms-icon-70x70.png": "1425caaeb91e480d4bea3a8d54623887",
"icons/apple-icon-114x114.png": "3949cdf5f84c9ce799cb598e1dbcca1c",
"icons/android-icon-192x192.png": "c8682d48cc156fcce03d3ae9979f4ddd",
"icons/favicon.ico": "d5b25a67e7fb0fb56d2d05ada97d2692",
"icons/apple-icon-60x60.png": "4c2ee9e7a2b3b2af953d5af71de10c2e",
"icons/manifest.json": "5d7db1e039286619c8940c42d3cdb1c8",
"icons/ms-icon-144x144.png": "dbd0e11efef307e119569bdb6a21f83d",
"icons/android-icon-36x36.png": "afd12ed6af41520d44f76bfcb81609d1",
"icons/android-icon-144x144.png": "dbd0e11efef307e119569bdb6a21f83d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/fonts/Tajawal-Bold.ttf": "79bb19e04937c19974260fcb4128270e",
"assets/assets/fonts/FredokaOne-Regular.ttf": "4a2f2ea45a0bb1abe81b47d0afde4aae",
"assets/assets/fonts/IRANSansDN.ttf": "71cdabe63e937be602d7924d36838344",
"assets/assets/fonts/IRANSansDN-Bold.ttf": "7a5c49aa4e1792cdc48cb6a95ad48ab9",
"assets/assets/fonts/Tajawal-Light.ttf": "fbca61ce5f0321ab500bdbb168b775b0",
"assets/assets/fonts/Tajawal-Regular.ttf": "6b10b55e4df612910047b7e5d596a9d5",
"assets/assets/fonts/IRANSansDN-Light.ttf": "7a35e7aadab20cfea1e05aae1654c730",
"assets/assets/images/icons/search.png": "f575e879e89f6e14e65e04cce5b2df47",
"assets/assets/images/icons/swap_icon.png": "cfdb5d699fc178e4309d47b6c8f25afa",
"assets/assets/images/icons/arrow_up.png": "e202c478919bd262f0f8d12e9f0cdc43",
"assets/assets/images/icons/video-recording.png": "d355e8dfc4b86ce193b4681c3be76b4f",
"assets/assets/images/icons/tick.png": "318d744ef87e70b6145e1aef62bc19b2",
"assets/assets/images/icons/chat.png": "f11e4802bbeea01b664258a884bf60fc",
"assets/assets/images/icons/down.png": "7806953fa6e9cc769a8a7ca0142b9db0",
"assets/assets/images/icons/arrow_down.png": "466b35bcd9a28f8bc3966e2637eb3adf",
"assets/assets/images/icons/back.png": "bdf0135894a89b3572eefd582628c4de",
"assets/assets/images/icons/marker.png": "2be4734452f76ea4819dffae14122d40",
"assets/assets/images/icons/dots.png": "70f6be6a19360a7c16ba4546d37274f8",
"assets/assets/images/icons/arrow_right.png": "cd9238b9e971bde32335b272c0e15d6b",
"assets/assets/images/main_placeholder.png": "891a73eb34499deb9a9ff7689b8cc835",
"assets/assets/images/social-facebook.png": "884a2de086ff6060c3bc3fe05582c9e2",
"assets/assets/images/mia.png": "aede4bf2397094b59e44cc94a3aa52aa",
"assets/assets/images/backseat.png": "4ac9e8cbe16ad2b7beabf228ea710e14",
"assets/assets/images/profile.jpg": "f85db287ddf308dc159f11dfea630288",
"assets/assets/images/svgs/payment_successful.png": "df4c957936221f59b0bc0f3ef15709f1",
"assets/assets/images/svgs/empty_ads_list.png": "58fc1c1948d03dacc595021d48d8aea0",
"assets/assets/images/svgs/login_step2.png": "9fb612e6bce67c1d4703671de8cc31f0",
"assets/assets/images/svgs/uae-flag.png": "56a5c976d46752613d28db30f87b748a",
"assets/assets/images/svgs/start_chat.png": "9448f3467dac4d2bacbfeba38740c8ec",
"assets/assets/images/svgs/english-flag.png": "c37683abd93abf64f8aee04309cec0ce",
"assets/assets/images/svgs/no_swap_found.png": "854e94cf1a11b1798d58861ad59cedd2",
"assets/assets/images/svgs/applepay-logo.png": "da1d1618559ded17030961bb180b4fbc",
"assets/assets/images/svgs/no_chat.png": "f72b00eecd85add0de3a8ba753daa66d",
"assets/assets/images/svgs/payment_unsuccessful.png": "9ba9e02dae896e54dafc93d60a8230f6",
"assets/assets/images/svgs/login_step3.png": "424b46ba74cd8be5fd6ddf69893135fa",
"assets/assets/images/svgs/paypal-logo.png": "73351050ba5e49bdb6428ce946e4cfd5",
"assets/assets/images/svgs/login_step1.png": "306bb965f6f94f83aff4f416330e0493",
"assets/assets/images/svgs/no_connection.png": "36df890ded8c96f8291e2844291901bf",
"assets/assets/images/frontside.png": "49a8c9e57aaa850dbd3e6d4b83ad42e7",
"assets/assets/images/square_placeholder.png": "d2a9e1050d728303364c4afde718ceb7",
"assets/assets/images/main.png": "0a886e2cf7dccea2a9f513b48051e66d",
"assets/assets/images/cars/bmwm1.jpg": "40a058571ae5f6a0ff20d6d9a1a84525",
"assets/assets/images/cars/hyundai2.png": "a266621f876ed29a5f04814fc16ef992",
"assets/assets/images/cars/hondansx.jpg": "bae1952c095d9bffef7a9539637d89df",
"assets/assets/images/cars/bmwi8.jpg": "6bbc2c458c3d99ff6d1808d872ad01de",
"assets/assets/images/cars/hyundai1.png": "326de0e75b4eda7f4ee926a35e1dff81",
"assets/assets/images/cars/bmw1.png": "0e2896b7bcdf204f12378da348528551",
"assets/assets/images/cars/isuzo.png": "ad4521cce1c61d72aeee6af2ac426f01",
"assets/assets/images/cars/hyundai/hyundai-back.jpg": "f0b2cc0b1039e1606a55b28e40a9e839",
"assets/assets/images/cars/hyundai/hyundai-wheel.jpg": "f381864072bd6fa602e8afc605256f30",
"assets/assets/images/cars/hyundai/hyundai-leftside.jpg": "49e7fab1b674d0e5e1f1e4c058b6601e",
"assets/assets/images/cars/hyundai/hyundai-frontseat.jpg": "a130c6d69f47581f4f34b0bb1f2f35cb",
"assets/assets/images/cars/hyundai/hyundai-backseat.jpg": "ef012ab9c951d4fbd3d4741c75196c83",
"assets/assets/images/cars/hyundai/hyundai-rightside.jpg": "6b64129ba6d33239555cf23ec4ba3291",
"assets/assets/images/cars/hyundai/hyundai-main.jpg": "1efb266ebf0fa07aab6bd072736ad871",
"assets/assets/images/cars/hyundai/hyundai-front.jpg": "1923bcca64bc85a5716be4ac19312c3b",
"assets/assets/images/social-google.png": "2d9587c6d315566f7ab6971fb11c93ca",
"assets/assets/images/apple-logo.png": "3b3735a50c8b0d3556e6ebce1c60eb84",
"assets/assets/images/wheels.png": "de286b76842b406b4ae57eee13a83dbe",
"assets/assets/images/rightside.png": "d404719029be294dfd1624efafcc93f9",
"assets/assets/images/sara.jpg": "7b165edfbc1133ef70eed6602173c209",
"assets/assets/images/placeholder.png": "ec0d27963118a65090cc877e95909d44",
"assets/assets/images/backside.png": "ad134cf9f02fda02427fbcc39d27dea6",
"assets/assets/images/frontseat.png": "5eb6e823ebb8b58f8fcb5096476bb5f8",
"assets/assets/images/leftside.png": "1a8582b117dc03f66c7ea083e3424fa3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "5c988e780dc0fbfb69ee28f749b7870d",
"assets/FontManifest.json": "bf92ce9dbdd0a7b80ae3061089148f10",
"assets/NOTICES": "eaad85cd1497e3ae521d095d9e698cf3",
"main.dart.js": "a18d9c5ed81a2a5a0408ac3c6ba70114",
"version.json": "d6f66596510281183cc93fdd8870f969",
"swappy_pwa_v10.zip": "c04fee9c35b3ded9ddc2a322773aad00",
"index.html": "53d9c4cf3ab68b2bb36398176b3ec230",
"/": "53d9c4cf3ab68b2bb36398176b3ec230",
"favicon.ico": "d5b25a67e7fb0fb56d2d05ada97d2692",
"manifest.json": "5514bf5f97abcacb8258925112975886"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
