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
    "revision": "564be446ac1bd6de4da5437871ae6ad4"
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
    "url": "assets/js/13.725da16e.js",
    "revision": "d6cfd7d02fc85ae7296086d4013176c3"
  },
  {
    "url": "assets/js/14.a5d12744.js",
    "revision": "780c7c8b35744af0d215c2ee49a6c73d"
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
    "url": "assets/js/2.28516afd.js",
    "revision": "230deb404e60ce6a7ffa5b4955581414"
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
    "url": "assets/js/app.f259806d.js",
    "revision": "b5ec0eb3795666bfa5b49fd762603f22"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "c49575c7f8626f05ac06f28411c405a2"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "969d4a1deead5dc7ef9b90e0bebca7f1"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "2b35df041f69864d0d6bfaffbf1e78d0"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "640c30be42cfea444f1f3ea5e235a987"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "6b483f9d69b4aa88daf50106e2860ddf"
  },
  {
    "url": "javascript/index.html",
    "revision": "cea4fe79dcb139644663f34dcbc0c75d"
  },
  {
    "url": "others/index.html",
    "revision": "b3153d65351ec04ee730ea8c231a3bb1"
  },
  {
    "url": "others/interview-other.html",
    "revision": "3b449cca718ec132912a2d0eac69cf7c"
  },
  {
    "url": "others/nodejs.html",
    "revision": "c3a22d569c0c137aa6b3762c171df2b6"
  },
  {
    "url": "ua.js",
    "revision": "453a2405a08cf1352ac134e31aed8998"
  },
  {
    "url": "vue/components.html",
    "revision": "daeaf6024a714ce3a0ff5d5322c581cd"
  },
  {
    "url": "vue/index.html",
    "revision": "03e871ad41b2a2939791e49970d5b97f"
  },
  {
    "url": "vue/interview.html",
    "revision": "8b63368ad9c5958f6e67f4cb52f67497"
  },
  {
    "url": "vue/native.html",
    "revision": "0ec2e539fcfe9da062588047b97f0893"
  },
  {
    "url": "vue/router.html",
    "revision": "a34631b042e15f35474ced26a019bf83"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "91b116995c13fa1c95e4d9903608a571"
  },
  {
    "url": "vue/vuex.html",
    "revision": "c7bbcee25de90e97809d42945287aed2"
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
