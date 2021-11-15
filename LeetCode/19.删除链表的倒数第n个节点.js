/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let p = head
    let length = 0
    while (p) {
        p = p.next
        length++
    }
    p = head
    let target = length - n + 1
    if (target === 1) return head.next
    while (target-- > 2) {
        p = p.next
    }
    p.next = p.next.next
    return head
}
// @lc code=end
// console.log(removeNthFromEnd([1], 1))
console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2))
