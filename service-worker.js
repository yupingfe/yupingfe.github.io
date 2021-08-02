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
    "revision": "8ed6cf20bb05a8822188af2a6dd60c13"
  },
  {
    "url": "assets/css/0.styles.84acc995.css",
    "revision": "b228c26870e062edcf182fe07718faf0"
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
    "url": "assets/js/10.19e6721c.js",
    "revision": "82f7d184a9b8f6365e4dba06dc503608"
  },
  {
    "url": "assets/js/11.dfef9bdc.js",
    "revision": "318e5894e13d10d4e23f56853641ce57"
  },
  {
    "url": "assets/js/12.70614d45.js",
    "revision": "d609162d1c5405e62a2bc740707770b8"
  },
  {
    "url": "assets/js/13.02d35d36.js",
    "revision": "83df178d700df9912af8b78df89de732"
  },
  {
    "url": "assets/js/14.e088c5d8.js",
    "revision": "acc861b1176ba2f2b1e86b3f7dae7a5a"
  },
  {
    "url": "assets/js/15.1ea8fcaf.js",
    "revision": "4f5edcfccc75ac893449a8155c1ab92a"
  },
  {
    "url": "assets/js/16.2201ab99.js",
    "revision": "8300af9391f4ecf5cd76d5cfb5ade71c"
  },
  {
    "url": "assets/js/17.8edd70ca.js",
    "revision": "bdb0908f4f41cfc4ac2a4f31e9c6e98f"
  },
  {
    "url": "assets/js/18.95e0cfd1.js",
    "revision": "7d314fa1de792237011b71f64ae623cd"
  },
  {
    "url": "assets/js/19.8481bc05.js",
    "revision": "add19800ec0c5fa908f2c95d90655df2"
  },
  {
    "url": "assets/js/2.53750350.js",
    "revision": "1463657f7c1ba2f3b211d35412085fa9"
  },
  {
    "url": "assets/js/20.5e3007cb.js",
    "revision": "bd43c2696ceb955aa8a44778b4a7b0cd"
  },
  {
    "url": "assets/js/21.02abd410.js",
    "revision": "2a2e8e45fa303507ce5a50aab2f73553"
  },
  {
    "url": "assets/js/22.df283052.js",
    "revision": "3e3175028bbba0f3b224a46ba61d6f39"
  },
  {
    "url": "assets/js/23.ccaad899.js",
    "revision": "4246266ff0201daaa5e6ed1f6c3cabfb"
  },
  {
    "url": "assets/js/24.0ebe50a6.js",
    "revision": "e2c2b88a1d34a68d2f75790fec40acec"
  },
  {
    "url": "assets/js/25.7b715db3.js",
    "revision": "5081b0311ad34ca8724d850423ad9d9d"
  },
  {
    "url": "assets/js/26.559b4696.js",
    "revision": "3890978310364e1e5ba50143d620facf"
  },
  {
    "url": "assets/js/27.69658535.js",
    "revision": "d8e9125d93be4a118ea698d89e60890f"
  },
  {
    "url": "assets/js/3.5a726cc8.js",
    "revision": "02f6be3003a5dc231daf0f3cfb79ac1e"
  },
  {
    "url": "assets/js/4.dd0811b6.js",
    "revision": "183d9480e3e43d2886f145defd4e1e5b"
  },
  {
    "url": "assets/js/5.30099225.js",
    "revision": "390e6c90d436a8fe2dd3751019b9bafa"
  },
  {
    "url": "assets/js/6.e169e966.js",
    "revision": "4c79932b156a4d9edc08051227ca9542"
  },
  {
    "url": "assets/js/7.10ab990a.js",
    "revision": "b19ad247aaf97e9697c94e2b1e8721a0"
  },
  {
    "url": "assets/js/8.640bfaff.js",
    "revision": "d139bef423d929514ffa3e306eea9d68"
  },
  {
    "url": "assets/js/9.5c47ee60.js",
    "revision": "5dd83a57539b0f3be7372e857493c6da"
  },
  {
    "url": "assets/js/app.f1d883cf.js",
    "revision": "2d1dd1149d95b434c5241687f7efe4b3"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "5d5f0e35a78a1ee8edd64c6ec743cc25"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "4a78597e05876321715a6d60ec7742da"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "0a1661604d03b069f981d5ae96c80d4e"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "a88bad869c4f29644c1d1c5af23b92c6"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "1e7f568317404c1782390f82a0ad49dc"
  },
  {
    "url": "javascript/index.html",
    "revision": "323ed1312c2fef06467f0dc5e4ac5bae"
  },
  {
    "url": "others/index.html",
    "revision": "259fe8d3edf0565f754132a843ca3f8b"
  },
  {
    "url": "others/interview-other.html",
    "revision": "61b8ac003b48e0e6eb9d9dae0cf8a1a8"
  },
  {
    "url": "others/nodejs.html",
    "revision": "714c07b6596d32f5d877d3911f907ca7"
  },
  {
    "url": "ua.js",
    "revision": "453a2405a08cf1352ac134e31aed8998"
  },
  {
    "url": "vue/components.html",
    "revision": "9dafb1305fdd7ffec3c201f9e418f2ec"
  },
  {
    "url": "vue/index.html",
    "revision": "4fbe47bab19e1396776ac7e37f5a2f63"
  },
  {
    "url": "vue/interview.html",
    "revision": "26c8aa3896b1fa03f2ba411deb59ff60"
  },
  {
    "url": "vue/native.html",
    "revision": "6e44d2852589333e74273cdfca5f062a"
  },
  {
    "url": "vue/router.html",
    "revision": "3abea3c33b2b9fac86e77165b1f013e2"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "ec0ff4542cc0a7a77e00238b4720b6ee"
  },
  {
    "url": "vue/vuex.html",
    "revision": "ab19bd8b29dd887bef7f18f4bcebf694"
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
