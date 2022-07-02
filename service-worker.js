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
    "revision": "e0a4ee8e1ce3accaadf5673e622e676d"
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
    "url": "assets/js/10.b09ee5fa.js",
    "revision": "a4d4224796f7aa917423bc229173d5ba"
  },
  {
    "url": "assets/js/11.563e490a.js",
    "revision": "ddbe2312dafb2b2551c95604489d590d"
  },
  {
    "url": "assets/js/12.11e2ef7c.js",
    "revision": "b07fe7600abcadded3480d52aaa24316"
  },
  {
    "url": "assets/js/13.f92d29a8.js",
    "revision": "453ad158a82a95b01dc50312335bf7d4"
  },
  {
    "url": "assets/js/14.93aef2a7.js",
    "revision": "159307c44ef066173e881725b3b913c4"
  },
  {
    "url": "assets/js/15.70c00104.js",
    "revision": "4139aa4134de88760143e66bbcb3c05d"
  },
  {
    "url": "assets/js/16.520a1a11.js",
    "revision": "a2e5117adc5262049e3e65cae1792e48"
  },
  {
    "url": "assets/js/17.39bd3b43.js",
    "revision": "d7888fc1d4eb353c8fadbce989e9536f"
  },
  {
    "url": "assets/js/18.9de7ab08.js",
    "revision": "12c6b192205bf8a88809dcf9d66b2c08"
  },
  {
    "url": "assets/js/19.f80961fd.js",
    "revision": "c98acc2ad8dd235a8d91ef6bad49879e"
  },
  {
    "url": "assets/js/2.c0215c8b.js",
    "revision": "8c14dbeb5dde3b87b70ffc7af6fc57f0"
  },
  {
    "url": "assets/js/20.4de91166.js",
    "revision": "d601582b888b8d8740727528840810e3"
  },
  {
    "url": "assets/js/21.497b4e61.js",
    "revision": "20b70e159a99528b624bfb9f298eb547"
  },
  {
    "url": "assets/js/22.732a112f.js",
    "revision": "bdcc748c0ba9d990c590a30d0723de5b"
  },
  {
    "url": "assets/js/23.910fba09.js",
    "revision": "2cf4bf41d148f8fbc341dc4f9891adc6"
  },
  {
    "url": "assets/js/24.e7dfec91.js",
    "revision": "dc5f00ebb54149a7c9358531c66764f7"
  },
  {
    "url": "assets/js/25.147f1475.js",
    "revision": "4a3aed27237dfc43b7a76ebfabbb8a56"
  },
  {
    "url": "assets/js/26.90d16875.js",
    "revision": "a52031a767ed7d6556d2650d37c90554"
  },
  {
    "url": "assets/js/27.44caee2d.js",
    "revision": "b6433046633cf5c937d11e240a3fa1ad"
  },
  {
    "url": "assets/js/3.fcdd8cd4.js",
    "revision": "44579cd3113fb4b86e5d9b52b90d20b9"
  },
  {
    "url": "assets/js/4.df5b59a0.js",
    "revision": "f41de66c12c8182ef997d7e02a7fec30"
  },
  {
    "url": "assets/js/5.4509af9c.js",
    "revision": "6a924dd61229ff1f0463f3b15748708b"
  },
  {
    "url": "assets/js/6.236fd29b.js",
    "revision": "bdf7924bf0c3b4e754a90a7c8f57b133"
  },
  {
    "url": "assets/js/7.d1dade13.js",
    "revision": "46e9b087db47dd1d00f1910e114995a1"
  },
  {
    "url": "assets/js/8.01a1e1a4.js",
    "revision": "9ab6422e544464044cf9c9ddd6af2edd"
  },
  {
    "url": "assets/js/9.4565f166.js",
    "revision": "66031d01cca7c90785582a3e0636696d"
  },
  {
    "url": "assets/js/app.b381dfa7.js",
    "revision": "4ff73558f2f5168e665520ec8d6948dd"
  },
  {
    "url": "bg.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "comments/index.html",
    "revision": "4d101af0ca64b2272418a556fd38cfb1"
  },
  {
    "url": "htmlcss/index.html",
    "revision": "8f8752d9a49f1d7b5933eb8d4122968b"
  },
  {
    "url": "htmlcss/interview-css.html",
    "revision": "14a6da51161f73cc593d3b2077744329"
  },
  {
    "url": "htmlcss/interview-html.html",
    "revision": "fdad1a556c99209d9e576bcff7eed6d7"
  },
  {
    "url": "icon.png",
    "revision": "f534e84891e22888ba57d450985d3c0a"
  },
  {
    "url": "index.html",
    "revision": "aa71fd0c8448246c96068d7dc8208b3b"
  },
  {
    "url": "javascript/index.html",
    "revision": "d76a0ea127c285adc33736b94cc4100d"
  },
  {
    "url": "others/index.html",
    "revision": "cb60c066d772d95a99c4a171ad883caf"
  },
  {
    "url": "others/interview-other.html",
    "revision": "342cca9b57f1c203bda19ceb133b80c7"
  },
  {
    "url": "others/nodejs.html",
    "revision": "6bcf9232ec2ff37d9117f57772e6e1fd"
  },
  {
    "url": "ua.js",
    "revision": "453a2405a08cf1352ac134e31aed8998"
  },
  {
    "url": "vue/components.html",
    "revision": "1628b93b99543701cf2986cc5e755ece"
  },
  {
    "url": "vue/index.html",
    "revision": "54cfcf5dd9e1c1ca4974201053133883"
  },
  {
    "url": "vue/interview.html",
    "revision": "0851ba5e53df69decce954303977998a"
  },
  {
    "url": "vue/native.html",
    "revision": "2025172f5302686046efd9a43e3ea0b2"
  },
  {
    "url": "vue/router.html",
    "revision": "fd7157c5fdbc529851ddcac34aeb6254"
  },
  {
    "url": "vue/vue-cli.html",
    "revision": "3c3c0311090e273bfb3ffa2424f75838"
  },
  {
    "url": "vue/vuex.html",
    "revision": "0a712cd0bf85eec630cdec2324b54713"
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
