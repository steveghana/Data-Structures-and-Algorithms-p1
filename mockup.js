let Blocks = [
  { gym: false, school: true, store: false },
  { gym: true, school: false, store: false },
  { gym: true, school: true, store: false },
  { gym: false, school: true, store: false },
  { gym: false, school: true, store: true },
];
let requirement = ["gym", "school", "store"];

let searchForApartment = (Blocks, requirement) => {
  let hash = {};
  let count = 0;
  let a = [];
  for (let j = 0; j < requirement.length; j++) {
    for (let endindex = 0; endindex < Blocks.length; endindex++) {
      if (
        hash.hasOwnProperty(requirement[j]) &&
        Blocks[endindex][requirement[j]] === true
      ) {
        hash[requirement[j]].push(endindex);
      } else if (
        Blocks[endindex][requirement[j]] === true &&
        !hash.hasOwnProperty(requirement[j])
      ) {
        hash[requirement[j]] = [endindex];
      }
    }
  }
  while (count < requirement.length) {
    a.concat(hash[requirement[count]]);
    count++;
  }
  let data = Object.values(hash);
  for (let i = 0; i < data[0].length; i++) {
    if (data[1].includes(data[0][i] + 1) && data[2].includes(data[0][i] + 2)) {
      console.log("1");
      return;
    }
  }
};
searchForApartment(Blocks, requirement);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge() {
    return this.age;
  }
  getName() {
    return this.name;
  }
}

class Me extends User {
  constructor(name, age) {
    super(name, age);
  }
  printAge() {}
}
