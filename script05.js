// async await
// settimeout and setinterval

// async await  


// -------------- the tipical fetch
fetch(`https://randomuser.me/api/`)
  .then(function (notReadableData) {
    console.log(notReadableData);
    return notReadableData.json();
  })
  .then(function (asliData) {
    console.log(asliData.results[0].name.first);
  });


// -------------- the  fetch with async await 
async function abcd() {
  let raw = await fetch(`https://randomuser.me/api/`);
  let data = await raw.json();
  console.log(data);
}


abcd();

// --------------------------------------
function getNum() {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.floor(Math.random() * 10)
    if (num < 5) {
      resolve(true);
    } else reject(false);
  }, 3000);
})
}

async function abcd() {
  let v = await getNum();
  console.log(v);
}

abcd();

