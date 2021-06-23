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
"assets/assets/images/icons/share.svg": "dfc9446b8f0891bd2e5c2fec36e1ff4b",
"assets/assets/images/icons/swap-horizontal-circle.svg": "664524b87fb32b678cdb3e35716b1f6a",
"assets/assets/images/icons/chat-nav.svg": "73b150600216bcea14891390686e8927",
"assets/assets/images/icons/tick.svg": "3a5afd7357c0a2c43162c69e03cf7d5a",
"assets/assets/images/icons/cloud-lock.svg": "1fa31927a9f596b69a5edf561d46398e",
"assets/assets/images/icons/close.svg": "32d19c01b96dfdf46d1b1f0a582320ff",
"assets/assets/images/icons/chevron-up.svg": "857fd861dcb26b7405e7506bc01987be",
"assets/assets/images/icons/bookmark-outline.svg": "4b5db86c6759ff5da641dc818721b3f8",
"assets/assets/images/icons/chevron-down.svg": "cfcc835772b91de4320f6bd4f435abc6",
"assets/assets/images/icons/lifebuoy.svg": "edff14832f45c39bea07ef296eb6a22a",
"assets/assets/images/icons/wallet-plus.svg": "f72be185632a5cf6bdd523d8ffa14c18",
"assets/assets/images/icons/account.svg": "e5bcdc94092487c42886ef2b241bb77f",
"assets/assets/images/icons/video-recording.svg": "24ef8e2efe36d2486c5686e7452259c4",
"assets/assets/images/icons/home.svg": "e6cef25a554674ffa475d1843cd1a520",
"assets/assets/images/icons/tune-variant.svg": "d473c0e2191dbe63e05718c0d2c1eb9c",
"assets/assets/images/icons/chevron-right.svg": "6daaaf08e8fc3998c7d50baf79b258b1",
"assets/assets/images/icons/currency-usd.svg": "a5236c164aa1576bc5a34e42d669ba50",
"assets/assets/images/icons/sort-ascending.svg": "5916de7b1e3ea38c6f94ff307c51d6cb",
"assets/assets/images/icons/language.svg": "fe1e1b0fc4f79db18ce8b6278799e033",
"assets/assets/images/icons/down.svg": "df38f8c6bb8c6a40e2d66194e4bfba4d",
"assets/assets/images/icons/book-outline.svg": "c746051a847954039d96271fc341723f",
"assets/assets/images/icons/bookmark-filled.svg": "fa0262ba00d63a581282fd7e81c5f7e4",
"assets/assets/images/icons/swap_icon.svg": "efc287a71cf263114aee25a331205b0e",
"assets/assets/images/icons/lock-outline.svg": "545a274e4ad489a373d8921d4473eb7c",
"assets/assets/images/icons/bookmark-multiple.svg": "f7ea30dd29ca76ff90d8d4f8b8d6eb9a",
"assets/assets/images/icons/search.svg": "b2feb1c702b9b4c46343cfc222770c0d",
"assets/assets/images/icons/back.svg": "adf2020c84f4549efe7f999b560eeee4",
"assets/assets/images/icons/arrow_up.svg": "e4f8afd1de8427b9b1e1777951d2c34a",
"assets/assets/images/icons/chevron-left.svg": "953319cbaa80a50d781edf050fe0a37e",
"assets/assets/images/icons/credit-card-multiple.svg": "05680a01ad7834374c128b61318ef5a3",
"assets/assets/images/icons/dots.svg": "dc9e9b5f62e289cd18b48e81ab4fc868",
"assets/assets/images/icons/chat.svg": "880775365ff60a26d79a25587beaa5c4",
"assets/assets/images/icons/marker.svg": "24e11964d76e360674ec505b585c375b",
"assets/assets/images/icons/logout.svg": "f9bc78fbbe43b6fcc0e4ea4016dde348",
"assets/assets/images/icons/account-edit.svg": "2ef0d21eb38942f4db7e892b781c3b5a",
"assets/assets/images/icons/basket-outline.svg": "6ffcfea5f3452c786b6077c5165f8b0b",
"assets/assets/images/icons/video-outline.svg": "3bc45f3b7784e2d0026d9e78e03118f1",
"assets/assets/images/icons/arrow_down.svg": "4522e9ccf12e5babad5dfd9adc3f3ce9",
"assets/assets/images/icons/notification.svg": "faa191c8c5cced70c83c9b03866c085c",
"assets/assets/images/icons/filter.svg": "2289eefe46badc93d27e5c65f20fb469",
"assets/assets/images/icons/play.svg": "2659db0afc5254c7cb7298ca1f9b40dd",
"assets/assets/images/icons/arrow_right.svg": "593933c0c9c940dc8404a0ca48cdff96",
"assets/assets/images/icons/swap.svg": "978ae2370d85709113c704c6d156e6d6",
"assets/assets/images/icons/cards-outline.svg": "26182ebfe7ced72c0f755be9979a5171",
"assets/assets/images/icons/camera-plus.svg": "f1bdaa1e2c0120f4707adb14298f0147",
"assets/assets/images/main_placeholder.png": "891a73eb34499deb9a9ff7689b8cc835",
"assets/assets/images/social-facebook.png": "884a2de086ff6060c3bc3fe05582c9e2",
"assets/assets/images/mia.png": "aede4bf2397094b59e44cc94a3aa52aa",
"assets/assets/images/backseat.png": "4ac9e8cbe16ad2b7beabf228ea710e14",
"assets/assets/images/profile.jpg": "f85db287ddf308dc159f11dfea630288",
"assets/assets/images/svgs/no_swap_found.svg": "a988992559c455b9a20f0f1756c7b1be",
"assets/assets/images/svgs/english-flag.svg": "7d21c8387e25d4d05e6c90eeabd58612",
"assets/assets/images/svgs/payment_successful.svg": "ae2494026cb62383714cc7fc959240b8",
"assets/assets/images/svgs/uae-flag.svg": "ba286c4526923203663e7bd215bf1532",
"assets/assets/images/svgs/start_chat.svg": "c27ff6b37c4b32aad11890fcf91f51ce",
"assets/assets/images/svgs/login_step3.svg": "98a1151c73d1063b6b41a3436065ed3f",
"assets/assets/images/svgs/no_connection.svg": "a2573cfa1e33b152e29f0f86c2fe7e88",
"assets/assets/images/svgs/login_step1.svg": "2d5fd4c40596b4df26f2bdbeb694265b",
"assets/assets/images/svgs/applepay-logo.svg": "4b3641c9507a29015f000b6e85152112",
"assets/assets/images/svgs/login_step2.svg": "3ebef237a286b9b57cece2d99d074f1f",
"assets/assets/images/svgs/paypal-logo.svg": "fa90774cf99780f6efdf8f65a400d8d2",
"assets/assets/images/svgs/payment_unsuccessful.svg": "93f3427ac719d11776dc81dc21812774",
"assets/assets/images/svgs/empty_ads_list.svg": "57394511504c5293941b4158b2dceb10",
"assets/assets/images/svgs/no_chat.svg": "b43e2e81dfec9e31bc7fd81c8fa7f4be",
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
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "cf65672708fd34d1119a8c5237ecb339",
"assets/FontManifest.json": "908df324ddbf4cd13dd173fc4a725eaa",
"assets/NOTICES": "786d79f6997f44405ad4a3551521847f",
"main.dart.js": "3ac94463aee67413fa9c00eddf341e75",
"version.json": "d6f66596510281183cc93fdd8870f969",
"index.html": "c43f9cfb7e639f98ba8da4b1020f725f",
"/": "c43f9cfb7e639f98ba8da4b1020f725f",
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
