let timerInterval = setInterval(changeColor, 9000);

function changeColor() {
  clearInterval(timerInterval);
  timerInterval = setInterval(changeColor, 9000);
  const dict = {
    "btn btn-danger": "btn btn-warning",
    "btn btn-warning": "btn btn-success",
    "btn btn-success": "btn btn-danger"
  };
  document.getElementById("btn").className = dict[document.getElementById("btn").className];
}