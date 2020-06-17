## kuaishou

####一面


##### 自我介绍
##### 聊项目
```
console.log(typeof typeof typeof null); 打印出什么结果
```
```
'abcdcba'.replace(/c/, "h"); 返回什么结果
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

