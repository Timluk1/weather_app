export function getElementInformation({location, temperature, humidity, cloud, windSpeed, icon, condition, pressure, feelsLike}) {
    return `
    <div class="information">
        <div class="city-name" id="city-name">${location}</div>
        <div class="weather-header">
            <img id="weather-icon" src="${icon}" alt="Погодная иконка">
            <span id="weather-text">${condition}</span>
        </div>
        <div class="weather-details">
            <div class="weather-detail">
                <span class="label">Temperature:</span>
                <span id="temp_c">${Math.floor(temperature)}°C</span>
            </div>
            <div class="weather-detail">
                <span class="label">Perceived temperature:</span>
                <span id="feelslike_c">${Math.floor(feelsLike)}°C</span>
            </div>
            <div class="weather-detail">
                <span class="label">Humidity:</span>
                <span id="humidity">${humidity}%</span>
            </div>
            <div class="weather-detail">
                <span class="label">Cloudiness:</span>
                <span id="cloud">${cloud}%</span>
            </div>
            <div class="weather-detail">
                <span class="label">Wind speed:</span>
                <span id="wind_kph">${windSpeed} kp/h</span>
            </div>
            <div class="weather-detail">
                <span class="label">Pressure:</span>
                <span id="pressure_mb">${pressure} mb</span>
            </div>
        </div>
    </div>`;
}
