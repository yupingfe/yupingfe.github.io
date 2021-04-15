(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{370:function(v,t,e){"use strict";e.r(t);var _=e(45),a=Object(_.a)({},(function(){var v=this,t=v.$createElement,e=v._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[v._v("#")]),v._v(" VUE")]),v._v(" "),e("ol",[e("li",[v._v("diff算法")])]),v._v(" "),e("h2",{attrs:{id:"vue实现数据式相应的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue实现数据式相应的原理"}},[v._v("#")]),v._v(" vue实现数据式相应的原理")]),v._v(" "),e("p",[v._v("vue实现数据双向绑定主要是：采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty() 来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty() 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。")]),v._v(" "),e("p",[v._v("vue的数据双向绑定 将MVVM作为数据绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化，通过Compile来解析编译模板指令（vue中是用来解析 {{}}），最终利用watcher搭起observer和Compile之间的通信桥梁，达到数据变化 —>视图更新；视图交互变化（input）—>数据model变更双向绑定效果。")]),v._v(" "),e("h2",{attrs:{id:"为什么组件的data必须是一个函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么组件的data必须是一个函数"}},[v._v("#")]),v._v(" 为什么组件的data必须是一个函数？")]),v._v(" "),e("p",[v._v("一个组件可能在很多地方使用，也就是会创建很多个实例，如果data是一个对象的话，对象是引用类型，一个实例修改了data会影响到其他实例，所以data必须使用函数，为每一个实例创建一个属于自己的data，使其同一个组件的不同实例互不影响。")]),v._v(" "),e("h2",{attrs:{id:"说说v-model的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说说v-model的原理"}},[v._v("#")]),v._v(" 说说v-model的原理")]),v._v(" "),e("p",[v._v('v-model是:value="msg"'),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/input",target:"_blank",rel:"noopener noreferrer"}},[v._v("@input"),e("OutboundLink")],1),v._v('="msg=$event.target.value"的语法糖')]),v._v(" "),e("h2",{attrs:{id:"ssr-服务器端渲染-是什么-优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssr-服务器端渲染-是什么-优势"}},[v._v("#")]),v._v(" SSR（服务器端渲染）是什么？优势？")]),v._v(" "),e("p",[v._v("在客户端请求服务器的时候，服务器到数据库中获取到相关的数据，并且在服务器内部将Vue组件渲染成HTML，并且将数据、HTML一并返回给客户端，这个在服务器将数据和组件转化为HTML的过程，叫做服务端渲染SSR。")]),v._v(" "),e("p",[v._v("而当客户端拿到服务器渲染的HTML和数据之后，由于数据已经有了，客户端不需要再一次请求数据，而只需要将数据同步到组件或者Vuex内部即可。除了数据意外，HTML也结构已经有了，客户端在渲染组件的时候，也只需要将HTML的DOM节点映射到Virtual DOM即可，不需要重新创建DOM节点，这个将数据和HTML同步的过程，又叫做客户端激活。")]),v._v(" "),e("p",[v._v("优势：")]),v._v(" "),e("p",[e("strong",[v._v("有利于SEO")]),v._v("：其实就是有利于爬虫来爬你的页面，因为部分页面爬虫是不支持执行JavaScript的，这种不支持执行JavaScript的爬虫抓取到的非SSR的页面会是一个空的HTML页面，而有了SSR以后，这些爬虫就可以获取到完整的HTML结构的数据，进而收录到搜索引擎中。\n"),e("strong",[v._v("白屏时间更短")]),v._v("：相对于客户端渲染，服务端渲染在浏览器请求URL之后已经得到了一个带有数据的HTML文本，浏览器只需要解析HTML，直接构建DOM树就可以。而客户端渲染，需要先得到一个空的HTML页面，这个时候页面已经进入白屏，之后还需要经过加载并执行 JavaScript、请求后端服务器获取数据、JavaScript 渲染页面几个过程才可以看到最后的页面。特别是在复杂应用中，由于需要加载 JavaScript 脚本，越是复杂的应用，需要加载的 JavaScript 脚本就越多、越大，这会导致应用的"),e("strong",[v._v("首屏加载时间非常长")]),v._v("，进而降低了体验感。")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("nuxt（一款基于vue的框架）")])]),v._v(" "),e("li",[e("p",[v._v("vuex描述一下？哪里用到？有啥好处？")])]),v._v(" "),e("li",[e("p",[v._v("extend和mixin的区别")])]),v._v(" "),e("li",[e("p",[v._v("vue循环遍历（v-for）是key的作用，以及使用时应注意什么")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("object.defineProperty")]),v._v("实现vue数据相应有什么缺点")])]),v._v(" "),e("li",[e("p",[v._v("生命周期钩子函数常用那些？一般这些钩子里会写什么？用最多的是那两个？")]),v._v(" "),e("ol",[e("li",[v._v("create和mount有啥区别")]),v._v(" "),e("li",[v._v("可以在create里面获取DOM属性吗？")])])]),v._v(" "),e("li",[e("p",[v._v("vue哪里监听不到函数的变化？")])]),v._v(" "),e("li",[e("p",[v._v("自己封装的函数有哪些？")]),v._v(" "),e("ol",[e("li",[v._v("axios")])])]),v._v(" "),e("li",[e("p",[v._v("用户授权？")])]),v._v(" "),e("li",[e("p",[v._v("vue中"),e("code",[v._v("nexttick")]),v._v("的作用？")])]),v._v(" "),e("li",[e("p",[v._v("导航守卫？")])]),v._v(" "),e("li",[e("p",[v._v("eventbus有什么用法？")])]),v._v(" "),e("li",[e("p",[v._v("todolist？")])]),v._v(" "),e("li",[e("p",[v._v("手写表单验证？")])]),v._v(" "),e("li",[e("p",[v._v("vue路由模式？history和hash模式？")]),v._v(" "),e("ol",[e("li",[v._v("使用history时页面刷新返回404，这时候应该怎么做？")])])]),v._v(" "),e("li",[e("p",[v._v("vue登录权限？")])]),v._v(" "),e("li",[e("p",[v._v("收藏的逻辑？")])]),v._v(" "),e("li",[e("p",[v._v("watch的用法？")])]),v._v(" "),e("li",[e("p",[v._v("用过什么css动画库")])])]),v._v(" "),e("p",[v._v("animate.css")])])}),[],!1,null,null,null);t.default=a.exports}}]);