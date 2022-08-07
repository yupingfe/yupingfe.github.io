# **HTTP**协议笔记

## TCP/IP

TCP/IP 协议族里重要的一点就是分层。TCP/IP 协议族按层次分别 分为以下 4 层：

**应用层、传输层、网络层和数据链路层。**

## HTTP常用状态码

|  状态码   |   原因短语    |说明                 |
| ------------- | -------------------- | ------------- |
|  200   |   OK    |表示从客户端发来的请求在服务器端被正常处理了|
| 204 | No Content |该状态码代表服务器接收的请求已成功处理，但在返回的响应报文 中不含实体的主体部分|
| 206 | Partial Content |该状态码表示客户端进行了范围请求，而服务器成功执行了这部分 的 GET 请求。响应报文中包含由 Content-Range 指定范围的实体内容|
| 301 | Moved Permanently |永久性重定向|
| 302 | Found |临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。|
| 304 | Not Modified |该状态码表示客户端发送附带条件的请求 时，服务器端允许请求访问资源，但未满足条件的情况。|
| 400 | Bad Request |该状态码表示请求报文中存在语法错误|
| 401 | Unauthoried |认证失败，第一次弹输入密码，第二次表示用户认证失败。|
| 403 | Forbidden |该状态码表明对请求资源的访问被服务器拒绝了|
| 404 | Not Found |该状态码表明服务器上无法找到请求的资源。除此之外，也可以在 服务器端拒绝请求且不想说明理由时使用|
| 500 | Internal Server Error |该状态码表明服务器端在执行请求时发生了错误|
| 503 | Service Unavailable |该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求|

## 请求头首部字段

| 首部字段名          | 说明                                          |
| ------------------- | --------------------------------------------- |
| Accept              | 用户代理可处理的媒体类型                      |
| Accept-Charset      | 优先的字符集                                  |
| Accept-Encoding     | 优先的内容编码                                |
| Accept-Language     | 优先的语言（自然语言）                        |
| Authorization       | Web认证信息                                   |
| Expect              | 期待服务器的特定行为                          |
| From                | 用户的电子邮箱地址                            |
| Host                | 请求资源所在服务器                            |
| If-Match            | 比较实体标记（ETag）                          |
| If-Modified-Since   | 比较资源的更新时间                            |
| If-None-Match       | 比较实体标记（与If-Match相反）                |
| If-Range            | 资源未更新时发送实体Byte的范围请求            |
| If-Unmodified-Since | 比较资源的更新时间（与If-Modified-Since相反） |
| Max-Forwards        | 最大传输逐跳数                                |
| Proxy-Authorization | 代理服务器要求客户端的认证信息                |
| Range               | 实体的字节范围请求                            |
| Referer             | 对请求中URI的原始获取方                       |
| TE                  | 传输编码的优先级                              |
| User-Agent          | HTTP 客户端程序的信息                         |

## 响应头首部字段

| 首部字段名    | 说明                    |
| ------------- | ----------------------- |
| Accept-Ranges | 是否接受字节范围请求    |
| Age           | 推算资源创建经过时间    |
| ETag          | 资源的匹配信息          |
| Location      | 令客户端重定向至指定URI |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 |
| Retry-After        | 对再次发起请求的时机要求     |
| Server             | HTTP服务器的安装信息         |
| Vary               | 代理服务器缓存的管理信息     |
| WWW-Authenticate   | 服务器对客户端的认证信息     |

## 实体首部字段

| 首部字段名       | 说明                          |
| ---------------- | ----------------------------- |
| Allow            | 资源可支持的HTTP方法          |
| Content-Encoding | 实体主体适用的编码方式        |
| Content-Language | 实体主体的自然语言            |
| Content-Length   | 实体主体的大小（单位 ：字节） |
| Content-Location | 替代对应资源的URI             |
| Content-MD5      | 实体主体的报文摘要            |
| Content-Range    | 实体主体的位置范围            |
| Content-Type     | 实体主体的媒体类型            |
| Expires          | 实体主体过期的日期时间        |
| Last-Modified    | 资源的最后修改日期时间        |

