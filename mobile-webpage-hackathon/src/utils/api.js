function fetchWeatherData(apiKey, location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return {
                temperature: data.main.temp,
                description: data.weather[0].description,
                city: data.name,
                country: data.sys.country
            };
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

export { fetchWeatherData };