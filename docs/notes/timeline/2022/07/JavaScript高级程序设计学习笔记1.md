# 《JavaScript 高级程序设计》 学习笔记1
[[toc]]
## let

### 块级作用域

一种普遍存在于各个语言中的作用域范围；

```js
{
  var a = 10;
  let b = 20;
}

console.log(a)//10
console.log(b)// a is not defined
```

可以发现，在一个大括号中用let声明的变量在外部不可访问了，每个大括号都是独立的作用域。

```js
for(var  i = 0 ; i < aLi.length ; i ++){
  aLi[i].onclick = function(){
    console.log(i);  //永远都是aLi.length
  }
}
for(let i = 0 ; i < aLi.length ; i ++){
  aLi[i].onclick = function(){
    console.log(i);// 对应下标
  }
}
```

有了let声明我们在函数外部就无法访问到 i ，i作为下标只存在于for循环中， 所以，这个时候每个i都是独立的；我们在点击的时候可以轻易的获取当前元素的下标，而不用做很多繁琐的处理了。

```js
console.log(a); //undefined;
var a = 10;

console.log(b)//b is not defined;
let b = 10;
```

**暂时性死区；**

```js
var a = 10;

if(true){
  console.log(a);//ReferenceError(引用错误): a is not defined;
  let a = 20;
}
```

 ES6规定在某个区块中， 一旦用let或const声明一个变量，那么这个区块就变成块级作用域，用let 或者const声明的变量即为该区块绑定， 该变量不受任何变量影响。 **在该变量使用let声明前不可以用**。在语法上，我们叫这种情况为：暂时性死区 (temporal dead zone，简称 TDZ)。



之前有提到过，JS中var声明一个变量是存在声明提升的，这是JS中的一个缺陷所在， **但是现在的let不存在声明提升**；

## const

声明常量

```js
const a = 20;
a = 30;  //Uncaught TypeError: Assignment to constant variable.
```

## 扩展运算符

三个点号，功能是把数组或类数组对象展开成一系列用逗号隔开的值

```js
var foo = function(a, b, c) {
console.log(a);
console.log(b);
console.log(c);
}

var arr = [1, 2, 3];

//传统写法
foo(arr[0], arr[1], arr[2]);

//使用扩展运算符
foo(...arr);
//1
//2
//3
```

## rest运算符

rest运算符也是三个点号，不过其功能与扩展运算符恰好相反，把逗号隔开的值序列组合成一个数组

```js
//主要用于不定参数，所以ES6开始可以不再使用arguments对象
var bar = function(a, ...args) {
    console.log(a);
    console.log(args);
}

bar(1, 2, 3, 4);
//1
//[ 2, 3, 4 ]
```

## 字符串扩展

###  字符串的 Unicode 表示

规则为\u + 四位十六进制;

```js
console.log("\u0061"); //  打印结果是 a；
```

 这种新的字符表示方式只能表示  \u 0000 ~ \u ffff 之间的数字。 如果超出范围必须用双字节表示;

```js
 console.log("\uD842\uDFB6"); //  打印结果是 𠮶
```

 如果不按照规则熟悉书写 例如 

```js
console.log("\uD842\uDFB69")//  这个9是多余字符； 那么则认为这段字符是 \uD842\uDFB6 + 9 所以打印结果是 𠮶9；
```

 如果想要一次性表示超出范围的字符那么我们可以使用{}来表示；

 例如:

```js
 console.log("\u20BB9");  这个的打印结果是 拆分开来的 ₻9
 console.log("\u{20BB9}"); 这个打印的结果是一个完整的字符
```

### 字符串的新增方法

### repeat()

```js
'x'.repeat(3)  //xxx；
```

### includes() startsWith() endsWith()

```js
var s = 'Hello world!';

s.startsWith('Hello') // true   以参数开头
s.endsWith('!') // true            以参数结尾
s.includes('o') // true             包括参数;
```

 第二种方法接受第二个参数，第二个参数表示从第几位开始;

```js
var s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

### for of

 一种新的遍历方式; for of 可以用于遍历字符串：

```js
var s = "abc";
for(let  b of s){                console.log(b) // "a"  "b"  "c"              }
```

### 字符串模板扩展

 ES6中存在一种新的字符串， 这种字符串是 以 ` `  (波浪线上的那个字符 > 反引号)括起来表示的；

 通常我们想要拼接一个带有标签的字符串， 是用这样的方式:

```
variable + " <strong>这是一个文字" + obj.name + "</strong> " + variable
```

但是有了ES6字符串一切都变得非常简单了

```js
`${bianliang} <strong>这是一个文字${obj.name}</strong>${bianliang}`
```

用 ${ } 扩住变量让拼接变得非常容易;

 非常简单的换行；

```js
// In JavaScript \n is a line-feed.
console.log(`string text line 1\n     string text line 2`);
// string text line 1
// string text line 2
```

 当我们想要在字符串中使用 `反引号的时候我们需要进行转义；

```js
`\`Yo\` World!`    //"`Yo` World!"
```

## 箭头函数

原来的写法

```js
var test = function(x){  return x+2;}
```

使用箭头函数：

```js
var test = x =>x+2;
```

var  函数名 = 参数 => 运算规则;
省略了function、return关键字和大括号。
使用方法跟以前一样没区别 test(5); 
结果： 7
还有好处就是，自动绑定this

```js
var obj = {    
  left : 200,    
  move : function(){         
    setTimeout(function(){            
      //this.left = 100;       
      //以前这里不能写this，这的this指window      
    },1000);  
  }
}
```

```js
var obj = {    
  left : 200,    
  move : function(){         
    setTimeout( ()=>{          
      this.left = 100;      
    },1000);    
  } }
```

箭头函数this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this,导致内部的this就是外层代码块的this。正是因为这个，所以箭头函数也不能做构造函数。

**当然也有一些缺陷**

第一： 箭头函数是不能new的，它的设计初衷就跟构造函数不太一样
第二： 箭头函数如果要返回一个JSON对象，必须用小括号包起来 var test = ()=>({id:3, val=20})
箭头函数现在非常流行，但是，**这样的设计对代码的可读性有一定的伤害**

## 解构赋值

```js
var [a,b,c] = [1,2,3];
var {a,b,c} = {
    a:1,
    b:2,
    c:3
}

var username = "zhangsan";
var age = 18;
var obj = {username,age};
```

## Symbol类型

```js
var s1 = Symbol();
var s2 = Symbol();
var s3 = Symbol("abc");
var s4 = Symbol("abc");
s1不等于s2
s3不等于s4
```

Symbol函数会生成一个唯一的值可以理解为Symbol类型跟字符串是接近的 但每次生成唯一的值，也就是每次都不相等，至于它等于多少，并不重要 这对于一些字典变量，比较有用

```js
const TYPE = {    

SMALL: Symbol(),  
MIDDLE: Symbol(), 
LARGE: Symbol()

}

//以前我们可能会把SMALL、MIDDLE、LARGE赋值为数字或字符串

//还要确保它们的值不能发生重复，但现在不用担心了

function Create(type){   

          switch(type){       
                case TYPE.SMALL:  {console.log("SMALL")}  break;       
                case TYPE.MIDDLE: {console.log("MIDDLE")}  break;               
                case TYPE.LARGE:  {console.log("LARGE")}  break;     
            }
        }

var s = Create(TYPE.MIDDLE);
```

## set结构

想当初设计JS的时候，由于有SUN公司人员的参与 再加上当时如日中天的JAVA及其优秀的设计，才使得JS语法及内存设计跟JAVA会如此的接近。但JAVA很多优秀的内容，JS不知道为了什么目的并没有引入，例如Set和Map集合

**Set集合，本质上就是对数组的一种包装** 例如：

```js
let imgs = new Set();
imgs.add(1）;
imgs.add(1）;
imgs.add(5）;
imgs.add("5"）;
imgs.add(new String("abc")）;
imgs.add(new String("abc")）;

// 打印的结果： 1  5  '5'  'abc'  'abc'
```

Set集合是默认去重复的，但前提是两个添加的元素严格相等 所以5和"5"不相等，两个new出来的字符串不相等
关于遍历的方法 由于Set集合本质上还是一个map，因此会有以下几种奇怪的遍历方法：

```js
var imgs = new Set(['a','b','c']); 

// 根据KEY遍历
for(let item of imgs.keys()){
  console.log(item);
} //a //b //c

//根据VALUE遍历
for(let item of imgs.values()){
  console.log(item);
} //a //b //c

//普通for...of循环(for...of跟for-in的区别很明显，就是直接取值，而不再取下标了)
for(let item of imgs){  
  console.log(item);
} //a //b //c
```

SET集合没有提供下标方式的访问，因此只能使用for来遍历。

```js
// 下面展示了一种极为精巧的数组去重的方法
var newarr = [...new Set(array)];
```

Map结构

```js
let map = new Map();
 
map.set("S230", "张三");
map.set("S231", "李四");
map.set("S232", "王五");

获取某一个元素 map.get("s232"); //王五

// 循环遍历，配合解构赋值 
for(let [key,value] of map){    console.log(key,value);  }
```

## Class

Class保留字终于成了关键字
终于，我们在有生之年等到class出现了 这下，JS看起来更像一个标准的面相对象的语言了
以前编写一个构造函数（类）
function Pad(color){  this.color = color;}现在的写法跟Java更接近了

```js
class Iphone{
  constructor(color, size){
    this.color = color;
    this.size = size;
  }    
  playgame(){
    //.............
  }    
  toString(){
    return `这台手机的颜色是${this.color} 屏幕大小是${this.size}`;
  }
}
```

我们定义了一个类，名字叫Iphone 通过类生成一个实例： var iphone = new Iphone("白色", 5);
其中constructor被称之为构造方法，在我们new 一个对象的时候，自动被调用
不过本质上，JS依然使用了原型来实现，也就是说，这不过是一个新的写法而已 跟以前的构造函数没有区别。
要注意的是，使用了class来定义类，必须先定义再使用

## 数组新增的方法

indexOf() 和 lastIndexOf()；5个迭代方法：forEach()、map()、filter()、some()、every()；2个归并方法：reduce()、reduceRight()；

字符串   trim();// 去掉字符串前后空格  trimLeft()  trimRight()
  var reg = /(^\s*)|(\s*$)/g   str.replace(reg,"");


JSON.parse(str); //json序列化，将符合json格式的字符串转换为jsonJSON.stringify(); //json转换为字符串

Date.now(); //日期对象得到当前日期的毫秒数
Object.defineProperties(obj, props); //给obj设置属性Object.keys(obj); //获取obj的所有属性名称，返回数组Object.values(obj); // 获取obj的所有属性值，返回数组

```js
var obj = new Object();

Object.defineProperty(obj, 'name', {
configurable: false, // 表示能否通过delete删除此属性
writable: true, // 能否修改属性的值
enumerable: true, // 表示该属性是否可枚举，即是否通过for-in循环或Object.keys()返回属性
value: '张三'
})

console.log(obj.name)
```

```js
var obj = new Object();
Object.defineProperties(obj, { 
    name: {
        value: '张三',
        configurable: false,
        writable: true,
        enumerable: true
    }, 
    age: {
        value: 18,
        configurable: true
    }
})

console.log(obj.name, obj.age) // 张三, 18
```