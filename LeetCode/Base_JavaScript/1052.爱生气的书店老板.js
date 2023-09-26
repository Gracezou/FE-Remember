/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 * 滑动窗口
 */

// @lc code=start
/**
 * 优化滑动窗口
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
    const length = customers.length
    // 不生气的人数
    let rest = 0
    for (let index = 0; index < length; index++) {
        grumpy[index] === 0 && (rest += customers[index])
    }
    // 拯救的人数
    let rescue = 0
    let sum = 0
    for (let index = 0; index < length; index++) {
        if (index < X) {
            grumpy[index] === 1 && (sum += customers[index])
        } else {
            grumpy[index] === 1 && (sum += customers[index])
            grumpy[index - X] === 1 && (sum -= customers[index - X])
        }
        rescue = Math.max(rescue, sum)
    }
    return rescue + rest
}
// @lc code=end

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3))
// 滑动窗口
var maxSatisfied1 = function (customers, grumpy, X) {
    const length = customers.length
    // 不生气的人数
    let rest = 0
    for (let index = 0; index < length; index++) {
        grumpy[index] === 0 && (rest += customers[index])
    }
    // 拯救的人数
    let rescue = 0
    for (let index = 0; index < length; index++) {
        let count = 0
        for (let range = index; range < index + X; range++) {
            grumpy[range] === 1 && (count += customers[range])
        }
        rescue = Math.max(rescue, count)
    }
    return rescue + rest
}
