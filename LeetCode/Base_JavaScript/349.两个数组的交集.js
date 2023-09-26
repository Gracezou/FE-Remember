/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let list1 = Array.from(new Set(nums1))
    let list2 = new Set(nums2)
    let list3 = new Set(list1.filter(e => list2.has(e)))
    return Array.from(list3)
}
// @lc code=end

let list1 = [8, 0, 3]
let list2 = [0, 0]
console.log(intersection(list1, list2))
