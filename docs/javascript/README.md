

[[toc]]
## 数组扁平化

性能最好的是es6的**flat()**，最差的就是**while()** **reduce()**

```js
const a = [1, [2, null, [3, undefined, 4,[5]]]];
// for循环方法
function flat(arr) {
  let target = []
  for (value of arr) {
    if (Array.isArray(value)) {
      target = target.concat(flat(value))
    }
    else
      target = target.concat(value)
  }
  return target
}
// reduce方法
function reduceFlat(arr) {
  return arr.reduce((result, value) => result.concat(Array.isArray(value) ? reduceFlat(value) : value), [])
}
// toString方法 此方法仅限处理数字，处理undefined，null为0
console.log(a.toString().split(',').map(item => item - 0)); 

// es6 flat方法 性能最佳
console.log(a.flat(Infinity)) // 注意I大写
```

## 数组去重？

```js
// 利用indexof去重
function distinct(arr) {
  let targetArr = []
  for (let i = 0; i < arr.length; i++) {
    if(targetArr.indexOf(arr[i]) == -1) {
      targetArr.push(arr[i])
    }
  }
}
// 利用对象名唯一， 该方法速度最快
function distinct(arr) {
  let targetArr = []
  let obj = {}
  for (let i =0; i <arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      targetArr.push(arr[i])
    }
  }
}
// 利用ES6 set去重
const arr1 = Array.from(new Set(arr))
```

## 对象深浅拷贝？

1. 赋值运算符 `=` 实现的是浅拷贝，只拷贝对象的引用值；

2. JavaScript 中数组和对象自带的拷贝方法都是“首层浅拷贝”；

   包括 数组`concat`,`Object.assign`, 展开运算符`...`

3. `JSON.stringify` 实现的是深拷贝，但是对目标对象有要求(无法复制函数)；

4. 若想真正意义上的深拷贝，请递归。

5. 也可以使用lodash库的deepClone方法

**递归实现数组深拷贝**

```js
function deepCopy(source) {
      let target = Array.isArray(source) ? [] : {} // 判断是否为数组
      for (key in source) {
        if (source[key] && typeof source[key] === 'object') { // 判断是否为对对象
          target[key] = Array.isArray(source[key]) ? [] : {}
          target[key] = deepCopy(source[key]) // 执行递归
        }
        else {
          target[key] = source[key]
        }
      }
      return target
    }
```

```js
function deepCopy1(source) {
  if (typeof source === 'object') { // 是否需要进行递归，不需要直接浅拷贝
    var target = source.constructor === Array ? [] : {};
    for (var i in source) {
      target[i] = typeof obj[i] === 'object' ? deepCopy1(source[i]) : source[i];
    }
  } else {
    var result = source;
  }
  return target;
}
```

```js
// test
const originObj = {a:'a',b:[1,2,3],c:{cc:'cc'}, d: function () { console.log(this.a);}};
const targetObj = deepCopy(originObj)
targetObj.d()
targetObj.a = 'changed'
console.log(targetObj);
targetObj.d()
```



## 简述JS的闭包机制？

1. 外层函数嵌套内层函数
2. 内层函数使用外层函数的局部变量（或参数）
3. 将内层函数作为外层函数的返回值

闭包的特点：

1. 闭包的好处就是变量可以重复使用而且不会污染全局
2. 闭包可以在一个作用域里访问另外一个作用域的局部变量
3. 闭包的原理用一句话表示就是**外层函数的活动对象不能被释放**
4. 但是，正是因为外层函数活动对象不能被释放，所以**会占用过多的内存，并且有内存泄漏的风险**（内存泄漏：应用程序不再需要占用内存的时候，由于某些原因，内存没有被操作系统或可用内存池回收）。

应用：点击li弹出下标

```js
var list = document.querySelectorAll('li')
for (var i = 0; i < list.length; i++) {
  list[i].onclick = (function (index) {
    return function () {
      alert(index)
    }
  })(i)
}
```

给settimeout传递参数

## 柯里化？

柯里化是什么：是指这样一个函数，它接收函数 A，并且能返回一个新的函数，这个新的函数能够处理函数 A 的剩余参数。

```js
function curringAdd() {
  let args = Array.prototype.slice.call(arguments)
  function inner() {
    args.push(...arguments)
    return inner
  }
  inner.toString = function () {
    return args.reduce((sum, item) => sum += item)
  }
  return inner
}
console.log(curringAdd(1)(2));
console.log(curringAdd(1,2,3)(4));
console.log(curringAdd(1)(2,3,4));
```

## 函数的防抖和节流？

**函数防抖** 是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。

* 给按钮添加函数防抖防止表单多次提交
* 对输入框进行AJAX操作时，减少后端请求次数
* 判断scroll是否到底
* window触发resize的时候

**函数节流** 是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

* 鼠标不断点击触发
* DOM元素拖拽

```js
function debounce(fn, delay) {
  var timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
// 升级版：第一次点没有延迟
function debounce(fn, delay) {
  var timer = null;
  return function () {
    if(timer) { clearTimeout(timer) }
    if(!timer) {
      fn.apply(this, arguments)
    }
    timer = setTimeout(()=>{
      timer = null
    }, delay)
  }
}
```

```js
function throttle(fn, delay) {
  var begin = 0;
  return function () {
    var current = Date.now()
    if(current - begin > delay) {
      fn.apply(this, arguments)
      begin = current
    }
  }
}
```

::: tip
lodash有[debounce](https://www.lodashjs.com/docs/lodash.debounce)和[throttle](https://www.lodashjs.com/docs/lodash.throttle)函数可用。
:::

## ES6有哪些新特性

1. let const 块级作用域
2. 模板字符串
3. 解构赋值
4. 箭头函数，函数参数默认值
5. 扩展运算符（...）
6. forEach for...of for...in
7. 数组方法map reduce includes
8. map和set数据结构
9. 模块化
10. promise proxy
11. async
12. class

## 如何实现图片的懒加载？

```js
  var viewportHeight = document.documentElement.clientHeight // viewport高度
  var boxs = document.querySelectorAll('.box')
  function changeColor() {
    var docScrollTop = document.documentElement.scrollTop // 滚动上去的内容高度
    for (let i = 0; i < boxs.length; i++) {
      if (boxs[i].offsetTop - docScrollTop < viewportHeight) {
        setTimeout(function () {
          boxs[i].classList.add('red')
        }, 500)
      }
    } 
  }
  changeColor()
  window.onscroll = function () {
    changeColor()
  }
```

// 也可以使用`boxs[i].getBoundingClientRect().top`来代替`boxs[i].offsetTop - docScrollTop`

`getBoundingClientRect()`方法可以返回元素到视口顶部（不是文档顶部）的距离

有`left、top、right、bottom `四个属性





## 事件循环（Event Loop）

Event Loop中，每一次循环称为tick，每一次tick的任务如下：

- 执行栈选择最先进入队列的宏任务（一般都是script），执行其同步代码直至结束；
- 检查是否存在微任务，有则会执行至微任务队列为空；
- 如果宿主为浏览器，可能会渲染页面；
- 开始下一轮tick，执行宏任务中的异步代码（setTimeout等回调）。

**注意：**

- 当我们第一次执行的时候，解释器会将整体代码`script`放入宏任务队列中，因此事件循环是从第一个宏任务开始的；
- 如果在执行微任务的过程中，产生新的微任务添加到微任务队列中，也需要一起清空；微任务队列没清空之前，是不会执行下一个宏任务的。

::: tip
ES6 规范中，microtask 称为 `jobs`，macrotask 称为 `task` 宏任务是由宿主发起的，而微任务由JavaScript自身发起。
:::

|                | 宏任务（jobs）                                               | 微任务（task）                  |
| -------------- | ------------------------------------------------------------ | ------------------------------- |
| 发起者         | Host(Browser, Node)                                          | JavaScript Engine               |
| 具体事件       | Script, setTimeOut/SetTimeInterval, UI rendering/UI Event, I/O(Node) | Promise, process.NextTick(Node) |
| 执行顺序       | 后执行                                                       | 先执行                          |
| 触发新一轮Tick | 会                                                           | 不会                            |



```js
console.log("a"); 

setTimeout(function () {
    console.log("b");
}, 0);

new Promise((resolve) => {
    console.log("c");
    resolve();
})
    .then(function () {
        console.log("d");
    })
    .then(function () {
        console.log("e");
    });

console.log("f"); // 输出结果：a c f d e b
```

```javascript
console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')
/** 
script start
async2 end
Promise
script end
async1 end
promise1
promise2
setTimeout **/
```

## 为什么await和async能够实现异步请求同步执行？

`Generator` 的语法糖

## 什么是事件代理？

事件委托本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。

使用事件代理我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件代理我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。

事件委托的优点：

1. 减少内存消耗，不必为大量元素绑定事件
2. 为动态添加的元素绑定事件

事件委托的缺点:

1. 部分事件如 focus、blur 等无冒泡机制，所以无法委托。
2. 事件委托有对子元素的查找过程，委托层级过深，可能会有性能问题
3. 频繁触发的事件如 mousemove、mouseout、mouseover等，不适合事件委托

## 数组对象字符串常用方法

```js
// 对象
Object.assign() //复制对象，创建一个新的对象
Object.entries() //返回自身可枚举的[key,value]
Object.keys()
Object.values()
Object.hasOwnProperty(key)//是否有这个属性 true/false
Object.getOwnPropertyNames() //取得对象自身可枚举的属性名
//for in 对对象进行遍历，可以拿到自身以及原型链上的可枚举的属性
Object.freeze()//冻结一个对象，不可修改，不可删除。不可添加新的属性
Object.prototype.toString()// 返回数组[object,object/array/function等]  
//判断是数组还是对象就是用的这个方法
Object.defineProerty(obj,attr,descriptor)
//可以对对象属性进行修改添加，删除等的操作
//参数1，要操作的对象
//参数2：要操作的属性名字
//参数3：属性描述符：是否可枚举，是否可读，可写，他的值等
```



```js
// 数组
arr.push()
arr.pop()
arr.shift()
arr.unshift()
arr.reverse()

arr.forEach() // 修改原数组
arr.map() // 创建一个新数组，如果不return返回undefined
arr.every()
arr.some()
arr.filter()
arr.reduce()

arr.includes()
arr.indexOf() // 返回索引，没有返回-1
arr.lastIndexOf() //从后往前找，返回正序索引
arr.find(element => element > 10))  //找满足条件的元素
arr.findIndex() //找索引

arr.concat()
arr.slice(1,2)//截取数组的一部分，不包含头部，包含尾部，返回新数组
arr.splice(1,4) //从索引1开始删除4个元素,第二个是要删除的长度，第三个往后是要添加的元素，修改原数组
arr.splice(2,0,'i') //从索引2开始，删除0个，加入一个’i‘
arr.aplice(3,1,'o','i')//从索引3开始，删除1个，添加两个字符串。

arr.join(separator)//转字符串，默认以逗号隔开
arr.join('')//无缝链接字符串

arr.flat(1) //数组降维 ，返回新数组
arr.flat(Infinity)
arr.entries() //将数组返回一个对象，包含对象索引的键值对
```



```js
// 字符串
str.concat()//拼接
str.includes()//判断字符串是否包含在另外一个字符串中
str.indexOf()
str.lastIndexOf()
str.split() //按特定的符号分割成字符串数组！
str.toLowerCase() //转换成小写的形式
str.toUpperCase() //转换成大写的形式
str.trim()//去空格
str.substring(start,end) // 截取字串，不含开始，含结束，end可以小于start,会自动将小值
str.slice() //截取字串，含开始，含结束，end不可以小于start
str.substr(start,length)  //截取指定长度的字符串
```

## JS的继承

### 什么是继承

子类共享父类的属性和方法，js的继承是基于原型实现的。

**继承是类与类之间的关系**

#### 原型链继承

原理：让子类的原型`prototype`指向父类的实例

```js
// 父类 Animal
function Animal (name, age) {
  this.name = name
  this.age = age
  this.say = function () {
    console.log(`My name is ${this.name}, I am ${this.age} years old`)
  }
}
Animal.prototype.eat = function (food) {
  console.log(`${this.name} is eating ${food}`)
}
```

```js
// 子类Cat
function Cat () { }
// 让子类的原型指向父类的实例
Cat.prototype = new Animal('Tom', 60)
// 为了严谨，为了不破坏原型链的完整性，加上这一句，不加也不会影响代码执行
Cat.prototype.constructor = Cat

var tom = new Cat()
tom.say()
tom.eat('jerry')

// var coffee = new Cat('Coffee', 18)
// coffee.say()

// instanceof
console.log(tom instanceof Cat) // true
console.log(tom instanceof Animal) // true
```

特点：

1. 简单，非常纯粹的继承关系，实例是子类的实例，也是父类的实例。
2. 父类新增原型方法、属性，子类都可以访问到。

缺点：

1. 要想为子类增加属性和方法，必须要在修改原型指向之后执行，因为构造器发生了改变。
2. 无法实现多继承：即一个子类多个父类。
3. 来自原型对象的引用属性是所有实例共享的。
4. 创建子类实例时候无法传参数。

### 构造继承(call apply 继承)

原理：把父类的构造函数当成普通函数，在子类的构造函数里调用，并且修改this的指向。

```js
// 构造继承：把父类的构造函数当成普通函数在子类的构造函数里调用，并且修改this指向
function Dog (name, age) {
  // Animal.call(this, name, age)
  // Animal.call(this, ...arguments)

  Animal.apply(this, [ name, age ])
  // Animal.apply(this, [ ...arguments ])
}

var mender = new Dog('Mender', 70)

mender.say()
// mender.eat('bone') // 报错：无法继承原型上的方法

console.log(mender instanceof Dog) // true
console.log(mender instanceof Animal) // false

console.log(mender)
var snoopy = new Dog('Snoopy', 20)
console.log(snoopy.say === mender.say) // false  因为不同实例各自都存了一份自己的say，浪费内存
```



特点：

1. 解决了原型继承中子类实例共享父类引用属性的问题
2. 创建子类实例时候可向父类传递参数
3. 可以实现多继承(call多个父类对象)

缺点：

1. 实例并不是父类的实例，只是子类的实例：利用`instanceOf`可以判断。
2. 只能继承父类实例的属性和方法，不能继承父类原型`prototype`上的属性和方法。

3. 无法实现函数复用，每个子类都是父类实例函数的副本，影响性能。

### 组合继承(原型+构造继承)

在子类里先调一下父类，再改变一下指向。

```js
function Mouse (name, age) {
  Animal.call(this, name, age)
}
Mouse.prototype = new Animal()
Mouse.prototype.constructor = Mouse

var jerry = new Mouse('Jerry', 18)

jerry.say()
jerry.eat('cake')

console.log(jerry instanceof Mouse) // true
console.log(jerry instanceof Animal) // true
```

特点：

1. 实例既是子类的实例，也是父类的实例
2. 弥补组合继承的缺陷，可以继承父类原型上的属性和方法
3. 不存在引用属性共享的问题
4. 创建子类实例时可以传参
5. 由于可以调原型方法，因此可以解决上述函数复用问题

缺点：

调用了两次父类构造函数，生成了两份实例，影响性能

### Object.create()继承

```js
function Snake(name, age) {
  Animal.call(this, name, age)
} 
Snake.prototype = Object.create(Animal.prototype) // 使用已有对象来创建
Snake.prototype.constructor = Snake
```

可以减少一次实例创建，提高性能。

### 寄生组合继承

解决上述缺点，堪称完美，缺点就是实现比较复杂。

```js
(function() {
  // 创建一个没有实例方法的类
  var Super = function() {}
  Super.prototype = Animal.prototype
  // 将实例作为子类的原型
  Cat.prototype = new Super()
})();
```

### 拷贝继承

```js
function Cat(name) {
  var animal = new Animal(name);
  for (var key in animal) {
    Cat.prototype[key] = animal[key]
  }
}
```

特点：支持多继承，好理解

缺点：

1. 效率低，占用内存高
2. 无法获取父类不可枚举的方法（无法用for in访问的方法）

### ES6继承 (语法糖)

关键字extends和super

```js
class Pig extends Animal { // extends相当于原型链继承
  constructor (name, age) {
    super (name, age) // super相当于构造继承call
  }
}
var peggy = new Pig('peggy', 50)
peggy.say()
console.log(peggy instanceOf Pig) // true
console.log(peggy instanceOf Animal) // true
```

### 多继承

使用`Object.assign()`实现多继承，混入。	`Object.assign`会把  `OtherSuperClass`原型上的函数拷贝到 `MyClass`原型上，使 MyClass 的所有实例都可用 OtherSuperClass 的方法。Object.assign 是在 ES2015 引入的。

```js
function MyClass() {
     SuperClass.call(this);
     OtherSuperClass.call(this);
}
// 继承一个类
MyClass.prototype = Object.create(SuperClass.prototype);
// 混合其它
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// 重新指定constructor
MyClass.prototype.constructor = MyClass;

```

[他人总结：JavaScript常见的六种继承方式](https://segmentfault.com/a/1190000016708006)

## gulp常用的插件

gulp-sass  将scss文件转为css

gulp-autoprefixer 为css添加浏览器前缀

gulp-open 默认浏览器打开指定页面

gulp-htmlmin 最小化html文件

gulp-minify-css 最小化css（gulp-clean-css也是）

gulp-uglify 混淆js文件

gulp-concat 合并js,css文件

## 实现打印1-100数字，对第n个数字停顿n秒？

```js
var isDone = true
function printNum() {
  var time = 0;
  return function () {
    isDone = false
    time++
    setTimeout(() => {
      console.log(time);
      isDone = true
    }, time * 1000);
  }
}
var myPrintNum = printNum()
setInterval(() => {
  if (isDone) {myPrintNum()}
}, 1000);
```



## JSONP?

script标签不遵循同源协议，可以用来进行**跨域请求**，优点就是兼容性好但仅限于GET请求。

但AJAX和JSONP其实本质上是不同的东西。**AJAX的核心是通过`XmlHttpRequest`获取非本页内容，而JSONP的核心则是动态添加`<script>`标签来调用服务器提供的js脚本。**

## Ajax

```js
const getJSON = function(url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp');
    xhr.open('GET', url, true);
    //xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
      if (this.readyState !== 4) return;
      if (this.status === 200 || this.status === 304) {
        resolve(this.responseText);
      } else {
        reject(new Error(this.responseText));
      }
    }
    xhr.send();
  })
}
```

还可以用`fetch()`

1. 怎么获取时间？怎么判断指定时间提示信息？

## 页面滚动触底

```js
// 滚动视口高度(也就是当前元素的真实高度)
let scrollHeight =
    document.documentElement.scrollHeight ||
    document.body.scrollHeight;
// 可见区域高度
let clientHeight =
    window.innerHeight ||
    document.documentElement.clientHeight
// 滚动条顶部到浏览器顶部高度
let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop
if (clientHeight + scrollTop >= scrollHeight) {
  console.log('触底');
}
```

