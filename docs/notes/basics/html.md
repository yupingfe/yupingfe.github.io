# 关于在开发中遇到的HTTP缓存及相关问题
## HTTP缓存

**缓存分类**

- 强缓存
- 协商缓存

1. 当客户端请求某个资源时，会先根据这个资源的 http header 判断它是否命中强缓存，如果命中，则直接从**本地**获取缓存资源，不会发请求到服务器。
2. 当没有命中强缓存时，客户端会发送请求到服务器，服务器通过 request header 验证这个资源是否命中协商缓存，如果命中，服务器将返回 304，告诉客户端从缓存中获取。
3. 当协商缓存也没命中时，服务器就会将资源返回客户端。

- 当 F5 刷新网页时，跳过强缓存，但是会检查协商缓存
- 当 CTRL+F5 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存

**强缓存**

- `Expires`（是 http1.0 时的规范，值为一个绝对时间的 GMT 格式的时间字符串，代表缓存资源的过期时间）
- `Cache-Control:max-age`（是 http1.1的规范，强缓存利用其 max-age 值来判断缓存资源的最大生命周期，它的值单位为秒）

Cache-Control 还有一些常用**其它**属性：

1. no-cache：需要进行协商缓存，发送请求到服务器确认是否使用缓存。
2. no-store：禁止使用缓存，每一次都要重新请求数据。
3. public：可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。
4. private：只能被终端用户的浏览器缓存，不允许CDN等中间代理服务器对其缓存。

```
Cache-Control 与 Expires 可以在服务端配置同时启用，同时启用的时候 Cache-Control 优先级高
强缓存缺点
```

缓存过期之后，不管资源有没有发生改变，都会重新发请求获取资源，而我们希望是在资源文件没有变化的情况下，即使过期了也不重新获取资源，继续使用旧资源，所以就有了协商缓存

**协商缓存**

- **Last-Modified / If-Modified-Since**

`Last-Modified` 值为资源最后更新时间 `GMT 格式的时间`，随服务端 response 返回， 当浏览器再次请求该资源时，request 请求头中会包含 `If-Modified-Since`，该值为缓存之前返回的 `Last-Modified`，服务器收到 `If-Modified-Since` 后，根据资源的最后修改时间判断是否命中协商缓存。

- **ETag / If-None-Match**

ETag 表示资源内容的唯一标识 `一串数字码`，随服务器端 response 返回，服务器通过比较请求头部的 If-None-Match 与当前资源的 ETag 是否一致来判断资源是否在两次请求之间有过修改，如果没有修改，则命中协商缓存

::: tip
**有了 Last-Modified / If-Modified-Since 为什么还需要  ETag / If-None-Match ?** 

因为如果本地打开了缓存文件，即使没有对文件进行修改或者在一定周期内做了修改又改了回来，结果都会造成 Last-Modified 被修改，服务器端不能命中缓存

:::

**结论**

- 强缓存优先级高与协商缓存
- 只要使用缓存，服务器均不会返回资源
- 强缓存不会发送请求到服务器
- 协商缓存会发送请求到服务器

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

## TCP三次握手和四次挥手

**三次握手**

| Client               | Server                                 |
| -------------------- | -------------------------------------- |
| SYN = 1 seq  = x     |                                        |
|                      | ACK = 1, ack = x + 1, SYN = 1, seq = y|
| ACK = 1, ack = y + 1 |                                        |
| **ESTABLISHED**      | **ESTABLISHED**                        |

**四次挥手**

| Client                       | Server               |
| ---------------------------- | -------------------- |
| FIN = 1, seq = u             |                      |
|                              | ACK = 1, ack = u + 1 |
|                              | FIN = 1, seq = v     |
| ACK = 1, ack =  + 1          |                      |
| Wait 2 Max Sequence Lifetime | **CLOSED**           |
| **CLOSED**                   |                      |

**【问题1】为什么连接的时候是三次握手，关闭的时候却是四次握手？**
答：因为当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，"你发的FIN报文我收到了"。只有等到我Server端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四步握手。

**【问题2】为什么TIME_WAIT状态需要经过2MSL(最大报文段生存时间)才能返回到CLOSE状态？**

答：虽然按道理，四个报文都发送完毕，我们可以直接进入CLOSE状态了，但是我们必须假象网络是不可靠的，有可以最后一个ACK丢失。所以TIME_WAIT状态就是用来重发可能丢失的ACK报文。

[参考资料](https://blog.csdn.net/imilli/article/details/50620104)