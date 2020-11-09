class LNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new LNode(null);
    this.length = 0;
  }

  append(data) {
    const newNode = new LNode(data);

    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;

    this.length++;

    return this;
  }

  appendAtHead(data) {
    const newNode = new LNode(data);
    const firstNode = this.head.next;

    newNode.next = firstNode;

    this.head.next = newNode;
    this.length++;

    return this;
  }

  insert(data, position) {
    if(position < 0 || position > this.length) {
      return new Error(`链表中不存在与${position}对应的节点`);
    }

    let idx = 0;
    let previous = this.head;
    let current = previous.next;

    const newNode = new LNode(data)

    while(idx < position) {

      previous = current;
      current = current.next;

      idx++;
    }

    previous.next = newNode;
    newNode.next = current;

    this.length++;

    return this;
  }

  insert1(data, position) {
    if(position < 0 || position > this.length) {
      return new Error(`链表中不存在与${position}对应的节点`);
    }

    let previous = null;
    let next = null;

    if(position === 0) {
      previous = this.head;
    } else {
      previous = this.get(position - 1);
    }
    next = previous.next;

    const newNode = new LNode(data);
    newNode.next = next;

    previous.next = newNode;

    this.length++;

    return this;

  }

  delete(targetIdx) {
    if(targetIdx < 0 || targetIdx > this.length - 1) {
      return new Error(`链表中不存在与${targetIdx}对应的节点`);
    }

    let index = 0;
    let previous = this.head;
    let currentNode = previous.next;

    while(index < targetIdx) {
      previous = currentNode;
      currentNode = currentNode.next;
      index++;
    }

    previous.next = currentNode.next;

    currentNode = null;


    this.length--;

    return this;
  }

  delete1(targetIdx) {
    if(targetIdx < 0 || targetIdx > this.length - 1) {
      return new Error(`链表中不存在与${targetIdx}对应的节点`);
    }

    let previousTargetNode = null;

    if(targetIdx === 0) {
      previousTargetNode = this.head;
    } else {
      previousTargetNode = this.get(targetIdx - 1);
    }

    const currentTargetNode = previousTargetNode.next;
    const nextTargetNode = currentTargetNode.next;

    previousTargetNode.next = nextTargetNode;
    currentTargetNode = null;

    this.length--;

    return this;
  }

  get(targetIdx) {

    if(targetIdx < 0 || targetIdx > this.length - 1) {
      return new Error(`链表中不存在与${targetIdx}对应的节点`);
    }

    let idx = 0;
    let current = this.head.next;

    while(idx < targetIdx) {
      current = current.next;
      idx++;
    }

    return current;
  }

  set(data, targetIdx) {
    if(targetIdx < 0 || targetIdx > this.length - 1) {
      return new Error(`链表中不存在与${targetIdx}对应的节点`);
    }

    let current = this.head.next;

    while(targetIdx > 0) {
      current = current.next;
      targetIdx--;
    }

    current.data = data;

    return this;
  }

  search(e, isReturnPosition = false) {
    let idx =0;
    let current = this.head.next;

    while(current && current.data !== e) {
      current = current.next;
      idx++;
    }
    if(!current) {
      idx = -1;
    }

    return isReturnPosition ? idx : current;
  }

  size() {
    return this.length;
  }

  toString(seperator = ',') {
    let resultStr = '';

    let currentNode = this.head;
    
    while(currentNode.next) {
      resultStr += `${currentNode.data}${seperator}`;

      currentNode = currentNode.next;
    }

    resultStr += `${currentNode.data}`;

    return resultStr;
  }

  clear() {
    let currentNode = this.head.next;
    while(currentNode.next) {
      const nextNode = currentNode.next;
      delete currentNode.data;
      delete currentNode.next;

      currentNode = nextNode;

    }
    delete currentNode.data;
    this.head.next = null;
    this.length = 0;
  }

}

function mergeSortedLinkedList(sortedListA, sortedListB) {
  if(!sortedListB) return sortedListA;

  
  let firstA = sortedListA.head.next;
  let firstB = sortedListB.head.next;

  let mergedList = sortedListA;
  let mergedLastNode = mergedList.head;
  mergedList.next = mergedLastNode;

  while(firstA && firstB) {
    if(firstA.data <= firstB.data) {
      mergedLastNode.next = firstA;
      firstA = firstA.next;
      mergedLastNode = mergedLastNode.next;
    } else {
      mergedLastNode.next = firstB;
      firstB = firstB.next;
      mergedLastNode = mergedLastNode.next;
    }
  }

  if(firstA) {
    mergedLastNode.next = firstA
    firstA = firstA.next;
    mergedLastNode = mergedLastNode.next;
  }

  if(firstB) {
    mergedLastNode.next = firstB;
    firstB = firstB.next;
    mergedLastNode = mergedLastNode.next;
  }

  return mergedList;
}

const linkedL = new LinkedList();
const linkedLA = new LinkedList();

linkedL.append(1).append(3).append(5).append(7).append(9);
linkedLA.append(2).append(4).append(6).append(8);

console.log('linkedL:', linkedL)
console.log('linkedLA:', linkedLA)

console.log('mergeSortedLinkedList:', mergeSortedLinkedList(linkedL, linkedLA))
