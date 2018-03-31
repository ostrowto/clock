let myClock = setInterval(function () {
    myTime();
}, 1000);

function myTime() {
    let d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

