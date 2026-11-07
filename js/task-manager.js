function weeklyGoal(UserName, dailyGoal, bonusTask) {
    console.log("Checking status for: " + UserName);
    const weeklyTarget = dailyGoal * 5;
    const totalGoal = weeklyTarget + bonusTask;
    const output = "User: " + UserName + ", Total Weekly Goal: " + totalGoal;
    document.getElementById("goal-message").innerHTML = output;
    alert(output);
}

const btn = document.getElementById("goal-btn");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    const userName = document.getElementById("Name").value;
    const dailyGoal = parseInt(document.getElementById("Goal").value);
    const bonusTask = parseInt(document.getElementById("Bonus").value);
    weeklyGoal(userName, dailyGoal, bonusTask);
});

let mytask = [];

function AddTask() {
    const taskInput = document.getElementById("task-input");
    if (!taskInput || !taskInput.value.trim()) return;

    mytask.push(taskInput.value.trim());

    const ul = document.getElementById("new-task-list");
    const li = document.createElement("li");
    li.textContent = mytask[mytask.length - 1];
    ul.appendChild(li);
    console.log(mytask);
    
}

btn.addEventListener("click", AddTask());

const taskList = document.getElementById("task-list");
let ul = document.getElementById("new-task-list");
if (!ul) {
    ul = document.createElement("ul");
    ul.id = "new-task-list";
    taskList.appendChild(ul);
}
