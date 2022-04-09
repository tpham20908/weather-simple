import React, { Component } from 'react';

import './Weather.css';
import { IWeather } from '../../utils/interfaces';

interface IProps {
	weathers: IWeather[];
}

export default class Weather extends Component<IProps> {
	render() {
		const { weathers = [] } = this.props;
		console.log({ weathers });

		if (!weathers.length) {
			return <div>Loading...</div>;
		}
		return <div>{weathers[0].weatherMain}</div>;
	}
}
