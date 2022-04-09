import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Weather.css';
import { IWeather } from '../../utils/interfaces';
import { helpers } from '../../utils';

const { getDayText, getIconByWeather } = helpers;

export default class Weather extends Component<{ weathers: IWeather[] }> {
	renderTodayWeather = (weather: IWeather) => {
		const { weatherMain = '', timestamp = 0, temp = 0 } = weather;
		const icon = getIconByWeather(weatherMain);
		return (
			<>
				<p>{getDayText(timestamp)}</p>
				<div>
					<FontAwesomeIcon icon={icon} color='#CDF0F0' size='4x' />
					<p>
						<span className='temp'>{temp}&deg;</span>
						<span>{weatherMain}</span>
					</p>
				</div>
			</>
		);
	};
	renderNextDaysWeather = (weathers: IWeather[]) => {
		return (
			<>
				{weathers.map((weather: IWeather) => {
					const { weatherMain = '', timestamp = 0, temp = 0 } = weather;
					const icon = getIconByWeather(weatherMain);
					return (
						<div key={timestamp}>
							<p>{getDayText(timestamp)}</p>
							<FontAwesomeIcon icon={icon} color='#CDF0F0' size='2x' />
							<p className='temp'>{temp}&deg;</p>
						</div>
					);
				})}
			</>
		);
	};

	render() {
		const { weathers = [] } = this.props;
		const [todayWeather, ...rest] = weathers;

		if (!weathers.length) {
			return <div className='loader'>Loading...</div>;
		}

		return (
			<section className='weather-container'>
				<div className='weather-container__today'>
					{this.renderTodayWeather(todayWeather)}
				</div>
				<div className='weather-container__nextdays'>
					{this.renderNextDaysWeather(rest)}
				</div>
			</section>
		);
	}
}
