/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    let ans = 0
    for (let i = 0, j = 0; i < houses.length; i++) {
        let cur = Math.abs(houses[i] - heaters[j])
        while (j < heaters.length && heaters[j] <= houses[i]) cur = houses[i] - heaters[j++]
        if (j < heaters.length) cur = Math.min(cur, heaters[j] - houses[i])
        ans = Math.max(ans, cur)
        if (j > 0) j--
    }
    return ans
}
