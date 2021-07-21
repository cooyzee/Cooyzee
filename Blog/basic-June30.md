# Another work-hard-day

## 1. 变量类型
* 原始类型  
String、Number（双精度IEEE 754 64位浮点）、Boolean、Symbol、null、undefined、BigInt(大于253 - 1)
* 结构类型  
Object、Function

*`null` represents a reference to a nonexistent or invalid object or address*

## 2. 原型&原型链
JavaScript is said to be a Prototype-based language.

The correct definition for Prototype of JS: An object that instance can access when 
they're trying to look for a property.
1. 自由扩展性
2. \_\_proto__
3. 函数有prototype
4. 引用类型的\_\_proto__指向其构造函数的prototype属性值

当你访问一个属性的时候，JS做了什么：
* step 1: 检查这个属性是否在这个对象里面，如果在，就直接使用
* step 2: 检查是否有Prototype，如果有，重复step 1
* step 3: 没有更多的Prototype，如果是访问属性返回undefined，如果是调用方法就抛出异常

```
var item
for (item in f) {
    // 高级浏览器已经在 for in 中屏蔽了来自原型的属性，但是这里建议大家还是加上这个判断，保证程序的健壮性
    if (f.hasOwnProperty(item)) {
    console.log(item)
    }
}
```

## 3. Number() vs parseInt()
* Number() converts the type  
whereas parseInt() parses the value of input
```
// parsing
parseInt('32px') // 32
parseInt('5e1') // 5

// convert type
Number('32px') // NaN
Number('5e1') // 50

As you see, parseInt will parse up to the first non-digit character. On the other hand, Number will try to convert the entire string.
```
* parseInt() accepts two parameters
```
parseInt('0101');       // 101
parseInt('0101', 10);   // 101
parseInt('0101', 2);    // 5   

Number('0101');         // 101 
```
* They return different results when we pass special values
```
parseInt();         // NaN
parseInt(null);     // NaN
parseInt(true);     // NaN
parseInt("");       // NaN

Number();           // 0
Number(null);       // 0
Number(true);       // 1
Number("");         // 0
```
**Good practices**
1. Always pass the radix to parseInt.
2. Trim the spaces before parsing the number.
3. Don't use new Number() to compare the numbers.

## 4. [Testing Javascript Performance](https://zellwk.com/blog/performance-now/)
The procedure:
1. Check the current timestamp
2. Run some operations
3. Check the timestamp again

## 5. 算法好坏 (algorithm)
1. 时间复杂度
2. 空间复杂度

执行时间越短，占用内存空间越小，那么它就是好算法

```
O(1) < O(logn) < O(n) < O(nlogn) < O(n2) < O(n3) < O(2n) < O(n!) < O(nn)
```

## 6. requestAnimationFrame

## 7. WebStorage
http是无状态的协议，在同一个客户端向服务器发送多次请求，服务器不会知道这些请求来自同一客户端。
这也是http得以广泛应用的原因。Cookie让无状态的http协议拥有了一小块记忆。

非当前域下的cookie都属于第三方cookie，

## Appendix

```
clip-path(css property) 使用裁剪方式创建元素的可显示区域

time-to-first-byte, time-to-interaction

```                                                                               
