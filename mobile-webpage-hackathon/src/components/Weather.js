class Weather {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.defaultLocation = 'New Delhi';
        this.weatherData = null;
    }

    async fetchWeather(location = this.defaultLocation) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        this.weatherData = await response.json();
        return this.weatherData;
    }

    displayWeather(location) {
        this.fetchWeather(location)
            .then(data => {
                const weatherContainer = document.getElementById('weather');
                weatherContainer.innerHTML = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                `;
            })
            .catch(error => {
                console.error(error);
                const weatherContainer = document.getElementById('weather');
                weatherContainer.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
            });
    }
}

export default Weather;