# computer language

* 机器语言，汇编语言，高级语言
* 解释类，编译类
* 1946计算机，因特网1969，www1990，JS1995

## Machine language

一种指令集的体系，这种指令集称为机器码，是电脑CPU可以直接解读的数据。

## 汇编语言

汇编语言和机器语言实质是相同的，都是直接对硬件操作，只不过指令采用了英文缩写的标识符，容易识别和记忆。  
*必须经过汇编，生成目标文件，然后执行*  
*直接操作计算机硬件*

## 高级语言
* 编译型，解释型  
（Java是解释型语言）

## JavaScript
高级语言，轻量级脚本语言，动态语言，不具备开发操作系统的能力，嵌入宿主环境（浏览器，Node）

* 发明目的是作为浏览器的内置脚本语言
* 目前唯一一种浏览器通用脚本语言，所有浏览器都支持
* 来源多样，函数式和面向对象的混合编程风格
* ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现。

1. var 重复声明赋值会覆盖，let 重复声明Uncaught SyntaxError
2. 变量提升
3. switch语句采用的是严格相等运算符
4. 6种数据类型number, string, boolean, null, undefined, object(狭义object，array，function--为JS的函数式编程奠定了基础)
5. typeof null ? -> object；最开始只有5种数据类型；Number(null) === 0；Number(undefined) === NaN 
6. instanceof 可以区分数组和对象
7. 自动转化为false的6个值：undefined null false 0 NaN "" ''
8. JS对15位的十进制数都可以精确处理

```
Any application that can be written in Javascript, will eventually be written in Javascript.
— Jeff Atwood
```

#### Number
```
* JS内部所有数字都是以64位浮点形式存储 1 === 1.0 // true
* 由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。
* 单纯的数学运算几乎没有可能抛出错误
```

#### Object
```
* 可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性。
```

#### Function
```
* 如果同时采用function命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义。
* 全局作用域，函数作用域，块级作用域
* eval命令接受一个字符串作为参数，并将这个字符串当作语句执行。
* 闭包：函数内部的函数，读取函数内部变量，函数内外部连接的桥梁
```
Function.length 函数的形参个数
Function.name 函数名称(anonymous)
Function.prototype.call(thisArg, arg1, arg2, ...)
Function.prototype.apply(thisArg, [argsArray])
call()方法与apply()方法的区别只有一个，前者接受的是一个参数列表，后者接受的是一个包含多个参数的数组。

Function.prototype.bind(thisArg[,arg1[, arg2[, ...]]])
bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被bind的第一个参数指定，其余的参数将作为新函数的参数供调用时使用。

Function.prototype.toString()

#### CSS

1. 影响渲染效果的不是选择器在 HTML 代码中出现的顺序，而是选择器在 CSS 文件中出现的顺序。<br>
举个栗子：多个class书写顺序无所谓前后

#### Rust

Rust致力于成为优雅解决高并发和高安全性系统问题的编程语言，适用于大型场景。
标准Rust性能与标准C++性能不相上下

#### DPR

device pixel ratio

dpr = 设备像素 / css像素 （某一方向上）


#### Others

* `RFC`  请求意见稿（Request for comment）
* `AFAIK` is used to convey uncertainty when answering a question in online texting or email. This expression is also used interchangeably with the acronym IIRC(If I Recall Correctly)
* `safari` n. 狩猎
