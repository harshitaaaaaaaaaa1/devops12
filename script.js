const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '41740d9768mshc19c4d140b2b24fp12bd26jsn096f9a62b619',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{
	cityName.innerHTML = city
	

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) =>{  

		console.log(response)
		
		
		
		
		temp2.innerHTML = response.temp
		
		
		humidity2.innerHTML = response.humidity
		
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		


	})
	.catch(err => console.error(err));
}

	submit.addEventListener("click",(e)=>{
		e.preventDefault()
		getWeather(city.value)
	})

	getWeather("Delhi")
