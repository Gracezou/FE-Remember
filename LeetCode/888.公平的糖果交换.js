/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
    const sumA = A.reduce((a, b) => a + b, 0)
    const sumB = B.reduce((a, b) => a + b, 0)
    const part = Math.floor((sumB - sumA) / 2)
    const setA = new Set(A)
    for (let y of B) {
        let x = y - part
        if (setA.has(x)) {
            return [x, y]
        }
    }
    return []
}
// @lc code=end

/**
 * 设 x ，y 分别为交换的糖果
 * 可得公式：sumA - x + y = sumB - y + x
 */
console.log(fairCandySwap([1, 2, 5], [2, 4]))
