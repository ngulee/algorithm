class BTreeNode {
  constructor(data = null) {
    this.leftChild = null;
    this.data = data;
    this.rightChild = null;
  }
}

var DLRString = ('ABC##DE#G##F###').split('');

function createBinarTree(DLRArr) {
  let root = null;

  if (DLRArr.length > 0) {
    let data = DLRArr.shift();
    if (data !== '#') {
      root = new BTreeNode(data);

      root.leftChild = createBinarTree(DLRArr);
      root.rightChild = createBinarTree(DLRArr);
    }
  }

  return root;

}

/**
 * 通过递归实现二叉树的复制
 * @param {*} sourceTree 
 * @param {*} targetTree 
 */
function copyBiTree(sourceTree, targetTree) {
  if (sourceTree === null) {
    targetTree = null;
    return targetTree;
  }

  targetTree = new BTreeNode(sourceTree.data);
  targetTree.leftChild = copyBiTree(sourceTree.leftChild, targetTree.leftChild);
  targetTree.rightChild = copyBiTree(sourceTree.rightChild, targetTree.rightChild);

  return targetTree;
}

/**
 * 通过遍历实现二叉树的复制
 * @param {*} sTree 
 */
function copyBiTreeByCirculation(sTree) {
  let cTree = null;
  if (!sTree) return cTree;

  const stack = [{
    parent: cTree,
    position: 'l',
    node: sTree
  }];

  while (stack.length > 0) {
    let { position, node, parent } = stack.pop();

    const newNode = new BTreeNode(node.data);

    if (parent) {
      if (position === 'l') {
        parent.leftChild = newNode;
      } else {
        parent.rightChild = newNode;
      }
    } else {
      cTree = newNode;
    }

    if (node.rightChild) {
      stack.push({
        parent: newNode,
        position: 'r',
        node: node.rightChild
      });
    }

    if (node.leftChild) {
      stack.push({
        parent: newNode,
        position: 'l',
        node: node.leftChild,
      });
    }
  }

  return cTree;
  
}

function getBiTreeNodeCount(biTree) {
  if (biTree === null) {
    return 0;
  }
  const m = getBiTreeNodeCount(biTree.leftChild);
  const n = getBiTreeNodeCount(biTree.rightChild);

  return n + m + 1;
}

function getBiTreeDepth(tree) {
  if (tree === null) {
    return 0;
  }

  const m = getBiTreeDepth(tree.leftChild);
  const n = getBiTreeDepth(tree.rightChild);

  return Math.max(m, n) + 1;
}

function getLeafNodeCount(biTree) {
  if(biTree === null) return 0;

  if (biTree.leftChild === null && biTree.rightChild === null) {
    return 1;
  }

  return getLeafNodeCount(biTree.leftChild) + getLeafNodeCount(biTree.rightChild);
}

function getNodeCountByCirculation(tree) {
  let count = 0;
  const stack = [];

  let p = tree;

  while (p || stack.length > 0) {
    if(p) {
      count++;
      if(p.rightChild) {
        stack.push(p.rightChild)
      }
      p = p.leftChild;
    } else {
      p = stack.pop();
    }
  }

  return count;
}

const BiTree = createBinarTree(DLRString);

console.log('BiTree:', BiTree);

const newBiTree = copyBiTree(BiTree);
const newBiTreeByCir = copyBiTreeByCirculation(BiTree);

console.log('newBiTree:', newBiTree);
console.log('newBiTreeByCir:', newBiTreeByCir);

const nodeCount = getBiTreeNodeCount(newBiTree);
const nodeCountByCir = getNodeCountByCirculation(BiTree);
console.log('nodeCountByCir:', nodeCountByCir)
console.log('nodeCount:', nodeCount)

const treeDepth = getBiTreeDepth(newBiTree);

console.log('treeDepth:', treeDepth)

const leafCount = getLeafNodeCount(BiTree);


console.log('leafCount:', leafCount)
