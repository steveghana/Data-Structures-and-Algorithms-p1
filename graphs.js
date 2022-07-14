const graph = {
  f: ["g", "i"],
  g: ["h"],
  i: ["g", "k"],
  j: ["i"],
  h: [],
  k: [],
};
//iterative
const depthFirst = (graph, startingPoint) => {
  let stack = [startingPoint];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for (let i of graph[current]) {
      stack.push(i);
    }
  }
};
const breathFirst = (graph, startingPoint) => {
  let queue = [startingPoint];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let i of graph[current]) {
      queue.push(i);
    }
  }
};
//recursive
const recursiveDepthfirst = (graph, startingPoint) => {
  console.log(startingPoint);
  for (let i of graph[startingPoint]) {
    recursiveDepthfirst(graph, i);
  }
};
// breathFirst(graph, "a");
// recursiveDepthfirst(graph, "a");

const dfsTraversal = (graph, start, target) => {
  if (start === target) return true;

  for (let index of graph[start]) {
    if (dfsTraversal(graph, index, target) === true) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(result);
  // return result;
};

// console.log(dfsTraversal(graph, Object.keys(graph)[0], "k"));

let list = {
  0: [3, 5, 6],
  5: [4],
  6: [1, 7],
  3: [2, 11],
  7: [],
  11: [10],
  10: [],
  1: [],
  4: [6],
  2: [12],
  12: [9],
  9: [],
};
const depthsalesPath = (graph, current, visited) => {
  let total = [];
  for (let i of graph[current]) {
    total.push(i);
    depthsalesPath(graph, i, visited);
  }

  return total;
};
let flattenArray = (graph) => {
  let visited = {};
  let newTotal = 0;
  let min = Number.MAX_VALUE;
  for (let index in graph) {
    const newArray = depthsalesPath(graph, index, visited);
    if (newArray.length > 0) {
      for (let i = 0; i < newArray.length; i++) {
        newTotal += newArray[i];
      }
      min = Math.min(min, newTotal);
      // console.log(newArray);
    }
  }
  console.log(min);
};
// flattenArray(list);
const roads = {
  3: [4],
  2: [4],
  4: [0],
  3: [9],
  0: [8, 9],
  8: [6],
  9: [1, 7],
  7: [],
  6: [],
  1: [],
};
const explore = (graph, current, visited) => {
  let cityarray = [];
  for (let index of graph[current]) {
    if (visited[index]) continue;
    visited[index] = index;
    cityarray.push(index);
    explore(graph, index, visited);
  }
  return cityarray;
};
const getCurrent = (graph) => {
  const visited = {};
  let items = [];
  for (i in graph) {
    let arr = explore(graph, i, visited);
    if (arr.length) {
      // if (items.length) {
      items = items.concat(arr);
      // } else {
      // items = arr;
      // }
    }
  }
  console.log(items);
};
// getCurrent(roads);
/* This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.
*/
let A = [1, 3, 6, 4, 1, 2];
let b = [1, 2, 3];
let c = [-1, -3];
let getunique = (nums = []) => {
  let result = null;
  const sorted = nums.sort((a, b) => a - b);
  const max = Math.max(...sorted);
  if (max < 0) {
    result = 1;
    return;
  }
  let back = (current) => {
    if (current < sorted[0] && result === null) {
      //O n
      result = max + 1;
      return;
    }
    if (sorted.includes(current)) {
      back(current - 1);
    } else {
      result = current;
    }
  };
  back(max);
  return result;
};
// console.log(getunique(b));
const getTimer = (nums, timezone, minutes, stringrep) => {
  let remainder = nums % timezone;
  let prime = nums - remainder;
  let actualtime = prime / timezone;
  let multipleHours = actualtime > 1 ? stringrep + "s" : stringrep;
  let timeextra = "";
  let timeformate = "";
  let numtimeFormate = [];
  if (remainder) {
    let findmodulo = (remainder) => {
      if (remainder < 60) {
        numtimeFormate.push(remainder);
        return;
      }
      let r = remainder % minutes;
      let actual = (remainder - r) / minutes;
      numtimeFormate.push(actual);
      findmodulo(remainder % minutes);
    };
    findmodulo(remainder);

    let timesequense = numtimeFormate.sort((a, b) => b - a);
    if (timesequense.length === 3) {
      timeformate = ["hr", "m", "s"];
    }
    if (timesequense.length === 2) {
      timeformate = ["m", "s"];
    }
    if (timesequense.length === 1) {
      timeformate = ["s"];
    }
    for (let i = 0; i < timesequense.length; i++) {
      if (timesequense[i] !== 0) timeextra += timesequense[i] + timeformate[i];
    }
  }
  let timestring = `${actualtime}${multipleHours}${timeextra}`;
  return timestring;
};
const calcTimer = (nums) => {
  let week = 604800;
  let day = 86400;
  let hour = 3600;
  let minutes = 60;
  if (nums >= hour && nums < day) {
    let time = getTimer(nums, hour, minutes, "hr");
    console.log(time);
  }
  if (nums >= minutes && nums < hour) {
    let time = getTimer(nums, minutes, minutes, "m");
    console.log(time);
  }
  if (nums >= day && nums < week) {
    let time = getTimer(nums, day, minutes, "d");
    console.log(time);
  }
};
calcTimer(500);
