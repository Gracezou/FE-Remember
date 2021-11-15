/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    // return matrix[0].map((_, index) => matrix.map(item => item[index]))
    return Array.from({ length: matrix[0].length }, (_, index) => matrix.map(item => item[index]))
}
// @lc code=end
