function weeklyGoal(UserName, dailyGoal, bonusTask) {
                    console.log("Checking status for: " + UserName);
                    let weeklyGoal = dailyGoal * 5;
                    let totalGoal = weeklyGoal + bonusTask;
                    let output = "User: " + UserName + ", Total Weekly Goal: " + totalGoal;
                    document.getElementById("goal-message").innerHTML = output;
                    alert(output)
                }

                const btn = document.getElementById("goal-btn");
                btn.addEventListener("click", function() {
                    event.preventDefault();
                    let userName = document.getElementById("Name").value;
                    let dailyGoal = parseInt(document.getElementById("Goal").value);
                    let bonusTask = parseInt(document.getElementById("Bonus").value);
                    weeklyGoal(userName, dailyGoal, bonusTask);
                });
