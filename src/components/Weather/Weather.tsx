import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCloud } from '@fortawesome/free-solid-svg-icons';

import './Weather.css';
import { IWeather } from '../../utils/interfaces';
import { helpers } from '../../utils';

const { getDayText } = helpers;

export default class Weather extends Component<{ weathers: IWeather[] }> {
	renderTodayWeather = (weather: IWeather) => {
		const { weatherMain = '', timestamp = 0 } = weather;
		return (
			<div>
				{getDayText(timestamp)}
				<FontAwesomeIcon icon={faCloud} />
				{/* <FontAwesomeIcon icon={faCoffee} /> */}
			</div>
		);
	};
	renderNextDaysWeather = (weathers: IWeather[]) => {
		console.log(weathers);
		return <div>{getDayText(weathers[0].timestamp)}</div>;
	};

	render() {
		const { weathers = [] } = this.props;
		const [todayWeather, ...rest] = weathers;
		const nextDaysWeather = rest.slice(0, 3);

		if (!weathers.length) {
			return <div>Loading...</div>;
		}
		return (
			<section className='weather-container'>
				<div className='weather-container__today'>
					{this.renderTodayWeather(todayWeather)}
				</div>
				<div className='weather-container__nextdays'>
					{this.renderNextDaysWeather(nextDaysWeather)}
				</div>
			</section>
		);
	}
}
