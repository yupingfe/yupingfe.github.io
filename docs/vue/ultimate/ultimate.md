# 高级笔记
## 响应式（双向绑定）的原理

```html
<span id="title"></span>
<br>
<input type="text" value="" id="myinput">
```

```js
var obj = {}
obj.data = ''

Object.defineProperty(obj, '$data', {
  get () {
    return obj.data
  },
  set (value) {
    obj.data = value 
    setTitleTxt() // 拦截setter，让每次赋值时候自动操作DOM
  }
})
setTitleTxt()
// 根据model当中data的值，操作DOM设置title
function setTitleTxt () {
  document.querySelector('#title').innerHTML = obj.$data
  document.querySelector('#myinput').value = obj.$data
}
// 监听input的值改变并将其赋值给model当中的data
function getInputTxt () {
  document.querySelector('#myinput').addEventListener('keyup', function () {
    obj.$data = this.value
  })
}
getInputTxt()
```

Vue2用到`defineProperty`，因此只能在IE8 (9)以上使用

Vue3当中使用的是Proxy对象

## 差值表达式和指令

差值表达式` {{}}`

### V-html v-if v-for v-show v-bind

`v-html`可以用来渲染html字符串，双引号内的内容是JS表达式

`<p v-html="hello world">`

`v-if` `v-else` 元素不渲染，不适用频繁切换的元素，消耗性能。

`v-show` 元素渲染，但`display:none`，适用于频繁切换的元素。

`v-bind`绑定标签上的属性为data里的数据imgsrc`v-bind:src="imgsrc"`，简写为**冒号**。

`v-for="(n, i) in array"` `{{i}} : {{n}}`可以渲染数组索引和值

`v-for="(value, key, index) in obj"``{{index}} : {{key}} : {{value}}`遍历对象和值

`:key`绑定`v-for`循环的id属性：`:key="person-${id}"` key属性是为了vue将来修改DOM元素的时候更方便高效。在项目当中写一定要写`:key`

### 绑定Class

可以进行判断

`:class="isTrue ? Green : Red"`



可以用来绑定数组，值会一一渲染，加引号直接渲染类名，不加引号渲染数据当中的类名，也可以是JS表达式。

`:class="['text', status, isTrue ? Green : Red]"`



可以绑定对象，isSucc为true才渲染，否则就不渲染

`"class={ success: isSucc }"`



绑定的属性和原生class可以共存

### v-cloak v-pre v-once

如果网页比较复杂，页面加载慢，vue可能需要一定时间才能实例化，因此页面上会看到双括号差值表达式。

`v-cloak`会出现在vue实例化之前，因此可以配合CSS属性选择器来隐藏未渲染的模版字符串。

```css
[v-cloak] { display: none}  /* 中括号为属性选择器 */
```

`v-pre`标签的元素都不会被vue编译，适用于一个元素内部没有任何需要编译的指令和语法，提高渲染效率。

`v-once`DOM只会初始渲染一次，不会响应式改变。

### v-on以及事件对象

`v-on:click="isShow = true"`

可以简写为@`@click`

配合methods里的方法来写事件。

```js
methods: {
  handleBtnClick () {
    this.isShow = false
  }
}
```

绑定事件的时事件函数不加括号，事件函数参数为e，如果加了括号，那么事件函数参数为自己穿的值，如果二者都需要，那么传递`$event`

事件函数绑定的方式不同，但vue做了处理，this全部指向vue实例

```js
@click="handleBtnClick" // 此时事件处理函数接受的形参为e
@click="handleBtnClick(btn.id)" // 此时穿的为自己的值
@click="handleBtnClick(btn.id, $event)" // 此时二者都有
```

### V-model

v-model可以实现数据双向绑定。

#### 原理：input事件

通过v-bind绑定data当中的值，然后再通过v-on 添加监听keyup事件来改变data当中的值，实现双向绑定。

```html
<div id="app">
  <input type="text" :value="value" @keyup="inputHandler">
  {{value}}
</div>
```

```js
const app = new Vue({
  el: '#app',
  data: {
    value: 'hello world'
  },
  methods: {
    inputHandler (e) {
      this.value = e.target.value
    }
  }
})
```

多个`checkbox v-model写成一样就多选`

## 修饰符（modifier）

### 事件修饰符

`.stop`  调用`event.stopPropagation()`阻止事件冒泡

`.prevent` 调用`event.preventDefault()`阻止默认行为

​	 `@contextmenu.prevent` 阻止右键弹出菜单

`.capture` 添加监听时使用捕获模式

`.self` 只有自己可以触发，子元素不触发（子元素不会冒泡到父级别）

`.once` 只触发一次

`.keycode` 根据按键触发

​	 `@keyup.enter="handleInput"`只有按下回车才会触发

### v-model修饰符

`.lazy` 取代input监听change事件

`.number` 输入字符串转为有效数字

`.trim` 输入首尾空格过滤

## 例子：TODO- LIST

**需求：**实现待办事项新增、删除、切换是否完成

**项目逻辑：**

1. 将todos渲染到页面：
   1. 使用Bulma搭建静态页面
   2. 在data当中创建一个数组todos，存储todo对象，包括`{id, content, isDone}`
   3. 通过`v-for`和模版字符串，将todos数组渲染到页面

2. 给按钮添加事件
   1. 切换：通过传递点击事件的id值，利用数组的map方法，修改指定id的todo项isDone的值
   2. 删除：通过传递点击事件的id值，利用数组filter方法，过滤掉等于点击id的todo项
3. input新增事项
   1. 通过`v-model`给`input`框绑定绑定data数据`newTodo`(双向绑定)
   2. 给新增按钮添加点击和键盘事件（@keyup.enter），将`newTodo`的数据增加id，isdone组成对象`unshift`到数组中。
   3. 判断是否为空和重复
   4. input在事件后清空、并通过`$refs`重新获得焦点

## 计算属性、监听属性

计算属性：依赖已有的数据计算出新的属性，和data一样直接使用即可

计算属性可以互相依赖。

计算属性有**依赖缓存**：计算属性所依赖的值如果没有变化，那么不会重新计算，直接使用上次计算出的结果。

```js
computed: {
  name() {
    return this.firstName + this.lastName
  }
}
```

监听属性：监听已有数据的状态改变

**watch在项目中要慎用，会导致项目数据之间关联性增强，容易导致逻辑混乱。**

```js
watch: {
  firstName(new, old) {
    console.log(new, old) // 这里能够得到新更改的和之前未更改的firstName值
    this.name = new + this.lastName
  }
}
```

## filters 过滤器

根据原始数据在页面上做一些更符合用户习惯的显示。

通过在差值表达式中添加`|`来增加filter，可以重复增加

```html
{{ price｜ toFix2 }}
```

```js
filters: {
  toFix2(v) {
    return v.toFixed(2)  // 保留两位小数
  }
}
```

## 组件

组件可以实现复用

### 定义组件

组件都是用对象来定义的，组件对象使用大驼峰，组件名称使用全小写加`-`连接

`const HelloWorld = { template: '<div>hello world</div>'}`

### 注册组件

全局注册：`Vue.component('hello-world', HelloWorld)`

局部注册：

```js
const App = new Vue({
  el: '#app',
  components: { HelloWorld } // 局部注册的组件仅当前实例可以使用
})
```

### 使用组件

在html里写组件名的自定义标签，自定义标签本身不会渲染，渲染的是里面的内容

```html
<hello-world></hello-world>
<hello-world></hello-world>
<HelloWorld /> <!-- 可以直接写成单闭合大驼峰标签，webpack会进行转换 -->
```

### 组件的数据

定义组件的对象里面也具有vue实例除el以外的所有选项（el替换成template）

```js
const HelloWorld = {
  template: '<div>hello world {{msg}} </div>',
  data() {
    return {
      msg: 'my message!'
    }
  },
  computed: {},
  methods: {}
}
```

### 嵌套组件

组件是可以进行嵌套的，组件对象当中可以继续写components，实现嵌套

```js
const SonCom = {
  template: '<div>sonCom</div>'
}
const FatherCom = {
  template: '<div>hello world <son-com /></div>',
  data() {
    return {
      msg: 'my message!'
    }
  },
  components: { SonCom }
}
```

### 通过template定义组件结构

此外组件的内容还可以通过在html中通过`template`标签来定义，然后通过`id`来区分

**注意template必须被一个DIV包裹！**

```html
<template id="compoent1">
  <div>
  	hello {{msg}}
  </div>
</template>
<component1 />
```

```js
const Component1 = {
  template: '#compoent1',
  data() {
    return {
      msg:"component1"
    }
  }
}
```

### 具名插槽slot

具名插槽：定义组件的时候，在模版当中写`<slot name='price'> </slot>`，在实际使用该模版的时候，传入带有slot属性的html标签。

```html
<template id="my-com">
  <div>
    hello <slot name="person1"></slot>
  	hello <slot name="person2"></slot>
  </div>
</template>

<my-com>
	<span slot="person">CYAN</span>
  <p slot="person">ZHANG</p>
</my-com>

```

## 组件通信

### 父子通信(Props)

#### 父传子

在写子组件的标签`<son-com>`的时候，加上相应的属性。子组件内写一个数组`props`，然后就可以在template差值表达式当中使用了。

**注意：props和data的用法一样，因此二者的值不能重复。**

```html
<son-com :id="shop.id"></son-com>
<template id="son-com">{{id}}</template> <!-- 模版中直接使用 --!>
```

```js
const SonCom = {
  template: "#son-com",
  props: [id] // 接收父组件传递过来的shop.id
}
```

子组件的props属性可以是一个字符串数组，也可以是一个对象，对props的类型进行验证。

```js
props: {
  name: String, // 规定必须为字符串
    id: {
      type: Number, // 规定id的类型必须为数字
      required: true, // 规定必须传递
      default: Math.ramdom(), // 规定如果没有传递的默认值
    }
}
```

**注意：传递参数的时候命名，由于HTML不识别大小写，因此传递的属性名要是用小写加连字符**

`:father-msg="fatherMsg"` 子组件接收的时候用小驼峰 `props: ['fatherMsg']`

#### 子传父

**注意：props的值子组件不能修改（单向数据流）**

子组件创建、父组件监听

1. 子组件的方法当中创建一个`this.$emit(‘father-listener', param)`方法，并传递想要传给父元素的数据。
2. 在子组件的标签上，监听`@father-listener="fatherMethod"`并创建`fatherMethod`方法，当事件触发后会执行父元素上的方法，并可以接受子元素传过来的参数。

```html
<div id="app">
  <son-com :count="count" @son-add="fatherAdd"></son-com> <!-- 父上监听son-add，并触发父上的方法fatherAdd !-->
</div>

<!-- 子元素的模版 !-->
<template id="son-com">
  <div>
    hello, the number is {{count}}
    <button @click="addhandler()">add1</button>
    <button @click="addhandler(2)">add2</button>
  </div>
</template>
```

```js
const SonCom = { // 创建子元素
  template: "#son-com",
  props: ['count'],
  methods: {
    addhandler (param = 1) { // 子元素的父元素出发方法
      this.$emit('son-add', param) // 触发父元素上的监听器son-add，并传递参数param
    }
  }
}
const App = new Vue ({
  el: '#app',
  data() {
    return {
      count: 1
    }
  },
  components: {
    SonCom
  },
  methods: {
    fatherAdd(param) {
      this.count = this.count + param
    }
  }
})
```

## 兄弟通信（eventBus）

兄弟组件之间的通信使用eventBus

1. 创建一个空的vue实例 `const bus = new Vue()。`
2. 在其中一个组件中使用`bus.$emit('action', {key: value})`触发事件，并传递参数。
3. 在另一个组件当中使用`bus.$on('action', (param)=> {console.log(param)})`接收监听这个事件，并接受传递的数据。

## 动态组件和语义化组件



## 生命周期钩子函数

```js
// 创建vue实例
beforeCreate() // 这里拿不到data DOM元素 $el
created() // 此时vue实例已经创建好了，data可以拿到，但DOM元素拿不到，可以在这里发送Ajax请求
// 挂载DOM
beforeMount() // 
mounted() // 这里DOM已经完成渲染，可以拿到了
// 更新
beforeUpdate()
updated()
// 销毁
beforeDestroy() // 移除事件定时器，监听
destroyed() // 没啥用
```



## Vue CLI

### 安装

```shell
npm install -g @vue/cli
yarn global add @vue/cli
```

### 创建项目

```shell
vue create my-project #项目名称不能大写
```

```bash
winpty vue.cmd create my-project #win下面交互提示符不工作，需要这样执行。 或者用powershell
```

代码规范选择：esLint + Standard config

**下一行仅用eslint：在注释当中写`eslint-disable-next-line`**

安装Vuter 代码高亮

vue-cli*(commond line*)基于webpack

配置start命令 "start": `"vue-cli-service serve"`

**SPA (single page application)：**跳转时候不会请求html文件，减少服务器开销，跳转效率更高，根据ajax请求的数据来实现。

### 样式的书写

#### css作用域

可以在组件内部的style中加入scoped标签，*scoped*是CSS的作用域。

添加scope后，vue会给标签添加自定义属性：`data-v-xxx`,样式只在当前组件生效。

#### BULMA

安装：`yarn add bulma`

引入：全局使用，*main.js*文件当中引入：`import 'bulma/css/bulma.css`

#### SaSS

安装： `yarn add sass-loader sass`

使用：在style中加入`lang='scss'`

```scss
<style scoped lang='scss'>
p {
   color:red;
    a {
        font-size:16px;
    }
}
</style>
```

### AJAX请求的配置

***AJAX Asynchronous JavaScript and XML***

##### 封装request

1. 新建request目录,index.js，将所有的请求都放在这里

   ```javascript
   import axios from 'axios' //导入axios
   const ajax = axios.create({baseURL:'http://www.xiongmaoyouxuan.com.api'})
   
   // 封装项目的ajax请求，把get请求得到的promise return
   const getTabs = () => ajax.get('/tabs')
   // 到处对象
   export default {
       getTabs
   }
   ```

   

3. 在main.js上全局引入，并将其绑定在Vue的原型上，这样所有的组件都可以使用
   
   ```javascript
   //main.js 全局引入
   import request from './request'
   //绑定在原型上
Vue.prototype.$http = request
   ```

   
   
4. 通常在生命周期创建阶段发送ajax请求
   
   ```js
   
   // app.vue当中在生命周期create当中调用
   create{
   	this.$http.getTabs('/tabs')
   }
   ```

##### 请求拦截

请求拦截一般说是发送token字符串

```js
ajax.interceptors.request.use(config => {
    // 发送给后端token
    config.headers.token = 'bakabaka'
    return config
})
```

##### 响应拦截

```js
ajax.interceptors.response.use((resp) => {
    if (resp.status === 200) {
        if (resp.data.code === 200) {
            return resp.data.data
        }else {
            return {
                code: resp.data.code
                msg:'请求失败'
            }
        }
    }else {
        return {
            status: resp.status,
            msg: '请求失败'
        }
    }
})
```

## 前后端交互：fetch和axios

### Fetch

JS原生支持的一种发送数据的方式，ES6新增，跟vue没有关系，用的不多。

接口网站：[{JSON} PlaceHolder}](https://jsonplaceholder.typicode.com)

```js
function sendMsg () {
    fetch('request url').then(resp => resp.json()) //这里得到的是封装过的resp，需要通过json方法解析。
    					.then(resp => {
        					console.log(resp)
    })
}
```

### Axios

### 拦截器

请求或相应拦截器：可以用来做loading...

[AXIOS官网](axios-js.com)

## Vue Router

### 基本设置

`yarn install vue-router`

```js
// main.js 
import router from './router' //引入
new vue({
    router, //挂载到vue实例
    render:h => h(App)
}).mount('#app')
```

```js
// router/index.js
// 引入vue和router
import vue from 'vue' 
import VueRouter from 'vue-router' 
// 引入views
import Home from './views/Home.vue'
//vue使用router
Vue.use(VueRouter)
// 创建路由表
const routes = [
    {
        path:'/'
        name:'Home'
        component: Home
    }
]
// 导出
const router = new VueRouter({routes})
export default router
```

```vue
// App.vue
<template>
<router-link to="/" 
             tag="li"
             :event="type === 1 ? 'click : ''"
             >Home</router-link>
<router-view />
</template>
```

`tag="li"`标签添加**tag属性**可以更改成别的标签，t通过点击事件（自动）跳转，默认为a标签。

`:event` 可以绑定event时间来实现是否通过click事件出发跳转

#### 动态路由和嵌套路由

```js
{
    path: '/products',
    name: 'Products',
    component: Products,
    children: [
        {
            path: ':type',
            name: 'Products',
            component: Catagory
        }
    ]
}
```



#### 激活路由的CSS样式设置

`.router-link-exact-active .router-link-active`

首页当中添加exact：指的是必须路由完全匹配才激活。

### 编程式导航

`router.push(location, onComplete?, onAbort)`

```html
<ul>
    <li @click="toManRoute">man</li>
    <li @click="toWomanRoute">woman</li>
</ul>
```

```js
methods: {
     toManRoute () {
         // 参数写完整的路由path
    	this.$router.push('/products/man?id=3')
	},
     toWomanRoute() {
         // push一个对象，name写compoent
         this.$router.push({ name: 'Catagory', params: {type: 'woman'}, query: {id: 3}})
     }
}
```

`router.replace()`用法同push，直接替换当前页面，不会替换掉**历史记录**，用于**权限验证登录**。

push、replace是对H5新增BOM方法`history.pushState() .replaceState()`的封装。不会导致服务器响应

`router.go(n)``router.back(n)`沿着历史记录前进或后退，类似`window.history.go(n)`

### 命名视图

给标签添加名称：`<router-view name="my-footer">`

在路由表中将component修改为components

```js
{
    path: '/todos',
    name: 'Todos',
    compoments:{ // 这里要加s
        default: Todos,
        'my-footer': myFooter // 指向import引入的组件
    }
}
```



### 重定向和别名

 ```js
const routes = {
	{
		path:'/',
    	name: 'Home'
		redirect: '/home' // 重定向
    	alias: '/index' //  别名
	}
}
 ```

### 路由传参

 隐式传参

```html
<-- 路由跳转的时候可以传递除了routes配置意外的其他param,用户看不到 -->
<router-link
	:to={
           name: 'Category',
           params: { type: 'woman', sort: 1 }
             }
           query: { id: 3 }
>
```

### 路由历史模式

项目上线更多会使用历史模式，后端需要做一些额外的配置。

```js
const router = new VueRouter({
    mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash', // node.js的一种写法，判断当前是产品还是开发环境，自动切换history、hash模式
    routes
})
```



### 导航守卫

对路由做拦截、处理和解析。

路由元信息Meta

#### 全局前置守卫

```js
// router/index.js
const routes = {
    {
    	path: '/todos',
    	name: 'todos',
    	component: Todos,
    	meta: {
    		isAuthRequired: true // 在此添加是否需要拦截
		}
	}
}
var isLogin = false;
router.beforeEach((to, from, next) => {
    console.log ({ to, from, next }) // 有路由起点，去向等信息
    if (to.meta.isAuthRequired) {
        // 目标权限验证，根据isLogin
        if (isLogin) {
            next() // 此方法导航守卫放行
        } else {
        	next('/login') // next可以传递参数，重定向到指定的验证界面
    } else {
        next()
    }
})
```

此外还有 `router.afterEach()` 在跳转之后出发，几乎用不到

#### 局部前置守卫

```js
beforeRouteEnter (to, from, next) {
    // 当前路由在进入之前的守卫
    // 因为这里是进入路由之前，因此不能用this
    console.log(this) // undefined
    next( vm => { console.log(vm) }) // 通过vm来获取当前vue实例
}
```

```js
beforeRouteUpdate (to, from, next) {
    // 当组件路由发生变化的时候进入守卫
    this.type = to.params.type
    next()
}
```

```js
// 在离开之前执行，禁止用户未保存离开
beforeRouteLeave (to, from, next) {
    const answer = window.confirm('您有未保存改变，真的要离开吗?')
    answer? next() : next(false)
}
```

### 路由懒加载 (LazyLoad)

异步加载，一开始加载全部数据量大。

```js
const Todos = () => import(/* webpackChunkName:"group-foo" */'@components/Todos') // webpackChunkName这里注释然后分组加载
const Detail = () => import(/* webpackChunkName:"group-bar" */'@components/Detail')
```

## Vuex

Vuex的设计模式是**单例模式**。相当于react当中的redux。

![vuex](https://vuex.vuejs.org/vuex.png)

### 基本语法

```js
export default new Vuex.Store({
  state: {
      /* 这里写需要全局管理的状态（数据） */
      count: 0,
      name: 'Cyan'
  },
  mutations: {
       /* 所有需要修改state的方法，这里只能写同步代码 */
      addCount (state, n = 1) {
          state.count += n // 这里可以提交一个参数n（提交载荷）
      }
  },
  getters: {
       /* 基于state得到的一些新数据， 计算总价数量等等 */
      doubleCount (state) {
          return state.count * 2 
      } 
  }
  actions: {
       /* 负责提交mutation，相当于一个中转站，一般在异步修改的使用 */
    	addCountAsync (context) {
    	//	context就是整个当前store
    		setTimeout(() => {
                context.commit('addCount')
            }, 1000)
}
  },
  modules: {
       /* 在一些大型应用里会把vuex分模块 */
  }
})
```

```js
import {
    mapState,
    mapMutations,
    mapGetters,
    mapActions
} from 'vuex'  // 导入映射方法

computed: {
    count () {
        return this.$store.state.count
    }
    ...mapState(['count, name']) // 在template当中可以用count和name
    ...mapGetters(['doubleCount'])
},
methods: {
    addCount () {
        this.$store.commit('addCount') // 会调用mutations当中的addCount方法，进而改变count的值
    }
    ...mapMuatations(['addCount']) // 同步操作
    //这个addCount就是再监听当中需要绑定的函数名
    ...mapActions(['addCountAsync']) // 异步操作
    
}
```

#### tips：为什么mutation不能提交异步？

​	devtool当中会有mutation日志。每一条mutation被记录。devtools都需要捕捉到前一状态和后一状态的快照。**任何在回调函数中进行的状态的改变都是不可能追踪的。**因此devtools不知道什么时候回调函数被调用,因此无法追踪。

### 严格模式

```js
const store = new vuex.store({
    // ...
    strict: true
    strict: process.env.NODE_ENV === 'development'
    // vuex严格模式一般在开发中使用，严格模式下，mutation当中的异步操作会报错
})
```

### input双向绑定

来自vuex的state再组件不能使用*v-model*，会报错！需要通过绑定事件的方式来实现。

使用 :value和@input事件结合，提交mutation来修改state

`<input type="text" :value="name" @input="changeName($event.target.value)">`

## PC端：ElementUI

[Element - 网站快速成型工具](https://element.eleme.cn/#/zh-CN) PC端UI库 饿了么出品

breadcrumb 面包屑导航

## Mobile端：MintUI VantUI

[Mint UI (mint-ui.github.io)](https://mint-ui.github.io/#!/zh-cn) [VantUI](https://youzan.github.io/vant/#/zh-CN/)

导入方式：按需导入、全部导入

```js
import vant from 'vant'
import 'vant/lib/index.css'
vue.use(vant)
```

## 代理跨域问题

在Vue CLi当中可以设置代理跨域

项目新建配置文件`vue.config.js`

```js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>', // 以/api的代理到指定目标
        ws: true, // websocket
        changeOrigin: true
      }
    }
  }
}
```

## 配置axios

首先配置代理跨域

```js
// request index.js
import axios from 'axios'
const ajax = axios.create({
    baseURL: '/api'
})
// 导出多个对象
export const getCatagory = id => ajax.get(`/tab/${id}`)
```

```js
// 引入多个对象语法，会把所有的属性和方法放入'ajax'
import * as ajax from './request'
// 把ajax方法放到原型上，这样都可以使用
vue.prototype.$http = ajax
```

### 例子：加载提示

```js
// 因为axios的request不在组件内部，因此需要引入
import { toast } from 'vant'
ajax.interceptors.request.use(config => {
    toast('提示内容')
    return config
})
ajax.interceptors.response.use(config => {
    toast.clear()
    if (resp.status === 200) {
        // ...
    }
})
```

### 例子： 轮播图

`yarn add swiper`

```js
import Swiper from 'swiper'
import 'swiper/swiper.scss'
// ...
methods: {
    initSwiper () {
        // eslint-disable-next-line
        new Swiper()
    }
},
created () {
    this.$http.getCatagory(1).then(resp => {
        this.banners = resp.banners
        // 注意swiper要写在`this.$nextTick().then()`当中，因为DOM渲染是异步的，nextTick指的是下一次DOM更新完成后执行。
        this.$nextTick().then(() => {
            this.initSwiper()
        })
    })
}
```

```html

<div v-for="banner in banners" :key="banner-${banner.id}"></div>
```

### Bug：商城默认跳转问题

切换footer选项卡后，没有数据。

解决方法：在created函数获取数据后，通过router.push方法跳转。

<img src="C:\Users\zhANG\AppData\Roaming\Typora\typora-user-images\image-20201128123524207.png" alt="image-20201128123524207" style="zoom: 50%;" />

```js
const { id } = this.$route.params
if (id) {
    // 如果id已经存在，说明是刷新，不跳转，修改sidebar的index
    this.tabs.forEach((tab, index) => {
        if (tab.id === parseInt(id)) this.cateIndex = index
    })
} else {
    // id不存在说明是从别的组件跳转，进行重定向
    this.$router.push(`/shop/${this.tabs[0].id}`)
}
```

数据处理要扁平化

### Tips:三种连接数组的方法

```js
arr1 = arr1.push(...arr2)
arr3 = arr1.concat(arr2)
arr3 = [...arr1, ...arr2]
```

### 例子：详情页制作思路

1. 新建详情页view，配置路由
2. 列表页标签改成`<router-view tag="div"/>`进行跳转
3.  router-view当中跳转带上id
4. detail页面id可以通过`this.$route.query`获取
5. request当中写请求，根据id从接口获取详情信息`detail?id=xxxxx`
6. 搭建detail静态页面
   1. vant-swiper轮播图

### 例子：购物车逻辑

1. 搭建静态购物车页面
   1. vant当中的步进器制作数量加减 
   2. vant SwipeCell制作右滑删除，del需要添加样式
   3. SubmitBar制作底部提交订单和全选按钮 

#### tips：自定义checkbox

```html
<label>
<input type="checkbox"></input>
<span></span>
</label>
```

```scss
input{
    display: none;
    + span {
        display: block;
        width: 20px;
        height: 20px;
        position: relative;
        border: 1px solid #999;
        border-radius: 50%;
        }
        &:checked + span {
            background-color: #1989fa;
            border-color: #1989fa;
            &::after{
                content: '';
                position: absolute;
                top: 2px;
                left: 2px;
                width: 8px;
                height: 4px;
                border:2px solid #fff;
                border-width: 0 0 2px 2px;
                transform: rotate(-45deg)  
        }
    }
}
```

## 例子：购物车数据逻辑

1. 因为Vuex刷新数据会刷新，因此需要用到localStorage来存储

2. store当中把state、mutation等分成单个文件。

3. state当中要从localStorage当中取出数据

   `cart: Json.parse(localStorage.getItem('cart') || [])`

   通过 || 或运算符，如果有LS有数据就取，否则就是空数

4. 为了实现vuex和localStorage同步，vuex提供一个插件选项可以使用。

   ### 用插件实现Vuex和localStorage数据同步

   ```js
   const cartPlugin = store => {
       store.subscribe((mutation, state) => {
           // 每当有mutation被提交，就会执行这个方法
           // 把state.cart 存入 LS
           localStorage.setItem('cart', JSON.stringtify(state.cart))
       })
   }
   export defalut new Store ({
       plugins: [cartPlugin], // 导出这个插件
       state,
       mutations
   })
   ```

5. ```js
   // 注意这里的第二个参数payload是一个对象，在这里结构出来，这样更加语义化
   addToCart (state, { detail }) {
   	// 添加购物车
   	// 先判断购物车当中是否存在该条
   	const isExist = state.cart.some(shop => shop.id === detail.id)
       // 如果存在，count计数增加
   	if (isExist) {
   		state.cart = state.cart.map(item => {
   			if (item.id === detail.id) item.count++
   			return item
   		})
   	} else { // 如果不存在，push进入，并添加count和check状态
   		state.cart.push({
   		...detail,
   		count: 1, 
   		check: true
   		})
   	}
   }
   ```

6. 静态页面渲染数据

   1. 分离cartItem组件
   2. 通过mapState传递vuex中的数据

   3. 根据vuex当中的getters总价、全选的计算

   ```js
   getters.js
   	export default {
           // 从state当中直接结构cart
           totalMoney ({ cart }, getters) {
               cart.reduce((money,shop) => {
                 if (shop.check) {
                    money += shop.price * shop.count
                 }
                 return money
           	}, 0)
       	},
           isAllCheck ({ cart }) {
               return cart.every(shop => shop.check)
           }
       }
   ```

   4. 注意：只要是来自vuex的数据就不能用vmodel，checked、stepper需要通过事件修改
      1. 给checkbox写自定义事件 `@change="toggleCheck"`
      2. 这个自定义事件会提交一个mutation，更改vuex当中cart中指定的checked属性


### 知识点：全局混入mixin

​	例子：购物车的数量图标、价格全部显示两位小数，多个地方都需要。

```js
Vue.mixin({
    filters: {
        greaterThan99 (v) {
            return v > 99 ? '99+' : v
        },
        toFix2 (v) {
            return v.toFixed(2)
        }
    }
})
```

```js
// filter的使用方法
{{cart.NotificationNum | greaterThan99}}
```

### bug: 商城nav图标不高亮

<img src="C:\Users\zhANG\AppData\Roaming\Typora\typora-user-images\image-20201206124113124.png" alt="image-20201206124113124" style="zoom:50%;" />

```js
<van-tabbar route v-model="tabIndex">
      <van-tabbar-item
        :icon="nav.meta.icon"
        :to="nav.meta.to"
        v-for="(nav, index) in navs" // 这里可以提取index
        :key="nav.name"
        :class="{'van-tabbar-item--active' : index === tabIndex}" // 绑定active class的属性，当v-for的index与tabIndex相等时，加上高亮的class
	  >
```

bug: 商城nav图标刷新归位的问题

问题原因：tabIndex默认为0，因此要在created的时候加一个判断。

```js
this.tabbars.forEach((tab, index) => {
    if (tab.path === '/' + this.$route.path.split('/')[1]) {
        this.tabIndex = index
    }
})
```

Tips: keep-alive 避免重复加载

```js
<div class="main">
<keep-alive include="Home">
    <router-view /> // 把需要keep-alive的标签包起来
</keep-alive> 

```

注意：当组件使用keep-alive之后会使用`activated`和`deactivated`两生命周期

### 知识点：rem适配

组件可以自动对pixel单位转rem

1. 安装两个插件：`yarn add postcss-pxtorem amfe-flexible`

2. vue.config.js当中配置

   ```js
   const pxtorem = require('postcss-pxtorem')
   css: {
       loaderOptions: {
           postcss: {
               plugins: [
                   autoprefixer(),
                   pxtorem({
                       rootValue: 37.5, // 这个值为转换的root单位，根据设备进行更改。
                       propList:['*', '!font*'], // 可以配置不转换某些属性，如font-size，此处为全部转换。
                       selectorBlackList: ['van'] // 排除过滤器中带有‘vant’字样的
                   })
               ]
           }
       }
   }
   ```

3. 项目main.js当中引入：`import 'amfe-flexible'`

## 例子：用户登录逻辑



1. 通过vant搭建静态页面，然后在路由当中进行配置。

2. request当中写一个promise`(export login)`来模拟后端拿到数据`data: username, avatarUrl, token`

   ### tips: modules的命名空间

   ​	默认情况下,模块内部是注册全局的，但也可以单独命名，命名与在modules当中注册组件的名称相同

```js
// modules/user.js
import { login } from '@/request'
export default {
    namespaced: true, // 启用命名空间
    state: {
        username: '',
        avatarUrl: '',
        token: '',
    },
    getters: {},
    mutations: {
    	// 登陆成功状态
        LOGIN_SUCESS(state, { username, avatarUrl, token }) {
            state.username = username
            state.avatarUrl = avatarUrl
            state.token = token
        }
    },
    actions: {
        // 异步登录
        LoginAsync (context, { username, password }) {
            return login(username, password).then (res => {
                const { username, avatarUrl, token } = res.data
                // 提交mutation
                store.commit('LOGIN_SUCESS', { username, avatarUrl token })
                return { status: 200 } // promise会返回状态码
            }).catch(err => {console.log('异常：', err)})
        }
    }
}
```

```js
// store/index.js
import user from './modules/user.js' // 引入用户登录模块
export default new Vuex.Store({
  // ...
  modules: { user }
})
```

```js
// login.js
import { mapActions } from 'vuex'
methods: {
    ...mapActions(['loginAsync'])
    ...mapActions('user',['loginAsync']), // 这样先写上命名空间，再传递既可
    onSubmit (e) {
        // 掉用 store 当中的 action 方法,实现登录
        this.$store.dispatch('user/loginAsync', e)  // 这里有命名空间user
        this['user/loginAsync'](e) // 这种写法不好
        this.loginAsync(e).then(res => {
            if (res.status === 200) {
                // 登陆成功
                this.$router.push('/my')
            }
        })
    }
}
```

```js
// router 根据用户登录设置路由守卫。
router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.isLogin) {
        if (store.state.user.token) {
            next()
        }else {
            next({ name:'Login', params: { to } })
        }
    }else {
        next()
    }
})
```

```js
// 针对mutation更新自动存入LocalStorage的逻辑要进行修改
// 因为现在有两种：购物车和登录需要监听mutation修改
// 状态数据持久化
const cartPlugin = store => {
    store.subscribe((mutation, state) => {
        switch (mutation.type) {
            case 'user/LOGIN_SUCCESS':
                localStorage.setItem('token', state.user.token)
            // ...
        }
    })
}
```

