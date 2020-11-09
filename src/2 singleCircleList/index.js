class LNode {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class SingleCircleLinkedList {
  constructor() {
    this.head = new LNode();
    this.head.next = this.head;
    this.right = this.head;
    this.size = 0;
  }

  append(data) {
    const newNode = new LNode(data);
    const lastNode = this.right;

    newNode.next = this.head;
    lastNode.next = newNode;
    this.right = newNode;

    this.size += 1;

    return this;
  }

  getHead() {
    return this.head;
  }

  getRight() {
    return this.right;
  }
}

function mergeCircleLinkedList(linkedListA, linkedListB) {

  if(!linkedListB) return linkedListA;

  const linkedListAHead = linkedListA.getHead();
  const linkedListARight = linkedListA.getRight();

  const linkedListBHead = linkedListB.getHead();
  const linkedListBRight = linkedListB.getRight();

  linkedListARight.next = linkedListBHead.next;
  linkedListBRight.next = linkedListAHead;

  linkedListA.right = linkedListBRight;
  linkedListA.size += linkedListB.size;

  return linkedListA;

}

function merge(...LinkedLists) {

  let startIdx = 1;
  const len = LinkedLists.length;
  const resultLinkedList = LinkedLists[0];

  while(startIdx < len) {
    mergeCircleLinkedList(resultLinkedList, LinkedLists[startIdx])
    startIdx++;
  }

  return resultLinkedList;
}


const sCLL = new SingleCircleLinkedList();
const sCLL1 = new SingleCircleLinkedList();
const sCLL2 = new SingleCircleLinkedList();

sCLL.append(1)
sCLL.append(2)
sCLL.append(3)

sCLL1.append(4)
sCLL1.append(5)
sCLL1.append(6)

sCLL2.append(7)
sCLL2.append(8)
sCLL2.append(9)

console.log('sCLL:', sCLL);
console.log('sCLL1:', sCLL1);
console.log('sCLL1:', sCLL2);

console.log('mergeLinkedList:', mergeCircleLinkedList(sCLL, sCLL1));
console.log('merge:', merge(sCLL, sCLL1, sCLL2));