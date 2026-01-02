// Base class
class Animal{
  constructor() {
    this.hands = 2;
    this.legs = 2;
  }
  eat() {}
  breadth(){}
}


// new class
class Cat extends Animal{
  constructor(){
    super();
    this.legs = 8;
    this.hands = 0;
  }
  toilet() {}
}

let cat1 = new Cat();


//----------------------------------------------------------------------------
class Animal2{
  constructor(){
    this._age = 12;
  }

  set age(val){                   // Getter Function use
    if (val<0){
      console.log("not possible");
      return;
    }
    this._age = val;
    return this._age;
  }
  
  get age() {                     // Setter Function use
    return this._age;
  }

}

let a1 = new Animal2();
a1._age = 37;
console.log(a1._age);



