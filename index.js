//Digital clock

function updateClock(){
    const now = new Date();
    //with padStart the 2 digits are padded with 0 in case there is nothing
    const hour = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hour}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
//this will call update clock repetedly
//so that it updates every second (1000ms)
setInterval(updateClock, 1000)