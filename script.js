function changeColor() {
    clearInterval(timerInterval);
    timerInterval = setInterval(changeColor, 9000);
    if (document.getElementById("btn").className === "btn btn-danger") {
        document.getElementById("btn").className = "btn btn-warning";
    } else if (document.getElementById("btn").className === "btn btn-warning") {
        document.getElementById("btn").className = "btn btn-success";
    } else {
        document.getElementById("btn").className = "btn btn-danger";
    }
}

let timerInterval = setInterval(changeColor, 9000);