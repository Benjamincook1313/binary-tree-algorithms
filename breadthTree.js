
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


const breadthFirstValues = (root) => {
  if(root === null) return []
  const queue = [root]
  const results = []
  while(queue.length > 0) {
    const current = queue.shift()
    results.push(current.val)
    if(current.left) queue.push(current.left)
    if(current.right) queue.push(current.right)
  }

  return results
};

// RECURSIVE

const breadthFirstValues = (root) => {
  // Breadth first best practice iteratively
  // No Recursion
};

console.log(breadthFirstValues(a))