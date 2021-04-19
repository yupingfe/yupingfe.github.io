## 常用方法

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
arr.every()
arr.some()
arr.forEach()
arr.filter()
arr.includes()
arr.map()
arr.reduce()
arr.indexOf()
arr.lastIndexOf() //索引正序，但是从后往前找
arr.findIndex() //找索引
arr.find()  //找满足条件的元素
arr.join()//默认以逗号隔开
arr.join(' ')//无缝链接 将数组元素拼接成字符串
arr.slice(1,2)//截取数组的一部分，不包含头部，包含尾部，返回新数组
arr.splice(1,4) //从索引1开始删除4个元素,第二个是要删除的长度，第三个往后是要添加的元素，修改原数组
arr.splice(2,0,'i') //从索引2开始，删除0个，加入一个’i‘
arr.aplice(3,1,'o','i')//从索引3开始，删除1个，添加两个字符串。
arr.flat() //数组降维 ，返回新数组
arr.flat(1)
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