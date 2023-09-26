/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let p = head
    let pre = new ListNode(0, head)
    let newHead = pre
    while (p) {
        p.val === val ? (pre.next = p.next) : (pre = p)
        p = p.next
    }
    return newHead
}
// @lc code=end
