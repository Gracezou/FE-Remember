/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  //  排序
  const map = new Map();
  let ans = 0;
  for (const word of words) {
    //   是否存在相同
    const h = hash(word),
      n = word.length;
    if (map.has(h) && map.get(h) >= n) continue;
    for (const other of map.keys())
      if ((other & h) == 0) ans = Math.max(ans, map.get(other) * n);
    map.set(h, n);
  }
  return ans;
};
/**
 *  位运算计算 是否存在相同字符
 * @param {string} word
 * @returns
 */
var hash = function (word) {
  let res = 0;
  for (let i = 0; i < word.length; i++)
    res |= 1 << (word[i].charCodeAt() - "a".charCodeAt());
  return res;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
