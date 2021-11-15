/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0
    let leftDep = maxDepth(root.left)
    let rightDep = maxDepth(root.right)
    return 1 + Math.max(leftDep, rightDep)
}
// @lc code=end

var maxD = root => {
    let res = 0
    const dfs = (root, length) => {
        if (!root) return
        if (!root.left && !root.right) {
            res = Math.max(res, length)
        }
        dfs(root.left, length + 1)
        dfs(root.right, length + 1)
    }
    dfs(root, 1)
    return res
}
