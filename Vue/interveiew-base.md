# Vue 基本使用/组件使用

## 【常用】基本使用

#### 插值 / 动态属性

- 动态数据基本展示方法 `{{ }}` === `v-text`
- 拓展使用只可以使用 **逻辑表达式**

```vue
<template>
	插值:{{ data??'-' }}
</template>
<script>
  export default{
    data(){
      return { data: 'test' }
    }
  }
</script>
```



### v-html

- 有 xss 风险
- 使用后，将会覆盖子组件内容



#### Computed / Watch

- Computed 有缓存，data不变则不会重新计算
- Watch 引用类型 拿不到OldVal  **指针不变**



#### class 和 style

- 动态class 可以用 **数组** 或 **对象** 接受
- style 接受**对象**且需要使用 **驼峰式写法**



#### 条件渲染

- `v-if` ` v-else`的基本使用
- `v-if `和 `v-show`的区别： 是否 **渲染** 真实Dom元素
- `v-if` 和` v-show`的使用场景： Dom元素的是否展示的 频率/切换



#### 循环渲染

- `v-for`的基本使用
- `key`的重要性。`key`的作用： *** ；尽量不要使用`index`
- `v-for`和`v-if`不能同时使用。原因：`v-for` 的 **优先级** 比` v-if ` 高



### 事件

- event 是 **原生对象**
- event参数使用`$event` 进行自定义传递 或者 无参函数的 第一个参数
- 事件修饰符：[Vue3](https://v3.cn.vuejs.org/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)   *可串联使用，但注意顺序*
  - `.stop` 阻止单击事件继续传播
  - `.prevent` 提交事件不再重载页面 。**拦截默认事件**
  - `.capture` 内部元素触发的事件先在此处理，然后才交由内部元素进行处理
  - `.self`  事件不是从内部元素触发的
  - `.once ` 点击事件将只会触发一次
  - `.passive` **不拦截默认事件**。事件每次发生，浏览器会去查询一下是否有preventDefault阻止该次事件的默认动作。我们加上**passive就是为了告诉浏览器，不用查询了，我们没用preventDefault阻止默认动作。 **  一般用在 `scroll`  `touchmove`事件上。 *能够提升移动端的性能*
- 按键修饰符：[Vue3文档](https://v3.cn.vuejs.org/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6)
- 系统修饰符：[Vue3文档](https://v3.cn.vuejs.org/guide/events.html#%E7%B3%BB%E7%BB%9F%E4%BF%AE%E9%A5%B0%E9%94%AE)
- 事件绑定到 **目标Dom** 元素上



#### 表单

- v-model
- 表单项
- 修饰符



## 组件使用

