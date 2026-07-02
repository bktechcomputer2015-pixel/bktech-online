function addCourse() {

const courseName = document.getElementById("courseName").value.trim();
const courseImage = document.getElementById("courseImage").value.trim();
const videoLink = document.getElementById("videoLink").value.trim();
const pdfLink = document.getElementById("pdfLink").value.trim();
const description = document.getElementById("description").value.trim();

if(courseName=="" || courseImage=="" || videoLink==""){

alert("Please fill all required fields.");

return;

}

db.collection("courses").add({

courseName: courseName,
courseImage: courseImage,
videoLink: videoLink,
pdfLink: pdfLink,
description: description,
createdAt: firebase.firestore.FieldValue.serverTimestamp()

})

.then(function(){

alert("✅ Course Added Successfully!");

document.getElementById("courseName").value="";
document.getElementById("courseImage").value="";
document.getElementById("videoLink").value="";
document.getElementById("pdfLink").value="";
document.getElementById("description").value="";

})

.catch(function(error){

alert(error.message);

});

}