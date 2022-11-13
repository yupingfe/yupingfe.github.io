# tailwindcss Crash Course Note

使用 功能类(utility classes) 来编写样式

[tailwindcss Docs](https://tailwindcss.com/docs/)

## 编辑器插件

由于Tailwind使用一些自定义的CSS规则，例`@tailwind`, `@apply`或者`@screen`，编辑器不能很好的识别这些规则，因此，需要使用插件。

vscode中使用 [tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)来实现：

* 自动补全
* 格式化lint
* 悬浮预览
* 语法高亮

![vscode插件][intellisense]

## 配置

执行 `npx tailwindcss init` 来生成配置文件

```js
module.exports = {
  content: ['./*.html'], // 表示要处理的文件
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      color: {
        brightRed: 'hsl(12, 88%, 59%)'
        // ...
      }
    }
  }
}
```

## 关于flex布局

用于控制 flex 项目放大和缩小的功能类。 [docs](https://www.tailwindcss.cn/docs/flex)

flex属性是一下属性的简写：

* flex-grow
* flex-shrink
* flex-basis

|  class   | 属性 | desc |
|  ----  |  ----  | ---- |
| flex-1  | `flex: 1 1 0%` | 根据需要放大和缩小，忽略其**初始尺寸** |
| flex-auto  | `flex: 1 1 auto;` | 在考虑到其**初始尺寸**的情况下放大和缩小 |
| flex-initial  | `flex: 0 1 auto;` | 在考虑到其**初始尺寸**的情况下缩小但不放大 |
| flex-none  | `flex: none;` | 阻止一个 flex 项目的放大和缩小 |

## 在自己书写的CSS当中使用工具类(@apply)

Sometime, 你需要自己书写css，并在自己书写的样式当中使用工具类，这是可以使用`@apply`来把工具类插入到你的css当中。

```css
.your-own-class-name {
  @apply rounded-b-lg shadow-md;
}
.select2-search {
  @apply border border-gray-300 rounded;
}
.select2-results__group {
  @apply text-lg font-bold text-gray-900;
}
```

## 代码片段example：实现响应式隐藏和显示

通过设置hidden类来实现小屏设备隐藏，大屏幕展示

```html
<div class="hiddeTailwindn md:flex space-x-6">
  <a href='#'>item 1</a>
  <a href='#'>item 2</a>
  <a href='#'>item 3</a>
</div>
```

针对屏幕尺寸的设定，建议写在最后

``<div class="hidden space-x-6 md:flex">``

[intellisense]:https://tailwindcss.com/_next/static/media/intellisense.c22de782.png
