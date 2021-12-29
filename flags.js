function fetchFlag(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    // if we get a successful response
    .then((citiesData) => {
      const country = document.createElement("h4");
      country.textContent = citiesData[0].name.common;
      const population = document.createElement("p");
      population.textContent = "Population: " + citiesData[0].population;
      const flag = document.createElement("img");
      flag.classList.add("imgFg");
      flag.src = citiesData[0].flags.png;
      flag.alt = "";

      output.appendChild(country);
      output.appendChild(population);
      output.appendChild(flag);
    })
    // if the request is unsuccessful
    .catch((error) => {
      console.log(error);
      if (error.message === "404" || "400") {
        output.textContent = `⚠️ Couldn't find "${country}"`;
      } else {
        output.textContent = "⚠️ Something went wrong";
      }
    });
}
