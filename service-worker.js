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
    "revision": "735f5b449e721897d7c6a20ff157a6c4"
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
    "url": "assets/js/10.7309e737.js",
    "revision": "9f7568d5a7a8242a02b4503022bb89ab"
  },
  {
    "url": "assets/js/11.6f88b8c2.js",
    "revision": "7008e56d51cdf8220ddc2fd99749bb1b"
  },
  {
    "url": "assets/js/12.7c072a04.js",
    "revision": "17f6e492479f3b8d1f6cef6fd372c9fd"
  },
  {
    "url": "assets/js/13.238795df.js",
    "revision": "f5a5cf942a33a281cec7b590ed4a31a1"
  },
  {
    "url": "assets/js/14.32e44822.js",
    "revision": "84dcc10459adb8ea3f929c19336017a1"
  },
  {
    "url": "assets/js/15.e18fbbe4.js",
    "revision": "61c0faa9c0397728482842ab0eae2ab6"
  },
  {
    "url": "assets/js/16.1132c05d.js",
    "revision": "4983c3e1e3d21a6db88be0823d8a5ff2"
  },
  {
    "url": "assets/js/17.9ab9c7f8.js",
    "revision": "0ea571a89c114da5b02918e332c002b8"
  },
  {
    "url": "assets/js/18.ad34337f.js",
    "revision": "cdbfb60b891e96a445a16e382d7fb92c"
  },
  {
    "url": "assets/js/19.8b9993df.js",
    "revision": "748af1df060642b80cb77799f7badf9a"
  },
  {
    "url": "assets/js/2.a289c0ff.js",
    "revision": "aac7088d10d1886dd0b8f40243f7e16a"
  },
  {
    "url": "assets/js/20.61d177d5.js",
    "revision": "6af8691d3355e762e4fada270b27a95b"
  },
  {
    "url": "assets/js/21.e52f75ef.js",
    "revision": "c91a882cfb3dead94cf01ded92bf0c49"
  },
  {
    "url": "assets/js/22.ea0a8ef5.js",
    "revision": "478c8ff17887e1aad3a9659417a1b8f4"
  },
  {
    "url": "assets/js/23.30825c40.js",
    "revision": "c7bf95eedac5d4d27534227e437479bb"
  },
  {
    "url": "assets/js/24.5c9074a1.js",
    "revision": "b05206a2e366f9332ff2d7bb925387ec"
  },
  {
    "url": "assets/js/25.895118c7.js",
    "revision": "6f58218ee4126123176c9f3f8dfd6b32"
  },
  {
    "url": "assets/js/26.fd46bdc7.js",
    "revision": "26cba94927a37d4c75ddfea09a1a1234"
  },
  {
    "url": "assets/js/27.de125d42.js",
    "revision": "98cc257e8ff970287fa2f7cc8f535647"
  },
  {
    "url": "assets/js/3.9969d387.js",
    "revision": "4accc9e29256b0b61229e17ef5ee1258"
  },
  {
    "url": "assets/js/4.7bab3ae9.js",
    "revision": "efa1620dd756a32d057e93de9060dbcb"
  },
  {
    "url": "assets/js/5.529d9cb4.js",
    "revision": "05430e9cd31a824eda06cbf218b6b1b2"
  },
  {
    "url": "assets/js/6.aa9f9ad8.js",
    "revision": "c4feaa93bb3552a327b97a0ea69c0c38"
  },
  {
    "url": "assets/js/7.9f8018a2.js",
    "revision": "b09f09be0f7c3ed92410448adebfcad5"
  },
  {
    "url": "assets/js/8.68efc6d1.js",
    "revision": "d78cf3316ab447f612d5ea2470c92411"
  },
  {
    "url": "assets/js/9.86daff1b.js",
    "revision": "72c283da730077503d0be4ba9d189c43"
  },
  {
    "url": "assets/js/app.c11a7438.js",
    "revision": "9bd5a37122aa504c29552b7719c6d536"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "624024f5235bcf621347da357a953020"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "4a686d1d801ab21d921997ea8eb651fd"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "5afd793ce351f083516b509d3b12795d"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "453ea67e53ba74f1e189823af483dbc2"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "0443ffa298224c287cee7fd40b7af596"
  },
  {
    "url": "javascript/index.html",
    "revision": "55b5d9a1ff589cc55b68036d806c737d"
  },
  {
    "url": "others/index.html",
    "revision": "bb88a986e10aff5f5e61004ca69bd9ca"
  },
  {
    "url": "others/interview-other.html",
    "revision": "778269b5102ce0be62589ce1df4a346d"
  },
  {
    "url": "others/nodejs.html",
    "revision": "2f9095fc20152fee736a09f8f9d63ab8"
  },
  {
    "url": "ua.js",
    "revision": "453a2405a08cf1352ac134e31aed8998"
  },
  {
    "url": "vue/components.html",
    "revision": "98e0f140c971a1b9bf617783a19ebdb0"
  },
  {
    "url": "vue/index.html",
    "revision": "8fd74eb587a73f2cba01d4583f35d430"
  },
  {
    "url": "vue/interview.html",
    "revision": "680ebfb7da2d1550cc13bb2fed8fb243"
  },
  {
    "url": "vue/native.html",
    "revision": "d092a0c95188a5421cf17500ccf85403"
  },
  {
    "url": "vue/router.html",
    "revision": "51960b963eecc782727d66f52d404a7d"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "5c259b11f8362fe3b7eb08ff651bad31"
  },
  {
    "url": "vue/vuex.html",
    "revision": "a142118d744501b6b915927ffd85e17c"
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
