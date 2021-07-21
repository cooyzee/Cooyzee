# Event Loop

JS是一门单线程的语言，所有的任务都是在一个线程上完成的，如果大部分时间都在等待耗时操作完成，效率会特别低。
所以主线程有一个执行栈，另设任务队列，当执行栈任务都完成后就会去任务队列中看有没有异步操作放置的事件，
有就放到执行栈中执行，这个过程会不断重复，这种机制称为事件循环

## 宏任务
可以理解为每次执行栈中所执行的代码，而浏览器会在每次宏任务执行结束后在下一个宏任务执行开始前对页面进行渲染。
* script（整体代码）
* setTimeOut, setInterval, setImmediate
``` 
setImmediate 只有node中实现了
NodeJS - setTimeout(fn,0) vs setImmediate(fn)
fs: 文件系统模块，用于访问物理文件系统，fs module 负责所有的同步或异步文件I/O操作。
```
* I/O
* UI交互事件, UI rendering
* postMessage
```
可以安全的进行跨源通信
```
* message channel
##

## Expansion
计算机的核心是CPU，它承担了所有的计算机任务，而操作系统是计算机的管理者，它负责任务的调度，资源的分配和管理。
应用程序是具有某种功能的程序，程序是运行于操作系统之上的。

* 进程  
是一个具有一定独立功能的程序在一个数据集上的一次动态执行的过程，是操作系统进行资源分配和调度的一个独立单位，是应用程序运行的载体。
* 线程
1. 线程是程序执行的最小单位，而进程是操作系统分配资源的最小单位
2. 一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线
3. 进程之间相互独立，同一进程下的各个线程之间共享程序的内存空间，某进程内的线程在其他进程不可见
4. 线程上下文切换比进程上下文切换要快得多

* setTimeout模拟setInterVal
```javascript
function setMyInterval(fn, delay) {
  let timer
  function interval() {
    fn()
    timer = setTimeout(interval, delay)
  }
  interval()
  return () => {
    clearTimeout(timer) 
  }
}
```
因为setInterval有很多的性能问题：
1. 对自己调用的代码是否报错这件事漠不关心，它会持续不断的调用该代码
2. 无视网络延迟
3. 某些间隔会被跳过
4. 如果需要“匀速”被触发，但是由于机制问题不可能绝对平均，浏览器也会有最小超时时间4ms-15ms
