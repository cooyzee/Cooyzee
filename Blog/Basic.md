# Basic knowledge about html

## 语义化
h5新增标签（常用）：header, footer, section, nav, video, audio

## BFC
块级格式上下文(a part of a visual CSS rendering of a web page)
```
bfc并不是一个css属性，而是css中基于box的一个布局对象，它是页面中的一块渲染区域，并且有一套渲染规则
它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
```

* 创建BFC
1. 浮动元素
2. 绝对定位元素
3. 行内块元素
4. 表格
5. overflow
5. flex, grid

* 外边距重叠（只会发生在属于同一BFC的块级元素之间）
1. 同一层相邻元素
2. 没有内容将父元素和后代元素隔开
3. 空的块级元素

## Closure
1. 闭包是指有权访问另一个函数作用域中的变量的函数     
2. 当函数可以记住并访问所在的词法作用域时，就产生了闭包
3. ·
                                                              


