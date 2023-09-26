/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = {}
    for (let [index, number] of nums.entries()) {
        if (number in map) {
            map[number][0]++
            map[number][2] = index
        } else {
            map[number] = [1, index, index]
        }
    }
    let maxNum = 0,
        minLen = 0
    for (const [count, left, right] of Object.values(map)) {
        if (maxNum < count) {
            maxNum = count
            minLen = right - left + 1
        } else if (maxNum === count) {
            minLen = Math.min(minLen, right - left + 1)
        }
    }
    return minLen
}
// @lc code=end
