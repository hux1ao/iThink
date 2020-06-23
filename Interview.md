## kuaishou

#### 一面

```
自我介绍, 聊项目, 主要对行为轨迹收集策略优化 & 发布速度优化项目感兴趣
```
```
console.log(typeof typeof typeof null); 打印出什么结果
```
```
'abcdcba'.replace(/c/, "h"); 返回什么结果， 全局替换c该怎么做？
```
```
<style>

   .classA { color:blue; }

   .classB { color:red;}

   </style>

   <p class="classB classA">hello</p>
   元素p内的文字最终什么颜色
```
```
let a = 1;
function fn() {
  console.log(a);
  let a = 2;
}

fn();

打印什么结果，为什么?
```
```
手写debounce
```
```
已知斐波那契数列规律为1,1,2,3,5,8...，实现一个函数function fib(n: number): number; 如调用fib(3)返回2，fib(4)返回3。
```
```
写出下列代码的执行结果
setTimeout(() => {
  setTimeout(() => {
    console.log(1);
  }, 0);
}, 0);
setTimeout(() => {
  console.log(2);
}, 100);
```

```
手写promise.all
```
```
promise 异常捕获机制， catch之后能不能在执行.then？
axios.get('/api')
    .then(() => { /* biz */ new Error('xx') })
    .then(() => { /* biz */  ?? })
    .then(() => { /* biz */ })
```

#### 二面

```
聊
```
```
setState机制以及后续的逻辑
```
```
虚拟dom，diff等细节
```

```
redux 和 同类框架的比较
```
```
redux如何做异步处理？中间件的实现？
```


```
实现一个函数 findLastIndex(), 返回指定数在“有序”数组中最后一次出现位置的索引
如findLastIndex([1,2,3,3,3,4,5], 3), 返回4

解决方案1：
function findLastIndex (arr, value) {
  arr = arr.reverse();
  const index = arr.indexOf(value);
  return arr.length - index;
}
```

```
请实现一个cacheRequest(url, callback)请求缓存方法，保证当使用ajax时，对于同一个API实际在网络层只发出一次请求以节省网络流量（假设已存在request底层方法用于封装ajax请求，调用格式为：request(url, data => {})

比如调用方代码如下

// a.js
cacheRequest('/user', data => {
    console.log('我是从A中请求的user，数据为' + data);
})
// b.js
cacheRequest('/user', data => {
    console.log('我是从B中请求的user，数据为' + data);
}
```

```
介绍项目
```

```
node怎么捕获异常？哪些异常能被捕获到，哪些异常不能被捕获到
```
#### 三面

```
聊项目， 问的问题都比较有深度，比较关注系统设计层面的思考
```

```
手撕flat
```

```
随机生成hex色号
```

```
将hex色号转换成rgb，并兼容三位的hex
```

## DIDI

#### 一面
```
自我介绍， 聊项目，主要是交易系统， 怎么优化， 怎么重构
```

```
var list = [
  {
    id: 1,
    par2ent: 0
  },
  {
    id: 2,
    parent: 1
  },
  {
    id: 3,
    parent: 1
  },
  {
    id: 4,
    parent: 2
  },
  {
    id: 5,
    parent: 2
  },
  {
    id: 6,
    parent: 0
  },
  {
    id: 7,
    parent: 0
  },
  {
    id: 8,
    parent: 7
  },
  {
    id: 9,
    parent: 8
  },
  {
    id: 10,
    parent: 0
  }
]

function covertListToTree(list) {
  // todo 实现这个方法
}

var tree = covertListToTree(list)

// result
[{
    "id": 1,
    "parent": 0,
    "child": [
        {
            "id": 2,
            "parent": 1,
            "child": [
                {
                    "id": 4,
                    "parent": 2
                }, {
                    "id": 5,
                    "parent": 2
                }
            ]
        },
        {
            "id": 3,
            "parent": 1
        }
    ]
}, {
    "id": 6,
    "parent": 0
}, {
    "id": 7,
    "parent": 0,
    "child": [
        {
            "id": 8,
            "parent": 7,
            "child": [
                {
                    "id": 9,
                    "parent": 8
                }
            ]
        }
    ]
}, {
    "id": 10,
    "parent": 0
}];
```


```
const fs = require("fs");

fs.readFile('./index.js', function(err, file) {
  console.log(file, 'file');
})

function prosimeFy(fn) {
   // todo 实现这个方法
}


const fsPromiseReadFile = prosimeFy(fs.readFile);
fsPromiseReadFile('./index.js').then((err, file) => {
  console.log(file, 'file');
})
```

```
为什么推动团队使用react-hook？
```

```
react-fiber的了解？// 这个没答出来
```

#### 二面

```
git相关操作
merge&rebase

reset&revert

删除分支
```

```
linux相关操作
pwd
netstat, ps
ifconfig/ipaddress
tail -f/more/less/cat
```

```
setState什么时候是同步的，什么时候是异步的？
```
```
react-memo?
```

```
手撕深克隆
```
```
完成retry(fn, times)
```


#### 三面

```
问了项目层面的问题，应不应该做，为什么要这样做。
```

```
怎么看待一个项目能否成功？
```

```
两年经验带七人团队我遇到的困难是什么？
```

```
实现两个数组去重，多种方案。
```

## 知乎

#### 一面


```
fiber
```

```
https，非对称加密过程
```
```
事件轮询
```

```
react 事件中this指向问题
```

```
跨域问题解决方案
```

```
promise-catch的返回值是啥
```
```
前端缓存
```
```
option请求
```
```
hook
```
```
箭头函数
```
```
promise
```

```
let,var的区别
```
```
组件传值的问题。
```
```
this指向问题
let a = {
  b: function () { return this},
  c: () => {return this}
}
var d = a.b;
```

#### 二面

```
webpack升级会导致哪些问题？
```
```
团队eslint的使用，eslint的原理
```
```
scope-hoisting
```
```
聊项目
```
```
手写一个promise.all
```
## 抖音

#### 一面

```
浏览器的缓存机制，怎么控制缓存，cache-control &expire优先级
```
```
css如何做优化， 重排和重绘，getComputedStyle属性会导致重排吗？
```
```
介绍一下fiber
```

```
介绍一下hook
```
```
https的加密过程
```

```
为什么tcp是四次挥手
```
```
题目：Semantic Versioning 是一个前端通用的版本规范。格式为“{MAJOR}.{MINOR}.{PATCH}-{alpha|beta|rc}.{number}”，要求实现 compare(a, b) 方法，比较 a, b 两个版本大小，
当 a > b 是返回 1；
当 a = b 是返回 0；
当 a < b 是返回 -1；
其中，rc > beta > alpha，major > minor > patch；
例子，1.2.3 < 1.2.4 < 1.3.0-alpha.1 < 1.3.0-alpha.2 < 1.3.0-beta.1 < 1.3.0-rc.1 < 1.3.0
```

```
实现函数接受任意二叉树，求二叉树所有根到叶子节点路径上所有节点，组成的数字之和。
二叉树每个节点的value范围是1-9，例如：
                 1
      2                  3 
 4          5
从根到叶子共3条：1->2->4, 1->2->5, 1->3
构成的数字为124，125，13，求和124 + 125 + 13 = 262即为所求
```