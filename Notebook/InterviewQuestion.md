## Google
```
Q: 给定一个整数无序数组和变量 sum，如果存在数组中任意两项和使等于 sum 的值，则返回true。
否则,返回false。例如，数组[3,5,1,4]和 sum = 9，函数应该返回true，因为4 + 5 = 9。

A: const findSum = (arr, sum) => arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set));
```

```
Q: 为什么0.1 + 0.2 != 0.3?

A: 因为在进制转换和进阶运算的过程中出现精度丢失
```