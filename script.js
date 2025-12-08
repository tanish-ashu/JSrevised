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

// callbacks
// situation -> github se repo data laao

// getUserDetails(username, cb)
// getAllRepos(userid, cb)
// getRepoDetail(repos[0], cb)


// amitSeDetailsLaao(address, cb)
// dukaanKoDhundho(details, cb)
// samaanLelo(samaanlist, cb)
// gharAaajaao(address, cb)

 function tanishkSeDetailsLaao(name, cb){
  console.log("fetching details...")
  setTimeout(() =>{
    cb({ rollno1: 58 , rollno2: 59});
  }, 3000)
 }

 tanishkSeDetailsLaao("Tanishk Rajak", function
  (details) {
    console.log(details);
  });


 