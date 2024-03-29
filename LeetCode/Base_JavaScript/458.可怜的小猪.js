/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    const times = minutesToTest / minutesToDie
    const base = times + 1
    // base ^ ans >= buckets
    // ans >= log(buckets) / log(base)
    return Math.ceil(Math.log(buckets) / Math.log(base))
}
