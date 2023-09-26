/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const l3 = new ListNode(0)
    let p1 = l1,
        p2 = l2,
        p3 = l3,
        carry = 0
    while (p1 || p2) {
        const v1 = p1 ? p1.val : 0
        const v2 = p2 ? p2.val : 0
        const val = v1 + v2 + carry
        carry = Math.floor(val / 10)
        p3.next = new ListNode(val % 10)
        p1 && (p1 = p1.next)
        p2 && (p2 = p2.next)
        p3 = p3.next
    }
    if (carry) {
        p3.next = new ListNode(carry)
    }
    return p3.next
}
// @lc code=end
var A = function () {
    this.val = []
}
A.prototype.get = function (index) {
    return this.val[index]
}

A.prototype.addAtHead = function (val) {
    this.val = this.val.unshift(val)
}
let test = new A()

// console.log(test)
// console.log(test.get(0))
// test.val = [1, 2]
// console.log(test.get(1))
// test.addAtHead(1)
// console.log(test)
