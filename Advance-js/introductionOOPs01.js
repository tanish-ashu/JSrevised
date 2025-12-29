// Raw user Making
let name = "Tanishk";
let age = 20 
let email = "ashu2005rajak@gmail.com";
let address = "sagar"

// Object using making
let user1 = {
  name: "harsh",
  age: 27,
  email: "aashu2005rajak@gmail.com",
  address: "Sagar"
}

let user2 = {
  name: "Tanishk",
  age: 20,
  email: "ashu02@gmail.com",
  address: "Bhopal"
}

// introduction to Classes
// -> the constructor
class Remote1 {
  constructor(){
    this.product = "car",
    this.price = "1200",
    this.color = "Red"
  }
  powerOn(){
    console.log("The Machine is on now.");
  }
  powerOff(){
    console.log("The Machine is off now.");
  }
}

let remote1 = new Remote1();
console.log("Hello js");

// -> constructor with variable 

class Remote2 {
  constructor(product, price, color){
    this.product = product;
    this.price = price;
    this.color = color;
  }
  powerOn(){
    console.log("The machine is on now.");
  }
  powerOff(){
    console.log("The Machine is off now.");
  }
}

let remote2 = new Remote2("AreoPlane", 555000, "white");

console.log("Hello js 2");

// -> Prototypes ["this" keyword, "call", "apply", "bind"]
