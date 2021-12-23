/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    const times = Math.ceil(b.length / a.length)
    if (a.repeat(times).includes(b)) return times
    if (a.repeat(times + 1).includes(b)) return times + 1
    return -1
}
// 上下界问题
// b 由 a 的复制可得  所以根据a  b 的长度可算出上下界  进行匹配即可
