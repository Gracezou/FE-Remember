// 广度
const bfs = root => {
    const q = [root]
    while (q.length > 0) {
        const n = q.shift()
        console.log(n.val)
        n.children.forEach(child => {
            q.push(child)
        })
    }
}
// 深度优先
const dfs = root => {
    console.log(root.val)
    root.children.forEach(dfs)
}
// 先序遍历  根左右
const preorder = root => {
    if (!root) return
    console.log(root.val)
    inorder(root.left)
    inorder(root.right)
}
const preorderStack = root => {
    if (!root) return
    const stack = [root]
    while (stack.length) {
        const n = stack.pop()
        console.log(n.val)
        // 先进后出  所以先进 右节点
        if (n.right) stack.push(n.right)
        if (n.left) stack.push(n.left)
    }
}

// 中序遍历 左跟右
const inorder = root => {
    if (!root) return
    inorder(root.left)
    console.log(root.val)
    inorder(root.right)
}
const inorderStack = root => {
    if (!root) return
    const stack = []
    let p = root
    while (stack.length || p) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        const n = stack.pop()
        console.log(n.val)
        p = n.right
    }
}

// 后序遍历 左右跟
const postorder = root => {
    if (!root) return
    inorder(root.left)
    inorder(root.right)
    console.log(root.val)
}

const postorderStack = root => {
    if (!root) return
    const stack = [root]
    const outputStact = []
    while (stack.length) {
        const n = stack.pop()
        outputStact.push(n)
        if (n.left) stack.push(n.left)
        if (n.right) stack.push(n.right)
    }
    while (outputStact.length) {
        const n = outputStact.pop()
        console.log(n.val)
    }
}

const list = [{ a: 1 }, { b: 2, c: { d: 2 } }, 3]

list.forEach(e => {
    if (Reflect.has(e, 'b')) {
        let c = e.c
        e.b = c
        delete e.c
    }
})
// console.log(list)
