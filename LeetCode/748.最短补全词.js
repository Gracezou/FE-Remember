/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    const template = licensePlate
        .replace(/[^a-zA-Z]/g, '')
        .toLowerCase()
        .split('')
        .sort()
    const n = template.length
    let res = ''
    let max = 0
    for (const w of words) {
        const word = w.split('').sort()
        const m = word.length
        let tmp = 0
        // 按字典序排序后比较出相同字符数
        for (let i = 0, j = 0; i < n && j < m; ) {
            if (template[i] === word[j]) {
                tmp++, i++, j++
            } else {
                template[i] < word[j] ? i++ : j++
            }
        }
        // 判断是最短补全词
        if (tmp > max || (tmp === max && word.length < res.length)) {
            res = w
            max = tmp
        }
    }
    return res
}
