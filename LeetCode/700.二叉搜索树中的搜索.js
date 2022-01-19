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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root) return null
    if (val === root.val) return root
    return searchBST(val < root.val ? root.left : root.right, val)
}

/**
 *  二叉搜索树 特点： 左子树所有节点的元素元素值 均小于 根节点的元素值，右侧同理 为大于
 */
