import React, { Component } from 'react';

import './App.css';
import Cities from './components/Cities';
import Weather from './components/Weather';
import { IWeather } from './utils/interfaces';
import { constants, getHighlightedWeather, getWeatherUrl } from './utils';

const { CITIES } = constants;

interface IState {
	city: string;
	weathers: IWeather[];
}

class App extends Component {
	state: IState = {
		city: CITIES[0],
		weathers: [],
	};

	componentDidMount() {
		this.fetchWeather(this.state.city);
	}

	handleSelectCity = (city: string) => {
		this.setState({
			city,
		});
		this.fetchWeather(city);
	};

	fetchWeather = (city: string) => {
		this.setState((prevState) => ({
			...prevState,
			loading: true,
		}));
		const url = getWeatherUrl(city);
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const highlightedWeather = getHighlightedWeather(data);

				this.setState((prevState) => ({
					...prevState,
					weathers: highlightedWeather,
				}));
			});
		this.setState((prevState) => ({
			...prevState,
			loading: false,
		}));
	};

	render() {
		return (
			<div className='container'>
				<Cities
					selectedCity={this.state.city}
					handleSelectCity={this.handleSelectCity}
				/>
				<Weather weathers={this.state.weathers} />
			</div>
		);
	}
}

export default App;
