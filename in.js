const myArray = [2, 1, 5, 7, 3, 6, 4];
const newArry = myArray.sort();

///binary search
//iterbale
const binary = (data, target) => {
  if (data.length === 0) return;
  else {
    let firstvalue = 0;
    let lastvalue = data.length - 1;
    let middle = Math.floor(firstvalue + lastvalue / 2);
    while (first < lastvalue) {
      if (data[middle] === target) {
        return middle;
      }
      if (data[middle] > target) {
        lastvalue = middle - 1;
      }
      if (data[middle] < target) {
        firstvalue = middle + 1;
      }
    }
  }
};

class Particle {
  constructor(x) {
    this.x = x;
  }
  set latin(b) {
    return b + 3;
  }
  get latino() {
    return this.latin(4);
  }
}
let c = new Particle(343);
let p = new Particle(3);
Particle.prototype.vector = function () {
  return 1 + 1;
};

const recursive_Binarysearch = (data, target) => {
  if (data.length === 0) return;
  else {
    let middleNum = data.length - 1 / 2;
    if (data[middleNum] === target) return target;
    if (data[middleNum] > target) {
      recursivesearch(data[middleNum - 1]);
    }
    if (data[middleNum] < target) {
      recursivesearch(data[middleNum + 1]);
    }
  }
};

// This problem was inspired by this original tweet by Max Howell:
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

// So, let's invert a binary tree in Javascript

// Original Tree
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Simple Binary Tree (depth = 3)
var tree = {
  left: {
    left: {
      value: 1,
    },
    right: {
      value: 3,
    },
    value: 2,
  },
  right: {
    left: {
      value: 6,
    },
    right: {
      value: 9,
    },
    value: 7,
  },
  value: 4,
};

// Recursive function to return an inverted tree
function invertTree(node) {
  if (!node) return;

  var right = invertTree(node.right);
  var left = invertTree(node.left);
  if (left) node.left = right;
  if (right) node.right = left;
  return node;
}

// Inverted Tree
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// Log the original tree to the console, followed by the inverted tree
// console.log(JSON.parse(JSON.stringify(tree)), invertTree(tree));

class Binary_Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Binary_Search_Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let rootnode = this.root;
    if (!rootnode) return (rootnode = new Binary_Node(data));
    else {
      let searchtree = (rootnode) => {
        if (data < rootnode.data) {
          if (!rootnode.left) {
            rootnode.left = data;
            return;
          } else {
            return searchtree(rootnode.left);
          }
        } else if (data > rootnode.data) {
          if (!rootnode.right) {
            rootnode.right = data;
            return;
          } else return searchtree(rootnode.right);
        } else return null;
      };
    }
  }
}

//recursive

const merge_sort = (list) => {
  if (list.length <= 1) return list;
  const { left, right } = split(list);
  let leftsubArray = merge_sort(left);
  let rightsubArray = merge_sort(right);
  return merge(leftsubArray, rightsubArray);
};
const merge = (left, right) => {
  let newArry = [];
  let leftcount = 0;
  let rightcount = 0;
  while (leftcount < left.length && rightcount < right.length) {
    if (left[leftcount] < right[rightcount]) {
      newArry.push(left[leftcount]);
      leftcount += 1;
    } else {
      newArry.push(right[rightcount]);
      rightcount += 1;
    }
  }
  while (leftcount < left.length) {
    newArry.push(left[leftcount]);
    leftcount += 1;
  }
  while (rightcount < right.length) {
    newArry.push(right[rightcount]);
    rightcount += 1;
  }
  return newArry;
};
const split = (list) => {
  let middle = Math.floor(list.length / 2);
  let left = list.slice(0, middle);
  let right = list.slice(middle);
  return { left, right };
};

let array = [5, 2, 7, 4, 1, 8, 9, 6, 33, 22];
// console.log(merge_sort(array));

const countdown = (i) => {
  console.log(i);
  if (i <= 0) {
    return;
  } else {
    countdown(i - 1);
  }
};
// countdown(10);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  convertArrayToList(data) {
    if (!data) return;
    for (let i = 0; i < data.length; i++) {
      let node = new Node(data[i], this.head);
      this.head = node;
      this.size++;
    }
  }
  insert(data) {
    if (!data) return;
    let node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }
  reverse() {
    let current = this.head;
    let next, prev;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  printData() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.data} -> `;
      current = current.next;
    }
    console.log(`${output} null`);
  }
  getAtIndex(index) {
    if (index < 0 || index > this.size) return null;

    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      current = current.next;
      count++;
    }
    return null;
  }
  removeAtIndex(index) {
    if (index < 0 || index > this.size) return null;
    let current, prev;
    let count = 0;
    current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }
  inserAtanyIndex(data, index) {
    if (!data) return;
    if (index < 0 || index > this.size) return null;
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let node = new Node(data);
    let count = 0;
    let current, prev;
    current = this.head;
    while (count < index) {
      prev = current;
      count++;
      current = prev.next;
    }
    node.next = current;
    prev.next = node;
  }
  inserAtLast(data) {
    let node = new Node(data);
    let current;
    if (!data) return;
    if (!this.head) {
      this.head = node;
      return;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }
}
// Single Linked List Class
function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

// O(n) time & O(1) space
function reverse(head) {
  let node = head,
    previous,
    next;

  while (node) {
    // save next before we overwrite node.next!
    next = node.next;

    // reverse pointer
    node.next = previous;

    // step forward in the list
    previous = node;
    node = next;
  }

  return previous;
}
const insertToSortedArray = (value) => {
  let sortedArray = [];
  for (i in value) {
    let index_to_insert = FindSmallest(value);
    let popedValue = value.splice(index_to_insert, 1);
    for (i in popedValue) {
      sortedArray.push(popedValue[i]);
    }
  }

  return sortedArray;
};

const FindSmallest = (num) => {
  // let sortedArray = [];
  let minimum_num = num[0];
  let minimun_index = 0;

  for (let j = 0; j < num.length; j++) {
    if (num[j] < minimum_num) {
      minimun_index = j;
      minimum_num = num[j];
    }
    // else minimun_index = j;
  }
  return minimun_index;
};
let listAr = [5, 2, 7, 4, 1, 8, 9, 6, 33, 22, 100, 123, 38];

// console.log(insertToSortedArray(listAr));
const quickSort = (nums) => {
  if (nums.length < 2) return nums;
  let leftArray = [],
    rightsubArray = [];
  let pivot = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= pivot) {
      leftArray.push(nums[i]);
    } else {
      rightsubArray.push(nums[i]);
    }
  }
  return [...quickSort(leftArray)].concat(pivot, quickSort(rightsubArray));
};
let newlySorted = quickSort(listAr);
// console.log(newlySorted);

// O(n) time & O(n) space
function reverse(head) {
  if (!head || !head.next) {
    return head;
  }
  let tmp = reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return tmp;
}

let node = new LinkedList();

// let listAr = [5, 2, 7, 4, 1, 8, 9, 6, 33, 22];

// node.insert(200);
// node.insert(300);
// node.insert(400);
// node.inserAtLast(500);
// node.inserAtanyIndex(250, 1);
// node.getAtIndex(0);
// node.convertArrayToList(array);
// node.removeAtIndex(3);
// node.clearList();
// node.reverse();
// node.printData();
let a = [1, 2, 3];
let result = 0;
for (let value of a) {
  result = result + +value;
}
let num;

// for (let i = 0; i < 5; i++) {
//   num = i;
//   setTimeout(() => {
//     console.log(i)
//   }, 1000);
// }

let n = [];
let b = ["a", "b", "c"];
n[1] = b[1];
// console.log(n)
