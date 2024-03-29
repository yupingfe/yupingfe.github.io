# Markdown: 轻量级标记语言

## 简介

**Markdown**是一种轻量级标记语言，由John Gruber开发，使用纯文本格式编写文档，由于Markdown的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，目前许多网站都广泛使用Markdown来撰写帮助文档或是用于论坛上发表消息。

## Markdown语法

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题

段落以空白行分隔

```

### 文本属性

*斜体* **粗体** 和`等宽字体`

```markdown
使用星号包裹来实现斜体*Italic*
使用两个星号包裹来实现粗体**bold**
使用重音符(backtick)包裹来实现等宽字体`monospace`
```

### 水平线

---

```markdown
---
```

## 列表

#### 无序列表

* 张三
* 李四
* 王五

```markdown
* 张三
* 李四
* 王五
```

#### 有序列表

1. 第一个
2. 第二个
3. 第三个

```markdown
1. 第一个
2. 第二个
3. 第三个
```

## 链接

#### 网址

[我的笔记](https://yupingfe.github.io)

```markdown
[我的笔记](https://yupingfe.github.io)
```

#### 图片

markdown文件自身并不能像doc那样内嵌图片，要想插入图片必须插入图片的地址，相对路径或绝对路径，这样不灵活不好分享，本地图片的路径更改或丢失都会造成调不出图。

```markdown
![图片名称](地址)
```

因此可以将图先行转换为dataURL(base64)，这样既可以嵌入到markdown文档当中。

```markdown
![图片名称](data:image/jpeg;base64,/9j/4AAQS...)
```

这个时候会发现插入的这一长串字符串会把整个文章分割开，非常影响编写文章时的体验。我们可以把大段的base64字符串放在文章末尾，然后在文章中通过一个id来调用，文章就不会被分割的这么乱了。

```markdown
![图片名称](dataUrl)
...
文章的最后放置base64
[dataUrl]:data:image/jpeg;base64,/9j/4AAQS...
```



![图片][avatar]

## 引用

> Stay hungry stay foolish. —Steve Jobs

```markdown
使用大于号(gt)来引用
> Stay hungry stay foolish. —Steve Jobs
```

[avatar]:data:image/jpeg;base64,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
