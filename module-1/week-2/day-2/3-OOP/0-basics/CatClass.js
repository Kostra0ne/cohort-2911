// function Dog(name, color) {
//   if (!(this instanceof Dog))
//     throw new Error("you are missing the new keyword my friend");

//   this.name = name;
//   this.color = color;
// }

// Dog.prototype.talk = function (params) {
//   return "wafff";
// };

// CONSTRUCTOR + PROTOTYPE === CONCEPTUALLY A CLASS


class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  talk() {
    return "meeowwww";
  }
}

const cat1 = new Cat("fugee");
const cat2 = new Cat("mina");

console.log(cat1);
console.log(cat2);
console.log(cat1 === cat2);

console.log(cat1.talk());
console.log(cat2.talk());


