// BST binary search tree

class Tree_Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Tree_Node(value);
    if (!value) return;
    if (this.root === null) {
      this.root = node;
      return this.root;
    } else {
      let searchTree = (rootnode) => {
        if (value < rootnode.data) {
          if (rootnode.left === null) {
            rootnode.left = node;
            return;
          } else if (rootnode.left !== null) {
            return searchTree(rootnode.left);
          }
        } else if (value > rootnode.data) {
          if (!rootnode.right) {
            rootnode.right = node;
            return;
          } else if (rootnode.right !== null) {
            return searchTree(rootnode.right);
          }
        } else return null;
      };
      return searchTree(this.root);
    }
  }
  find(value) {
    if (!value) return;
    let finding = (node) => {
      if (node.data === value) return this.root.data;
      else {
        if (value < node.data) {
          if (!node.left) {
            console.log("nothing found");
            return;
          }
          if (node.left.data === value) {
            console.log(node.left.data, "left");
            return;
          } else {
            return finding(node.left);
          }
        } else if (value > node.data) {
          if (!node.right) {
            console.log("nothing found");
            return;
          }
          if (value === node.right.data) {
            console.log(node.right.data, "right");
            return;
          } else {
            return finding(node.right);
          }
        }
      }
    };
    return finding(this.root);
  }
  findMin() {
    if (!this.root) {
      console.log("nothing in tree");
      return;
    } else {
      let node = this.root;
      let min = (node) => {
        if (node.left) {
          if (!node.left.left) {
            console.log(node.left.data, "minimum");
          } else {
            return min(node.left.left);
          }
        } else {
          console.log(node.data, "minimum");
          return;
        }
      };
      return min(node);
    }
  }
  findMax() {
    if (!this.root) {
      console.log("nothing found in tree");
      return;
    } else {
      let node = this.root;
      let max = (node) => {
        if (node.right) {
          if (!node.right.right) {
            console.log(node.right.data, "maximum");
            return;
          } else {
            return max(node.right.right);
          }
        } else {
          console.log(node.data, "maximum");
          return;
        }
      };
      return max(node);
    }
  }
  showElements() {
    let newArray = [];
    newArray.push(this.root.data);
    let leftTraverse = (rootnode) => {
      if (rootnode.data) {
        if (rootnode.left) {
          newArray.push(rootnode.left.data);
          leftTraverse(rootnode.left);
        }
        if (rootnode.right) {
          newArray.push(rootnode.right.data);
          leftTraverse(rootnode.right);
        } else {
          return null;
        }
      } else {
        return null;
      }
    };
    leftTraverse(this.root);
    console.log(newArray);
    return { newArray };
  }
  delete(value) {
    if (!value || !this.root.data) return;
    const { newArray } = this.showElements();
    const filteredArray = newArray.filter((item) => item !== value);
    this.root = null;
    for (let i = 0; i < filteredArray.length; i++) {
      this.insert(filteredArray[i]);
    }
  }
}

const binary = new BST();
// binary.insert(23);
// binary.insert(26);
// binary.insert(27);
// binary.insert(29);
// binary.insert(18);
// binary.insert(19);
// binary.insert(24);
// binary.find(11);
// binary.find(26);
// binary.find(29);
// binary.find(18);
// binary.findMin();
// binary.findMax();
// binary.delete(19);
// binary.delete(26);
// binary.showElements();
