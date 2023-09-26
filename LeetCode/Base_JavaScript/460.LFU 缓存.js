/**
 * 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。

实现 LFUCache 类：

LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
int get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。
void put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量 capacity 时，则应该在插入新项之前，移除最不经常使用的项。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近最久未使用 的键。
为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。

当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。

函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 */
/**
 * 题解：建立Map，key 为key，value为node
 * 再建立一个Map，key 为
 *
 */

class Node {
    constructor(key = 0, value = 0) {
        this.key = key
        this.value = value
        this.freq = 1
        this.prev = null
        this.next = null
    }
}

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.minFreq = 0
        this.keyToNode = new Map()
        this.freqToNodeList = new Map()
    }

    newList() {
        const dummy = new Node() // 哨兵节点
        dummy.prev = dummy
        dummy.next = dummy
        return dummy
    }

    getNode(key) {
        if (!this.keyToNode.has(key)) return null
        const node = this.keyToNode.get(key)
        this.remove(node)
        const dummy = this.freqToNodeList.get(node.freq)
        if (dummy.prev === dummy) {
            this.freqToNodeList.delete(node.freq)
            if (node.freq === this.minFreq) {
                this.minFreq++
            }
        }
        this.moveToHead(++node.freq, node)
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
        if (this.keyToNode.size === this.capacity) {
            const dummy = this.freqToNodeList.get(this.minFreq)
            const toDel = dummy.prev
            this.keyToNode.delete(toDel.key)
            this.remove(toDel)
            if (dummy.prev === dummy) {
                this.freqToNodeList.delete(toDel.freq)
            }
        }
        const newNode = new Node(key, value)
        this.keyToNode.set(key, newNode)
        this.moveToHead(1, newNode)
        this.minFreq = 1
    }

    moveToHead(freq, node) {
        if (!this.freqToNodeList.has(freq)) {
            this.freqToNodeList.set(freq, this.newList())
        }
        const dummy = this.freqToNodeList.get(freq)
        node.prev = dummy
        node.next = dummy.next
        node.prev.next = node
        node.next.prev = node
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }
}
