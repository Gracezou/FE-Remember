/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null
    this.rear = null
    this.length = 0
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index > this.length) {
        return -1
    }
    let node = this.head
    while (index-- > 0) {
        if (node.next === null) {
            return -1
        }
        node = node.next
    }
    return node.val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new ListNode(val)
    this.head === null ? (this.rear = node) : (node.next = this.head)
    this.head = node
    this.length++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let node = new ListNode(val)
    this.head === null ? (this.head = node) : (this.rear.next = node)
    this.rear = node
    this.length++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index <= 0) {
        this.addAtHead(val)
        return
    }
    if (index >= this.length) {
        this.addAtTail(val)
        return
    }
    let node = this.head
    while (index-- > 1) {
        node = node.next
    }
    let newNode = new ListNode(val)
    newNode.next = node.next
    node.next = newNode
    this.length++
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.length - 1 || this.length === 0) {
        return
    }
    if (index === 0) {
        this.head = this.head.next
        this.length--
        return
    }

    let node = this.head
    let target = index
    while (index-- > 1) {
        node = node.next
    }
    if (target === this.length - 1) {
        this.rear = node
    }
    node.next = node.next.next
    this.length--
}

// ["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
// [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]
var obj = new MyLinkedList()
obj.addAtHead(7)
obj.addAtHead(2)
obj.addAtHead(1)
obj.addAtIndex(3, 0)
obj.deleteAtIndex(3)
// obj.addAtHead(6)
// obj.addAtTail(4)
// obj.get(4)
// console.log(obj.get(4))
// obj.addAtIndex(1, 2)
// obj.deleteAtIndex(1)
// obj.get(1)
// var param_1 = obj.get(index);
// obj.addAtHead(val);
// obj.addAtTail(val);
// obj.addAtIndex(index, val);
// obj.deleteAtIndex(index);

/**
 * Your MyLinkedList object will be instantiated and called as such:
 */
