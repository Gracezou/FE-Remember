/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
  if (rectangles.length === 1) return true;
  let area = 0;
  let [minX, minY, maxX, maxY] = rectangles[0];
  const cnt = new Set();
  for (const [x, y, a, b] of rectangles) {
    area += (a - x) * (b - y);
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, a);
    maxY = Math.max(maxY, b);
    const arr = [`${x1} ${y1}`, `${x1} ${y2}`, `${x2} ${y1}`, `${x2} ${y2}`];
    arr.forEach((k) => (cnt.has(k) ? cnt.delete(k) : cnt.add(k)));
  }

  return (
    area === (maxX - minX) * (maxY - minY) &&
    cnt.size === 4 &&
    [
      `${minX} ${minY}`,
      `${minX} ${maxY}`,
      `${maxX} ${minY}`,
      `${maxX} ${maxY}`,
    ].every((k) => cnt.has(k))
  );
};

/**
 * 1、小矩阵面积和等于大矩阵；
 * 2、对应到大矩阵四个角的顶点只能出现一次，其他顶点需要出现偶数次
 */
