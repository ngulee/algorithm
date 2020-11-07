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

  delete(idx) {
    let currentNode = this.head;
    let index = 0;

    while(index < idx && currentNode) {
      currentNode = currentNode.next;
      index++;
    }

    if(currentNode) {
      
    }

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

const linkedL = new LinkedList();

linkedL.append(1)
linkedL.append(2).append(3).append(4);

// console.log('linkedL:', linkedL)
// console.log('get:', linkedL.get(3));
// console.log('get:', linkedL.set(30, 4));
// linkedL.clear();
// console.log('linkedL:', linkedL)
// console.log('linkedL:', linkedL.toString())

// console.log('search:', linkedL.search(4))
console.log('insert:', linkedL.insert1(8, 4))