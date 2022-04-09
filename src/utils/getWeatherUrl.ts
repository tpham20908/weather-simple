const getWeatherUrl = (city: string) => {
	return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
};

export default getWeatherUrl;
