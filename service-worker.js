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
    "revision": "c5f5703094885fa7f795f716249a1358"
  },
  {
    "url": "assets/css/0.styles.792ba277.css",
    "revision": "257dca5ee69b6cb8a0435d7ce190863c"
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
    "url": "assets/js/3.32598eb1.js",
    "revision": "4c8cc362337fa75e7372be56bb28fe3d"
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
    "url": "assets/js/app.33abb616.js",
    "revision": "408fbb90cadc80eb2c0f3419d49c81e8"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "96d94d714b2c708bcf37f40d96508c3e"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "5ebffaec851fc933ebdcf0db371d9f4b"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "c0e89b140404654077472cf93ff8c894"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "cbe97a619d3ab73bbaabebd5e5513167"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "19796eab2742a6ae29bb3cbcd70e97bb"
  },
  {
    "url": "javascript/index.html",
    "revision": "f133e12bb6f65c676e3c1fad0c6ded00"
  },
  {
    "url": "others/index.html",
    "revision": "da70cb4f4cd1728aca9d56f215c2ccfa"
  },
  {
    "url": "others/interview-other.html",
    "revision": "cd09ee4c07e34814e923800fe7d27b8b"
  },
  {
    "url": "others/nodejs.html",
    "revision": "1d52b608ffd95bc1ff1141059e2d592d"
  },
  {
    "url": "ua.js",
    "revision": "453a2405a08cf1352ac134e31aed8998"
  },
  {
    "url": "vue/components.html",
    "revision": "a6da0a0695135136454de1ce98658514"
  },
  {
    "url": "vue/index.html",
    "revision": "18a0a0f711417e0afaf3ed4cd1f13312"
  },
  {
    "url": "vue/interview.html",
    "revision": "26b52cbd6aeca74656ff202ecaa2d945"
  },
  {
    "url": "vue/native.html",
    "revision": "e15fcd56a14ef134fa05a8205905ed44"
  },
  {
    "url": "vue/router.html",
    "revision": "c7ec9bbb5602abc367a3c489e6d74cbb"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "529319ffe0a89d4de9845c14d9766e0a"
  },
  {
    "url": "vue/vuex.html",
    "revision": "3c44c1e4dfca38724660227fdf186b2a"
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
