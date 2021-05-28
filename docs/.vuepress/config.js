const moment = require('moment');
module.exports = {
  title: 'Cyan\'s note',
  description: 'cyan的技术博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/icon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#282b35' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  serviceWorker: true,
  themeConfig: {
    smoothScroll: true,
    nav:[ // 导航栏配置
      {text: 'Home', link: '/' },
      {
        text: 'HTML&CSS', 
        link: '/htmlcss/'
      },
      {
        text: 'JavaScript', 
        link: '/javascript/'
      },
      {
        text: 'Vue', 
        link: '/vue/' 
      },
      {
        text: 'Others', 
        link: '/others/'
      },
      {
        text: 'Comments', 
        link: '/comments/'
      },
      {text: 'Github', link: 'https://github.com/zoutianwei'}      
    ],
    sidebar: {
      '/htmlcss/': [
        '',
        'interview-html',
        'interview-css'
      ],
      '/javascript/': [
        '',
      ],
      '/vue/': [
        '',
        'native',
        'components',
        'vue-cli',
        'router',
        'vuex',
        'interview'
      ],
      '/others/': [
        '',
        'nodejs',
        'interview-other',
      ]
    }, // 侧边栏配置
    sidebarDepth: 1, // 侧边栏显示2级
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false,
    lastUpdated: '最后更新', // string | boolean
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale('zh-CN')
          return moment(timestamp).fromNow()
        }
      }
    ],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
  }],
  ]
};