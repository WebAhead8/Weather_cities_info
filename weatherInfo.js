
      const form = document.querySelector("form");
      const output = document.querySelector("output");
      const imgIcon = document.getElementById("imgIcon");
      
      
      form.addEventListener("submit", (event) => {
        // stop the form submitting and reloading the page
        event.preventDefault();
        // get the value of the field with name="city" from the form section
    
        const name = document.querySelector("#city").value
        
        fetch(
          `http://api.weatherapi.com/v1/current.json?key=9865d5a7fd0645d788c152012211201&q=${name}`)
        
          .then((response) => { 
            return response.json();
          })
          .then((weatherData) => {
              if (weatherData.error){
                  output.textContent =weatherData.error.message;
              }
           else  output.textContent = weatherData.current.temp_c +" C ";
                imgIcon.src = weatherData.current.condition.icon;
                 
                 
                
          })
          .catch((error) => {
              output.textContent = ":warning: Something went wrong";
          });
        });
    