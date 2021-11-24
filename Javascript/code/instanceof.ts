// 原型链 判断
export default (L: any, R: ObjectConstructor): boolean => {
    const O = R.prototype
    L = L._proto_

    while (true) {
        if (L === null) return false
        if (O === L) return true
        L = L._proto_
    }
}

/**
 *  测试代码
 */
class Bar {}
let obj = new Bar()
console.log(obj instanceof Bar)
// 等同于
console.log(Bar[Symbol.hasInstance](obj))

// Symbol.hasInstance  是 Function 的属性
console.log(Function[Symbol.hasInstance])
