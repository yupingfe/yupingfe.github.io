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
    "revision": "00e47a758a7ea3c3f465f44ca7f73cee"
  },
  {
    "url": "assets/css/0.styles.e1df9775.css",
    "revision": "7cab1e6cbfadc5609af870ba4bec640e"
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
    "url": "assets/js/10.b83a6430.js",
    "revision": "7e4e32fd94fe86c813b26401065fcfef"
  },
  {
    "url": "assets/js/11.a86b8425.js",
    "revision": "17eea22a56689fffc854e4a4ffd5c286"
  },
  {
    "url": "assets/js/12.f090b131.js",
    "revision": "faa10c2d26ce6fdc1a1df07ba9d9b654"
  },
  {
    "url": "assets/js/13.9683e7ae.js",
    "revision": "9da54101b446d0a27994e885e26db465"
  },
  {
    "url": "assets/js/14.96c79acd.js",
    "revision": "e23a2f70153b9302988e04865c9d5ec8"
  },
  {
    "url": "assets/js/15.92778a98.js",
    "revision": "5a05457c04286d6d1762ecfbea240e50"
  },
  {
    "url": "assets/js/16.adac0fdd.js",
    "revision": "6cbfddf0f92bce68711233c1eae62302"
  },
  {
    "url": "assets/js/17.e50d5a71.js",
    "revision": "eb1898ad7feb90bf8487c3deea4c8a78"
  },
  {
    "url": "assets/js/18.5e873104.js",
    "revision": "551d6def551c32fb445afff03e627961"
  },
  {
    "url": "assets/js/19.12c9ed13.js",
    "revision": "52d4dc3c3afaf848a98349e8db8b03e9"
  },
  {
    "url": "assets/js/2.6f164bbb.js",
    "revision": "60900a516e40370788d26f94ae0c44f5"
  },
  {
    "url": "assets/js/20.1c416819.js",
    "revision": "64a51d74fc44cf1f7af7bd82799ed567"
  },
  {
    "url": "assets/js/21.2e0bc41e.js",
    "revision": "104a1cdb21a4f1bef7c09c4d3c6ba915"
  },
  {
    "url": "assets/js/22.05723681.js",
    "revision": "198c3df84b0ecbf48750ffd63c80ccc4"
  },
  {
    "url": "assets/js/23.4982b33a.js",
    "revision": "9778ae4d79eaab87cba0ffdec1fba7c6"
  },
  {
    "url": "assets/js/24.55d30a0d.js",
    "revision": "a997349fccee7e4b17efdd7aa670afcb"
  },
  {
    "url": "assets/js/25.4332c975.js",
    "revision": "969e38e6cde96a94e3c980c02d74dabc"
  },
  {
    "url": "assets/js/26.526d7d7e.js",
    "revision": "88963f14f30cdb2f208056fe43070680"
  },
  {
    "url": "assets/js/27.c2848601.js",
    "revision": "934d1691ab69558414faf9010840ac03"
  },
  {
    "url": "assets/js/3.2760cd0b.js",
    "revision": "b4c202d228a6f3b1e8411f058dc806a4"
  },
  {
    "url": "assets/js/4.6aad12c8.js",
    "revision": "653240076dca6944cb0c9c8899cbd98f"
  },
  {
    "url": "assets/js/5.a9513608.js",
    "revision": "b3474a164821f9c867e8dffa5396e735"
  },
  {
    "url": "assets/js/6.57555ab6.js",
    "revision": "ea61c4c38b0bfc328eb6b0aa6ded8db0"
  },
  {
    "url": "assets/js/7.177b17cf.js",
    "revision": "2ced5daeeb423c74c21db5097dec5ff3"
  },
  {
    "url": "assets/js/8.a3fba35c.js",
    "revision": "03367996992aa11a42dc333f52d7b49a"
  },
  {
    "url": "assets/js/9.9770aab2.js",
    "revision": "2e698a01916ceaf47268cc7be8b59cb2"
  },
  {
    "url": "assets/js/app.d07d0911.js",
    "revision": "ec2a152ff97ce4f735d47f6457640852"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "afc88fa441b665262f8da94896aa715c"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "a2e7f664c2fd2989b0f89b1703f66507"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "9b33a7b7c5ece0d322a47903ede38207"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "60cdf944510cb82f2f61714ebbaa1fcc"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "f6470c4f24cb268ffd92f4d751391002"
  },
  {
    "url": "javascript/index.html",
    "revision": "e2072f420531620792ae324d403824e5"
  },
  {
    "url": "others/index.html",
    "revision": "c1ff7243c73b76353506f029a9bfae9b"
  },
  {
    "url": "others/interview-other.html",
    "revision": "bda64edc656ada36ca0e2586d17d1afd"
  },
  {
    "url": "others/nodejs.html",
    "revision": "db9a6af480c0eb1cb60d1b24bb8f33e6"
  },
  {
    "url": "vue/components.html",
    "revision": "3896a3dd59cd79db7a01d2c7829598b8"
  },
  {
    "url": "vue/index.html",
    "revision": "c027a3d0a37b1707f9802351898748f9"
  },
  {
    "url": "vue/interview.html",
    "revision": "301d1fe992d3455f52b7a273c3c2b8db"
  },
  {
    "url": "vue/native.html",
    "revision": "d097cf575dd9bf81b7f930f6e765fc00"
  },
  {
    "url": "vue/router.html",
    "revision": "51b4fe2efb82582e5e71153e5e9da8a8"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "d5e32937aedd86086fcaf97ad5338873"
  },
  {
    "url": "vue/vuex.html",
    "revision": "7f8ef23bcb43e33fe793aa0a9d106bb9"
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
