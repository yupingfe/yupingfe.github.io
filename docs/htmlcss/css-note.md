# CSS

## inline-block、inline 和 block 的区别?

Block 是块级元素，其前后都会有换行符，能设置宽度，高度，margin/padding 水平垂直方向都有效。

Inline：设置 width 和 height 无效，margin 在竖直方向上无效，padding 在水平方向垂直方向都有效，前后无换行符

Inline-block：能设置宽度高度，margin/padding 水平垂直方向 都有效，前后无换行符

## 为什么 img 是 inline 还可以设置宽高？

img 是可替换元素。

在 CSS 中，可替换元素（replaced element）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。
简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。
典型的可替换元素有：`<iframe> <video> <embed> <img>`
CSS 的 content 属性用于在元素的 ::before 和 ::after 伪元素中插入内容。使用 content 属性插入的内容都是匿名的可替换元素。

## CSS3的新特性

1. 伪类选择器

   ```css
   :first-child; :last-child; nth-child(n);
   ::before; ::after
   :first-letter; :first-line
   ```

2. 背景边框颜色透明度

   ```css
   background-size; background-origin;
   border-radius; border-image;
   box-shadow;
   rgba()
   ```

3. 文字效果

   ```css
   text-shadow; word-wrap;
   ```

4. 2D和3D转换

   ```css
   transform: translate(), rotate(), scale(), skew(), perspective()
   ```

5. 动画和过渡

   ```css
   aniamtion, transition
   ```

   

6. 多列

7. 用户界面