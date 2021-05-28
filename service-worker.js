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
    "revision": "6e42c5f5d158543e1f59f9869921ef96"
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
    "url": "assets/js/12.f8b070bf.js",
    "revision": "e042dd45fb893351f0d42b2afec09972"
  },
  {
    "url": "assets/js/13.c335592b.js",
    "revision": "9b4d05ac951246284c550ca68a09f92d"
  },
  {
    "url": "assets/js/14.b31f0a5a.js",
    "revision": "7dcd11752f2c04539d1466acf2b6d5e3"
  },
  {
    "url": "assets/js/15.0f017a1f.js",
    "revision": "fbe9e64c9857d3bb05731e655424cb90"
  },
  {
    "url": "assets/js/16.778eaf0a.js",
    "revision": "d15d7eec9ba6791620fc27a994b79961"
  },
  {
    "url": "assets/js/17.63fb16a4.js",
    "revision": "abad8bc215daea6c9c45c530dcda854b"
  },
  {
    "url": "assets/js/18.6c3f4ea7.js",
    "revision": "80d922e7f777cf63ddec4598d512c55c"
  },
  {
    "url": "assets/js/19.d0661d64.js",
    "revision": "e780f48eda62684bb49926a7a54935fa"
  },
  {
    "url": "assets/js/2.e13ae124.js",
    "revision": "220182c5c488cb4bb6b738fb202b299c"
  },
  {
    "url": "assets/js/20.674c1baf.js",
    "revision": "344cb73d8d3187ede8f5e9ad2588f773"
  },
  {
    "url": "assets/js/21.8be97e23.js",
    "revision": "595a60cfa82d42473944c50a5892c2bf"
  },
  {
    "url": "assets/js/22.4e94a85f.js",
    "revision": "77d660dfac1f17e86eb1f60488bedc4a"
  },
  {
    "url": "assets/js/23.c4e8298b.js",
    "revision": "d6a682a7c1def8f0943046ffc6559f99"
  },
  {
    "url": "assets/js/24.82086efb.js",
    "revision": "cf038d38a8ff54f747480843b1080453"
  },
  {
    "url": "assets/js/25.4e7e838a.js",
    "revision": "c4f2d20ea7b6a28d24d252cafd10542d"
  },
  {
    "url": "assets/js/26.b4afc4a7.js",
    "revision": "4594ebef8cd9a14c9e1e594a5f9ba61f"
  },
  {
    "url": "assets/js/27.04b80f65.js",
    "revision": "c3a2f17cad490ba0eb5e7aa7af396086"
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
    "url": "assets/js/5.86d07557.js",
    "revision": "cbe451fbdf1f5168c4a3e50c7d991c02"
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
    "url": "assets/js/9.00ca5075.js",
    "revision": "d32551925e09f83ad64cf22ef069a98c"
  },
  {
    "url": "assets/js/app.10c935db.js",
    "revision": "53ecc1c6992a273c40f94e3b096d6e48"
  },
  {
    "url": "comments/index.html",
    "revision": "d6b9a59334a3d7db8355827898547c11"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "4e5d92083a7d555fdd300eb4109009d3"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "eb93c0c891f87a80772a77b87d846a3a"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "d9fba2274a2bdc71b4b98b24c908acd9"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "40f68d4071227b4389d093f6704c1b92"
  },
  {
    "url": "javascript/index.html",
    "revision": "7974b15cd6643828f3ed414a5f1f2658"
  },
  {
    "url": "others/index.html",
    "revision": "32c6c75937c671338f3d4484d7f21df0"
  },
  {
    "url": "others/interview-other.html",
    "revision": "7e3b5d7fc712953e1a2245bd9c222e5f"
  },
  {
    "url": "others/nodejs.html",
    "revision": "6f5fab273ddefd293de55d5b78cb7808"
  },
  {
    "url": "vue/components.html",
    "revision": "5b21b0b245837d64e7843d473e8a066a"
  },
  {
    "url": "vue/index.html",
    "revision": "3080b64b091121d0ef68b2e37f40dc07"
  },
  {
    "url": "vue/interview.html",
    "revision": "cad5465d66a796d23035612e402c28fb"
  },
  {
    "url": "vue/native.html",
    "revision": "a1c705aa31364c6c1da640d2256cb969"
  },
  {
    "url": "vue/router.html",
    "revision": "a5f0f3682ec86e612d20ed9c807efb6e"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "7dad82d1049f609e1448bda49516c21f"
  },
  {
    "url": "vue/vuex.html",
    "revision": "7c68b60e85bc3039353868d004c008f2"
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
