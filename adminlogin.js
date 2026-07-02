function adminLogin() {

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;

if(email==="" || password===""){
alert("Please fill all fields");
return false;
}

auth.signInWithEmailAndPassword(email, password)

.then(function(result){

const ADMIN_EMAIL = "bktech.computer2015@gmail.com";

if(result.user.email === ADMIN_EMAIL){

alert("Welcome Admin");

window.location.href = "admin.html";

}else{

alert("Access Denied! You are not Admin.");

auth.signOut();

}

})

.catch(function(error){

alert(error.message);

});

return false;

}