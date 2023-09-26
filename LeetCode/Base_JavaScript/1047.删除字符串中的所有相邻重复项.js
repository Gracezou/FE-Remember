/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let length = S.length
    if (length <= 1) {
        return S
    }
    for (let i = 1; i < length; i++) {
        if (S[i] == S[i - 1]) {
            S.splice(i - 1, 2)
            return removeDuplicates(S)
        }
    }
    return S
}
// @lc code=end

let a = [1, 2, 3]
a.splice(1, 2)
console.log(removeDuplicates('abbaca'))
