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
    "revision": "d3c0786c22d30cf31b67ec558d46d7ab"
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
    "url": "assets/js/10.44409197.js",
    "revision": "1c862620da1a8a30a6824d61f2770dbe"
  },
  {
    "url": "assets/js/11.c0523637.js",
    "revision": "8de9666e9dd1bab4701819d52b742594"
  },
  {
    "url": "assets/js/12.7f708736.js",
    "revision": "7130053a911112501fbd88f102d49a26"
  },
  {
    "url": "assets/js/13.f675bed5.js",
    "revision": "3b3d8faf8adf8d7619dbb46d1bafc9b2"
  },
  {
    "url": "assets/js/14.3fcf421a.js",
    "revision": "5328f38ae604ba2b188df7e9986653d7"
  },
  {
    "url": "assets/js/15.98475b49.js",
    "revision": "16a39c83ee4cba903120554579dc962b"
  },
  {
    "url": "assets/js/16.197f68a7.js",
    "revision": "85de83241af6b0fdc0cc41302aa547a1"
  },
  {
    "url": "assets/js/17.9052699f.js",
    "revision": "41f12809893b12f9ec1a135491b82b23"
  },
  {
    "url": "assets/js/18.d359be79.js",
    "revision": "61f15f682fdf944a29b2d6e798939d6e"
  },
  {
    "url": "assets/js/19.e98889ce.js",
    "revision": "3bc0887606e0748aa627d9cd58669464"
  },
  {
    "url": "assets/js/2.e13ae124.js",
    "revision": "220182c5c488cb4bb6b738fb202b299c"
  },
  {
    "url": "assets/js/20.eb8f504f.js",
    "revision": "d4fc125e4971843667b4c5e1cc068697"
  },
  {
    "url": "assets/js/21.b438979a.js",
    "revision": "c93bef64c4a8684b08ac60305be67b3b"
  },
  {
    "url": "assets/js/22.593ac7f9.js",
    "revision": "0112bb2be3324297992b2d580d9903c2"
  },
  {
    "url": "assets/js/23.9a32af2e.js",
    "revision": "39c1a8a661bb431785ac19c6759bb350"
  },
  {
    "url": "assets/js/24.203ee4f4.js",
    "revision": "6809d252495e25f4ee13fae9b5f81b21"
  },
  {
    "url": "assets/js/25.3102289f.js",
    "revision": "1eb28187bb35458b6e1dae213f929c33"
  },
  {
    "url": "assets/js/26.5f3fb982.js",
    "revision": "a4278d84ec1f885efabf391592138e53"
  },
  {
    "url": "assets/js/3.10e44f13.js",
    "revision": "2189fdb4a04f0a8187a8f1a4e1d8499d"
  },
  {
    "url": "assets/js/4.425aa6c0.js",
    "revision": "4524bd52fd93558bf62bf0f67c630240"
  },
  {
    "url": "assets/js/5.185c3f0e.js",
    "revision": "9fc00f5464075166c4f442a58bad6cfb"
  },
  {
    "url": "assets/js/6.6ec45890.js",
    "revision": "0cb8201346e0d135722d717209058c3a"
  },
  {
    "url": "assets/js/7.b8106607.js",
    "revision": "42b72daaf7d385e892d513e03bbc387f"
  },
  {
    "url": "assets/js/8.7dc1dfcb.js",
    "revision": "a20a57f669997d1a3ace7d38acaba971"
  },
  {
    "url": "assets/js/9.03a7e381.js",
    "revision": "882dac381c526db552859d99ad2bc3ed"
  },
  {
    "url": "assets/js/app.537d5282.js",
    "revision": "19666f6e60413902e0dd627efbc4583f"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "436c802a9c4dce33209e8014e3f792c6"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "9c094dcd3c64b1e4b2e2c53c01f97e3e"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "861dfb0e7296c9197a5f6a2d59cb6e50"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "5d9840a57be3836aaea9ce9a4a471935"
  },
  {
    "url": "javascript/index.html",
    "revision": "1f647642f1f79e92cf682a2a899501d7"
  },
  {
    "url": "others/index.html",
    "revision": "3ef7985ccd1b536566729083b4a8faf4"
  },
  {
    "url": "others/interview-other.html",
    "revision": "1909b77ef435fc912bda6223bfcc2e75"
  },
  {
    "url": "others/nodejs.html",
    "revision": "3d04969f4ac204f9fd589bf79d47a2dd"
  },
  {
    "url": "vue/components.html",
    "revision": "a0e657024847c20defeece6ab662342d"
  },
  {
    "url": "vue/index.html",
    "revision": "639ff4e0988d509e3a3107e670ddaadf"
  },
  {
    "url": "vue/interview.html",
    "revision": "fe37ab631e95bc85234010c910c1c821"
  },
  {
    "url": "vue/native.html",
    "revision": "31bafe6bdbe6b6906690c54e54784fda"
  },
  {
    "url": "vue/router.html",
    "revision": "dd28720ff90f3c861a44b189e1a908b8"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "5b2808a3edf00ff53ccb1ee610aca31b"
  },
  {
    "url": "vue/vuex.html",
    "revision": "e53ba65a415a8cec1ee94e5ca0ca910b"
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
