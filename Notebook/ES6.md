## ES6

ES6既是一个历史名词，也是一个泛指，含义是5.1版本以后的JavaScript的下一代标准，涵盖ES2015、ES2016、ES2017。

Javascript的创造者是Netscape公司。
**ECMAScript**和**JavaScript**：
```
前者是后者的规格，后者是前者的一种实现（ECMAScript方言还有Jscript和ActionScript）。
日常场合二者可以互换。
```

#### let & const

1. let声明的变量只在它所在的代码块有效。
1. 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
1. “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
1. 不允许重复声明
1. const一旦声明变量，就必须立即初始化，不能留到以后赋值。
1. ES6 声明变量的六种方法：var function let const import class

#### 解构赋值

解构赋值的规则是，只要等号右边的值不是数组或对象，就先将其转为对象。<br>
undefined 和 null 无法转为对象，因此不能对他们进行解构赋值

```
useful case：交换变量的值
let x = 1, y = 2;
[x, y] = [y, x]
```

#### Symbol

它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

#### Set
它类似于数组，但是成员的值都是唯一的，没有重复的值。
```
Set.prototype.constructor：构造函数，默认就是Set函数。
Set.prototype.size：返回Set实例的成员总数。
add(value)：添加某个值，返回 Set 结构本身。
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。
```