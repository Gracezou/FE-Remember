const checkArray = arr => Array.isArray(arr)

const swap = (arr, index, target) => {
    arr[index] = arr.splice(target, 1, arr[index])[0]
    return arr
}
// 冒泡 O(n * n)
function buble(array) {
    checkArray(array)

    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) swap(array, j, j + 1)
        }
    }
}

// 插入排序 第一个元素默认是已排序元素
// O(n * n)
function insertion(array) {
    checkArray(array)
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--) swap(array, j, j + 1)
    }
    return array
}

//选择排序
//O(n * n)
function selection(array) {
    checkArray(array)
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            minIndex = array[j] < array[minIndex] ? j : minIndex
        }
        swap(array, i, minIndex)
    }
    return array
}
// 归并排序 O(N * logN)
function sort(array) {
    checkArray(array)
    mergeSort(array, 0, array.length - 1)
    return array
}

function mergeSort(array, left, right) {
    // 左右索引相同说明已经只有一个数
    if (left === right) return
    // 等同于 `left + (right - left) / 2`
    // 相比 `(left + right) / 2` 来说更加安全，不会溢出
    // 使用位运算是因为位运算比四则运算快
    let mid = parseInt(left + ((right - left) >> 1))
    mergeSort(array, left, mid)
    mergeSort(array, mid + 1, right)

    let help = []
    let i = 0
    let p1 = left
    let p2 = mid + 1
    while (p1 <= mid && p2 <= right) {
        help[i++] = array[p1] < array[p2] ? array[p1++] : array[p2++]
    }
    while (p1 <= mid) {
        help[i++] = array[p1++]
    }
    while (p2 <= right) {
        help[i++] = array[p2++]
    }
    for (let i = 0; i < help.length; i++) {
        array[left + i] = help[i]
    }
    return array
}

// 快排 O(logN)
function sort(array) {
    checkArray(array)
    quickSort(array, 0, array.length - 1)
    return array
}

function quickSort(array, left, right) {
    if (left < right) {
        swap(array, 0, right)
        // 随机取值，然后和末尾交换，这样做比固定取一个位置的复杂度略低
        let indexs = part(array, parseInt(Math.random() * (right - left + 1)) + left, right)
        quickSort(array, left, indexs[0])
        quickSort(array, indexs[1] + 1, right)
    }
}
function part(array, left, right) {
    let less = left - 1
    let more = right
    while (left < more) {
        if (array[left] < array[right]) {
            // 当前值比基准值小，`less` 和 `left` 都加一
            ++less
            ++left
        } else if (array[left] > array[right]) {
            // 当前值比基准值大，将当前值和右边的值交换
            // 并且不改变 `left`，因为当前换过来的值还没有判断过大小
            swap(array, --more, left)
        } else {
            // 和基准值相同，只移动下标
            left++
        }
    }
    // 将基准值和比基准值大的第一个值交换位置
    // 这样数组就变成 `[比基准值小, 基准值, 比基准值大]`
    swap(array, right, more)
    return [less, more]
}
