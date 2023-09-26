/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    let p = head
    let odd = null
    let even = null
    let index = 1
    while (p) {
        const temp = p.next
        if (index % 2 === 0) {
            // 偶数节点
            if (even) {
                even.next = p
            }
            even = p
            p.next = null
        } else {
            // 奇数节点
            if (odd) {
                p.next = odd.next
                odd.next = p
            }
            odd = p
        }
        p = temp
        index++
    }
    return head
}
// @lc code=end
