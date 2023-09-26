/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const n = s.length
    // 不是2的倍数 则括号存在不成对
    if (n % 2 === 1) return false
    let map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])
    let stack = []
    for (const item of s) {
        if (!map.has(item)) {
            stack.push(item)
            continue
        }
        if (stack.length <= 0 || stack[stack.length - 1] != map.get(item)) return false
        stack.pop()
    }
    return stack.length == 0
}

// @lc code=end
