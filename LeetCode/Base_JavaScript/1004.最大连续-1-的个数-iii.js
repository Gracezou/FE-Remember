/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * 滑动窗口 + 前缀和
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    const length = A.length
    let l = 0,
        ls = 0,
        rs = 0
    let ans = 0
    for (let r = 0; r < length; ++r) {
        rs += 1 - A[r]
        while (ls < rs - K) {
            ls += 1 - A[l]
            ++l
        }
        ans = Math.max(ans, r - l + 1)
    }
    return ans
}
// @lc code=end
