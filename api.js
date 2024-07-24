// temp_c: температура
// humidity: влажность в процентах.
// cloud: облачность в процентах
// wind_kph: скорость ветра в километрах в час.
// icon: URL к иконке погодных условий.
// text: описание погодных условий.
// pressure_mb: атмосферное давление в миллибарах.
// feelslike_c: ощущаемая температура в градусах Цельсия.

export class Api {
    constructor(API_KEY) {
        this.BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&`;
    }

    async getCityData(city) {
        try {
            const response = await fetch(this.BASE_URL + "q=" + city);
            if (!response.ok) {
                console.error("Failed to fetch city data:");
                return null
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Failed to fetch city data:", error);
            return null;
        }
    }

    async cityDataParse(data) {
        if (!data) return null;
        return {
            location: data.location.name,
            temperature: data.current.temp_c,
            humidity: data.current.humidity,
            cloud: data.current.cloud,
            windSpeed: data.current.wind_kph,
            icon: data.current.condition.icon,
            condition: data.current.condition.text,
            pressure: data.current.pressure_mb,
            feelsLike: data.current.feelslike_c,
        };
    }
}

