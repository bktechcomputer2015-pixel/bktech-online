db.collection("students").onSnapshot(function(snapshot){

const list = document.getElementById("studentsList");

list.innerHTML = "";

if(snapshot.empty){
list.innerHTML = "<h3>No Students Found</h3>";
return;
}

snapshot.forEach(function(doc){

const data = doc.data();

list.innerHTML += `

<div class="card">

<h3>${data.name || "No Name"}</h3>

<p><b>Email:</b> ${data.email || ""}</p>

<p><b>Mobile:</b> ${data.mobile || ""}</p>

<p><b>UID:</b> ${doc.id}</p>

<button class="btn" onclick="deleteStudent('${doc.id}')">
Delete Student
</button>

</div>

`;

});

});

function deleteStudent(id){

if(confirm("Delete this student?")){

db.collection("students").doc(id).delete()

.then(function(){

alert("Student Deleted Successfully");

})

.catch(function(error){

alert(error.message);

});

}

}