## JavaScript

JS中有8种数据类型：Undefined，Null，Boolean，Number，String，Symbol，Bigint, Object <br>
Bigint: 用于当整数值大于Number数据类型支持范围时。9007199254740995n
```
The latest ECMAScript standard defines eight data types:
Seven data types that are primitives:
Boolean, Null, Undefined, Number, String, Symbol, Bigint
and Object
All types except objects define immutable values
```

MDN: [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

#### Basic

##### typeof & instanceof

typeof能够正确判断基本数据类型还有function，除了null <br>
```
In the first implementation of JavaScript, JS values were represented as a type
tag and a value. The type tag for objects was 0. null was represented as the NULL pointer
(0x00 in most platforms). Comsequently, null had 0 as type tag, hence the "object" typeof
return value.
```
instanceof 能准确判断复杂数据类型
```
// L instanceof R
fucntion instance_of(L, R) {
  L = L.__proto__;
  while(true) {
    if(L === null) {
      return false;
    }
    if(L === R.prototype) {
      return true;
    }
    L = L.__proto__;
  }
}

```

所以怎么正确判断数据类型呢？不管是基本类型还是复杂类型

```
Object.prototype.toString.call()
.replace(/\[object\s(.+)\]/, "$1").toLowerCase()
```

##### 类数组

* 有length属性，属性索引为非负整数，不具有数组所具有的方法
* maybe定义了遍历器接口Symbol.iterator
* 可转为真正的数组
```
Array.from(array-like object)
[...arrayLike]
Array.prototype.slice.call(arrayLike, start)
```

##### for of, for in, forEach & map
* `for...of`: 只要具有iterator接口，适用范围包括Array, Set, Map, array-like object, Generator 对象, 字符串。
* `for...in`: 遍历对象自身的和继承的可枚举属性，可中断
* `forEach`: only for Array, 不能中断，没有返回值
* `map`: only for Array, 不能中断，返回新数组

ps: Object.keys()返回对象所有可枚举属性的字符串数组
```
定义不可枚举属性
Object.defineProperty(obj, "property", {
    value: "value",
    enumerable: false
});

new() 到底做了什么
1. 创建一个新对象
2. 将构造函数的作用域赋给新对象 bind this
3. 执行构造函数中的代码
4. 返回新对象
```

#### 数组乱序

数组乱序指的是：将数组元素的排列顺序随机打乱。

将一个数组进行乱序处理，是一个非常简单但是非常常用的需求。 比如，“猜你喜欢”、“点击换一批”、“中奖方案”等等，都可能应用到这样的处理。

```
arr.sort(() =>Math.random() - 0.5);
这种方式并不是真正意思上的乱序，一些元素并没有机会相互比较， 最终数组元素停留停留位置的概率并不是完全随机的。

v8在处理sort方法时，使用了插入排序和快排两种方案。 当目标数组长度小于10时，使用插入排序；反之，使用快速排序。

其实不管用什么排序方法，大多数排序算法的时间复杂度介于O(n)到O(n²)之间，
元素之间的比较次数通常情况下要远小于n(n-1)/2，
也就意味着有一些元素之间根本就没机会相比较（也就没有了随机交换的可能），
这些 sort 随机排序的算法自然也不能真正随机。

```

**Fisher–Yates**

为什么叫 Fisher–Yates 呢？ 因为这个算法是由 Ronald Fisher 和 Frank Yates 首次提出的。

这个算法其实非常的简单，就是将数组从后向前遍历，然后将当前元素与随机位置的元素进行交换。

```
  function shaffle(arr) {
    let m = arr.length
    while (m) {
      const index = Math.floor(Math.random() * m--)
      const temp = arr[m]
      arr[m] = arr[index]
      arr[index] = temp
    }
    return arr
  }
```

#### 同步操作Dom时候

```
  document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
      init();
    }
  });
```

#### Closure

闭包：闭包就是能够读取其他函数内部变量的函数。在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

ECMAScript 闭包，指的是词法表示包括不被计算的变量的函数，也就是说，函数可以使用函数之外定义的变量。

#### 需要改进的代码规范

常量： USER_INFO

删除重复代码，合并相似函数

拓展一个diff方法
```
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));        
  }
}
```

异步 asynchronous
```
// perfect:
async function getCleanCodeArticle() {
  try {
    const response = await get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin');
    await writeFile('article.html', response);
    console.log('File written');
  } catch(err) {
    console.error(err);
  }
}
```

#### 内置对象

JavaScript的native object就是按照ECMA-262标准的实现和扩展，这个标准将其定义为“独立于宿主环境的ECMAScript实现 提供的对象”<br>
常用的内置对象：Object，Function，Array，String，Number，Date，Boolean，RegExp...

##### Date

Coordinated Universal Time

Greenwich Mean Time

1. 创建时间
```
new Date() 默认本地时间
字符串：`YYYY-MM-DDTHH:mm:ss:sssZ` Z->UTC
一系列参数：new Date(2019, 5, 11, 5, 23, 59)
时间戳
```

2. 自定义时间格式
getFullYear；getMonth；getDate；getDay；getHours；getMinutes；getSeconds；getMilliseconds

##### Array

`fill(value, start, end)` `reverse()`

#### 隐式转换


