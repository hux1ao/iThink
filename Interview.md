## kuaishou


1. console.log(typeof typeof typeof null); 打印出什么结果

2. 'abcdcba'.replace(/c/, "h"); 返回什么结果

asdfsadf"123123'123"safasf

3. 
<style>

   .classA { color:blue; }

   .classB { color:red;}

   </style>

   <p class="classB classA">hello</p>

元素p内的文字最终什么颜色


1.
let a = 1;
    function fn() {

      console.log(a);
      let a = 2;

    }

    fn();

    打印什么结果，为什么?

2. debounce

3. 已知斐波那契数列规律为1,1,2,3,5,8...，实现一个函数function fib(n: number): number; 如调用fib(3)返回2，fib(4)返回3。

4.
setTimeout(() => {
  setTimeout(() => {
    console.log(1);
  }, 0);
}, 0);

setTimeout(() => {
  console.log(2);
}, 100);


Promise.all
function allPromise(list: Promise<any>[]): Promise<any> {

}

axios.get('/api')
    .then(() => { /* biz */ new Error('xx') })
    .then(() => { /* biz */  ?? })
    .then(() => { /* biz */ })


快手二轮


setState机制

redux 和 同类框架



```
实现一个函数 findLastIndex(), 返回指定数在“有序”数组中最后一次出现位置的索引
如findLastIndex([1,2,3,3,3,4,5], 3), 返回4

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

node怎么捕获异常？