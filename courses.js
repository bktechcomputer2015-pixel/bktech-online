db.collection("courses").onSnapshot(function(snapshot){

const list = document.getElementById("courseList");

snapshot.forEach(function(doc){

const data = doc.data();

list.innerHTML += `

<div class="course">

<h3>${data.courseName}</h3>

<p>${data.description || ""}</p>

<a href="${data.videoLink}" target="_blank" class="btn">
▶ Start Course
</a>

<a href="${data.pdfLink}" target="_blank" class="btn">
📄 PDF Notes
</a>

</div>

`;

});

});