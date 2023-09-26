/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
    // const len = ages.length
    // let res = 0
    // for (let x = 0; x < len; x++) {
    //     for (let y = 0; y < len; y++) {
    //         if (x === y) continue
    //         if (ages[y] <= 0.5 * ages[x] + 7) continue
    //         if (ages[y] > ages[x]) continue
    //         if (ages[y] > 100 && ages[x] < 100) continue
    //         res++
    //     }
    // }
    // return res
    const cnts = new Array(120),
        presum = new Array(121)
    cnts.fill(0)
    presum.fill(0)
    // 年龄
    for (const age of ages) cnts[age - 1]++
    // 前缀和
    for (let i = 1; i < 121; i++) presum[i] = presum[i - 1] + cnts[i - 1]
    let ans = 0
    // 取合理范围的和值
    for (const age of ages) ans += Math.max(0, presum[age] - presum[Math.floor(age / 2) + 7] - 1)
    return ans
}

console.log(numFriendRequests([20, 30, 100, 110, 120]))
