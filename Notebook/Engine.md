## JS Engine

![JS的运作机制](https://user-gold-cdn.xitu.io/2018/6/25/1643482c1d80ca23?imageView2/0/w/1280/h/960/format/png)

JS源码通过parser（分析器）转化为AST（抽象语法树），再经过interpreter（解释器）解析为bytecode（字节码）<br>
为了提高运行效率，optimizing compiler负责生成optimized code。

>V8也类似，V8将interpreter称为Ignition点火器，将optimizing compiler 称为 TurboFan。
>可以理解为将代码点火启动后，逐渐进入涡轮发动机加速。

* Chrome V8
* FireFox SpiderMonkey Trace Jaeger
* IE Charkra
* Safari Nitro
* Opera Linear Futhark CaraKan


