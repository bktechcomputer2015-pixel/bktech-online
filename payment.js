db.collection("payments").onSnapshot(function(snapshot){

const paymentList = document.getElementById("paymentList");

paymentList.innerHTML = "";

if(snapshot.empty){
paymentList.innerHTML = "<h3>No Payment Requests Found</h3>";
return;
}

snapshot.forEach(function(doc){

const data = doc.data();

paymentList.innerHTML += `

<div class="card">

<p><b>Student UID:</b> ${data.uid}</p>

<p><b>Amount:</b> ₹${data.amount}</p>

<p><b>UTR:</b> ${data.utr}</p>

<p><b>Status:</b> ${data.status}</p>

<button class="approve" onclick="approvePayment('${doc.id}')">
Approve
</button>

<button class="reject" onclick="rejectPayment('${doc.id}')">
Reject
</button>

</div>

`;

});

});

function approvePayment(id){

db.collection("payments").doc(id).update({

status:"Approved"

}).then(function(){

db.collection("students").doc(id).update({

courseUnlocked:true

}).then(function(){

alert("✅ Payment Approved & Course Unlocked");

});

});

}

function rejectPayment(id){

db.collection("payments").doc(id).update({

status:"Rejected"

}).then(function(){

alert("❌ Payment Rejected");

});

}