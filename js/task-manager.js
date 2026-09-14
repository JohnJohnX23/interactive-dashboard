function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5;
    let totalGoal = weeklyGoal + bonusTasks;
    ouput1=("User: " + userName + "<br>");
    output2=("Total Weekly Goal:"  + totalGoal);
    output= document.getElementById("goal-message")
        addEventListener("click", function(){
             const Name = document.getElementById("user-name").value;
             const dailyGoal1 = parseInt(document.getElementById("daily-goal").value);
             const bonusTasks1 = parseInt(document.getElementById("bonus-tasks").value);
             });
             PreventDefault();
WeeklyGoal(Name, dailyGoal1, bonusTasks1);}