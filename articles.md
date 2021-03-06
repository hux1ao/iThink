## 前端基础
#### require和import的区别

##### 考察点
* 被导入的时候有什么区别？
* 两者分别是怎么处理循环引用的？
* 加载的时机分别是什么？

[es6-module的加载与实现](https://es6.ruanyifeng.com/#docs/module-loader)

#### 介绍set,weakSet,map,weakMap
[set-map](https://es6.ruanyifeng.com/#docs/set-map)

#### webpack的工作流程
```
* 初始化参数：根据配置文件 & shell命令中的参数初始化得出最终参数，并执行插件实例化。
* 根据配置生成全局唯一的compiler
* 加载插件，调用插件的apply方法，并将compiler实例传递给插件
* 应用node的文件系统找到compiler对象，方便后续的寻找和读取
* 读取配置entrys，为每一个entry实例话一个entryplugin，为递归解析做准备工作
* 根据配置初始化resolver，resolver负责在文件系统中搜寻制定文件
* 找到入口文件，针对每个module串行调用loader去翻译文件内容，并递归地找出该文件的依赖文件处理下去，直到所有文件全部被处理完成
* 将编译后的module组合成chunk文件，并输入到文件系统中
```
#### 位运算操作符
[mdn位运算操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

```// todo 常见的位运算```


#### url从输入到呈现经过的过程
[url从输入到呈现经过的过程](https://juejin.im/post/5bbaa549e51d450e827b6b13)
[「一道面试题」输入URL到渲染全面梳理中-页面渲染篇](https://juejin.im/post/5e9f1db86fb9a03c85463560)
[「一道面试题」输入URL到渲染全面梳理上-网络通信篇](https://juejin.im/post/5e9c48b2f265da47c558566b)

#### 事件轮询
[一次弄懂Event Loop](https://zhuanlan.zhihu.com/p/55511602)
[详解JavaScript中的Event Loop](https://zhuanlan.zhihu.com/p/33058983)

```//todo node中的事件循环```


#### 深入理解react setState机制
[深入setState](https://github.com/sisterAn/blog/issues/26) 
[React中的Transaction](https://oychao.github.io/2017/09/25/react/16_transaction/)

#### npm install 的基本流程？
[为什么npm install就能购自动安装依赖](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/22)  
* package.json中 ~, ^分别是干什么用的？
* npm install 基本流程？
* 模块扁平化的过程？

#### 浮点数相加
[IEEE754 浮点数格式 与 Javascript number 的特性](https://segmentfault.com/a/1190000008268668)
#### 为什么使用hook

[从Mixin到HOC再到Hook](https://juejin.im/post/5cad39b3f265da03502b1c0a)
[Why React Hooks, and how did we even get here?](https://www.freecodecamp.org/news/why-react-hooks-and-how-did-we-even-get-here-aa5ed5dc96af/)
[React Hooks 详解 【近 1W 字】+ 项目实战](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)

#### 发布订阅者模式vs 观察者模式

[观察者模式 vs 发布-订阅模式](https://juejin.im/post/5a14e9edf265da4312808d86)

#### react 与vuex

[Vuex、Flux、Redux、Redux-saga、Dva、MobX](https://zhuanlan.zhihu.com/p/53599723)

#### const 和 let 声明的变量不在 window 上

[关于 const 和 let 声明的变量不在 window 上](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/30)


#### vue双向数据绑定原理

[一图看懂Vue数据绑定原理](https://seawind8888.github.io/2019/07/15/%E4%B8%80%E5%9B%BE%E7%9C%8B%E6%87%82Vue%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86/)
[剖析Vue原理&实现双向绑定MVVM](https://segmentfault.com/a/1190000006599500)


#### virtual dom真的比原生dom快吗？
[Virtual DOM 真的比操作原生 DOM 快吗？](https://www.zhihu.com/question/31809713/answer/53544875)
[怎么理解虚拟dom](https://www.zhihu.com/question/29504639)
[react的diff 从O(n^3)到 O(n) ，请问 O(n^3) 和O(n) 是怎么算出来？](https://www.zhihu.com/question/66851503)
[让虚拟DOM和DOM-diff不再成为你的绊脚石](https://juejin.im/post/5c8e5e4951882545c109ae9c?utm_source=gold_browser_extension)
[从 React 历史的长河里聊虚拟DOM及其价值](https://mp.weixin.qq.com/s/zCGQEpEGJYQWMMvZfyUYHg)
```// todo 查看snabbdom源码```
#### 重排与重绘

```// todo 什么情况下会导致重排与重绘？```
[介绍下重绘和回流（Repaint & Reflow），以及如何进行优化](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/24)

#### 浏览器缓存机制
[深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)
[浅聊HTTP缓存 (HTTP Cache)
](https://juejin.im/post/5bf3c28ee51d4514df5b7625?utm_source=gold_browser_extension)
#### 隐式类型转换

[js 运算符+== <>中的隐式数据类型转换](https://zhuanlan.zhihu.com/p/80691557)
[JavaScript 运算符规则与隐式类型转换详解](https://zhuanlan.zhihu.com/p/29064256)
[js数据类型转换](https://juejin.im/post/5d030e03518825361817032f)
[类型转换题目](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/229)

#### BFC
[10 分钟理解 BFC 原理](https://zhuanlan.zhihu.com/p/25321647)

#### call 和apply的性能对比
[call和apply的性能对比](https://jiayili.gitbooks.io/fe-study-easier/content/javascript%E5%9F%BA%E7%A1%80/wei-shi-yao-call-bi-apply-kuai-ff1f.html)

#### 前端埋点为什么采用gif的方式
[为什么前端监控要用GIF打点](https://mp.weixin.qq.com/s/v6R2w26qZkEilXY0mPUBCw?utm_source=tuicool&utm_medium=referral)

问题：
* 为什么不采用ajax
* 采用gif的好处
* 为什么使用sendBeacon


#### 箭头函数
[箭头函数与普通函数（function）的区别是什么](https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)


#### a.b.c.d 与a[b][c][d]的性能？
[a.b.c.d和a['b']['c']['d']，哪个性能更高](https://github.com/airuikun/Weekly-FE-Interview/issues/19)

#### 将ES6转换成ES5的思路
##### 涉及到的知识点
* 编译原理，代码执行的流程
* 每个阶段各自负责的内容： 编译器/引擎/作用域
* AST
```
ES6代码输入
babylon 进行解析得到 AST
plugin 用 babel-traverse 对 AST 树进行遍历转译,得到新的AST树
用 babel-generator 通过 AST 树生成 ES5 代码
```
[ES6 代码转成 ES5 代码的实现思路是什么](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/112)
[掌握了AST，再也不怕被问babel，vue编译，Prettier等原理](https://mp.weixin.qq.com/s/fH2xYo_Bad0mgvo0OdYRZQ)


#### token
[基于 Token 的身份验证：JSON Web Token](https://ninghao.net/blog/2834)

#### 1px问题
[1像素边框问题](https://zhuanlan.zhihu.com/p/91830529)
！！[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)


#### webpack热更原理解析
[Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)

#### 为什么for比foreach性能更好？
[为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因](https://www.zhihu.com/question/263645361)


#### react生命周期
[react官方文档](https://react.docschina.org/docs/react-component.htmls)


#### 如何处理中文输入？
[input 搜索如何防抖，如何处理中文输入](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/129)

#### react合成事件
[React合成事件和DOM原生事件混用须知](https://juejin.im/post/59db6e7af265da431f4a02ef)

#### 大数据量渲染优化
[虚拟列表](https://github.com/dwqs/blog/issues/70)

#### 首屏优化
[首屏速度优化](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/234)

#### node基础
[【前端知识体系-NodeJS相关】NodeJS基础知识全面总结](https://www.cnblogs.com/fecommunity/p/11922208.html)

#### 前端加密的场景及方法
[介绍下前端加密的常见场景和方法](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/150)

#### 一下题目输出的结果是什么？
考察点： 
* 函数的形参
* 对象的引用
```
function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"
  o = new Object()
  o.siteUrl = "http://www.google.com"
} 
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
```


#### 正则
[mdn-正则](https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33
)

#### 大文件上传
[字节跳动面试官：请你实现一个大文件上传和断点续传](https://juejin.im/post/5dff8a26e51d4558105420ed)


#### 服务端渲染

#### nodejs错误处理
[node错误处理](https://www.jianshu.com/p/bdf31d835685)

#### 301/302对SEO的影响
[思维导图](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/241)

#### requestAnimationFrame
[mdn-requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)
[requestAnimationFrame](https://javascript.ruanyifeng.com/htmlapi/requestanimationframe.html)


#### 自动化生成骨架屏的方案
[一种自动化生成骨架屏的方案](https://github.com/Jocs/jocs.github.io/issues/22)
[page-skeleton-webpack-plugin](https://github.com/ElemeFE/page-skeleton-webpack-plugin#basic-use)
[网页骨架屏自动生成方案（dps）](https://zhuanlan.zhihu.com/p/74403911)

#### performanceApi
[Web 性能优化-首屏和白屏时间](https://lz5z.com/Web%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96-%E9%A6%96%E5%B1%8F%E5%92%8C%E7%99%BD%E5%B1%8F%E6%97%B6%E9%97%B4/)

[在单页应用中，如何优雅的上报前端性能数据](https://juejin.im/post/5c3bebf2f265da613f2fae54)

#### react fiber
[浅析React Diff 与 Fiber](https://zhuanlan.zhihu.com/p/58863799)
[React Fiber 原理介绍](https://segmentfault.com/a/1190000018250127)
[React Fiber](https://juejin.im/post/5ab7b3a2f265da2378403e57)

#### react-this绑定问题
[理解：为什么React事件处理中要绑定this](https://juejin.im/post/5ec8fa04e51d45784f7ffab8)
[为什么React组件点击事件回调函数会需要绑定this](http://zachrey.win/%E4%B8%BA%E4%BB%80%E4%B9%88React%E7%BB%84%E4%BB%B6%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E4%BC%9A%E9%9C%80%E8%A6%81%E7%BB%91%E5%AE%9Athis.html)
[Understanding JavaScript Bind ()](https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/)
#### base64的编码与解码
[Base64的编码与解码](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)

#### 垃圾回收机制
[Chrome 浏览器垃圾回收机制与内存泄漏分析](https://juejin.im/post/5db2beb8e51d455b450a64b4#heading-9)

#### cookie与session的区别
[COOKIE和SESSION有什么区别？](https://www.zhihu.com/question/19786827)

#### webpack如何实现动态加载的？
[webpack是如何实现动态导入的](https://juejin.im/post/5d26e7d1518825290726f67a)
[深入理解React：懒加载（lazy）实现原理](https://www.bbsmax.com/A/RnJWynkydq/)
[webpack 中，module，chunk 和 bundle 的区别是什么？](https://www.cnblogs.com/skychx/p/webpack-module-chunk-bundle.html)

#### 前端监控
[GMTC 大前端时代前端监控的最佳实践](http://jm.taobao.org/2018/06/29/%E5%A4%A7%E5%89%8D%E7%AB%AF%E6%97%B6%E4%BB%A3%E5%89%8D%E7%AB%AF%E7%9B%91%E6%8E%A7%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5/)
[去大厂，你就应该了解前端监控和埋点!](https://juejin.im/post/5e9052916fb9a03c9843284f?utm_source=gold_browser_extension)
[electron-monitor](https://github.com/TseKaHing/electron-monitor)
[来，跟我一起 ，自研多端错误监控平台](https://juejin.im/post/5ec5c4aee51d457893029189?utm_source=gold_browser_extension)

```// todo eslint的使用与原理```
``` // todo ssr```
``` // todo cdn的原理```
``` // todo 多线程与多进程的区别```

## 手写代码专区

[「中高级前端面试」JavaScript手写代码无敌秘籍](https://juejin.im/post/5c9c3989e51d454e3a3902b6)

#### 如何实现深拷贝？
##### 需要考虑的点
* symbol
* function（改变this的指向）
* 循环引用
* 数组

[手写深拷贝](https://github.com/NuoHui/fe-note/blob/master/docs/javascript/%E6%B7%B1%E6%8B%B7%E8%B4%9D%E4%B8%8E%E6%B5%85%E6%8B%B7%E8%B4%9D.md)
[手写一个深拷贝](https://github.com/yygmind/blog/issues/29)
[lodash是如何实现深拷贝的](https://github.com/yygmind/blog/issues/31) 该文中还涉及到知识点： 
* [位掩码](https://juejin.im/post/5dc2cc0b6fb9a04a916d0ba0)
* [mdn位掩码](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

#### 柯里化
[函数的柯里化](https://zhuanlan.zhihu.com/p/31271179)
```
function curry(fn, args) {
    var length = fn.length;
    var args = args || [];
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this,fn,newArgs);
        }else{
            return fn.apply(this,newArgs);
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);
```
#### 手写JSON.stringify && JSON.parse

[手写源码系列（三）——JSON.stringfy和JSON.parse](https://zhuanlan.zhihu.com/p/70361133)
#### 如何实现async/await?

[generator的原理](https://es6.ruanyifeng.com/#docs/generator)
[async/await的实现](https://juejin.im/post/5d401ce4e51d4561d106cb63)

#### 手写一个promise
[手写一个Promise](https://juejin.im/post/5aab8cb8f265da239a5f9064)
[手写promise.finally](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/109)
[手写promise](https://juejin.im/post/5e84c4d36fb9a03c3e3f498c?utm_source=gold_browser_extension)
```// todo 实现promise.all```
#### 手写instanceOf
```
function myInstanceof(left, right) {
    if(typeof left !== 'object' || left == null) {
        return false
    }
    let proto = Object.getPrototypeOf(left);
    while(proto) {
        if(proto === right.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false;
}
```
#### 手写extends
[面试官问：JS的继承](https://zhuanlan.zhihu.com/p/57336944)
[傻傻分不清的__proto__与prototype](https://segmentfault.com/a/1190000011801127?v=20171103)

```
function _inherits(Child, Parent){
    // Object.create
    Child.prototype = Object.create(Parent.prototype);
    // __proto__
    // Child.prototype.__proto__ = Parent.prototype;
    Child.prototype.constructor = Child;
    // ES6
    // Object.setPrototypeOf(Child, Parent);
    // __proto__
    Child.__proto__ = Parent;
}
```

```// todo 手写symbol```
``` // todo 实现大整数相乘```


## CSS相关

#### css概览
[2019 年知识总结-css 篇](https://juejin.im/post/5e23af58518825261900873d?utm_source=gold_browser_extension)

#### BFC,IFC,GFC,FFC
[BFC,IFC,GFC,FFC](https://www.bbsmax.com/A/1O5Erna8d7/)

#### flex
[flex-阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)

## 网络相关

```// todo DNS解析过程```
#### https握手过程
[https加密过程](https://www.jianshu.com/p/e30a8c4fa329)
[SSL或TLS握手的概述](https://github.com/lvwxx/blog/issues/3)
[一次安全可靠的通信——HTTPS原理](https://developers.weixin.qq.com/community/develop/article/doc/000046a5fdc7802a15f7508b556413)

#### ab机器建立链接， b机器重启，a处于什么状态 
[超纲](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/21)

#### http

#### http的发展过程

```
http/1 :

默认不支持长连接，需要设置keep-alive参数指定
强缓存expired、协商缓存last-modified\if-modified-since 有一定的缺陷
http 1.1 :

默认长连接(keep-alive)，http请求可以复用Tcp连接，但是同一时间只能对应一个http请求(http请求在一个Tcp中是串行的)
增加了强缓存cache-control、协商缓存etag\if-none-match 是对http/1 缓存的优化
http/2 :

多路复用，一个Tcp中多个http请求是并行的 (雪碧图、多域名散列等优化手段http/2中将变得多余)
二进制格式编码传输
header压缩
服务端推送
```
#### 三次握手与四次挥手
[tcp的理解](https://juejin.im/post/5c078058f265da611c26c235)
[三次握手与四次挥手](https://zhuanlan.zhihu.com/p/58603455)
[https://zhuanlan.zhihu.com/p/25587986](https://zhuanlan.zhihu.com/p/25587986)

#### 中间人攻击
[介绍下 HTTPS 中间人攻击](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/142)


#### http,https,http1.0/1.1/2.0的区别

[HTTP/1.0、HTTP/1.1、HTTP/2、HTTPS](https://zhuanlan.zhihu.com/p/43787334)


``` // todo CSRF XSS```


## 算法专栏

#### 汇总
[写给前端的算法进阶指南，我是如何两个月零基础刷200题](https://juejin.im/post/5f05087cf265da22d466f60f)

#### 哈希表
[头条正在面的哈希表问题](https://juejin.im/post/5ecb1db8f265da77147104c2?utm_source=gold_browser_extension)

#### 时间复杂度 & 空间复杂度
[递归的时间复杂度](https://www.zhihu.com/question/63075755)
[算法的时间与空间复杂度（一看就懂）](https://zhuanlan.zhihu.com/p/50479555)

#### 洗牌算法
[洗牌算法](https://zhuanlan.zhihu.com/p/60386034)


#### 斐波拉切数列（快手）
[leet-code斐波拉切数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/solution/)


#### 深度优先搜索和广度优先搜索
[深度优先搜索和广度优先搜索](https://github.com/sisterAn/blog/issues/25)
[leetcode深度优先搜索](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

#### hash表
```
如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重）
```

```
// todo 待刷题目
https://juejin.im/post/5ed32e0151882542fd351696#greed
https://www.nowcoder.com/discuss/292850
```

## 数据结构专栏

[JavaScript中的数据结构](https://github.com/lvwxx/blog/issues/1#Linked%20List)
```//todo 数据结构---堆```


## 安全专栏
[前端安全面试题](https://www.cxymsg.com/guide/security.html#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%8F%AF%E8%83%BD%E5%BC%95%E8%B5%B7%E5%89%8D%E7%AB%AF%E5%AE%89%E5%85%A8%E7%9A%84%E7%9A%84%E9%97%AE%E9%A2%98)


## git操作专区

[珍藏多年的 Git 问题和操作清单](https://github.com/sisterAn/blog/issues/39)

## 源码解读

[React源码解析(一):组件的实现与挂载](https://juejin.im/post/5983dfbcf265da3e2f7f32de)


## 参考链接专区

[前端面试每日 3+1](http://www.h-camel.com/index.html)
[斑码](https://blog.acohome.cn/)
[前端进阶系列](https://github.com/yygmind/blog)
[手把手带你用85行代码实现一个React.js（详细讲解）](https://juejin.im/post/5ba906eae51d450e78261dbb?utm_source=gold_browser_extension)
