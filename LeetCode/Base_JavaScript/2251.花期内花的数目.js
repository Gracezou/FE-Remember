/**
 * 给你一个下标从 0 开始的二维整数数组 flowers ，其中 flowers[i] = [starti, endi] 表示第 i 朵花的 花期 从 starti 到 endi （都 包含）。同时给你一个下标从 0 开始大小为 n 的整数数组 people ，people[i] 是第 i 个人来看花的时间。

请你返回一个大小为 n 的整数数组 answer ，其中 answer[i]是第 i 个人到达时在花期内花的 数目 。

示例 1：

输入：flowers = [[1,6],[3,7],[9,12],[4,13]], people = [2,3,7,11]
输出：[1,2,2,2]
解释：上图展示了每朵花的花期时间，和每个人的到达时间。
对每个人，我们返回他们到达时在花期内花的数目。
 */
/**提示：
1 <= flowers.length <= 5 * 104
flowers[i].length == 2
1 <= starti <= endi <= 109
1 <= people.length <= 5 * 104
1 <= people[i] <= 109 */
/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, people) {
    // 1. 暴力解法  但是时间溢出
    // return people.map(per => {
    //     let count = 0
    //     for (let i = 0; i < flowers.length; i++) {
    //         if (flowers[i][0] <= per && flowers[i][1] >= per) {
    //             count++
    //         }
    //     }
    //     return count
    // })
    // 2. 二分法
    // 排序
    const starts = flowers.map(f => f[0]).sort((a, b) => a - b)
    const ends = flowers.map(f => f[1]).sort((a, b) => a - b)
    return people.map(p => lowerBound(starts, p + 1) - lowerBound(ends, p))
}

var lowerBound = function (numbers, x) {
    let left = -1,
        right = numbers.length // 开区间 (left, right)
    while (left + 1 < right) {
        // 区间不为空
        // 循环不变量：
        // numbers[left] < x
        // numbers[right] >= x
        const mid = left + ((right - left) >> 1)
        if (numbers[mid] < x) left = mid // 区间缩小为 (mid, right)
        else right = mid // 区间缩小为 (left, mid)
    }
    return right // 根据循环不变量，此时 right 就是满足 numbers[right] >= x 的最小值
}

console.log(
    fullBloomFlowers(
        [
            [1, 6],
            [3, 7],
            [9, 12],
            [4, 13]
        ],
        [2, 3, 7, 11]
    )
)
console.log(
    fullBloomFlowers(
        [
            [1, 10],
            [3, 3]
        ],
        [3, 3, 2]
    )
)
