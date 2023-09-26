/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    return s.split(' ').splice(0, k).join(' ')
}

// 匪夷所思的简单，答案确实如上所示
// 熟悉 数组和字符串的自带接口API即可
