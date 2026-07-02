// Student Name LocalStorage se
const studentName = localStorage.getItem("name") || "Student";

// Course Name (Default)
const courseName = localStorage.getItem("course") || "Diploma in Computer Application (DCA)";

// Aaj ki Date
const today = new Date().toLocaleDateString("en-IN");

// Page par data dikhaye
document.getElementById("studentName").innerText = studentName;
document.getElementById("courseName").innerText = courseName;
document.getElementById("certificateDate").innerText = "Date: " + today;

// Certificate PDF Download
function downloadCertificate() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF("landscape");

    // Title
    doc.setFontSize(26);
    doc.text("BKTech Computer & Library", 105, 30, { align: "center" });

    doc.setFontSize(20);
    doc.text("Certificate of Completion", 105, 50, { align: "center" });

    doc.setFontSize(14);
    doc.text("This is to certify that", 105, 70, { align: "center" });

    // Student Name
    doc.setFontSize(24);
    doc.text(studentName, 105, 90, { align: "center" });

    doc.setFontSize(14);
    doc.text("has successfully completed the course", 105, 110, { align: "center" });

    // Course Name
    doc.setFontSize(18);
    doc.text(courseName, 105, 130, { align: "center" });

    doc.setFontSize(14);
    doc.text("Date: " + today, 105, 150, { align: "center" });

    doc.setFontSize(12);
    doc.text("Congratulations & Best Wishes!", 105, 170, { align: "center" });

    // Save PDF
    doc.save("BKTech_Certificate.pdf");
}