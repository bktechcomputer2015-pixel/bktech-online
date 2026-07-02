function signupUser(){

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const mobile = document.getElementById("mobile").value.trim();
const password = document.getElementById("password").value;

if(name==="" || email==="" || mobile==="" || password===""){
    alert("Please fill all fields");
    return;
}

auth.createUserWithEmailAndPassword(email, password)
.then(function(userCredential){

const uid = userCredential.user.uid;

db.collection("students").doc(uid).set({
    name: name,
    email: email,
    mobile: mobile,
    createdAt: new Date()
})
.then(function(){
    alert("Account Created Successfully!");
    window.location.href = "login.html";
})
.catch(function(error){
    alert(error.message);
});

})
.catch(function(error){
    alert(error.message);
});

}