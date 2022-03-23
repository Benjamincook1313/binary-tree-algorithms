class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null


  }
};

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')

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

const depthFirstValues = (root) => {
  if(root === null) return []
  const stack = [ root ]
  const values = []
  while (stack.length > 0 ) {
    const current = stack.pop()
    values.push(current.val)
    if(current.right) stack.push(current.right)
    if(current.left) stack.push(current.left)
  }
  return values
};

// RECURSIVE

const depthFirstValues = (root) => {
  if(root === null) return []
  const left = depthFirstValues(root.left)  // b d
  const right = depthFirstValues(root.right)   // c e f
  return [root.val, ...left, ...right]
};

console.log(depthFirstValues(a))