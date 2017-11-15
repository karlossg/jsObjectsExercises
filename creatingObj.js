function Phone(brand, model, price, color) {
  this.brand = brand;
  this.model = model;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
  console.log(`The ${this.model} brand is ${this.brand}, color is ${this.color} and the price is ${this.price}.`);
}

const galaxyS8 = new Phone("Samsung", "Galaxy S8", 3500, "pink");
const iphoneX = new Phone("Apple", "iPhone X", 4500, "white");
const onePlusOne = new Phone("OnePlus", "One", 1600, "black");

galaxyS8.printInfo();
iphoneX.printInfo();
onePlusOne.printInfo();

// ES6 class

class PhoneClass {
  constructor(brand, model, price, color) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
  }
  phoneInfo() {
    console.log(`The ${this.model} brand is ${this.brand}, color is ${this.color} and the price is ${this.price}.`);
  }
}

