# 组件

组件可以实现复用.

## 定义组件

组件都是用对象来定义的，组件对象使用大驼峰，组件名称使用全小写加`-`连接

`const HelloWorld = { template: '<div>hello world</div>'}`

## 注册组件

全局注册：`Vue.component('hello-world', HelloWorld)`

局部注册：

```js
const App = new Vue({
  el: '#app',
  components: { HelloWorld } // 局部注册的组件仅当前实例可以使用
})
```

## 使用组件

在html里写组件名的自定义标签，自定义标签本身不会渲染，渲染的是里面的内容

```html
<hello-world></hello-world>
<hello-world></hello-world>
<HelloWorld /> <!-- 可以直接写成单闭合大驼峰标签，webpack会进行转换 -->
```

## 组件的数据

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

## 嵌套组件

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

## 通过template定义组件结构

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

## 具名插槽slot

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

1. 在main.js创建一个空的vue实例 `Vue.prototype.$bus = new Vue()`
2. 在其中一个组件中使用`this.$bus.$emit('action', {key: value})`触发事件，并传递参数。
3. 在另一个组件当中使用`this.$bus.$on('action', (param)=> {console.log(param)})`接收监听这个事件，并接受传递的数据。

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