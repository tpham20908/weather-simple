import React, { Component } from 'react';

import getWeatherUrl from './utils/getWeatherUrl';

interface IWeather {
	description: string;
	// icon: '10n';
	id: number;
	main: string;
}

class App extends Component {
	componentDidMount() {
		const url = getWeatherUrl('TOKYO');

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}

	render() {
		return <div>Hello</div>;
	}
}

export default App;
