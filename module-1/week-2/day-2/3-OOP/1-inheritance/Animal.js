class Animal {
  constructor(infos) {
    this.name = infos.name;
    this.color = infos.color;
    this.nbEyes = infos.nbEyes;
    this.nbLegs = infos.nbLegs;
  }

  getName() {
    return this.name;
  }

  talk() {
    return `${this.name} says :`;
  }
}

class Cat extends Animal {
  constructor(infos) {
    super(infos);
  }
  talk() {
    return super.talk() + "meeeow";
  }
}

class Dog extends Animal {
  constructor(infos) {
    super(infos);
  }
  talk() {
    return super.talk() + "wooofff";
  }
}

const dog1 = new Dog({
  name: "pitbull",
  color: "gray and white",
  nbLegs: 4,
  nbEyes: 2,
});

const cat1 = new Cat({
  name: "maine coon",
  color: "gray and white",
  nbLegs: 4,
  nbEyes: 2,
});

console.log(dog1.getName());
console.log(dog1.talk());
console.log("---------");

console.log(cat1.getName());
console.log(cat1.talk());
console.log("---------");

// console.log(dog1 instanceof Object);

// const spider = new Animal({
//   name: "spider",
//   color: "orange",
//   nbLegs: 8,
//   nbEyes: 8,
// });
// const human = new Animal({
//   name: "human",
//   color: "white",
//   nbLegs: 2,
//   nbEyes: 2,
// });
// const dog = new Animal({ name: "dog", color: "white", nbLegs: 4, nbEyes: 2 });
// console.log("====>");
// console.log(spider);
// console.log("----");
// console.log(human);
// console.log("----");
// console.log(dog);

function cakeFactory(indgredients) {
  //
  return {
    ...indgredients,
  };
}

const cupcake = cakeFactory({
  sugar: "100g",
  flour: "200g",
  butter: "50g",
});

const chocoCake = cakeFactory({
  sugar: "150g",
  flour: "200g",
  butter: "50g",
  chocolate: "200g",
});

console.log(cupcake);
console.log(chocoCake);

const x = () => "i'm x";
const y = () => "i'm y";

const o1 = Object.assign({}, { x });
const o2 = Object.assign({}, { x, y });
console.log("----------");
console.log(o1);
console.log(o2);
