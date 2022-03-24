

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

    // DEPTH FIRST

  const depthTreeIncludes = (root, target) => {
    if(root === null) return false
    if(root.val === target) return true
    return depthTreeIncludes(root.left, target) || depthTreeIncludes(root.right, target)
  };
  
  console.log(depthTreeIncludes(a, 'F'))

  // BREADTH FIRST TRAVERSE

  const breadthTreeIncludes = (root, target) => {
    if(root === null) return false

    const queue = [ root ]
    while (queue.length > 0) {
      const current = queue.shift()
      if(current.val === target) return true
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }

    return false
  };

  // console.log(breadthTreeIncludes(a, 'F'))