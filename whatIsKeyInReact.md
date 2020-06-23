### what is key?

key是diff算法的依据，在snabbDom中是这样判断节点是否一致的
```
function sameVnode (vnode1: VNode, vnode2: VNode): boolean {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel
}
```
### how our component change with key?

在使用key之后，列表渲染的组件将变得更块，更准确。

### how key work

如果两个元素是相同的key，且满足第一点元素类型相同，则会被认为是两个相同的元素。 如果是相同的元素，则只更新，如果不是，则重新渲染该元素

### why some say using key can slow down our component?

首先，在不添加key的时候，react会默认帮我们添加数组下标作为key。

```
const dataList = [1, 2, 3, 4, 5];
dataList.map(item => {
    return (
        <div>item</div>
    )
})
```
以上的例会生成以下的dom节点数组，我们给每一个节点标记一个身份id：

```
  [
    '<div>1</div>', // id： A
    '<div>2</div>', // id:  B
    '<div>3</div>', // id:  C
    '<div>4</div>', // id:  D
    '<div>5</div>'  // id:  E
  ]
```
```
vm.dataList = [4, 1, 3, 5, 2] // 数据位置替换

 // 没有key的情况， 节点位置不变，但是节点innerText内容更新了
  [
    '<div>4</div>', // id： A
    '<div>1</div>', // id:  B
    '<div>3</div>', // id:  C
    '<div>5</div>', // id:  D
    '<div>2</div>'  // id:  E
  ]

  // 有key的情况，dom节点位置进行了交换，但是内容没有更新
  // <div v-for="i in dataList" :key='i'>{{ i }}</div>
  [
    '<div>4</div>', // id： D
    '<div>1</div>', // id:  A
    '<div>3</div>', // id:  C
    '<div>5</div>', // id:  E
    '<div>2</div>'  // id:  B
  ]
```

```
 vm.dataList = [3, 4, 5, 6, 7] // 数据进行增删

  // 1. 没有key的情况， 节点位置不变，内容也更新了
  [
    '<div>3</div>', // id： A
    '<div>4</div>', // id:  B
    '<div>5</div>', // id:  C
    '<div>6</div>', // id:  D
    '<div>7</div>'  // id:  E
  ]

  // 2. 有key的情况， 节点删除了 A, B 节点，新增了 F, G 节点
  // <div v-for="i in dataList" :key='i'>{{ i }}</div>
  [
    '<div>3</div>', // id： C
    '<div>4</div>', // id:  D
    '<div>5</div>', // id:  E
    '<div>6</div>', // id:  F
    '<div>7</div>'  // id:  G
  ]
```

不使用key会导致在执行diff过程中效率变快，但是会存在不准确的情况

为什么效率会变快？  因为每次diff的时候key相同，选择器相同，只会触发dom更新，不会触发重新渲染
见：https://www.cnblogs.com/wonyun/p/6743988.html