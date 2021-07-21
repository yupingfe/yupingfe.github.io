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
    "revision": "bfaedebd223d504a436e163d87049339"
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
    "url": "assets/js/10.753f4453.js",
    "revision": "cb5515c4c92cd0ad937a37c8455e8d90"
  },
  {
    "url": "assets/js/11.751793fe.js",
    "revision": "164031d12cde11dff1d09a6235e51079"
  },
  {
    "url": "assets/js/12.3f72e657.js",
    "revision": "f30a4c9424adfb7d90839f411ca49553"
  },
  {
    "url": "assets/js/13.41bfb6ca.js",
    "revision": "fc3ab29f7617efcb0332448c25fb2aa2"
  },
  {
    "url": "assets/js/14.ce9fc29b.js",
    "revision": "b4780d5363ec371a641b4594eaffe313"
  },
  {
    "url": "assets/js/15.4d13a9ca.js",
    "revision": "f28a6d2df0ebbf4e3a5662104bd01db5"
  },
  {
    "url": "assets/js/16.188915dd.js",
    "revision": "282d211d23381ef211fb89f07081b663"
  },
  {
    "url": "assets/js/17.879f16d3.js",
    "revision": "e7dc2f8e49dc8df8e005e9a6d0d07e59"
  },
  {
    "url": "assets/js/18.479b8600.js",
    "revision": "5890934d431a9cde1e2c508842c091fd"
  },
  {
    "url": "assets/js/19.9f1c8ed5.js",
    "revision": "f5be9ef838429d6a11262c7bd916d8e2"
  },
  {
    "url": "assets/js/2.2059aead.js",
    "revision": "d66d72033a875c116ebfd53fb2a25440"
  },
  {
    "url": "assets/js/20.06f1f342.js",
    "revision": "0058babc5b22a89a97646aead3669e14"
  },
  {
    "url": "assets/js/21.7e2e2bcb.js",
    "revision": "52f1896eefa58ce56a11c4414a6ce203"
  },
  {
    "url": "assets/js/22.59d4a269.js",
    "revision": "dc5fdcb2468b32d434ef70b486601cb6"
  },
  {
    "url": "assets/js/23.3fd735cb.js",
    "revision": "544b1845b15b69447fe3278abeb36779"
  },
  {
    "url": "assets/js/24.88991c60.js",
    "revision": "b79c2538ab1f4a660d2f9e2132b1937b"
  },
  {
    "url": "assets/js/25.8d280ea0.js",
    "revision": "82346984c7b6e14b26d364eb670be2e1"
  },
  {
    "url": "assets/js/26.e4f7af5d.js",
    "revision": "182fd96ab91c783ab2370ac0ab9221a6"
  },
  {
    "url": "assets/js/27.616ec576.js",
    "revision": "88d9b73e443cbde854e0f6763d44537b"
  },
  {
    "url": "assets/js/3.2c32f800.js",
    "revision": "1cc129e1b55ea43ea28e91ddcaca2ca9"
  },
  {
    "url": "assets/js/4.c7bea25f.js",
    "revision": "a00d49c04be681093487afcd9fd2dc20"
  },
  {
    "url": "assets/js/5.25112c06.js",
    "revision": "6ac79d50bbb7f855de8525ac26802a32"
  },
  {
    "url": "assets/js/6.87a8c2fb.js",
    "revision": "d44d205ba00e736d7aa968d936af8405"
  },
  {
    "url": "assets/js/7.762636f9.js",
    "revision": "24ea026b172376901066f839c590bbc8"
  },
  {
    "url": "assets/js/8.fcab9440.js",
    "revision": "7841b853e21ae5cd4b4d4c397e0bb0b1"
  },
  {
    "url": "assets/js/9.b2ece499.js",
    "revision": "ebb31fa9aa575aa4b73f3e3542818916"
  },
  {
    "url": "assets/js/app.8ec3f6f9.js",
    "revision": "d3ecf6c2d3ccb5c6cdf7161a42de8159"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "2e97b372683291ce1393896a0ff30a36"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "3cc86e4672db8de2484e8b6821dfa9bb"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "02a7345845dc916dea7f6e5d108d7577"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "73e0dae0bf72eccedc6bd0774550f205"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "34551f5cd841aa84bf8b36027a6a70d3"
  },
  {
    "url": "javascript/index.html",
    "revision": "8f319c983acb8f4e348c0a362ba74830"
  },
  {
    "url": "others/index.html",
    "revision": "ed5d9f7f111235318b0b6c68e6e2c625"
  },
  {
    "url": "others/interview-other.html",
    "revision": "2506e1445361a2e71c5176067a6765d5"
  },
  {
    "url": "others/nodejs.html",
    "revision": "ec059df4167dd3b02397166db4ccedb2"
  },
  {
    "url": "ua.js",
    "revision": "453a2405a08cf1352ac134e31aed8998"
  },
  {
    "url": "vue/components.html",
    "revision": "7dc12db020fff1d73c368318bc7c5fc7"
  },
  {
    "url": "vue/index.html",
    "revision": "0822b6e2a17417866b96169a8869f41b"
  },
  {
    "url": "vue/interview.html",
    "revision": "7832652d5a9a1b44baf250fe864c18e4"
  },
  {
    "url": "vue/native.html",
    "revision": "40367c169cbb2671d2b80ea5c3100bb3"
  },
  {
    "url": "vue/router.html",
    "revision": "6fed98fdd247f8aef78f0165e0bdae35"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "ba1befb2303ede9df1b6cee63f9b9e6e"
  },
  {
    "url": "vue/vuex.html",
    "revision": "309d732205c682a22860a5c5e173ca8f"
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
