

const displayTime = () => {
    
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const curDate =date.toLocaleDateString();
    let session = (hours >= 12) ? "PM" : "AM";

    const clockFace = document.getElementById("clock-face");
    // Format time to always show two digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hours = (hours > 12) ? hours - 12 : hours;
    
    const time = hours + ":" + minutes + ":" + seconds + " " + session;
    
    
    const dateDisplay = document.getElementById("calendar-date");
    dateDisplay.innerHTML = curDate;
    clockFace.innerHTML = time;
};
    setInterval(displayTime, 1000);