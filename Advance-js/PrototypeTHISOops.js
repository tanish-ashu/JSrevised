class Sketch {
  constructor() {
    this.characer = "doraemon";
    this.color = "blue";
    this.someFnc = function () {};
  }
}

Sketch.prototype.speak = function() {};
Sketch.prototype.walk = function() {};

let sketch1 = new Sketch();

// ----------------------------------------------Understanding "this" ---> context ke hisab se badal jata ha

// global -> window ------------
console.log(this)

// function -> window--------------
function abcd() {
  console.log(this);
}

abcd();

// es5 function inside object -> object
let obj = {
  name : "Tanishk", 
  age: 20,
  fun: function(){
    console.log(this);
  }
};

obj.fun();

// es6 function inside object -> object
let obj2 = {
  name : "Tanishk", 
  age: 20,
  fun: () => { console.log(this); }
};

obj2.fun();

// es5 function inside es5 function inside object -> window

let obj3 = {
  fun: function(){
    function abcd() {
      console.log(this);
    }
    abcd();
  }
}
obj3.fun();

// es6 function inside es5 function inside object -> object

let obj4 = {
  fun: function(){
    abcd = ()=> {
      console.log(this);
    }
    abcd();
  }
}
obj4.fun();