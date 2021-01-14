const form = document.querySelector("form");
const output = document.querySelector("output");
const imgIcon = document.getElementById("imgIcon");
form.addEventListener("submit", (event) => {
  // stop the form submitting and reloading the page
  event.preventDefault();

  // get the value of the field with name="city"
  const name = document.querySelector("#city").value;
  fetchWeather(name);
  output.innerHTML = "";
});
