import { IData } from './interfaces';

const getHighlightedWeather = (data: IData) => {
	const { list = [] } = data;
	return list
		.filter(({ dt_txt }) => dt_txt.includes('12:00:00'))
		.map(({ main, weather }) => {
			const { temp } = main;
			const { main: weatherMain } = weather[0];
			return {
				temp: Math.round(temp),
				weatherMain,
			};
		});
};

export default getHighlightedWeather;
