# JS面试题

## 原型链

1. webpack设置
2. gulp常用的插件
3. 拖拽用到哪些事件
4. ES6有哪些新特性
   1. 箭头函数
5. 解决异步的方法，除了`promise/async`你还知道那些？
6. JS适合面向对象还是过程？
7. 给一个按钮绑定两个`onclick`事件
8. 怎么理解vue是渐进式框架？
9. 封装vue组建双向数据绑定的原理
10. 数组去重
11. 数组方法
12. 怎么获取时间？怎么判断指定时间提示信息？
13. Cookie和LS除了大小区别还有什么不同？
    1. Cookie属性？
14. `let const var`区别？
15. `httponly`知道不？
16. 继承
17. 必包
18. 数组遍历的方式？`for foreach map`的区别
19. 实现打印1-100数字，对第n个数字停顿n秒？
20. call和apply区别

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

## 深浅拷贝？

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

## 将图片转换为Base64

```js
function image2Base64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}
function getImgBase64(){
    var base64="";
    var img = new Image();
    img.src="img/test.jpg";
    img.onload=function(){
        base64 = image2Base64(img);
        alert(base64);
    }
}
```

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

## 为什么await和async能够实现异步请求同步执行？

`Generator` 的语法糖

