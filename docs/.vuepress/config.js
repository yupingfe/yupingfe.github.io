const { defaultTheme } = require('vuepress');
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils');
const { default: pwaPlugin } = require('@vuepress/plugin-pwa');
const { default: searchPlugin } = require('@vuepress/plugin-search');


module.exports = {
  title: 'Yuping\'s Note',
  description: 'YUPING的学习笔记',
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
  theme: defaultTheme({
    navbar:[ // 导航栏配置
      {text: 'Home', link: '/' },
      {
        text: 'Notes', 
        link: '/notes/'
      },
      {text: 'Game', link: 'https://yupingfe.github.io/alpha-game'},      
      {text: 'Github', link: 'https://github.com/yupingfe'}      
    ],
    sidebarDepth: 2, // 侧边栏显示2级
    lastUpdated: true,
    contributors: false,
    editLink: true

  }),
  plugins: [
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, './components'),
    }),
    pwaPlugin(),
    searchPlugin()
  ]
};