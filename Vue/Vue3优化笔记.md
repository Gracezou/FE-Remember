## 组件

> 组件系统是` Vue.js ` 的一个重要概念，它是一种对 `DOM` 结构的抽象，使用小型、独立和通常可复用的组件构建。

#### 组件化

组件化也是 `Vue.js` 的核心思想之一，它允许我们用 **模板** 加 **对象描述** 的方式去创建一个组件，再加上我们给组件注入不同的 **数据**，就可以完整的渲染出组件。

 模板 + 对象描述 + 数据 = 组件

当数据更新后，组件可以自动重新渲染。只关心 **数据逻辑** 的处理即可，提高开发体验和开发效率。

#### 应用程序初始化

创建`vnode` => 渲染`vnode`=> 生成 `dom`

`Vue3.0` 入口函数具体实现

```javascript
const createApp = ((..args) => {
  // 1. 创建APP对象
  const app = ensureRenderer().createApp(...args)
  //渲染相关的配置 用于更新属性的方法和操作 DOM 的方法
  // ensureRenderer用于创建一个渲染器对象，用于只依赖响应式包的时候，可以通过 tree-shaking 移除核心渲染罗及相关的代码；针对跨平台应用场景使用
  // 2. 重写 mount 方法
  const { mount } = app
  app.mount = (containerOrSelector) => {
    //标准化容器
    const container = normalizeContainer(containerOrSelector)
    //如组件没有定义render和template模板，则取容器的 innerHtml 作为组件模板内容
    if(!isFunction(component) && !component.render && !component.template){
      component.template = container.innerHTML
    }
    // 挂载前清空容器内容
    container.innerHTML = ''
    // 真正的挂载 自定义的挂载  用于不同的平台 如小程序、app等
    return mount(container)
  }
  return app
})
```

-   创建APP对象时候，利用 **闭包和函数柯里化**的技巧很好的实现了参数保留
-   执行 `app.mount` 的时候，不需要传入渲染器 `render`

重写的目的 ...



#### 核心渲染流程：创建和渲染

processComponent / processElement

Patch函数 颗粒度为组件级

subTree

处理组件

处理普通元素

#### **diff** 算法流程

key的作用是建立索引图 

头  尾  => 最长子序列

最长递增子序列 **贪心**



### Composition API 

#### setup函数

##### setup 启动函数

创建组件实例 =》  设置组件实例 =》 设置并运行带副作用的渲染函数

创建渲染代理属性 =》 渲染上下文代理 

（proxy的应用） 

get 有顺序问题！！ 存在优先级概念 存在缓存概念

set  更新数据 存在顺序！

has 缓存 

##### setup 设置



##### 完成setup



#### 标准化模板和渲染函数

`render` `template` `compiled`



##### 最后兼容 options API 兼容



#### reactive API

set函数 和 trigger函数

副作用函数 ：包装effect函数

栈数据结构解决 ：嵌套effect问题



#### readonly API

解决 const 无法解决 `object `和 `array`等可以修改 子属性问题

如果reactive 包装成readonly 后可跳过 effect 的收集



#### ref API

会转为 reactive 对象

vue2 和 vue3 渲染更新区别不大。劫持数据的方式该为用 Proxy 实现，以及收集的依赖由 watcher实例变成了 组件副作用渲染函数。性能提升只要由于 **diff算法** 的升级和 **静态提升**（主要是副作用函数提现）



### 计算属性 Computed

允许用户定义一个计算方法，然后根据一些 **依赖** 的响应式数据计算出新值并返回，当 **依赖** 发生变化时， 计算属性可以自动重新计算获取新值

`computed `的值 本身不能被修改 但是可以重写`set` 函数来实现直接修改

computed 会创建 **副作用函数**  & dirty 判断是否重新计算

两个特点： 延时计算和缓存



### 侦听器 Watch

doWatch ： 

创建 source \ 构造 applyCb 回调函数 \ 创建 scheduler 时序执行函数 \ 创建effect 副作用函数 \ 返回侦听器销毁函数

##### 创建 source 

deep问题 尽量减少递归 / 可通过getter方法 来解决

##### 构造 applyCb 回调函数



##### 创建 scheduler 时序执行函数

参数问题： flush deep等
