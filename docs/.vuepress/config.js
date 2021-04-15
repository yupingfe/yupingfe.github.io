module.exports = {
  title: 'Cyan\'s note',
  description: 'cyan的技术博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
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
      {text: 'Github', link: 'https://github.com/zoutianwei'}      
    ],
    sidebar: {
      '/htmlcss/': [
        '',
        'css'
      ],
      '/javascript/': [
        '',
        'inherit'
      ],
      '/vue/': [
        '',
        'native',
        'components',
        'vue-cli',
        'router',
        'vuex'
      ],
      '/others/': [
        '',
        'nodejs',
        'interview-html',
        'interview-css',
        'interview-js',
        'interview-vue',
        'interview-other',
      ]
    }, // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  }
};