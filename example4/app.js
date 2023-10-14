let resSpan;
function calculateSquare(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let num = Number(value);
      if (isNaN(num)) {
        reject("Error! Cannot calc square of a non numeric data");
        return;
      }
      resolve(num * num);
    }, 2000);
  });
}
function doTask() {
  let inp = document.querySelector("#userinp");
  let data = inp.value;
  resSpan = document.getElementById("result");

  let pr = calculateSquare(data);
  pr.then(
    (square) => {
      resSpan.innerHTML += "It's square is " + square;
    },
    (error) => {
      resSpan.innerHTML += error;
    }
  );
  resSpan.innerHTML = "Curr value:" + data + "<br>";
}
