/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
    const pq = new PriorityQueue(),
        n = apples.length
    let i = 0,
        ans = 0
    while (i < n || pq.size > 0) {
        while (pq.size > 0 && pq.peek()[0] <= i) pq.poll()
        if (i < n && apples[i] > 0) pq.offer([i + days[i], apples[i]])
        if (pq.size > 0) {
            ans++
            if (--pq.peek()[1] == 0) pq.poll()
        }
        i++
    }
    return ans
}

/**
 * 构造Java优先队列类
 */
class PriorityQueue {
    constructor(compare = (a, b) => a > b) {
        this.data = []
        this.size = 0
        this.compare = compare
    }

    peek() {
        return this.size === 0 ? null : this.data[0]
    }

    offer(val) {
        this.data.push(val)
        this._shifUp(this.size++)
    }

    poll() {
        if (this.size === 0) {
            return null
        }
        this._swap(0, --this.size)
        this._shifDown(0)
        return this.data.pop()
    }

    _parent(index) {
        return (index - 1) >> 1
    }

    _child(index) {
        return (index << 1) + 1
    }

    _shifDown(index) {
        while (this._child(index) < this.size) {
            let child = this._child(index)
            if (child + 1 < this.size && this.compare(this.data[child + 1], this.data[child])) {
                child = child + 1
            }
            if (this.compare(this.data[index], this.data[child])) {
                break
            }
            this._swap(index, child)
            index = child
        }
    }

    _shifUp(index) {
        while (this._parent(index) >= 0 && this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    _swap(a, b) {
        ;[this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}
