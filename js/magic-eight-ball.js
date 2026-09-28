// Put your JavaScript code in this file

function displayAnswer() {
    const answers = [
        "It is certain.",
        "Without a doubt.",
        "As I see it, yes.",
        "Reply hazy, try again.",
        "Don't count on it.",
        "My reply is no."
    ];

    const randomIndex = Math.floor(Math.random() * answers.length);
    const answerText = answers[randomIndex];
    document.getElementById("circle").textContent = answerText;
}

function myfunction() {
    const question = document.getElementById("question");

    if (question.value.trim() === "") {
        alert("Please enter a question!");
        return;
    }

    displayAnswer();
}

document.addEventListener("DOMContentLoaded", function () {
    const ball = document.getElementById("ball");
    const reset = document.getElementById("reset");

    if (ball) {
        ball.addEventListener("mousedown", myfunction);
    }

    if (reset) {
        reset.addEventListener("click", function () {
            document.getElementById("circle").textContent = "";
            document.getElementById("question").value = "";
        });
    }
});
