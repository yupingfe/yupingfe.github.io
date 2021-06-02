/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "32172012b233695ec31126b492f85247"
  },
  {
    "url": "assets/css/0.styles.31f9f4a6.css",
    "revision": "9e47bfd8abec76b049f61f6753880141"
  },
  {
    "url": "assets/img/bg.a382c67a.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.50d65de5.js",
    "revision": "403f6e4cf5d10ca5df409f2cf27f92d1"
  },
  {
    "url": "assets/js/11.4606b659.js",
    "revision": "e0c5018d3577d443de8cf5bc24800b0c"
  },
  {
    "url": "assets/js/12.1970887e.js",
    "revision": "bbdc4d66f3d3c03f866af42103887134"
  },
  {
    "url": "assets/js/13.81d1a90e.js",
    "revision": "5aa33abd4a5552720bceb2bac60506d8"
  },
  {
    "url": "assets/js/14.0f64b989.js",
    "revision": "854cf63fe178143275503b919f72c60b"
  },
  {
    "url": "assets/js/15.5ea41e77.js",
    "revision": "6cd0244f921f18f789b807a4d87efb84"
  },
  {
    "url": "assets/js/16.e6579377.js",
    "revision": "eb45e794e1989f3f85ede09ee97062e2"
  },
  {
    "url": "assets/js/17.ead38f48.js",
    "revision": "029b64e08cfabe0e43165451eb4270e4"
  },
  {
    "url": "assets/js/18.a147deef.js",
    "revision": "3ed1e160f74296ca755f648a5eb3d96c"
  },
  {
    "url": "assets/js/19.1946455d.js",
    "revision": "4d8c31137e5f2dce5b1dd78bfd81e2b2"
  },
  {
    "url": "assets/js/2.28516afd.js",
    "revision": "230deb404e60ce6a7ffa5b4955581414"
  },
  {
    "url": "assets/js/20.76486bc5.js",
    "revision": "0e2ea4524b6f219a1e57c65ad564a0ec"
  },
  {
    "url": "assets/js/21.a81c2a48.js",
    "revision": "9d76be2cb4b5b13472547de597b78286"
  },
  {
    "url": "assets/js/22.495f4cd6.js",
    "revision": "be598b74e3cc557bebc0b1ebfab786ec"
  },
  {
    "url": "assets/js/23.b31f0cbe.js",
    "revision": "9c4baa03da929f9271c2030e734b801e"
  },
  {
    "url": "assets/js/24.b9e80074.js",
    "revision": "0e89f0bc86f5971ec21bf38ed7fd961c"
  },
  {
    "url": "assets/js/25.28ac2944.js",
    "revision": "3fb74f329846fb5a16e38ad9fc72d4af"
  },
  {
    "url": "assets/js/26.70dcf510.js",
    "revision": "9f9f001d8040fab3060327ed61e303c7"
  },
  {
    "url": "assets/js/27.b19499af.js",
    "revision": "552d2923acc8df80630b029b012d7ae6"
  },
  {
    "url": "assets/js/3.0b63b5e8.js",
    "revision": "38797a6de05794d460500400a9d87b4b"
  },
  {
    "url": "assets/js/4.87793d1b.js",
    "revision": "98d79374b85f72f883705e58d4a58903"
  },
  {
    "url": "assets/js/5.376bc088.js",
    "revision": "c9d01033fd0f11567f578be4ea328bcb"
  },
  {
    "url": "assets/js/6.a8a9ab61.js",
    "revision": "c1700789ddef8bde8f946fdf08fa8517"
  },
  {
    "url": "assets/js/7.e4a82640.js",
    "revision": "cdea1f35d75602cb6af4a6038cf7e483"
  },
  {
    "url": "assets/js/8.f553f794.js",
    "revision": "e1326db037da4646ae6cf12b18d955a1"
  },
  {
    "url": "assets/js/9.d891400b.js",
    "revision": "195740bbd0bdfb2e84734e49f316af14"
  },
  {
    "url": "assets/js/app.1b38b9c5.js",
    "revision": "3deefee81c6eef1365ddec26ac57eacb"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "a64959dd4ee1852d557852f50cbf653a"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "0e19f60366273f33af7e14f66d425b2c"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "8408716561fa1b71679914d3c406d638"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "1666d682ba582686aee8756d3b030f5d"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "94c04f37e9e4bb562a7e812c2c5a7eee"
  },
  {
    "url": "javascript/index.html",
    "revision": "d79b1243bb7eb5d62a518fa815b680d0"
  },
  {
    "url": "others/index.html",
    "revision": "2115d0b0d962a5585c10c52a14dfe26c"
  },
  {
    "url": "others/interview-other.html",
    "revision": "ab7d861985e7178914b057a3cce7a1bf"
  },
  {
    "url": "others/nodejs.html",
    "revision": "1340ca4896714450011b4e06c57835e3"
  },
  {
    "url": "ua.js",
    "revision": "453a2405a08cf1352ac134e31aed8998"
  },
  {
    "url": "vue/components.html",
    "revision": "f8aeb1844539a7cc786df5cba84e447e"
  },
  {
    "url": "vue/index.html",
    "revision": "7d560ab54bb0ebb6a5a5a88a92619ab0"
  },
  {
    "url": "vue/interview.html",
    "revision": "01bee7d889fe01abd3e25911dd9f5fba"
  },
  {
    "url": "vue/native.html",
    "revision": "304a50f6ecb5972c53ce085e35156642"
  },
  {
    "url": "vue/router.html",
    "revision": "632a7b918ae96765fd6d6df948c9ea8b"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "058399349e085fc38097d9e9c5bd9baf"
  },
  {
    "url": "vue/vuex.html",
    "revision": "8ea3c9eaa6147e602913b9ce5a1bb7ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
