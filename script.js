// introduction to Asyncronous code

// callback hell -- the early use of 'callback functions' 

function abcd(fn){
  fn(function(fn2){
    fn2(function () {
      console.log("hye");
    });
  });
}

abcd(function(fn){
  fn(function(fn3){
      fn3();
  });
});