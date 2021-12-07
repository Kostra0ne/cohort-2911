class Product {
  constructor(name, price, brand) {
    this.name = name;
    this.price = price;
    this.brand = brand;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }
}

class Shoe extends Product {
  constructor(name, price, brand, color) {
    super(name, price, brand);
    this.color = color;
  }
}

class MusicIntrument extends Product {
  constructor(name, price, brand, type) {
    super(name, price, brand);
    this.type = type;
  }
}

const product1 = new Product("laptop", 1000, "dell");
const instrument1 = new MusicIntrument("guitar", 300, "fender", "string");
const sneaker = new Shoe("superstar", 100, "adidas", "white and black");

console.log(sneaker);


sneaker.setPrice(120);

console.log(sneaker);