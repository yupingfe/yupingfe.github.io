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
    "revision": "fbf5dcfaf26f6b172d124a184386bfd4"
  },
  {
    "url": "assets/css/0.styles.e31a37f5.css",
    "revision": "ebe5486aa00b97c7b8637c1f52ee5671"
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
    "url": "assets/js/2.e3a46b40.js",
    "revision": "580a35ce584fd111694230645e96eefc"
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
    "url": "assets/js/3.85fc3a2d.js",
    "revision": "c33e3b2d87cd31824189a16fab217f14"
  },
  {
    "url": "assets/js/4.c8519a35.js",
    "revision": "e905b71337e02de7ce0c7cace2188981"
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
    "url": "assets/js/app.f583d08b.js",
    "revision": "73b6bc848cbd533d7534186e8cd832c0"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "ee904c4be23b5e96c77764b9e4242f94"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "7cead20dd2dd75a076061b31866846c9"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "526f621cc60ff2f32f2dcf82ec0c64f8"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "f9b6d3baa8a78d2204cb51a13b4cf90e"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "9951b267cbddac2a0cc932437a8fc609"
  },
  {
    "url": "javascript/index.html",
    "revision": "a45885157a7e50a74537e7087ddd35e5"
  },
  {
    "url": "others/index.html",
    "revision": "ab4af8574097e12923c261acabb10fad"
  },
  {
    "url": "others/interview-other.html",
    "revision": "a69f91f8dd13971e74a6843cd05b49f4"
  },
  {
    "url": "others/nodejs.html",
    "revision": "ca3abca2a1df15b9c24aae06cacaf62c"
  },
  {
    "url": "vue/components.html",
    "revision": "3d81e4cc876e66d1ac3ee44012bd48b4"
  },
  {
    "url": "vue/index.html",
    "revision": "78791ec2fee259a70a7b214ee0a978ed"
  },
  {
    "url": "vue/interview.html",
    "revision": "8442066f5a601f3c31bf0de520100376"
  },
  {
    "url": "vue/native.html",
    "revision": "f2e04bfae6f833d2f42cf0951e638fc2"
  },
  {
    "url": "vue/router.html",
    "revision": "135fa85d00786dc8b7482938c0894fca"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "31129b1837af7843d90b2f1dbdadac93"
  },
  {
    "url": "vue/vuex.html",
    "revision": "df1eace6ddc0d65d3f24a397ebf2232b"
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
