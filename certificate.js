auth.onAuthStateChanged(function(user){

if(!user){
window.location.href="login.html";
return;
}

db.collection("students").doc(user.uid).get()
.then(function(studentDoc){

if(!studentDoc.exists){
alert("Student not found");
return;
}

const student = studentDoc.data();

db.collection("certificates").doc(user.uid).get()

.then(function(certDoc){

if(certDoc.exists){

const cert = certDoc.data();

if(cert.status==="Approved"){

document.getElementById("status").style.display="none";

document.getElementById("certificate").style.display="block";

document.getElementById("downloadBtn").style.display="block";

document.getElementById("studentName").innerHTML=student.name;

document.getElementById("courseName").innerHTML=cert.course;

document.getElementById("certificateDate").innerHTML=
"Date : "+new Date(cert.date.seconds*1000).toLocaleDateString();

}else{

document.getElementById("status").innerHTML=
"❌ Your Certificate is not approved yet.";

}

}else{

document.getElementById("status").innerHTML=
"❌ Certificate not available.";

}

});

});

});

function downloadCertificate(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.setFontSize(22);
doc.text("BKTech Computer & Library",20,25);

doc.setFontSize(18);
doc.text("Certificate of Completion",45,45);

doc.setFontSize(14);
doc.text("This certifies that",20,70);

doc.setFontSize(20);
doc.text(document.getElementById("studentName").innerText,20,90);

doc.setFontSize(14);
doc.text("has successfully completed",20,110);

doc.setFontSize(18);
doc.text(document.getElementById("courseName").innerText,20,130);

doc.setFontSize(14);
doc.text(document.getElementById("certificateDate").innerText,20,155);

doc.save("BKTech_Certificate.pdf");

}
