

let taskList = [];

          
function addTask() {
    let task = document.getElementById("task-input").innerText;
    let priority = document.getElementById("priority").value;
    let important = document.getElementById("important").checked;

    let taskOBJ = new Task(task, priority, important);
    taskList.push(taskOBJ);
    console.log(taskList);
}

function deleteTasks() {
    taskList = [];
    console.log(taskList);
}
function isCompleted() {
    if (document.getElementById("completed").checked) {
        console.log("Task is completed");
    }

for (let i = 0; i < taskList.length; i++) {
    var task = taskList[i];
    var myJSON = JSON.stringify(task);
    document.getElementById("jsonOutput").innerHTML += myJSON;
}
}