# JEST的基础使用

[Jestjs](https://jestjs.io/zh-Hans/) 是一款优雅、简洁的 JavaScript 测试框架。

安装`npm install jest -D`

## 基础用法

```js
// func.js
const func = {
  add: (num1, num2) => num1 + num2
}

module.exports = func
```

```js
// func.test.js
const func = require('./func')

// tobe macher
test('add 2 + 2 equal 4', () => {
  expect(function.add(2,2).toBe(4))
})

// .not 修饰符允许你测试结果不等于某个值的情况
test('add 2 + 2 equal NOT 5', () => {
  expect(function.add(2,2).not.toBe(5))
})
```

检查一些特殊的值（null，undefined 和 boolean）

```js
test('should be null', () => {
  expect(func.isNull().toBeNull())
})

// toBeNull 仅匹配 null
// toBeUndefined 仅匹配 undefined
// toBeDefined 与…相反 toBeUndefined
// toBeTruthy 匹配 if 语句视为 true 的任何内容
// toBeFalsy 匹配 if 语句视为 false 的任何内容

```

⚠️注意 `toBe`用于基本数据类型的匹配，不能用来匹配引用类型如数组和对象

使用`toEqual`来进行匹配

```js
// func.js
const func = () => {
  return {
    userName: 'ZHANGSAN',
    age: 25
  }
}
module.exports = func

```

```js
// func.test.js
test('User should be ZHANGSAN'() => {
  expect(func().toEqual({
    userName: 'ZHANGSAN',
    age: 25
  }))
})
```

使用正则表达式匹配

```js
test('there is no I in Apple', () => {
  expect('team').not.toMatch(/I/)
})
```

判断数组当中是否存在某项

```js
test('there is John in usernames', () => {
  userNames = ['John', 'Peter', 'Greg']
  expect(userNames.toContain('John'))
})
```

处理异步

```js
// working with async data
const fetchData = () => {
  return axios.get('http://xxx.com/getName')
  .then(res => res.data)
}

// promise
test('User fetched usrname xxx', () => {
  // 这行是期待断言的次数
  expect.assertions(1)
  return fetchData.then(data => {
    expect(data).toEqual({usrName: 'ZHANGSAN'})
  })
})

// async/await
test('User fetched usrname xxx', async () => {
  expect.assertions(1)
  const data = await fetchData
  expect(data).toEqual({usrName: 'ZHANGSAN'})
})
```

## 钩子函数

我们可以在测试开始之前和结束之后使用一些钩子来执行某些操作

```js
const testStart = () => console.log('test Begin')

const testEnd = () => console.log('test end')

// 会在每项测试开始和结束后执行
beforeEach(() => testStart())
afterEach(() => testEnd())

// 会在所有测试开始前和结束后执行
beforeAll(() => testStart())
afterAll(() => testEnd())

// 指定在某项测试开始或结束时执行
const foo => console.log('foo...')
// describe(name, fn) 是一个将多个相关的测试组合在一起的块。
describe('start foo', () => {
  beforeEach(() => foo())
  test('test foo', () => {
    const user = 'foo'
    expect(user.toBe('foo'))
  })
})
```



