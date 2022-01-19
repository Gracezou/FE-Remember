/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    // if (nums.length === 1) return 0
    // const _max = Math.max.apply(null, nums)
    // const _maxIndex = nums.indexOf(_max)
    // for (let index = 0; index < nums.length; index++) {
    //     const target = nums[index]
    //     if (target === _max) continue
    //     if (target * 2 > _max) return -1
    // }
    // return _maxIndex
    let max = -1,
        second = -1,
        idx = -1
    for (let i = 0; i < nums.length; i++)
        if (nums[i] > max) {
            second = max
            max = nums[i]
            idx = i
        } else if (nums[i] > second) second = nums[i]
    return max >= 2 * second ? idx : -1
}

console.log(dominantIndex([1, 2, 3, 4]))
console.log(dominantIndex([3, 6, 1, 0]))
