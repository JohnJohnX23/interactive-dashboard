// Put your JavaScript code in this file

function displayAnswer() {
    let answers = [
        "It is certain.",
        "Without a doubt.",
        "As I see it, yes.",
        "Reply hazy, try again.",
        "Don't count on it.",
        "My reply is no."
    ];

    const randomIndex = Math.floor(Math.random() * answers.length);
    const answerText = answers[randomIndex];
    document.getElementById("circle").innerHTML = answerText;
    console.log(answerText);
}
var question = document.getElementById("ball");
question.addEventListener("mousedown", myquestion);
function myquestion() {

    if (question.value.trim() === "") {
        alert("Please enter a question!");
    } else {
        displayAnswer();
    }

}
