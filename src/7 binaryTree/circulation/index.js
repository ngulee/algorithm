function preOrderTreverseByCirculation(tree) {
  let node = tree;
  const stack = [];
  while(node || stack.length > 0) {
    if(node) {
      if(node.right) {
        stack.push(node.right);
      }
      node = node.left;
    } else {
      node = stack.pop();
    }
  }
}

function preorderTraversal(tree) {
  if(!tree) return;
  const stack = [tree];
  while(stack.length > 0) {
    const top = stack.pop();
    console.log('top:', top.val);
    top.right && stack.push(top.right);
    top.left && stack.push(top.left);
  }
}

function inOrderTraverseByCirculation(node) {
  const stack = [];
  let node = tree;
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const popNode = stack.pop();
      console.log('popNode:', popNode.val);
      if(popNode.right) {
        stack.pop(popNode.right)
      }
    }
  }
}

function postOrder(tree) {
  if(!tree) return;
  postOrder(tree.left);
  postOrder(tree.right);
  console.log('node.data:', node.data);
}


function levelTraverse(tree) {
  if (!tree) return;
  const queue = [];
  while (queue.length > 0) {
    const node = queue.shift();
    console.log('data:', node.data);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
}



