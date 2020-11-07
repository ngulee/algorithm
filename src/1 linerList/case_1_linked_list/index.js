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

console.log('linkedL:', linkedL)
linkedL.clear();
console.log('linkedL:', linkedL)
// console.log('linkedL:', linkedL.toString())