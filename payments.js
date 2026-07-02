const paymentList = document.getElementById("paymentList");

db.collection("payments")
.orderBy("createdAt","desc")
.onSnapshot(function(snapshot){

paymentList.innerHTML="";

if(snapshot.empty){
paymentList.innerHTML="<h3>No Payment Requests</h3>";
return;
}

snapshot.forEach(function(doc){

const data = doc.data();

paymentList.innerHTML += `

<div class="card">

<p><b>Student:</b> ${data.name}</p>

<p><b>Amount:</b> ₹${data.amount}</p>

<p><b>UTR:</b> ${data.utr}</p>

<p><b>Status:</b> ${data.status}</p>

<button class="approve"
onclick="approvePayment('${doc.id}')">
Approve
</button>

<button class="reject"
onclick="rejectPayment('${doc.id}')">
Reject
</button>

</div>

`;

});

});

function approvePayment(id){

db.collection("payments").doc(id).update({

status:"Approved"

})
.then(function(){

alert("Payment Approved");

})
.catch(function(error){

alert(error.message);

});

}

function rejectPayment(id){

db.collection("payments").doc(id).update({

status:"Rejected"

})
.then(function(){

alert("Payment Rejected");

})
.catch(function(error){

alert(error.message);

});

}
