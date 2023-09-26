/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let num = new Array(100).fill(0)
    let res = 0
    for (let dominoe of dominoes) {
        const value = dominoe[0] < dominoe[1] ? dominoe[1] * 10 + dominoe[0] : dominoe[0] * 10 + dominoe[1]
        res += num[value]
        num[value]++
    }
    return res
}
// @lc code=end
