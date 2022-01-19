/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    // Math.abs(i - j) <= k
    const length = nums.length
    const set = new Set()
    for (let index = 0; index < length; index++) {
        if (set.size === k + 1) {
            set.delete(nums[index - k - 1])
        }
        if (set.has(nums[index])) {
            return true
        }
        set.add(nums[index])
    }
    return false
}

// 滑动窗口 运用

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
