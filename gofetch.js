document.addEventListener('DOMContentLoaded',()=>{

	let btn = document.getElementById("button-fetch")
	let city = document.getElementById("cityName")

	btn.addEventListener("click", () => {
		
		event.preventDefault()
		
		if (city.value.length > 1) {

			let urlToFetch = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=03850f3276804017f4ff76835bf4de81&units=metric`
			console.log(urlToFetch)



		fetch(urlToFetch)
			  .then(function(response) {
			    return response.json();
			  })
			  .then(function(myJson) {
			    console.log(myJson);

			    

			    // Debut insertion des données Json//

			    let titreCity = document.getElementById("title")
        		titreCity.textContent = `What's the weather like in ${myJson.name}...`

        		let tempsCity = document.getElementById("temps")
        		tempsCity.textContent = myJson.weather[0].main

        		let temperatureCity = document.getElementById("temperature")
        		temperatureCity.textContent = `${myJson.main.temp}°C`

        		let iconCity = document.getElementById("icon").src=`images/${myJson.weather[0].main}.png`
        		console.log(iconCity)



			  });



  		} else {

  			alert(`Oups, ça ne ressemble pas vraiment à un nom de ville !`)

  		}

	})

})
