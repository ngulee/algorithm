class BTreeNode {
  constructor(data = null) {
    this.leftChild = null;
    this.data = data;
    this.rightChild = null;
  }
}

var DLRString = ('ABC##DE#G##F###').split('');

function createBinarTree(DLRString) {
  let root = null;

  if (DLRString.length > 0) {
    let data = DLRString.shift();
    if (data !== '#') {
      root = new BTreeNode(data);

      root.leftChild = createBinarTree(DLRString);
      root.rightChild = createBinarTree(DLRString);
    }
  }

  console.log('root:', root);

  return root;

}

createBinarTree(DLRString)