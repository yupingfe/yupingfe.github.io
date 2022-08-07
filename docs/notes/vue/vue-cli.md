# Vue CLI

## 安装

```shell
npm install -g @vue/cli
yarn global add @vue/cli
```

## 创建项目

```shell
vue create my-project #项目名称不能大写
```

```bash
winpty vue.cmd create my-project #win下面交互提示符不工作，需要这样执行。 或者用powershell
```

代码规范选择：esLint + Standard config

**下一行仅用eslint：在注释当中写`eslint-disable-next-line`**

安装Vuter 代码高亮

vue-cli*(commond line*)基于webpack

配置start命令 "start": `"vue-cli-service serve"`

**SPA (single page application)：**跳转时候不会请求html文件，减少服务器开销，跳转效率更高，根据ajax请求的数据来实现。

## 样式的书写

### css作用域

可以在组件内部的style中加入scoped标签，*scoped*是CSS的作用域。

添加scope后，vue会给标签添加自定义属性：`data-v-xxx`,样式只在当前组件生效。

### BULMA

安装：`yarn add bulma`

引入：全局使用，*main.js*文件当中引入：`import 'bulma/css/bulma.css`

### SaSS

安装： `yarn add sass-loader sass`

使用：在style中加入`lang='scss'`

```scss
<style scoped lang='scss'>
p {
   color:red;
    a {
        font-size:16px;
    }
}
</style>
```

## AJAX请求的配置

***AJAX Asynchronous JavaScript and XML***

#### 封装request

1. 新建request目录,index.js，将所有的请求都放在这里

   ```javascript
   import axios from 'axios' //导入axios
   const ajax = axios.create({baseURL:'http://www.xiongmaoyouxuan.com.api'})
   
   // 封装项目的ajax请求，把get请求得到的promise return
   const getTabs = () => ajax.get('/tabs')
   // 到处对象
   export default {
       getTabs
   }
   ```

   

3. 在main.js上全局引入，并将其绑定在Vue的原型上，这样所有的组件都可以使用
   
   ```javascript
   //main.js 全局引入
   import request from './request'
   //绑定在原型上
Vue.prototype.$http = request
   ```

   
   
4. 通常在生命周期创建阶段发送ajax请求
   
   ```js
   
   // app.vue当中在生命周期create当中调用
   create{
   	this.$http.getTabs('/tabs')
   }
   ```

#### 请求拦截

请求拦截一般说是发送token字符串

```js
ajax.interceptors.request.use(config => {
    // 发送给后端token
    config.headers.token = 'bakabaka'
    return config
})
```

#### 响应拦截

```js
ajax.interceptors.response.use((resp) => {
    if (resp.status === 200) {
        if (resp.data.code === 200) {
            return resp.data.data
        }else {
            return {
                code: resp.data.code
                msg:'请求失败'
            }
        }
    }else {
        return {
            status: resp.status,
            msg: '请求失败'
        }
    }
})
```

## 前后端交互：fetch和axios

### Fetch

JS原生支持的一种发送数据的方式，ES6新增，跟vue没有关系，用的不多。

接口网站：[{JSON} PlaceHolder}](https://jsonplaceholder.typicode.com)

```js
function sendMsg () {
    fetch('request url').then(resp => resp.json()) //这里得到的是封装过的resp，需要通过json方法解析。
    					.then(resp => {
        					console.log(resp)
    })
}
```

### Axios

请求或相应拦截器：可以用来做loading...