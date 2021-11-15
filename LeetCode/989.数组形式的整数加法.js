/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
//  考验大数相加
//  type Math
// /**
//  * @param {number[]} A
//  * @param {number} K
//  * @return {number[]}
//  */
// var addToArrayForm = function (A, K) {
//     let num = BigInt(A.join("")) + BigInt(K);
//     return num.toString().split('');
//   };
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    if (K === 0) {
        return A
    }
    const res = []
    for (let i = A.length - 1; i >= 0 || K > 0; --i, K = Math.floor(K / 10)) {
        if (i >= 0) {
            K += A[i]
        }
        res.push(K % 10)
    }
    return res.reverse()
}
// @lc code=end
