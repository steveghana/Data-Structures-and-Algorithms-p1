let f = 10 + "20";
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
// console.log(foo);
// console.log("a defined? " + (typeof a !== "undefined"));

function Stopwatch() {
  let count,
    startTime,
    endTime = 0;

  let duration = "";
  let started = false;
  this.reset = function () {
    startTime = null;
    endTime = null;
    started = false;
    duration = "";
  };
  this.start = function () {
    if (started) {
      throw new Error("Stopwatch has already started");
    }
    started = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!started) {
      throw new Error("Stopwatch has not started");
    }
    started = false;
    endTime = new Date();
    const seconds = endTime.getTime() - startTime.getTime() / 1000;
    duration += seconds;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
// const watch = new Stopwatch();
// watch.start();
// watch.stop();
// let x ={}

const aob = [
  { framework: "React.JS", website: "Paypal" },
  { framework: "React.JS", website: "Tesla" },
  { framework: "Angular", website: "Google" },
  { framework: "Vue.JS", website: "Vue" },
  { framework: "JavaScript", website: "inblack67" },
];
const superAob = (data, victim) => {
  const obj = {};

  data.forEach((data) => {
    if (data.hasOwnProperty(victim)) {
      if (obj[data[victim]]) {
        console.log(data);
        obj[data[victim]] += 1;
      } else {
        obj[data[victim]] = 1;
      }
    }
  });

  let superArrayOfObjects = [];

  for (const key in obj) {
    superArrayOfObjects = [
      ...superArrayOfObjects,
      { victim: key, count: obj[key] },
    ];
  }

  return superArrayOfObjects;
};

// console.log(superAob(aob, "framework"));
const add = (a) => (b) => b + a;
// console.log(add(3)(4));
// console.log("hello" || "world");
// console.log("foo" && "bar");
const duplicate = (data) => {
  for (i in data) {
    data.push(data[i]);
  }
  return data;
};
// console.log(duplicate([1, 2, 3, 4, 5]));
const user = {
  age: 25,
  name: "Steve",
};
let checkProto;
console.log(checkProto);
