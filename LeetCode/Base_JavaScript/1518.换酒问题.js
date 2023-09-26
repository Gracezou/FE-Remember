/**
 * 小区便利店正在促销，用 numExchange 个空酒瓶可以兑换一瓶新酒。你购入了 numBottles 瓶酒。
 * 如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。
 * 请你计算 最多 能喝到多少瓶酒。
 */

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let _changeable = numBottles
    let result = numBottles
    while (_changeable >= numExchange) {
        const changedBottles = parseInt(_changeable / numExchange)
        const rest = _changeable % numExchange
        _changeable = changedBottles + rest
        result += changedBottles
    }
    return result
}

console.log(numWaterBottles(15, 4))
