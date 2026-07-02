function submitPayment(){

const name = document.getElementById("name").value.trim();
const amount = document.getElementById("amount").value.trim();
const utr = document.getElementById("utr").value.trim();

if(name==="" || amount==="" || utr===""){
    alert("Please fill all fields");
    return;
}

auth.onAuthStateChanged(function(user){

if(!user){
    alert("Please login first");
    window.location.href="login.html";
    return;
}

db.collection("payments").add({

uid:user.uid,
name:name,
amount:amount,
utr:utr,
status:"Pending",
createdAt:new Date()

})
.then(function(){

alert("Payment Submitted Successfully!");

document.getElementById("name").value="";
document.getElementById("amount").value="";
document.getElementById("utr").value="";

window.location.href="profile.html";

})
.catch(function(error){

alert(error.message);

});

});

}
