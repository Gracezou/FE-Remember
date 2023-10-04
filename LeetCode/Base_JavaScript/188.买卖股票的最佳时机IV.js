/**
 * 给你一个整数数组 prices 和一个整数 k ，其中 prices[i] 是某支给定的股票在第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。也就是说，你最多可以买 k 次，卖 k 次。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1：
输入：k = 2, prices = [2,4,1]
输出：2
解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    const f = Array(k + 2)
        .fill(null)
        .map(() => Array(2).fill(-Infinity))
    for (let j = 1; j <= k + 1; j++) {
        f[j][0] = 0
    }
    for (const p of prices) {
        for (let j = k + 1; j > 0; j--) {
            f[j][0] = Math.max(f[j][0], f[j][1] + p)
            f[j][1] = Math.max(f[j][1], f[j - 1][0] - p)
        }
    }
    return f[k + 1][0]
}
console.log(maxProfit(2, [2, 4, 1]))
