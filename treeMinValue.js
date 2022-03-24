
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
};

const a = new Node('2')
const b = new Node('3')
const c = new Node('6')
const d = new Node('8')
const e = new Node('11')
const f = new Node('1')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

// RECURSIVE DEPTH FIRST
const treeMinValue = (root) => {
  if(root === null) return Infinity
  const left = treeMinValue(root.left)
  const right = treeMinValue(root.right)
  return Math.min(root.val, left, right)
};

//  DEPTH FIRST
const treeMinValue = (root) => {
  if(root === null) return Infinity
  const stack = [ root ]
  let min = Infinity

  while (stack.length > 0) {
    const current = stack.pop()
    if(current.val < min) min = current.val
    if(current.right) stack.push(current.right)
    if(current.left) stack.push(current.left)
  }

  return min
};

// BREADTH FIRST
const treeMinValue = (root) => {
  if(root === null) return Infinity
  
  const queue = [ root ]
  let min = Infinity
  while (queue.length > 0) {
    const current = queue.shift()
    if(current.val < min) min = current.val
    if(current.left) queue.push(current.left)
    if(current.right) queue.push(current.right)
  }

  return min
};



console.log(treeMinValue(a)) // 1