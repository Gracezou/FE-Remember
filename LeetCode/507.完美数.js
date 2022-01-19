/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let res = 0
    let index = 1
    while (index < num) {
        if (num % index === 0) res += index
        index++
    }
    return res === num
}

console.log(checkPerfectNumber(28))
