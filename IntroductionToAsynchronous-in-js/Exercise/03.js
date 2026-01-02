// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

// ---

function loginUser(userId, cb){
  console.log("logging in user..."); 
  setTimeout(()=>{
    cb({id: 1212, username: "Tanishk"});
  },1000)
}

function fetchPermissions(userId, cb){
  console.log("fetching Permissions..."); 
  setTimeout(()=>{
    cb(["read", "Write"]);
  },1000)
}

function loadDashboard(permission, cb){
  console.log("loading dashboard..."); 
  setTimeout(()=>{
    cb();
  },1000)
}

loginUser("Tanishk", function(userData){
  fetchPermissions(user.userId, function(permission){
    loadDashboard(permission, function(){
      console.log("Dashboard loaded");
    });
  });
});

// callback hell christmas tree problem