// call apply bind  

let obj = {
  name : "Tanishk"
}

function abcd(a,b,c) {
  console.log(this);
}
console.log( "Normally:");
abcd();

console.log( "using call:");
abcd.call(obj,1,"Ram", 2);

console.log( "using apply:");
abcd.apply(obj,[1,"Ram", 2]);

console.log( "using bind:");
let abcd2 = abcd.bind(obj, 1, "Ram", 2);
abcd2();