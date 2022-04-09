export interface IWeather {
	temp: number;
	weatherMain: string;
	timestamp: number;
}

export interface IAppState {
	selectedCity: string;
	weathersByCity: Record<string, IWeather[]>[];
}

export interface IData {
	list: {
		dt: number;
		dt_txt: string;
		temp: {
			day: number;
			min: number;
			max: number;
			night: number;
			eve: number;
			morn: number;
		};
		weather: {
			description: string;
			icon: string;
			id: number;
			main: string;
		}[];
	}[];
}
