# Node.js

NodeJS中文文档： http://nodejs.cn/api/

Node.js的创始人**莱恩·达尔（Ryan Dahl）**，后来去了google，推出**deno**。

适合做**高并发**处理

## npm

包资源管理工具 **node package manager**

`npm install -g <package-name> --save-dev`

## package.json

项目配置文件，可以使用`npm init`生成，如果用脚手架创建项目，一般会自动生成。

### npm scripts

```bash
$ npm run serve
$ npm run build
```

gulp自动化构建工具，webpack是模块打包工具。

## 模块化

规范：AMD、CMD、CommonJS、ES Modules

requireJS是遵循AMD（异步模块定义）

NodeJS中模块化遵循的是CommonJS的模块化规范

CommonJS中定义（导出）模块：module.exports`或`exports`，使用`require`来引入（依赖）模块。

**模块：核心模块、三方模块、自定义模块。**前两种直接通过名称引入，自定义模块要写相对路径。

### 核心模块

* http模块 --- http网络请求、响应的处理
* crypto --- 实现加密功能，如用户密码
* events --- 事件触发器
* fs --- 文件系统：同异步读写文件
* path --- 路径模块
* process --- 进程
* querystring  --- 查询字符串

## 创建webserver

服务器 apache tomcat iis webpack-dev-server

```bash
$ npm init -y # 创建package.json
```

```js
// 1. 自定义 webserver app.js
const http = require('http') // 引入http核心模块
// 2. 创建server对象
const server = http.createServer((request, response) => {
    // req 表示请求、resp表响应对象
    const { url, method } = request
    response.write('hello world')
    response.end() // 表示相应结束，必须调用
}) 
// 3. 监听指定端口
server.listen(3000, () => {
	console.log('server running at http://localhost:3000')
})

```

执行：`node app.js`

可以使用`nodemon`来实现监听node应用中文件的修改，当文件修改后能自动重启。

安装之后再package.json当中编写脚本 `"start": "nodemon app.js"`，之后`npm start`既可采用nodemon运行。

## 路由处理：根据路径处理请求

前后端路由区别：前端路由不会发起http请求

hash值的变化不会发送到后端，因此也不会向后端发请求。

```js
const fs = require('fs') // 引入fs模块
// 处理请求，服务器端的路由
switch (url) {
    case 'html/login.html':
        fs.readFile('./html/login.html', (error, data) => {
            if (error) {
                console.log('failed to read:', error)
                return
            } 
            console.log(data + '')
            // 修改响应头
            response.writeHead(200, {
                'Content-type': 'image/svg+xml'
            })
            // 把data write返回
            response.write(data)
       	    response.end() 
        })
        break
    default:
        // 默认响应
        response.write('hello world')
        response.end() // 必须调用end表示结束
}
```

# MongoDB

**非关系型数据库**，是一个基于**分布式**文件存储的数据库。为web应用提供可扩展高性能数据存储解决方案。

## 概念

* database -- 数据库
* collection -- 集合（相当于MySQL中的table)
* doucment -- 文档 （相当于MySQL中的row）
* field -- 字段
* index --索引
* primary key -- 主键（唯一标识），在mongodb当中，主键不能实现自动增长，因为是分布式，无法获取远程。会自动生成**_id作为主键**

## 安装

手动启动数据库实例：

```bash
$ mongod --dbpath d:\db\data # cmd
$ mongod --dbpath /d/db/data # bash
```

MongoDB端口号：**27017** mySQL端口号：**3306**

 **图形化工具** Robo 3T

## 常用操作

* show dbs 显示数据库
* db 查看当前所在数据库 `db.getName`
* use db-name 切换数据库
* db.createCollection(name) 创建集合
* db.getCollectionNames  获取数据库中所有集合的名称
* db.getCollection(cname) 根据集合名称获取对象，等于`db.<cname>`
* 

**CRUD** 操作：

* **Create** 插入文档
  * `db.stus.insert(obj)`
    * `db.stus.insert({name: 'cyan', age: 18, gender: 'male'})`
  * `db.stus.insertOne(obj)`
  * `db.stus.insertMany([obj1, obj2])`
* **Read** 
  * db.stus.find()  ---查询文档
* **Update **修改文档
  * db.stus.update(condition, doc) 
    * <doc />当中加入`{$set:}`会保留原来未修改的数据，而不是全部覆盖。
  * db.stus.updateOne(condition, doc)
  * db.stus.updateMany(condition, doc)  
* **Delete**
  * db.stus.remove()
  * db.stus.deleteOne()
  * db.stus.deleteMany()

# Express: Nodejs框架

## INSTALL

`$ npm install express --save`

tips: **--save**是保存在dependencies，**--dev**是保存至devDependencies

```js
// 引入核心模块path
const path = require('path')
// 引入 express
const express = require('express')

// 创建Express 应用实例
const app = expresss()

// 监听端口
app.listen(9257, () => {
    console.log('server running at http://localhost:9527')
})

// 使用中间件
app.use(express.json())
app.use(express.urlencoded({ extended true })

// 路由处理
app.get('/login.html', (req, res, next) => {
    // 从GET请求查询字符串参数中获取使用的数据
    const { param1, param2 } = req.query
     
    // 必须取绝对路径，因此要引入path模块, __dirname 可以获取绝对路径，将其与相对路径拼接
    res.sendFile(path.join(__dirname, './login.html'))
})

app.post('/login.do', (req, res, next) => {
    // 从POST请求主体（body）中获取从传递的参数数据，需要使用中间件来处理请求主体的数据，不然res.body会提示undefined
    const { username, pwd } = req.body
    res.json({
        code: 200,
        data: {
            nickname: 'cyan'
        }
    })
})

// 动态路由：根据用户名获取用户信息
app.get('/userinfo/:username', (req, res, next) => {
    const { username } = req.params
    res.json({
        code: 200,
        data: {
            username
        }
    })
})
```

**postman 用来测试发送POST请求**

## 利用Express托管静态文件

```js
// 设置静态资源目录，通常静态资源包含html css js 图片 视频等，可以多次引用多个文件。
app.use(express.static('public'))
app.use(express.static('files'))
```

## Express Generator 应用生成器

类似与vue-Cli 能够构建项目的基本骨架结构

执行`npx express-generator`  和 `npm install`

### tips: 模板引擎

* art-template
* handlebars
* EJS

# RESTful:架构

RESTful：**Representational State Transfer 表现层状态转化**

[阮一峰理解RESTful架构](https://www.ruanyifeng.com/blog/2011/09/restful.html)

资源：任何事物，只要又被引用到的必要，它就是一个资源。资源可以是实体（例如手机号），也可以是一个抽象的概念（价值）。要让一个资源可以被识别，需要有一个唯一标识。在Web中这个唯一标识就是**URI（Uniform Resource Identifier）**。URI既可以看成是资源的地址，也可以是资源的名称。

操作资源，通过不同的http请求方法，可以对统一资源执行不同的操作：

* GET --- 获取
* POST --- 创建（向服务器提交数据）
* PUT --- 完全修改
* PATCH --- 部分修改
* DELETE ---删除

# 例子：电商类后台管理系统

* 商品管理

  * 新增、查询、修改、删除

* 用户管理

  * 登录、退出

  

## 创建项目

 ```js
// app.js
// 引入 express、创建应用、监听端口
const express = require('express')
const app = exrepss()
app.listen(9527, () => {
    console.log('server running at http://localhost:9527')
})
 ```

```js
// package.json
"scripts": {
    "start"："nodemon app.js" // 设置自动运行
}
```

```js
// routes/products.js
const express = require('express')
const router = express.Router()
// GET
// 查询商品信息
router.get('/', (req, res) => {
    res.send('查询商品')
})

// POST
// 新增商品
router.post('/', (req, res) => {
    res.send('新增商品')
})
// 修改商品
router.put('/', (req, res) => {
    res.send('修改商品')
})
// 删除商品
router.delete('/', (req, res) => {
    res.send('删除商品')
})
module.exports = router
```

```js
// 上方配置完成后在app.js引入路由中间件
const productsRouter = require('./routes/products.js')
app.use('/api/v1/products', productsRouter)
```

可以通过postman向http://localhost:9527/api/v1/products发送请求测试

**Mongoose库**

#### node操作mongoDB的简单例子

```js
router.post('/', (req, res) => {
    const { title, price, img, brand, address} = req.body // 注意要配置好路由中间件
    /* 保存到数据库当中 */
	// 连接服务器
    const mongoose = require('mongoose')
    mongoose.connect('mongodb:// localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true} )
})
	// 创建model
	const Product = mongoose.model('product', {
        title: String,
        price: Number,
        // ...
        createdAt: Number
    })
    // 根据model创建实例
    const myProduct = new Product({
        title, price, img, brand, address,
        createdAt: Date.now() // 另外可以 new Date().getTime() .valueOf()或 +new Date()等方法创建时间戳
    })
    // 调用save() 方法保存到数据库中
    myProduct.save().then(successData => {
        res.json({
            code: 200,
            data: successData
        })
    }).catch(err => {
        res.json({
            code: 400,
            data: err
        })
    })
```

## CURD操作

### 数据增加 

#### Schema

```js
// models/index.js
const mongoose = require('mongoose')

// 定义Schema（数据结构）
const productsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    // ...
})

// 根据Schema生成model
const ProductsModel = mongoose.model('product', productsSchema)

module.exports = {
    ProductModel
}
```

在products.js当中替换掉创建model的部分

```js
// ... 
const { ProductsModel } = require('./models/index.js') // 引入
const myproduct = new ProductsModel()
```



#### Review: 关于原型链Prototype

```js
function Student(name) {
    this.name = name
}

Student.test = function() {} // 不写在原型上的方法，实例无法调用

Student.protoype.study = function () {
    console.log(this.name + 'studying')
    // __proto__ 指向 Object.prototype
    // Object.prototype.__proto__ 指向 null，原型链的终点
    // 构造函数的this指向new出来的实例本身
}
const stu1 = new Student('Cyan')
// __proto__指向构造函数的原型，即Student.prototype

stu1.study() // 会根据原型链向上查找study方法并调用，函数体this指本身

console.log(stu.toString()) // 根据原型链在Object.prototype当中找到，输出[object Object]
stu.eat() // 报错，沿着原型链寻找，找不到eat方法，因此为undefined，调用undefined(),因此报错。
```

### 数据更新

```js
// products.js
// 修改商品
router.put('/', (req, res) => {
	const { _id, title, price, img, brand, address } = req.body
	// 将修改的数据保存到数据库, 通过update方法，第一个参数传条件
    ProductsModel.update({ _id }, { title, price, img, brand, address }).then(resData => {
        res.json({
            code:200,
            data: resData
        })
    })
}).catch(err => {
    res.json({
        code: 400,
        data: err.message
    })
})
```

### 数据删除

通常采用动态路径,这里是**物理删除**，实际操作会做**逻辑删除**，数据并不会真的被删掉。

```js
// 删除商品
router.delete('/:_id', (req, res) => {
    Products.remove({ _id }).then().catch()
})
```

### 数据查询

```js
router.get('/:_id?', (req, res) => {
    // id加问号表示判断是否存在
    const { _id } = req.params
    if (_id) {
        // id存在，查询某一件商品
        ProductsModel.findById(_id).then().catch()
    } else {
        // 分页查询,通过拼接query字符串查询
        const { page = 1, pageSize = 2 } = req.query
        ProductsModel.find()
            .limit(ParseInt(pageSize)) // 分页
            .skip((page - 1) * pageSize) // 跳过的条数
    }
})
```

## 例子：用户名和密码

### 创建用户名和密码

```js
// app.js 添加新的路由中间件
const usersRouter = require('./routes/users.js')
app.use('/api/v1/users', usersRouter)
```

```js
// 创建用户Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
})
const UserModel = mongoose.model('user', userSchema)
module.exports = {
    // ...
    UserModel
}
```

```js
// users.js
const express = require('express')
cont { userModel } = reuqire('../models.index') // 引入创建好的model
const router = express.Router()
// POST 方法创建用户
router.post('/', (req, res) => {
    // 从POST的body当中拿到传过来的用户名和密码
    const { username, password } =req.body
    // 通过Save方法保存
    new UserModel({ username, password })
    .save()
    .then(successData => {
        res.json({
            code: 200,
            data: successData
        })
    })
    .catch()
})

module.exports = router
```

#### 密码加密

node.bcrypt.js

```js
// users.js
// 引入bcrypt
const bcrypt = require('bcrypt')
bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
        res.json({
            code: 400,
            data: err.message
        })
        return
    }
    new UserModel({ username, password: hash})
        .save().then()
})
```

### 用户登录

用户登录：sessions.js，同样创建路由中间件，并引入app.js。

一般用户登录用post请求，注销用delete请求。

```js
router.post('/', (req, res) => {
    // 首先通过query拿到用户输入的用户名和密码
   	const { username, password } = req.body
    // 判断用户名是否存在
    userModel.findOne({ username })
    .then( successData => {
        // 有用户名
        if (successData) {
            // 比较密码
            bcrypt.compare(password, successData.password, function(err, result) {
                if (err) {
                    // 处理错误情况
                    res.json()
                    return
                }
                if (result) {
                    // result为真，密码比对正确
                    res.json({
                        code: 200,
                        data: {
                            valid: true,
                            userInfo: {
                                username,
                                token: 'fdsafds...'
                            }
                        }
                    })
                }
            })
        } else {
            // 没有用户信息。返回错误
            res.json()
        }
    })
})
```

### token生成

使用插件 jwt-simple

```js
const jwt = require('jwt-simple')
const payload = {
    username,
    exp: Math.ceil(Date.now() / 1000) + 5 * 60 // 设置token时效为5分钟
} // 保存到token当中的数据
const secret = '1dfsf342r43t43tw' // 模拟token编码的密钥
const token = jwt.encode(payload, secret) 

```

## 文件上传

### Tips: cookie与webStorage区别

**Cookie**

* 有时效性，如果未设置时间，会话结束即清空。

* 存储容量为4KB，早期浏览器还有存储条数限制（50条）。
* 存储明文数据
* 占用网络带宽，每次请求会带上cookie

**webStorage**

* 时效性根据local和session来区分
* 容量为5MB
* 不会占用网络上传带宽
* 有成套的API，操作便利

处理文件上传的中间件：`multer` `formidable`

`multipart/form-data` 二进制数据流

```js
// files.js
// ...
const formidable = require('formidable')
const path = require('path') // 引入path更改文件目录

router.post('/', (req, res) => {
    const form = formidable({
        // 更改上传文件的路径
        uploadDir: path.join(__dirname, '../public/uploads'),
        keepExtensions: true // 保留扩展名
        
        // 解析请求内容
        form.parse(req, (err, fields, files) => {
        if (err) {
            console.log('解析异常', err)
            return
        }
        res.json({ fields, files }) // fileds返回文本，files返回文件
    	})
    })
})

router.get('/', (req, res) => {
    res.send(`
	<form action="/api/v1/files" method="post enctype="multipart/form-data">
	<input type="text" name="nickname" placeholder="用户昵称" /> <br>
	<input type="file" name="files" /> <br>
	<button>提交</button>
	</form>
	`)
})

```

formData

```html
<h1>文件上传：</h1>
<form class="file-form" action="http://localhost:27017/api/v1/files" method="POST" enctype="multipart/form-data">
    <input type="text" name="filename" placeholder="文件名" />
    <input type="file" name="files" />
    <button>提交</button>
</form>
<div class="info">
    
</div>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    document.querySelector('.file-form').addEventListener('submit', e=> {
        e.preventDefault() // 阻止默认提交动作
        const formData = new formData(e.target)
        formData.append('type', 'test-type')
        formData.set('set-test', 'test-test-test')
        // 利用axios发送数据
        axios({
            url: 'http://localhost:9527/api/v1/files'
            method:'POST',
            data: formData,
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }).then(resData => {
            console.log('上传结果', resData)
        }).catch(err => {
            console.log('异常', err)
        })
    })
</script>
```

解决跨域问题：使用CORS插件

`npm install cors --save`

```js
// 后端app.js
const cors = require('cors')
app.use(cors())
```

# Socket通信

Socket（套接字）实现双向通信的技术，使得客户端能够向服务器发送消息，服务器也能主动向客户端发送消息。

使用http也可以通过ajax轮循的方式来实现双向通信，但**实时性**上无法达到要求。

![img](https://www.runoob.com/wp-content/uploads/2015/09/37360672.jpg)

## 服务端

1. 创建ServerSocket对象，绑定监听的端口
2. 调用方法监听客户端请求
3. 链接建立后，通过输入流读取客户端发送的请求信息
4. 通过输出流向客户端发送响应信息
5. 关闭相关资源

## 客户端

1. 创建Socket对象，知名需要连接的服务器地址和端口
2. 连接建立后，通过输出流向服务器发送请求信息
3. 通过输出流获取服务器响应的信息
4. 关闭相关资源

## socket.io

安装Socket.io：`npm install socket.io`

```js
// index.js
// 创建express应用
const app = require('express')()
// 基于Express创建Http服务器
const http = require('http').createSever(app)
// 基于http server对象创建服务端Socket对象
const io = require('socket.io')(http)
// 注册connection事件,等待客户端连接
io.on('connection', socket => {
    console.log('user connected')
    // socket参数代表的是连接成功的客户端的引用
   	socket.emit('to-client', '欢迎登录')
    
    //注册自定义事件，用于接收从客户端发送的消息
    socket.on('to-server', msg => {
        console.log('message:'+ msg)
    })
    socket.on('disconnected', socket => {
        console.log('user disconected')
        
    })
})
// 路由
app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>')
    res.sendFile(__dirname + '/index.html')
})
// 监听 3000 端口
http.listen(3000, () => {
    console.log('listen on *:3000')
})
```

```html
<!-- index.html 相当于客户端 -->
<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: 0.5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
    </style>
  </head>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
      <script src="/socket.io/socket.io.js"></script>
      <script src="jQuery"></script>
      <script>
          $(function () { // 即$(document).ready(function () {})
              const socket = io() // 客户端连接服务端，创建socket对象
              $('form').submit(function(e) {
                  e.preventDefault(); // 阻止默认行为
                  // 触发事件，向服务端发送消息
                  socket.emit('chat message', $("#m").val())
                  // 清空消息框
                  $('#m'),val('') 
                  return false // 阻止默认和冒泡
              })
          })
      </script>
  </body>
</html>
```


