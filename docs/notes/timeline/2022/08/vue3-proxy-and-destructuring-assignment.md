# 关于Vue3 的响应式对象与解构赋值

## 概念

Vue3当中加入了响应式API对象，响应式对象其实是 [JavaScript Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)，其行为表现与一般对象相似。不同之处在于 Vue 能够跟踪对响应式对象属性的访问与更改操作。

## 常用的API

### ref() {#ref}

接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 `.value`。ref 对象是可更改的，也就是说你可以为 `.value` 赋予新的值。它也是响应式的，即所有对 `.value` 的操作都将被追踪，并且写操作会触发与之相关的副作用。

**example**

```js
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

### reactive() {#reactive}

返回一个对象的响应式代理。

响应式转换是**深层**的：它会影响到所有嵌套的属性。

如果reactive传入了ref，那么它会将其解包(destructured)，就是获取它的值不再需要使用`.value`，但其响应性依然可以得到保持。

```js
const obj = reactive({ count: 0 })
obj.count++ // 1

// 将一个 ref 赋值给为一个 reactive 属性时，该 ref 会被自动解包：
const count = ref(1)
const obj = reactive({ count })

// ref会被自动的解包
console.log(count.value === obj.count) // true

// 无论操作原始ref的值，还是reactive中的引用，都会双向更新
count.value++
console.log(count.value === obj.count) // true

obj.count++
console.log(count.value === obj.count) // true

```

值得注意的是，当访问到某个响应式数组或 `Map` 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包。

 ```js
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)
 ```

## 解构与赋值

需要注意的是，不能对`reactive`直接重新赋值，这样会使其失去响应！

```js
let state = reactive({ count: 0 })
// 此时state是一个proxy对象，是可以和和view绑定的
console.log(state)

state = { count: 1 }
// 此时state已经变成了普通对象，失去了和view的响应
console.log(state) 
```

此外还有以下解构的情况，都会使其失去响应！

```js
const state = reactive({ count: 0 })

let n = state.count
n++
// 失去响应性连接,不影响state
console.log(state.count) // 0

// 直接结构赋值count 也会和 state.count 失去了响应性连接
let { count } = state
// 不会影响原始的 state
count++
console.log(state.count) // 0
```

因此，如果需要结构复制，并保持其响应，需要借助`toRef`和`toRefs`

### toRef()

基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其**源属性**保持同步：改变源属性的值将更新 ref 的值，反之亦然。

```js
const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo')

// 更改该 ref 会更新源属性
fooRef.value++
console.log(state.foo) // 2

// 更改源属性也会更新该 ref
state.foo++
console.log(fooRef.value) // 3
```

### toRefs()

将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 [`toRef()`](https://cn.vuejs.org/api/reactivity-utilities.html#toref) 创建的。

```js
const state = reactive({
  foo: 1,
  bar: 2
})

const stateAsRefs = toRefs(state)

// 这个 ref 和源属性已经“链接上了”
state.foo++
console.log(stateAsRefs.foo.value) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3


// 执行解构，这样依然会保持与原来state的联系
const{ foo } = stateAsRefs
foo.value++
console.log(state.foo) // 4
```

