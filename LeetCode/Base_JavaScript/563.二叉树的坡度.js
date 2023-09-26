//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  let sum = 0;
  var order = function (root) {
    if (!root) return;
    sum += TiltVal(root);
    order(root.left);
    order(root.right);
  };
  order(root);
  return sum;
};
// 求当前节点坡度
var TiltVal = function (root) {
  let left = 0,
    right = 0;
  root.left && (left = nodeCom(root.left));
  root.right && (right = nodeCom(root.right));
  return Math.abs(left - right);
};
// 求节点总和
var nodeCom = (root) => {
  let sum = 0;
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    sum += n.val;
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
  return sum;
};

// 一个递归即可
var findTilt = function (root) {
  let ans = 0;
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    const sumLeft = dfs(node.left);
    const sumRight = dfs(node.right);
    ans += Math.abs(sumLeft - sumRight);
    return sumLeft + sumRight + node.val;
  };
  dfs(root);
  return ans;
};
