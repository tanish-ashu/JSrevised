//Call back exercises

function loginUser(username, cb){
  console.log("Logging in user....");
  setTimeout(() => {
    cb({ id: 1212, username: "Tanishk"});
  },1000);
}
function fetchPermission(id, cb){
  console.log("Fetching permission....");
  setTimeout(() => {
    cb(["read", "write", "delete"]);
  },2000)
}
function loadDashboard(permissions, cb){
  console.log("✅DashBoard Loaded....");
  setTimeout(() => {
    cb();
  }, 3000)
}

loginUser("harsh", function(userData) {
  fetchPermission(userData.id, function(permission){
    loadDashboard(permission, function(){
      console.log("permission loaded");
    });
  });
});