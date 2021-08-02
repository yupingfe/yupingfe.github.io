# HTML面试题
[[toc]]
## HTTP状态码

1. 1XX 信息性状态码
   - 100 继续
   - 101 切换协议
2. 2XX 成功状态码
   - 200 OK 成功处理了请求
   - 204 No Content 请求处理成功，但没有资源可返回
   - 206 Partial Content 请求资源的某一部分
3. 3XX 重定向状态码
   - 301 永久性重定向，表示请求的资源已被分配了新的 URI
   - 302 临时性重定向，资源的 URL 已临时定位到其他位置
   - 303 告诉客户端应该用另一个 URL 获取资源
   - 304 表示客户端发送附带条件的请求时，服务器端允许请求访问资源，但未满足条件的情况
4. 4XX 客户端错误状态码
   - 400 表示请求报文中存在语法错误
   - 401 未授权
   - 403 服务器拒绝了请求
   - 404 服务器无法找到所请求的 URL
5. 5XX 服务器错误状态码
   - 500 内部服务器错误
   - 502 错误网关
   - 503 服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。
   - 504 响应超时

## meta标签的组成

metadata用于构建HTML文档的基本结构，处理文档向浏览器提供信息和指示，他本身不是文档的内容。

meta元素包含四大属性：`charset; content; http-equiv; name`

`charset` 声明页面的字符编码：常见值:`UTF-8` Unicode字符编码

```html
<!-- 声明网页编码 -->
<meta http-equiv="content-Type" content="text/html;charset=utf-8">
<!-- HTML5声明网页编码 -->
<meta charset="utf-8" >
```

`content` 配合`name`或者`http-equiv`使用，给这两个属性提供值

`http-equiv` 用作模拟HTTP头部，改变服务器和用户代理行为。HTML5中只有`refres; default-style; content-type`可用

`name`定义页面的元数据，和`content`搭配使用

```html
<!-- 声明文档使用的字符编码 -->
<meta charset='utf-8'>
<!-- 优先使用 IE 最新版本和 Chrome -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<!-- 页面描述 -->
<meta name="description" content="不超过150个字符"/>
<!-- 页面关键词 -->
<meta name="keywords" content=""/>
<!-- 网页作者 -->
<meta name="author" content="name, email@gmail.com"/>
<!-- 搜索引擎抓取 -->
<meta name="robots" content="index,follow"/>
<!-- 为移动设备添加 viewport -->
<meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">

<!-- iOS 设备 begin -->
<meta name="apple-mobile-web-app-title" content="标题">
<!-- 添加到主屏后的标题（iOS 6 新增） -->
<meta name="apple-mobile-web-app-capable" content="yes"/>
<!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
```



## HTML5有哪些新特性？

1. 语义化标签

```html
<!--新增标签 -->
<header/>
<nav/>
<article/>
<main/><aside/>
<detail/>
<section/>
<figure/>
<figcaption/>
<mark/>
<time/>
<summary/>
<footer/>
```

2. LocalStorage, SessionStorage
3. 音频、视频API
4. Canvas API
5. [拖放API](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API)

移除了哪些标签？

```html
<!-- 移除的元素 -->
<basefont> <font> <center> <u> <strike> <tt>
```

**如何区分HTML和HTML5?**

```html
<!--HTML4 -->
<! DOCTYPE html PUBLIC “-//W3C//DTD XHTML 4.0 Transitional//EN” “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
<!-- HTML5 -->
<!DOCTYPE html>
```

**如何处理HTML新标签的兼容性问题？**

```html
<!-- 引入即可 -->
<script src="js/html5shiv.js"></script>
```

::: tip
[HTML5新特性](https://www.cnblogs.com/ainyi/p/9777841.html)
:::

## 浏览器缓存有哪些？通常缓存有哪几种？

1、http缓存是基于HTTP协议的浏览器文件级缓存机制。
2、websql这种方式只有较新的chrome浏览器支持，并以一个独立规范形式出现
3、indexDB 是一个为了能够在客户端存储可观数量的结构化数据，并且在这些数据上使用索引进行高性能检索的 API
4、Cookie一般网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据（通常经过加密）
5、Localstoragehtml5的一种新的本地缓存方案，目前用的比较多，一般用来存储ajax返回的数据，加快下次页面打开时的渲染速度
6、Sessionstorage和localstorage类似，但是浏览器关闭则会全部删除，api和localstorage相同，实际项目中使用较少。
7、application cache 是将大部分图片资源、js、css等静态资源放在manifest文件配置中

## localStorage, SessionStorage, cookie的区别

共同点：都是保存在浏览器端。
区别：

1. 发送不同

   cookie数据始终在**同源**的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递

   sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存

2. 存储大小限制也不同
   cookie数据不能超过4k
   sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大

3. 数据有效期不同
       sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
       localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
       cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

4. 同源策略不同
       sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
       localStorage 在所有同源窗口中都是共享的；
       cookie也是在所有同源窗口中都是共享的

5. LS和SS早期版本浏览器无法使用



## 跨域问题

1. 同源策略

   **同源策略**用于限制一个[origin](https://developer.mozilla.org/zh-CN/docs/Glossary/Origin)的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。

   如果两个 URL 的 [协议(protocol)](https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol)、[端口(port)](https://developer.mozilla.org/en-US/docs/Glossary/Port) (如果有指定的话)和 [主机名(host)](https://developer.mozilla.org/zh-CN/docs/Glossary/Host) 都相同的话，则这两个 URL 是*同源*

2. 解决方案

   1. JSONP
   2. document.domin+iframe(仅限主域相同，子域不同)
   3. postMessage
   4. CORS
   5. vue cli当中设置webpack config
   6. websocket

## 减少http请求次数，具体有哪些做法？



