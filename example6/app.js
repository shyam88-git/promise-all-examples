function connect() {
  let endPoint = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";
  let dateTimeSpan = document.getElementById("currentdatetime");
  let pr = load(endPoint);
  pr.then((result) => {
    const obj = JSON.parse(result);
    let dateStirng = obj.datetime;
    let today = new Date(dateStirng);
    dateTimeSpan.innerHTML =
      today.toDateString() + "," + today.toLocaleTimeString();
  }).catch((error) => {
    alert("Sorry! Request cannot be processed!\nReason:" + error);
  });
}

function load(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText);
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        reject(xhr.statusText);
      }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
  });
}
