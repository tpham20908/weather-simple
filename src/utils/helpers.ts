import { IData } from './interfaces';

const getWeatherUrl = (city: string) =>
	`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=4&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;

const getHighlightedWeather = (data: IData) => {
	console.log({ data });
	const { list = [] } = data;
	return list.map(({ temp, weather, dt }) => {
		const { day = 0 } = temp;
		const { main: weatherMain } = weather[0];
		return {
			temp: Math.round(day),
			weatherMain,
			timestamp: dt,
		};
	});
};

const fetchWeather = async (city: string) => {
	const url = getWeatherUrl(city);
	const response = await fetch(url);
	const data = await response.json();
	return getHighlightedWeather(data);
};

const getDayText = (timestamp: number) => {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const d = new Date(timestamp * 1000);
	const today = new Date();
	if (d.getUTCDay() === today.getUTCDay()) {
		return 'Today';
	}
	return days[d.getUTCDay()].slice(0, 3);
};

export { getWeatherUrl, getHighlightedWeather, fetchWeather, getDayText };
