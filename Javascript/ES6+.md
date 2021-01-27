# ES2015/ES6 后新增特性



## ES2016/ES7

​	发布于2016年6月。但是这个版本仅仅增加两个小功能。

### Array.prototype.include()

​	这个方法帮我们检查数组中是否存在某个元素。类似于之前的 `indexOf` 方法

区别：`indexOf` 不能查询数组中的 `NaN`



### 幂次方

```javascript
//ES5 表示2的10次方
Math.pow(2,10) 
//ES2016 表示2的10次方
2**10
```



## ES2017/ES8

​	发布于2017年6月。

### Object.keys /  Object.values / Object.entries

```javascript
const obj = {a: 1, b:2}
// Object.keys 返回所有的键组成的数组
Object.keys(obj) // ['a', 'b']
// Object.values 返回所有值组成的数组
Object.values(obj) // [1, 2]
//Object.entries 将对象转成数组，每个元素是键值对的数组，可以快速将对象转为Map
const l = Object.entries(obj) // [['a', 1],['b', 2]]
const m = new Map(l)

```



### Object.getOwnPropertyDescriptors

```javascript
const p1 = {
    a: 'a',
    b: 'b',
    get name() {
      return `${this.a} ${this.b}`
    }
}
// Object.assign 复制时，将对象的属性和方法当做普通属性来复制，并不会复制完整的描述信息，比如 this
const p2 = Object.assign({}, p1)
p2.a = 'aaa'
p2.name  // a b 

//使用getOwnPropertyDescriptors 获取完整描述信息
const description = Object.getOwnPropertyDescriptors(p1)
const p3 = Object.defineProperty({},description)
p3.a = 'ccc'
p3.name // ccc d
```



### String.prototype.padEnd() / String.prototype.padStart()

```javascript
//字符串填充
let str = 'abc'
//str.padEnd(targetLength [,padString])
str.padEnd(5) // 'abc  '
str.padEnd(6,'123456') // 'abc123'
str.padEnd(10,'a') // 'abcaaaaaaa'
str.padEnd(1) // 'abc'

//str.padStart 使用方式相同，仅仅是填充起始位置不同。
```



### async/await 

```javascript
//进一步控制上下文执行顺序
//async 函数变为异步函数
//await 变为『同步函数』，等待await的promise返回，函数才会向下执行
// MDN例子
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```



### 其他

- `Atomics`操作，该对象类似于Math。 [MDN详解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
- `SharedArrayBuffer` 共享缓冲区。共享 web worker 之间的主内存堆
- 函数参数与调用函数的尾部添加逗号而不会报错



## ES2018/ES9

​	

### 对象拓展符

```javascript
//类似对象拓展符使用
const data = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
const {a,b,...rest} = data
console.log(rest) // {c: 3, d: 4}

//注意此时常会和解构赋值同时使用，但是解构赋值是浅拷贝，且不能复制继承原型对象的属性
```



### 正则表达式 

- s 修饰符
- 命名捕获
- 反向断言
- dotAll模式
- 转义



### 异步遍历器

`for...of`用于遍历同步的`iterator`接口，`for await ... of`遍历异步的`iterator`接口

```JavaScript
//es6
async function(){
  	for (const fn of actions){
      	await fn()
    }
}
//es9 
async function(){
  	for await (const fn of actions){
      	fn()
    }
}
```

`Promise.finally()`的引入

```javascript
return new Promise((reslove, reject) => {
  // ...
}).then((res) => {
  // reslove
}).catch((err) => {
  // reject
}).finally(() => {
  // complete
});
```



## ES2019/ES10



### Array.prototype.flat()/ Array.prototype.flatMap()

```javascript
const nums = [1, [2, [3]]]
// 降维 返回新数组
nums.flat() // [ 1, 2, [3]]
nums.flat(1) // [ 1, 2, [3]]
nums.flat(2) // [ 1, 2, 3]

const numArr = [1, 2, 3, 4]
//等效于 numArr.map(fn).flat(1)
numArr.flatMap(x => [x * 2])
//等价于
numArr.reduce((acc, x) => acc.concat([x * 2]), [])


```



### Object.fromEntries()

```javascript
// Object.entries() 的逆行为
```



### Tim Sort

​	JavaScript内部放弃了不稳定的快排算法，改为Tim Sort这种稳定的排序算法

### 其他

- Function.prototype.toString()
- String.prototype.trimStart()/trimEnd()
- Symbol.prototype.description





## ES2020/ES11



### import()

```javascript
import('./a.js')
	.then(() =>{
  		//do something
	})
```



### BigInt

```javascript
Number.MAX_SAFE_INTEGER
// 9007199254740991
Number.MAX_SAFE_INTEGER + 10 -10
// 9007199254740990   （精度丢失）
BigInt(Number.MAX_SAFE_INTEGER) + 10n -10n
// 9007199254740991n  （计算结果为 bigint 类型）
```

> BigInt是一个大整数，不能存储小数。



### Promise.allSettled

```javascript
Promise.allSettled([
  fetch("https://api.github.com/users/pawelgrzybek").then(data => data.json()),
  fetch("https://api.github.com/users/danjordan").then(data => data.json())
])
  .then(result => console.log(`All profile settled`));
```



### 可选链&空值合并运算符

```javascript
//可选链
// 之前
const title = data && data.article && data.article.title
// 之后
const title = data?.article?.title

"" || "default value"
// default value
"" ?? "default value"
// ""
const title = data?.article?.title ?? "default"

```

### export * as ns from “mod”

允许开发者以新名称导出另一模块的命名空间外部对象