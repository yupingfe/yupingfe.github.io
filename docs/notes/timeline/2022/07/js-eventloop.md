# 事件循环（Event Loop）

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