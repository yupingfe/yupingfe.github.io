# Vuex

Vuex的设计模式是**单例模式**。相当于react当中的redux。

![vuex](https://vuex.vuejs.org/vuex.png)

## 基本语法

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
    },
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

### tips：为什么mutation不能提交异步？

​	devtool当中会有mutation日志。每一条mutation被记录。devtools都需要捕捉到前一状态和后一状态的快照。**任何在回调函数中进行的状态的改变都是不可能追踪的。**因此devtools不知道什么时候回调函数被调用,因此无法追踪。

## 严格模式

```js
const store = new vuex.store({
    // ...
    strict: true
    strict: process.env.NODE_ENV === 'development'
    // vuex严格模式一般在开发中使用，严格模式下，mutation当中的异步操作会报错
})
```

## input双向绑定

来自vuex的state再组件不能使用*v-model*，会报错！需要通过绑定事件的方式来实现。

使用 :value和@input事件结合，提交mutation来修改state

`<input type="text" :value="name" @input="changeName($event.target.value)">`

