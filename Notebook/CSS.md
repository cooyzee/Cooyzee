## CSS

#### BFC
Block Formatting context 块格式化上下文，是WEB页面中盒模型布局的CSS渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

一个HTML元素要创建BFC，满足下列任意一个或多个条件即可：
1. float的值不是none
2. position的值不是static或者relative
3. display的值是inline-block、table-cell、flex、table-caption、inline-flex、flow-root(无副作用)
4. overflow的值不是默认值或hidden
5. ...

what can we do with BFC?
* 利用BFC避免外边距折叠
* BFC包含浮动
* 使用BFC避免文字环绕

Sum: 现在的布局多用flex，默认创建BFC，guess we don't need to go deeply into a matter.

#### nth-child & nth-of-type
css3中新的子元素选择器
`Attn: 子元素下标从1开始`
```
nth-child(n) 选择第n个子元素，无论type
ele:nth-child(n) 选择第n个子元素且类型为ele，不是这选择失败
ele:nth-of-type(n) 选择指定类型ele的第n个元素，不指定ele则会选中所有类型标签的第n个
n可以是数字，关键词或公式。比如选取偶数列：nth-child(even) || nth-child(2n)
在公式中n从0开始遍历
```

#### font-family
```
font-family: system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
```

1. system-ui，使用各个支持平台上的默认系统字体
2. -apple-system， 在一些稍低版本 Mac OS X 和 iOS 上，它针对旧版上的 Neue Helvetica 和 Lucida Grande 字体，升级使用更为合适的 San Francisco Fonts
3. BlinkMacSystemFont，针对一些 Mac OS X 上的 Chrome 浏览器，使用系统默认字体
4. segoe ui，在 Windows 及 Windows Phone 上选取系统默认字体
5. Roboto，面向 Android 和一些新版的的 Chrome OS
6. Helvetica,Arial，在针对不同操作系统不同平台设定采用默认系统字体后，针对一些低版本浏览器的降级方案
7. sans-serif，兜底方案，保证字体风格统一，至少也得是无衬线字体



