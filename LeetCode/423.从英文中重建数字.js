/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    const charCount = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        charCount[getNumIndex(s[i])]++
    }
    const numCount = new Array(10).fill(0)
    // 唯一的
    numCount[0] = charCount[getNumIndex('z')]
    numCount[6] = charCount[getNumIndex('x')]
    numCount[2] = charCount[getNumIndex('w')]
    numCount[4] = charCount[getNumIndex('u')]
    numCount[8] = charCount[getNumIndex('g')]
    // 递推 其他数字
    numCount[3] = charCount[getNumIndex('h')] - numCount[8]
    numCount[5] = charCount[getNumIndex('f')] - numCount[4]
    numCount[7] = charCount[getNumIndex('s')] - numCount[6]
    numCount[1] = charCount[getNumIndex('o')] - numCount[0] - numCount[2] - numCount[4]
    numCount[9] = charCount[getNumIndex('i')] - numCount[8] - numCount[5] - numCount[6]
    // 结果输出
    let res = ''
    for (let index = 0; index < numCount.length; index++) {
        res += index.toString().repeat(numCount[index])
    }
    return res
}

var getNumIndex = numStr => numStr.charCodeAt() - 'a'.charCodeAt()

console.log(originalDigits('owoztneoer'))
/**
 *  const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
 *  根据数字字母特殊性 进行统计
 *  ps: 避免重复  如 nine 的n
 *  0, 6, 2, 4, 8,    3,        5,     7,         1,                9
 *  z, x, w, u, g,  h - 8,  f - 4, s - 6, o - 0 - 2 - 4,  n - 1 - 7
 */
