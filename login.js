function loginUser() {

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;

if(email === "" || password === ""){
    alert("Please fill all fields");
    return false;
}

auth.signInWithEmailAndPassword(email, password)
.then(function(userCredential){

    alert("Login Successful ✔");

    localStorage.setItem("uid", userCredential.user.uid);

    window.location.href = "profile.html";

})
.catch(function(error){
    alert(error.message);
});

return false;

}