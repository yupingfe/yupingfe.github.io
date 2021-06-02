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
    "revision": "0be91d6e6d9fcbfe3cfeb40802812c86"
  },
  {
    "url": "assets/css/0.styles.d90b776e.css",
    "revision": "e0e516e49b7dcd696cce5b591092debc"
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
    "url": "assets/js/3.4ad89c5f.js",
    "revision": "4f391a9f47afe2ac2214440f0b4b73e0"
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
    "url": "assets/js/app.b5169827.js",
    "revision": "cd1e83d8307442b58bbc6db93d012613"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "cc4f1e75acfbe69b763bbd11cff18cc5"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "b6509524ac30955fbe2710baaa9274dd"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "87bfb4c923c8a59079b48d0094cc094b"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "8f0b9b765e5444a3090964b63ef3931d"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "f71de59da41fccd01a7a1f6293049baf"
  },
  {
    "url": "javascript/index.html",
    "revision": "2faeed2ee84273a45b2a51a1fb389c36"
  },
  {
    "url": "others/index.html",
    "revision": "32961c7f7567077090733e7103821fa2"
  },
  {
    "url": "others/interview-other.html",
    "revision": "c8973857f2643fc97eabc1fa94e95575"
  },
  {
    "url": "others/nodejs.html",
    "revision": "86c4d69936d758842808c13e877c7ff5"
  },
  {
    "url": "ua.js",
    "revision": "453a2405a08cf1352ac134e31aed8998"
  },
  {
    "url": "vue/components.html",
    "revision": "76115acf3b29b953922f7da0882ebf92"
  },
  {
    "url": "vue/index.html",
    "revision": "5321f494b0bce145c7ca03fff99dbaa5"
  },
  {
    "url": "vue/interview.html",
    "revision": "a586dcb94c398404d166b1ae00fb726a"
  },
  {
    "url": "vue/native.html",
    "revision": "9790d1d097e43fb5c4c0c97bf26af545"
  },
  {
    "url": "vue/router.html",
    "revision": "586d0a545187e1bf32e40a9d2ea09613"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "32a874b3bac443da210ccff098707db1"
  },
  {
    "url": "vue/vuex.html",
    "revision": "7519e799ea48108c40e15e1760258b4c"
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
