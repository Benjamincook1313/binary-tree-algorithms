// indexes  [ 0 |1| 2| 3| 4| 5| 6 ]
// nodes    [ 1, 2, 3, 4, 5, 6, 7 ]

// calculate 
// parent index: Math.floor(current index -1) / 2
// left child index: 2 * (current index) + 1
// right child index: 2 * (current index) + 2

//          (1)
//         /   \
//       (2)    (3)
//      /  \    /  \
//    (4) (5)  (6) (7)

class MinHeap {
  constructor(){
    this.storage = []
    this.size = 0 
  }

  // Methods to get indexes of values
  getParent = (i) => { return Math.floor((i - 1) / 2) };
  getLeftChild = (i) => { return 2 * i + 1 };
  getRightChild = (i) => { return 2 * i + 2 };

  // Methods to check is Node has parent or child Nodes
  hasParent = (i) => { return this.getParent(i) >= 0 };
  hasLeftChild = (i) => { return this.getLeftChild(i) < this.size };
  hasRightChild = (i) => { return this.getRightChild(i) < this.size };

  // Methods to get values of Nodes
  parent = (i) => {return this.storage[this.getParent(i)]};
  leftChild = (i) => {return this.storage[this.getLeftChild(i)]};
  rightChild = (i) => {return this.storage[this.getRightChild(i)]};

  // Swaps Nodes if they are not in the correct order
  swap = (index1, index2) => {
    let temp = this.storage[index1]
    this.storage[index1] = this.storage[index2]
    this.storage[index2] = temp
  };

  // Moves Nodes up the tree when inserted 

  // heapifyUp = () => {
  //   let index = this.size - 1
  //   while(this.hasParent(index) && this.parent[index] > this.storage[index]){
  //     this.swap(this.getParent(index), index)
  //     index = this.getParent(index)
  //   } 
  // };

  // Inserts new Node into Tree at the last position
  // insert = (data) => {
  //   this.storage[this.size] = data
  //   this.size += 1
  //   this.heapifyUp()
  // };

  // Reorders Tree after the root Node is removed
  // heapifyDown = () => {
  //   let index = 0
  //   while (this.hasLeftChild(index)){
  //     let smallerChild = this.getLeftChild(index)
  //     if ( this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index) )
  //     smallerChild = this.getRightChild(index) 
  //     if ( this.storage[index] < this.storage[smallerChild] ) {
  //       break
  //     } else { this.swap(index, smallerChild) }
  //   }
  // };

  // // Removes root Node 
  // removeMin = () => {
  //   if(this.size == 0) throw new Error("Empty Heap")
  //   let data = this.storage[0]
  //   this.storage[0] = this.storage[this.size -1]
  //   this.size -= 1
  //   this.heapifyDown()
  // };

  // RECURSIVE

  // Moves Nodes up the tree when inserted 
  heapifyUp = (index) => {
    // does the Node have a parent ?
    if ( this.hasParent(index) && this.parent(index) > this.storage[index] ){
      // if the Node has Parent do this
      this.swap(this.getParent(index), index)
      this.heapifyUp(this.getParent(index))
    } 
  };

  // Inserts new Node into Tree at the last position
  insert = (data) => {
    this.storage[this.size] = data
    this.size += 1
    this.heapifyUp(this.size -1)
  };

  // Reorders Tree after the root Node is removed
  heapifyDown = (index) => {
    let smallest = index
    if(this.hasLeftChild(index) && this.storage[smallest] > this.getLeftChild(index))
    smallest = this.getLeftChild(index)
    if(this.hasRightChild(index) && this.storage[smallest] > this.rightChild(index))
    smallest = this.getRightChild(index)
    if (smallest != index){
      this.swap(index, smallest)
      this.heapifyDown(smallest)
    }
  };

  // Removes root Node 
  removeMin = () => {
    if(this.size == 0) throw new Error("Empty Heap")
    let data = this.storage[0]
    this.storage[0] = this.storage[this.size -1]
    this.size -= 1
    this.heapifyDown(0)
    return data
  };
};

console.log([this.storage, this.size])



