/**
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 */
/**
 * 题解：适用双线链表，头部为最近使用，尾部为最久未使用
 */

class Node {
    constructor(key = 0, value = 0) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}
/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.dummy = new Node()
        this.dummy.prev = this.dummy
        this.dummy.next = this.dummy
        this.keyToNode = new Map()
    }

    getNode(key) {
        if (!this.keyToNode.has(key)) return null
        const node = this.keyToNode.get(key)
        this.removeLRUItem(node)
        this.moveToHead(node)
        return node
    }

    get(key) {
        const node = this.getNode(key)
        return node ? node.value : -1
    }

    put(key, value) {
        const node = this.getNode(key)
        if (node) {
            node.value = value
            return
        }
        const newNode = new Node(key, value)
        this.keyToNode.set(key, newNode)
        this.moveToHead(newNode)
        if (this.keyToNode.size > this.capacity) {
            const back = this.dummy.prev
            this.keyToNode.delete(back.key)
            this.removeLRUItem(back)
        }
    }
    moveToHead(node) {
        node.prev = this.dummy
        node.next = this.dummy.next
        node.prev.next = node
        node.next.prev = node
    }

    removeLRUItem(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
