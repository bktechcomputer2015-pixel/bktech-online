function checkQuiz() {

let score = 0;

const answer = document.querySelector('input[name="q1"]:checked');

if (!answer) {
    alert("Please select an answer.");
    return;
}

if (answer.value == "1") {
    score++;
}

document.getElementById("result").innerHTML =
"🎉 Your Score: " + score + " / 1";

if (typeof auth !== "undefined" && auth.currentUser) {

    db.collection("quiz_results").add({

        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        score: score,
        total: 1,
        date: new Date().toLocaleString()

    })

    .then(function () {
        console.log("Quiz result saved.");
    })

    .catch(function (error) {
        console.log(error.message);
    });

}

if (score == 1) {

    alert("🎉 Congratulations! You passed the quiz.");

} else {

    alert("❌ Wrong Answer. Please try again.");

}
}