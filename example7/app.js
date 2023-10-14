let countriesList, countriesArr;
function loadCountries() {
  let endPoint = "https://restcountries.com/v2/all";
  countriesList = document.getElementById("countries");
  let pr = load(endPoint);
  pr.then((result) => {
    countriesArr = JSON.parse(result);
    let countryNames = "";
    countriesArr.forEach((obj) => {
      countryNames += `<option>${obj.name}</option>`;
    });
    countriesList.innerHTML = countryNames;
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
function showDetails() {
  let countryIndex = countriesList.selectedIndex;
  let country = countriesArr[countryIndex];
  let myHtml = `<table border='2'><tr><th>Capital City</th><td>${country.capital}</td></tr><tr><th>Flag</th><td><img src='${country.flags.png}'></td></tr><tr><th>Currency Name</th><td>${country.currencies[0].name}</td></tr></table>`;
  let countryDetails = document.getElementById("countrydetails");
  countryDetails.innerHTML = myHtml;
}
