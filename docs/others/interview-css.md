## CSS面试题

## Link和@import的区别

1. link 是 HTML 标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等；

   @import 是 CSS 提供的语法，只有导入样式表的作用。

2. 加载页面时，link 标签引入的 CSS 被同时加载；

   @import 引入的 CSS 将在页面加载完毕后被加载。

3. @import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；

   link 标签作为 HTML 元素，不存在兼容性问题。

4. 可以通过 JS 操作 DOM ，插入 link 标签来改变样式；

   由于 DOM 方法是基于文档的，无法使用@import 的方式插入样式。

5. link 引入的样式权重大于@import 引入的样式。

## CSS选择器优先级

选择器按优先级先后排列：!important>内联>id>class = 属性 = 伪类 >标签 = 伪元素 > 通配符 *

### CSS动画

**Transition**

​	transition关注的是CSSproperty的变化，property值和时间的关系是一个三次贝塞尔曲线cubic-bezier(n,n,n,n)。

```css
transition: width 2s linear 0; 
transition: width 2s cubic-bezier(n,n,n,n) 0; 
/*属性 持续时间 速度效果 延迟*/
/*多个动画用,隔开 可以用all代表全部属性*/
```

**Animation**

​	animation作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果。

```css
.box {
  animation: animation1 2s ease 0s infinite alternate;
  /* 动画名 持续时间 速度效果 延迟 次数 是否反向 */
}
@keyframes animation1 {
  from {background: red}
  to {background: cyan}
}
```

### sass less的作用

CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域），需要书写大量看似没有逻辑的代码，不方便维护及扩展，不利于复用。

Sass(Syntactically Awesome Style Sheets)是对CSS的语法的一种扩充，诞生于2007年，最早也是最成熟的一款**CSS预处理器语言**，它可以使用变量、常量、嵌套、混入、函数等功能，可以更有效有弹性的写出CSS。

Sass是Ruby语言写的，需要先安装Ruby，比较繁琐。

Less是也是CSS预处理器语言，可以在客户端或服务器端运行，帮助我们自定义，管理和重用网页的样式表，开源，不需要装Ruby。

### css实现一个三角形

利用border即可实现。

```css
div {
  height: 0px;
  width: 0px;
  border-top: 50px solid #00ff00;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid transparent;
}
```



### 清除浮动的方式

利用伪元素选择器，在需要清除浮动的元素后方动态插入一个元素来实现。

```css
.warp::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
```

### CSS精灵图

将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的background-image，background-repeat，background-position的组合进行背景定位。
利用CSSSprites能很好地减少网页的http请求，从而很好的提高页面的性能；CSSSprites能减少图片的字节。

优点：
  减少HTTP请求数，极大地提高页面加载速度
  增加图片信息重复度，提高压缩比，减少图片大小
  更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

缺点：
  图片合并麻烦
  维护麻烦，修改一个图片可能需要重新布局整个图片，样式

### rem和rpx有什么区别？为什么用？

em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（16px）。 em特点
em的值并不是固定的；
em会继承父级元素的字体大小。

rem是CSS3新增的一个相对单位（root em，根em），这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。(IE9以下不支持)

rpx 为小程序中使用的相对单位，用法和rem类似， 1rpx = 屏幕宽度/750 px, 所以在屏幕宽度为750的设计稿中，1rpx = 1px。

### display：inline-block 有缝隙，怎么解决？

这个是由于换行符决定的，解决：

1.元素之间不换行 `<span>1</span><span>2</span>`

2. 使用flex布局

### 有哪些布局方式？

文档流浮动布局，定位布局，`flex`布局 `Grid`布局

 圣杯布局和双飞翼布局

## 浏览器兼容问题

```
IE6识别_   _background-color:#1e0bd1;
ie6,7识别*+# +background-color:#a200ff;
ie8识别\0 
ie9识别在属性后\9\0 .background-color:#00deff\9;
```

## z-index是什么？默认值？

z-index 属性设置元素的堆叠顺序，且只在属性position: relative/absolute/fixed 的时候才生效。 `z-index: auto` 是默认值，与`z-index: 0`是有区别的： `z-index: 0` 会创建一个新的堆叠上下文，而 `z-index: auto` 不会创建新的堆叠上下文