
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
};

const a = new Node(3)
const b = new Node(5)
const c = new Node(11)
const d = new Node(7)
const e = new Node(1)
const f = new Node(8)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

// RECURSIVE DEPTH FIRST
const rootToLeaf = (root) => {
  if(!root) return -Infinity
  if(!root.left && !root.right) return root.val

  const max = Math.max(rootToLeaf(root.left), rootToLeaf(root.right))

  return root.val + max
};


console.log(rootToLeaf(a)) // 15 9 22