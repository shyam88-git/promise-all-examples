let resSpan, icnSpan;
function makePromise(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let value = n;
      if (value % 2 == 0) {
        resolve("Hurray! I completed the project");
        console.log("Success!");
      } else {
        reject("Sorry! Couldn't complete the project");
        console.log("Failure!");
      }
    }, 3000);
  });
}
function success(msg) {
  resSpan.innerHTML += msg;
  icnSpan.innerHTML = "😊😊";
}
function failure(msg) {
  resSpan.innerHTML += msg;
  icnSpan.innerHTML = "😒😒";
}
function doTask() {
  let now = new Date();
  let currSec = now.getSeconds();
  resSpan = document.getElementById("result");
  icnSpan = document.getElementById("icn");
  resSpan.innerHTML = "Curr Value:" + currSec + "<br>";
  icnSpan.innerHTML = "";
  let pr = makePromise(currSec);
  pr.then(success, failure);
}
