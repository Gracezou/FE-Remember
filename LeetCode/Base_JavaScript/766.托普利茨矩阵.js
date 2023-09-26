/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let yLen = matrix.length,
        xLen = matrix[0].length
    // 比较每条对角线
    //   for (let x = 0; x < xLen - 1; x++) {
    //     let target = matrix[0][x];
    //     for (let index = 0; index < yLen && index + x < xLen; index++) {
    //       if (matrix[index][x + index] !== target) {
    //         return false;
    //       }
    //     }
    //   }
    //   for (let y = 1; y < yLen; y++) {
    //     let target = matrix[y][0];
    //     for (let index = 0; index < xLen && index + y < yLen; index++) {
    //       if (matrix[y + index][index] !== target) {
    //         return false;
    //       }
    //     }
    //   }
    //   return true;
    // 比较当前左上角元素
    for (let x = 1; x < xLen; x++) {
        for (let y = 1; y < yLen; y++) {
            if (matrix[y][x] != matrix[y - 1][x - 1]) {
                return false
            }
        }
    }
    return true
}
// @lc code=end
console.log(
    isToeplitzMatrix([
        [1, 2],
        [2, 2]
    ]),
    false
)
console.log(
    isToeplitzMatrix([
        [1, 2, 3, 4],
        [5, 1, 2, 3],
        [9, 5, 1, 2]
    ]),
    true
)
