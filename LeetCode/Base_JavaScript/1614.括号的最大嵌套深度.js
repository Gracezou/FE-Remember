/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    const length = s.length
    if (length === 1) {
        return 0
    }
    let stack = 0
    let max = 0
    for (let index = 0; index < length; index++) {
        if (s[index] === '(') {
            stack++
            max = Math.max(max, stack)
        }
        if (s[index] === ')') {
            stack--
        }
    }
    return max
}
