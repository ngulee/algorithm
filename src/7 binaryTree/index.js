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

function preorderTraversal(tree) {
  if(!tree) return;

  const stack = [tree];

  while(stack.length > 0) {
    const top = stack.pop();
    console.log('top:', top.data);
    top.rightChild && stack.push(top.rightChild);
    top.leftChild && stack.push(top.leftChild);
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
  if(!tree) return;
  PostOrderTraverseByCirculation(tree.leftChild);
  PostOrderTraverseByCirculation(tree.rightChild);
  console.log('node:', tree.data)
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

function deepCopy(source, cacheMap = new Map()) {
  if(typeof source !== 'object') {
    if(source instanceof Function) {
      const fn = cacheMap.get(source);
      if (fn){
        return fn;
      } else {
        cacheMap.set(source, source);
      }
    }
    return source;
  }

  if (cacheMap.get(source)) return cacheMap.get(source);

  const copy = Array.isArray(source) ? [] : {};
  cacheMap.set(source, copy);

  Object.keys(source).forEach((key) => {
    copy[key] = deepCopy(source[key], cacheMap);
  })

  return copy;
}


var objTest = {
  a: {
    name: {
    },
    functions: {
      a: function() {},
    }
  }
}

objTest.a.name.c = objTest.a;
objTest.a.functions.b = objTest.a.functions.a;

console.log('InOrderTraverseByCirculation: ABDC')
PreOrderTraverseByCirculation(bTree);
preorderTraversal(bTree);

console.log('InOrderTraverseByCirculation: BDAC')
InOrderTraverseByCirculation(bTree);

console.log('PostOrderTraverseByCirculation: DBCA')
PostOrderTraverseByCirculation(bTree);

// console.log('levelTraverse:', )
levelTraverseByQueue(bTree);
console.log('objTest:', objTest)

const deepCopiedObj = deepCopy(objTest);
console.log('deepCopiedObj:', deepCopiedObj)
console.log('deepCopiedObj:', deepCopiedObj.a.functions.a === deepCopiedObj.a.functions.b)