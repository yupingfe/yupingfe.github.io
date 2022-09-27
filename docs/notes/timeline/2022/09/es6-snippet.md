# vscode插件: JavaScript (ES6) code snippets

## 简介

ES6语法智能提示,可以为es6的语法提供快捷输入。

[插件地址](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)

所有输入的代码片段最后都是带有分号的，如果需要不带分号的版本，去这个[地址](https://marketplace.visualstudio.com/items?itemName=jmsv.JavaScriptSnippetsStandard)下载。

## 使用

这里只列出了我常用的代码片段

### 模块化

| 触发键 | 说明 | Code |
| ---- | ---- | ---- |
| imp | 导入整个模块 | `import fs from 'fs'` |
| imn | 导入整个模块(不包括模块名称) | `import fs from 'fs'`|
| imd | 部分导入模块 | `import {rename} from 'fs'`|
| ima | 别名导入模块 | `import * as localAlias from 'fs'`|
| rqr | require导入模块 | `require('')`|
| rqe | require导入模块并变以常量接收 | `const packageName = require('packageName')`|
| mde | require导出模块 | `module.exports = {}`|
| env | 导出命名变量 | `export const nameVariable = localVariable`|
| enf | 导出命名函数 | `export const log = (parameter) => { console.log(parameter) }`|
| edf | 默认导出命名函数 | `export default function fileName (parameter){ console.log(parameter) }`|

### 方法

| 触发键 | 说明 | Code |
| ---- | ---- | ---- |
| fre | forEach循环 | `array.forEach(currentItem => {})` |
| fof | for ... of 循环 | `for (const item of obj) {}` |
| fin | for ... in 循环 | `for (const item in obj) {}` |
| fin | for ... in 循环 | `for (const item in obj) {}` |
| anfn | 创建箭头函数 | `(params) => {}` |
| nfn | 创建匿名函数 | `add = (params) => {}` |
| dob | 解构对象 | `const { rename } = fs` |
| dar | 解构数组 | `const [first, second] = [1,2]` |
| sti | 设置间隔定时器 | `setInterval(() => {})` |
| sto | 设置延迟定时器 | `setTimeout(() => {})` |
| prom | `new Promise` | `return new Promise((resolve, reject) => {})` |
| thenc | 给`promise`添加then和catch | `.then((res) => {}).catch((err) => {})` |

### 控制台

| 触发键 | Code |
| ---- | ---- |
| clg | `console.log()` |
