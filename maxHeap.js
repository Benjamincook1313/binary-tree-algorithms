
// index    [ 0| 1| 2| 3| 4| 5| 6 ]
// nodes    [ 7, 6, 5, 4, 3, 2, 1 ]

// calculate 
// parent index: Math.floor((current index -1) / 2)
// left child index: Math.floor(2 * (current index) + 1)
// right child index: Math.floor(2 * (current index) + 2)

//          (7)
//         /   \
//       (6)    (5)
//      /  \    /  \
//    (4) (3)  (2) (1)