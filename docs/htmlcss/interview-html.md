# HTML面试题
[[toc]]
## 盒子模型阐述

W3C标准盒：属性width,height只包含内容content，不包含border和padding

IE盒模型：属性width,height包含border和padding，指的是content+padding+border

```css
box-sizing: content-box; /* 标准盒 */
box-sizing: border-box; /* IE盒 */
```

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

## HTML5有哪些新特性？
移除了哪些元素？如何处理HTML新标签的兼容性问题？去和区分HTML和HTML5?

::: tip
[HTML5新特性](https://www.cnblogs.com/ainyi/p/9777841.html)
:::
```
移除的元素
<basefont> <font> <center> <u> <strike> <tt>
```

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
2. 正反向代理怎么设置？

## http无状态



## 减少http请求次数，具体有哪些做法？

