# Vue Router

## 基本设置

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

### 动态路由和嵌套路由

一个“路径参数”使用冒号 `:` 标记。当匹配到一个路由时，参数值会被设置到 `this.$route.params`，可以在每个组件内使用。

```js
{
    path: '/products',
    name: 'Products',
    component: Products,
    children: [
        {
            path: ':type', // 这里就是动态路由
            name: 'Products',
            component: Catagory
        }
    ]
}
```

老方法：通过`watch()`监听`$route(to, from)`的变化，进而在子路由的组件当中做出相应。

### 激活路由的CSS样式设置

`.router-link-exact-active .router-link-active`

首页当中添加exact：指的是必须路由完全匹配才激活。

## 编程式导航

`this.$router.push(location, onComplete?, onAbort)`

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

## 命名视图

给标签添加名称：`<router-view name="my-footer">`

在路由表中将component修改为components

```js
{
    path: '/todos',
    name: 'Todos',
    compoments:{ // 这里要加s
        'default': Todos,
        'my-footer': myFooter // 指向import引入的组件
    }
}
```



## 重定向和别名

 ```js
const routes = {
	{
		path:'/',
		redirect: '/login' // 访问/，跳转/login
	},
  {
    path: '/login',
    name: "Login",
    component: Login,
    alias: '/signin' //  别名,指的这个名字也可以到
  }
}
 ```

## 制作404页面

将path设置成为*写在路由表的最后面，可以匹配任意路径到指定组件。

可以用来制作404页面

```js
{
    path: '*',
    component: NotFound,
  }
```



## 路由传参

### 显式穿参

:params 会显示在地址栏上

###  隐式传参

```html
<!-- 路由跳转的时候可以传递除了routes配置意外的其他param（下面的sort）,用户看不到 !-->
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

### 全局前置守卫

```js
// router/index.js
const routes = {
    {
    	path: '/todos',
    	name: 'todos',
    	component: Todos,
    	meta: { // 路由元信息
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

### 局部前置守卫

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

