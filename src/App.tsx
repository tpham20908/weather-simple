import React, { Component } from 'react';

import './App.css';
import Cities from './components/Cities';
import Weather from './components/Weather';
import { IAppState, IWeather } from './utils/interfaces';
import { constants, helpers } from './utils';

const { CITIES } = constants;
const { fetchWeather } = helpers;

class App extends Component {
	state: IAppState = {
		selectedCity: CITIES[0],
		weathersByCity: [],
	};

	async componentDidMount() {
		const weathers = await fetchWeather(this.state.selectedCity);
		this.setState((prevState) => ({
			...prevState,
			weathersByCity: [{ [this.state.selectedCity]: weathers }],
		}));
	}

	async componentDidUpdate(prevProps: any, prevState: IAppState) {
		const { selectedCity } = this.state;
		const { weathersByCity: currentWeathersByCity } = prevState;
		// check if weather for selected city is already in state
		const foundWeatherForThisCity = currentWeathersByCity.find(
			(weather: Record<string, IWeather[]>) => weather[selectedCity]
		);
		// fetch weather for selected city if not found
		if (!foundWeatherForThisCity) {
			const weathers = await fetchWeather(selectedCity);
			this.setState((prevState) => ({
				...prevState,
				weathersByCity: [
					...currentWeathersByCity,
					{ [selectedCity]: weathers },
				],
			}));
		}
	}

	handleSelectCity = (city: string) => {
		this.setState((prevState) => ({
			...prevState,
			selectedCity: city,
		}));
	};

	getWeatherForSelectedCity = (
		selectedCity: string,
		weathersByCity: Record<string, IWeather[]>[]
	): IWeather[] => {
		const foundWeathers = weathersByCity.find(
			(weather: Record<string, IWeather[]>) => weather[selectedCity]
		);
		return foundWeathers ? foundWeathers[selectedCity] : [];
	};

	render() {
		const { selectedCity = '', weathersByCity = [] } = this.state;
		const weatherByCity = this.getWeatherForSelectedCity(
			selectedCity,
			weathersByCity
		);

		return (
			<div className='main-container'>
				<Cities
					selectedCity={selectedCity}
					handleSelectCity={this.handleSelectCity}
				/>
				<Weather weathers={weatherByCity} />
			</div>
		);
	}
}

export default App;
