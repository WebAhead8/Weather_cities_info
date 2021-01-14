function fetchFlag(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    // if we get a successful response
    .then((citiesData) => {
      const country = document.createElement("h4");
      country.textContent = citiesData[0].name;
      const population = document.createElement("p");
      population.textContent = "Population: " + citiesData[0].population;
      const flag = document.createElement("img");
      flag.src = citiesData[0].flag;
      flag.alt = "";
      flag.width = "250";
      flag.height = "166.5";

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
