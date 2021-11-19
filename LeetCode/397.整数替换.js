/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  if (n === 1) return 0;

  if (n % 2 === 0) return 1 + integerReplacement(Math.floor(n / 2));

  return (
    2 +
    Math.min(
      integerReplacement(Math.floor(n / 2)),
      integerReplacement(Math.floor(n / 2) + 1)
    )
  );
};

console.log(integerReplacement(65535));
/**
 * @param {number} n
 * @return {number}
 */
var integer = function (n) {
  let count = 0;
  while (n > 1) {
    if (n === 3) n--;
    else if (n % 2 === 0) {
      n >>>= 1;
    } else {
      n = (n + 1) % 4 === 0 ? n + 1 : n - 1;
    }
    count++;
  }
  return count;
};
