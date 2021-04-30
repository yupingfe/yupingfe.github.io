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
    "revision": "f5b0fdda7d0f07b19aca9cafb8f79778"
  },
  {
    "url": "assets/css/0.styles.3f042012.css",
    "revision": "8cda36df73fa0d6a3d12850f1893809b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5d27efbe.js",
    "revision": "4a93064ad16e893bc4f82129f498920f"
  },
  {
    "url": "assets/js/11.2ee53eb6.js",
    "revision": "cb81ba70142dca493e72009fad4c0142"
  },
  {
    "url": "assets/js/12.998bef8c.js",
    "revision": "492246f4e83b0a06a277a68ed746908a"
  },
  {
    "url": "assets/js/13.1d6f02af.js",
    "revision": "f5004b8be784d29c35b3018709944bb3"
  },
  {
    "url": "assets/js/14.0e5a0403.js",
    "revision": "7292a8e852f5547b3ecd05a144751533"
  },
  {
    "url": "assets/js/15.76438e17.js",
    "revision": "554eb57fe228da717d42957b0681fcf6"
  },
  {
    "url": "assets/js/16.34a7f2a9.js",
    "revision": "59cf90d6803516d10b63a42517f54003"
  },
  {
    "url": "assets/js/17.e5634333.js",
    "revision": "1cfd39b2514167e5e812a35c80d09e04"
  },
  {
    "url": "assets/js/18.531ac59c.js",
    "revision": "77ce8f11a2ba70077ce6ac718d2d557d"
  },
  {
    "url": "assets/js/19.9fd16bd0.js",
    "revision": "370637fbcdcda6dd9a535ff138ef4f7d"
  },
  {
    "url": "assets/js/2.4f38fb0d.js",
    "revision": "37d9ac13b7049aacd920f243ff1420c0"
  },
  {
    "url": "assets/js/20.64356c10.js",
    "revision": "7e5cef49550a8dd5c1625c33ae082c2f"
  },
  {
    "url": "assets/js/21.2f3c1cc4.js",
    "revision": "8d5a37f3276ed6add31a7aff0e05e84b"
  },
  {
    "url": "assets/js/22.3ccfd043.js",
    "revision": "6c713818273a34b6d1eb3b48e433c499"
  },
  {
    "url": "assets/js/23.8391fd98.js",
    "revision": "b45c389a075709209a2dbd6c5985332d"
  },
  {
    "url": "assets/js/24.91a05c69.js",
    "revision": "9194d74aaf460cfcde83d07d7355de70"
  },
  {
    "url": "assets/js/3.145129e8.js",
    "revision": "62bd735acab2068df9634ba128db8fa5"
  },
  {
    "url": "assets/js/4.f92431f4.js",
    "revision": "af6a675824496228ae299f6c063680ae"
  },
  {
    "url": "assets/js/5.b037a694.js",
    "revision": "0fbed82467330c9ca77b3b9cc1609bab"
  },
  {
    "url": "assets/js/6.d2bb26ed.js",
    "revision": "b608be77fa33ae8b8eb72a794f9e1e4e"
  },
  {
    "url": "assets/js/7.94972006.js",
    "revision": "ad2106ec02e4865f1c81e9636a312fe0"
  },
  {
    "url": "assets/js/8.c38195a3.js",
    "revision": "ea9d01dfe439a6f9438d4bab01361a6c"
  },
  {
    "url": "assets/js/9.c2543cb2.js",
    "revision": "291c7def54b8a7be0c45d694bc42dbb1"
  },
  {
    "url": "assets/js/app.45f33b99.js",
    "revision": "1b49471c661f5508e069b41b049db105"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "f537385da91c59382443c8a83954a723"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "b1cfa59ae1488496985f42d64802a8a8"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "056e765c27b8b5ababe53cffde54174f"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "c204677fc6f3564cb02d9ac337275663"
  },
  {
    "url": "javascript/index.html",
    "revision": "4d3766aecd8c7f6433197723e1f2ab83"
  },
  {
    "url": "others/index.html",
    "revision": "3039bff3cc8f97155fd6ca9230dffb8a"
  },
  {
    "url": "others/interview-other.html",
    "revision": "541b51cd0245ba9d5407bfb4cb252c34"
  },
  {
    "url": "others/nodejs.html",
    "revision": "8a2a91f6866a124affb6eea4a7865d10"
  },
  {
    "url": "vue/components.html",
    "revision": "ffaea156076b7b55f6e197d6b65bbe5e"
  },
  {
    "url": "vue/index.html",
    "revision": "28295a97a78936afddb4290d73b78262"
  },
  {
    "url": "vue/interview.html",
    "revision": "29180f110b2ed3ed7fa15f63ebe1eb8d"
  },
  {
    "url": "vue/native.html",
    "revision": "9cc0bcca3f0c50fd8e9def11e8b3128a"
  },
  {
    "url": "vue/router.html",
    "revision": "7c68f328dcb2094033a12474e6195143"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "a246b7356396a4af8d92d484c0f3ec71"
  },
  {
    "url": "vue/vuex.html",
    "revision": "6a8e57ee6c767485a040f09466771845"
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
