// introduction to promise

// async await

// setttimeout and setinterval

const prm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
})

// agar resolve kiya hoga andar toh

prm
  .then(function() {
    console.log("resolved");
  })
  .catch(function() {
    console.log("rejected");
  });

  // --------------------------------- fetch ex 1
  fetch(`https://randomuser.me/api/`)
  .then(function(notReadableData){
    console.log(notReadableData);
    return notReadableData.json();
  })
  .then(function(asliData){
    console.log(asliData.results[0].name.first);
  });
  // --------------------------------- fetch ex 2
  fetch(`https://randomuser.me/api/`)
    .then((raw) => raw.json())
    .then((data) => {
      console.log("using fetch 2");
      console.log(data.results[0].name.first);
    });