// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(record) {
    this.children.push(new Node(record));
  }

  remove(record) {
    const recordIndex = this.children.findIndex((el) => el.data === record);
    if (recordIndex >= 0) {
      this.children.splice(recordIndex, 1);
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(callback) {
    if (!this.root) {
      return;
    }
    // queue to assist FIFO (shift/push)
    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();
      queue.push(...node.children);
      callback(node);
    }
  }

  traverseDF(callback) {
    if (!this.root) {
      return;
    }
    // stack to assist FILO (shift/unshift)
    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();
      queue.unshift(...node.children);
      callback(node);
    }
  }
}

module.exports = { Tree, Node };
