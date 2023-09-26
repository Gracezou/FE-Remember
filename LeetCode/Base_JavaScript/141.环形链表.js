/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let p1 = head
    let p2 = head
    while (p1 && p2 && p2.next) {
        p1 = p1.next
        p2 = p2.next.next
        if (p1 === p2) {
            return true
        }
    }
    return false
}
// @lc code=end
/**
 * 为什么快指针比慢指针快一步为最优解
 *
 * 设：证明相遇
 * 假定环前节点有 x 个，环上节点有 y 个，快慢指针在环上分别走了 m，n 圈后相遇，
 * 在环上相遇的位置为 z，用 s 表示慢指针每次走的步长，用常数 c 表示快指针比慢指针每次多走的步长,
 * 用 i 表示慢指针走的次数。
 * x + my + z = i * (s + c)
 * x + ny + z = i * s
 *
 * 两式相减 得： (m - n) y = i * c
 * 为了使得循环次数最小，即是 (m - n)最小，则c 最小。故 c = 1。
 */
