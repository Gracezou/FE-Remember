/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length != goal.length) return false
    // 完全相同 则存在多个相同的字符
    if (s === goal) {
        const charCount = new Array(26).fill(0)
        for (let i = 0; i < s.length; i++) {
            const index = s[i].charCodeAt() - 'a'.charCodeAt()
            if (charCount[index] >= 1) return true
            charCount[index]++
        }
        return false
    }
    // 不相同 则仅存在两个不同的字符
    let a = -1,
        b = -1
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            if (a == -1) {
                a = i
            } else if (b === -1) {
                b = i
            } else {
                return false
            }
        }
    }
    return a !== -1 && b !== -1 && s[a] === goal[b] && s[b] === goal[a]
}

/**
 *  判断是否是亲密字符串
 *  1.长度必定相同
 *  2.经过一次交换字母后相等
 *      1：完全相同 但存在多个相同的字符
 *      2：仅存在两个不同的字符
 */
