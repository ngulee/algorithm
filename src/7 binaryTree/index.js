var bTree = {
  data: 'A',
  leftChild: {
    data: 'B',
    leftChild: null,
    rightChild: {
      data: 'D',
      leftChild: null,
      rightChild: null
    }
  },
  rightChild: {
    data: 'C',
    leftChild: null,
    rightChild: null
  },
}

// function PreOrderTraverseByRecursive(tree) {
//   if(tree === null) return;
//   console.log('Pre:', tree.data);
//   PreOrderTraverseByRecursive(tree.leftChild);
//   PreOrderTraverseByRecursive(tree.rightChild);
// }

// function InOrdertraversRecursive(tree) {
//   if (tree === null) return;
//   InOrdertraversRecursive(tree.leftChild);
//   console.log('Pre:', tree.data);
//   InOrdertraversRecursive(tree.rightChild);
// }
// function PostOrdertraversRecursive(tree) {
//   if (tree === null) return;
//   PostOrdertraversRecursive(tree.leftChild);
//   PostOrdertraversRecursive(tree.rightChild);
//   console.log('Pre:', tree.data);
// }

// console.log('preOrderTraverseByRecursive: ABDC')
// PreOrderTraverseByRecursive(bTree);

// console.log('InOrdertraversRecursive: BDAC')
// InOrdertraversRecursive(bTree)

// console.log('PostOrdertraversRecursive: DBCA')
// PostOrdertraversRecursive(bTree)
function PreOrderTraverseByCirculation(tree) {
  const cacheStack = [];
  let p = tree;

  while(p || cacheStack.length > 0) {
    if(p) {
      console.log('pNode:', p.data);
      if(p.rightChild) {
        cacheStack.push(p.rightChild);
      }
      p = p.leftChild;
    } else {
      p = cacheStack.pop();
    }
  }
}


function InOrderTraverseByCirculation(tree) {
  const cacheStack = [];
  let p = tree;

  while(p || cacheStack.length > 0) {
    if(p) {
      cacheStack.push(p);
      p = p.leftChild;
    } else {
      const nodePop = cacheStack.pop();
      const q = nodePop.rightChild;
      console.log('nodePop:', nodePop.data);
      if(q) {
        cacheStack.push(q);
      }
    }
  }
}

function PostOrderTraverseByCirculation(tree) {
  var result = [];

  var cacheStack = [tree];
  while(cacheStack.length !== 0) {
    var top = cacheStack.pop();

    result.unshift(top.data);

    if(top.leftChild) {
      cacheStack.push(top.leftChild);
    }

    if(top.rightChild) {
      cacheStack.push(top.rightChild)
    }
  }
  console.log('result:', result)

  return result;
}

function levelTraverseByQueue(bTree) {
  const queue = [bTree];

  while (queue.length > 0) {
    const first = queue.shift();
    console.log('first:', first.data);

    if(first.leftChild) {
      queue.push(first.leftChild)
    }

    if (first.rightChild) {
      queue.push(first.rightChild);
    }
  }
}

console.log('InOrderTraverseByCirculation: ABDC')
PreOrderTraverseByCirculation(bTree);

console.log('InOrderTraverseByCirculation: BDAC')
InOrderTraverseByCirculation(bTree);

console.log('PostOrderTraverseByCirculation: DBCA')
PostOrderTraverseByCirculation(bTree);

// console.log('levelTraverse:', )
levelTraverseByQueue(bTree);