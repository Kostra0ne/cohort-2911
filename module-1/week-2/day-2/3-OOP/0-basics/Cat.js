function Cat(name, color) {
  if (!(this instanceof Cat))
    throw new Error("you are missing the new keyword my friend");

  this.name = name;
  this.color = color;
}

Cat.prototype.talk = function (params) {
  return "meeowwww";
};

const cat1 = new Cat("fugee");
const cat2 = new Cat("mina");

console.log(cat1);
console.log(cat2);

console.log(cat1.talk());
console.log(cat2.talk());
