// 手写 Promise

// 简易版本
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    // 异步执行 需要缓存 this 对象
    const that = this
    that.state = PENDING
    // 用于保存 resolve 或者 reject 中传入的值
    that.value = null

    // 用于保存 then 中的 回调
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    //  resolve 和 reject 函数
    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb => cb(that.value))
        }
    }

    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }
    // fn
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

// then 函数
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected =
        typeof onRejected === 'function'
            ? onRejected
            : r => {
                  throw r
              }

    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    if (that.state === RESOLVED) {
        onFulfilled(that.value)
    }
    if (that.state === REJECTED) {
        onRejected(that.value)
    }
}
