document.getElementById("btn").onclick = function changeColor() {
    clearInterval(myInterval);
    myInterval = setInterval(everyTime, 9000);
    if (document.getElementById("btn").className === "btn btn-danger") {
        document.getElementById("btn").className = "btn btn-warning";
    } else if (document.getElementById("btn").className === "btn btn-warning") {
        document.getElementById("btn").className ="btn btn-success";
    } else {
        document.getElementById("btn").className ="btn btn-danger";
    }
}

function everyTime() {
    if (document.getElementById("btn").className === "btn btn-danger") {
        document.getElementById("btn").className = "btn btn-warning";
    } else if (document.getElementById("btn").className === "btn btn-warning") {
        document.getElementById("btn").className = "btn btn-success";
    } else {
        document.getElementById("btn").className = "btn btn-danger";
    }
}

var myInterval = setInterval(everyTime, 9000);