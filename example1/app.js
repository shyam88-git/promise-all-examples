function makePromise(n) {
  return new Promise(function (resolve, reject) {
    let value = n;
    if (value % 2 == 0) {
      resolve("Hurray! I completed the project");
      console.log("Success!");
    } else {
      reject("Sorry! Couldn't complete the project");
      console.log("Failure!");
    }
  });
}
function success(msg) {
  let resSpan = document.getElementById("result");
  resSpan.innerHTML += msg;
  let icnSpan = document.getElementById("icn");
  icnSpan.innerHTML = "😊😊";
}
function failure(msg) {
  let resSpan = document.getElementById("result");
  resSpan.innerHTML += msg;
  let icnSpan = document.getElementById("icn");
  icnSpan.innerHTML = "😒😒";
}
function doTask() {
  let now = new Date();
  let currSec = now.getSeconds();
  let resSpan = document.getElementById("result");
  resSpan.innerHTML = "Curr Value:" + currSec + "<br>";
  let pr = makePromise(currSec);
  pr.then(success, failure);
}
