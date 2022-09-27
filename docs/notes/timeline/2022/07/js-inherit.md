# JS中的继承

## 什么是继承

子类共享父类的属性和方法，js的继承是基于原型实现的。

**继承是类与类之间的关系**

### 原型链继承

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

## 构造继承(call apply 继承)

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

## 组合继承(原型+构造继承)

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

## Object.create()继承

```js
function Snake(name, age) {
  Animal.call(this, name, age)
} 
Snake.prototype = Object.create(Animal.prototype) // 使用已有对象来创建
Snake.prototype.constructor = Snake
```

可以减少一次实例创建，提高性能。

## 寄生组合继承

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

## 拷贝继承

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

## ES6继承 (语法糖)

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

## 多继承

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