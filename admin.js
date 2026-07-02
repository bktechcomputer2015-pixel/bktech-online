db.collection("payments").onSnapshot(function(snapshot){

const container = document.getElementById("payments");

container.innerHTML = "";

snapshot.forEach(function(doc){

const data = doc.data();

container.innerHTML += `

<div class="card">

<p><b>Student UID:</b><br>${data.uid}</p>

<p><b>UTR:</b> ${data.utr}</p>

<p><b>Amount:</b> ₹${data.amount}</p>

<p><b>Status:</b> ${data.status}</p>

<button class="approve"
onclick="approve('${doc.id}')">
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

function approve(id){

db.collection("payments").doc(id).update({

status:"Approved"

}).then(function(){

db.collection("students").doc(id).update({

courseUnlocked:true

});

alert("Course Approved Successfully ✔");

});

}

function rejectPayment(id){

db.collection("payments").doc(id).update({

status:"Rejected"

});

alert("Payment Rejected");

}