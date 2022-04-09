export interface IWeather {
	temp: number;
	weatherMain: string;
}

export interface IData {
	list: {
		dt_txt: string;
		main: {
			temp: number;
		};
		weather: {
			description: string;
			icon: string;
			id: number;
			main: string;
		}[];
	}[];
}
