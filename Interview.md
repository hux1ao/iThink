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
