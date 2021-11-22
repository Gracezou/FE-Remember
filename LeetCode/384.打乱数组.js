/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.originalList = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.originalList;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const tempList = this.originalList.concat();
  const tempList = [...this.originalList];
  for (let i = 0; i < tempList.length; i++) {
    const idx = Math.floor(Math.random() * (tempList.length - i)) + i;
    // [tempList[i],tempList[idx]] =[tempList[idx],tempList[i]]
    const temp = tempList[i];
    tempList[i] = tempList[idx];
    tempList[idx] = temp;
  }
  return tempList;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// 打乱算法
