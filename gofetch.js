// var articlesElt = document.getElementById("articles");
// ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function (reponse) {
//     // Transforme la réponse en un tableau d'articles
//     var articles = JSON.parse(reponse);
//     articles.forEach(function (article) {
//         // Ajout du titre et du contenu de chaque article
//         var titreElt = document.createElement("h2");
//         titreElt.textContent = article.titre;
//         var contenuElt = document.createElement("p");
//         contenuElt.textContent = article.contenu;
//         articlesElt.appendChild(titreElt);
//         articlesElt.appendChild(contenuElt);
//     });
// });




 

// let nameCity = document.getElementById("cityName")

// let nameCityButton = document.getElementById("button-fetch")
// nameCityButton.addEventListener('click', ()=> {

//   if (nameCity.value.length > 1) {

//     console.log(nameCity.value)
//     let urlToFetch = `http://api.openweathermap.org/data/2.5/forecast?q=${nameCity.value}&APPID=03850f3276804017f4ff76835bf4de81`
//     console.log(urlToFetch)


//   } else {

//     console.log(`Ceci n'est pas un nom de ville`)

//   }
  
// });






// myFetch('http://api.openweathermap.org/data/2.5/forecast?q=paris&APPID=03850f3276804017f4ff76835bf4de81lm')

document.addEventListener('DOMContentLoaded',()=>{

	let btn = document.getElementById("button-fetch")
	let city = document.getElementById("cityName")

	btn.addEventListener("click", () => {
		
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


// {"coord":{"lon":2.35,"lat":48.86},
// "weather":[{"id":801,
// "main":"Clouds",
// "description":"few clouds","icon":"02n"}],
// "base":"stations",
// "main":{"temp":5,"pressure":1008,
// "humidity":80,"temp_min":4,"temp_max":6},
// "visibility":10000,
// "wind":{"speed":2.1,"deg":250},
// "clouds":{"all":20},"dt":1522269000,
// "sys":{"type":1,"id":5610,
// "message":0.0028,
// "country":"FR",
// "sunrise":1522215310,
// "sunset":1522260993},
// "id":2988507,
// "name":"Paris",
// "cod":200}
