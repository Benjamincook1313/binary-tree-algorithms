
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
};

const a = new Node(4)
const b = new Node(5)
const c = new Node(9)
const d = new Node(2)
const e = new Node(3)
const f = new Node(8)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

    //       a
    //     /   \
    //    b     c
    //   / \     \
    //  d   e     f

// DEPTH FIRST

const treeSum = (root) => {
  if(root === null) return 0

  const stack = [ root ]
  let sum = 0

  while (stack.length > 0) {
    const current = stack.pop()
    sum += current.val
    if(current.right) stack.push(current.right)
    if(current.left) stack.push(current.left)
  }

  return sum
};

// RECURSIVE TREESUM DEPTH FIRST

const treeSum = (root) => {
  if(root === null) return 0
  return root.val + treeSum(root.left) + treeSum(root.right)
}

const treeSum = (root) => {
  if(root === null) return 0
  let sum = 0
  const queue = [ root ]

  while ( queue.length > 0 ) {
    const current = queue.shift()
    sum += current.val
    if(current.left != null) queue.push(current.left)
    if(current.right != null) queue.push(current.right)
  }

  return sum
};

console.log(treeSum(a)) // 31