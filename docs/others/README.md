# others

## 日常积累

### 重置 css 样式

reset.css

https://meyerweb.com/eric/tools/css/reset/

```css
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

## async await 的异步执行

```js
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromis;
```

## github pages 部署出现空白问题

需要修改 vue 项目的`vue.config.js`属性，选择正确的 url

```js
module.exports = {
  publicPath: "/todo-list/",
};
```

## css 实现单多行文本溢出省略

```css
/*单行*/
.single {
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

/*多行*/
.mutiple {
  display: -webkit-box; /*重点，不能用block等其他，将对象作为弹性伸缩盒子模型显示*/
  -webkit-box-orient: vertical; /*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
  -webkit-line-clamp: 3; /*行数，超出三行隐藏且多余的用省略号表示...*/
  line-clamp: 3;
  word-break: break-all;
  overflow: hidden;
  max-width: 100%;
}
```

<Valine></Valine>
