let resSpan;
function displayResult(result) {
  if (typeof result === "number") {
    resSpan.innerHTML += "It's square is " + result;
  } else {
    resSpan.innerHTML += result;
  }
}
function calculateSquare(value, callback) {
  setTimeout(() => {
    let num = Number(value);
    if (isNaN(num)) {
      callback("Error! Cannot calc square of a non numeric data");
      return;
    }
    callback(num * num);
  }, 2000);
}
function doTask() {
  let inp = document.querySelector("#userinp");
  let data = inp.value;
  resSpan = document.getElementById("result");
  calculateSquare(data, displayResult);
  resSpan.innerHTML = "Curr value:" + data + "<br>";
}
