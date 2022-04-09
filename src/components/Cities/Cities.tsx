import React, { Component } from 'react';

import './Cities.css';
import { constants } from '../../utils';

const { CITIES } = constants;

interface ICitiesProp {
	selectedCity: string;
	handleSelectCity: (city: string) => void;
}

export default class Cities extends Component<ICitiesProp> {
	render() {
		const { selectedCity = '', handleSelectCity } = this.props;
		return (
			<div className='cities-container'>
				{CITIES.map((city, idx) => {
					return (
						<button
							key={idx}
							className={`cities-container__btn ${
								city === selectedCity ? 'cities-container__btn--selected' : ''
							}`}
							onClick={() => handleSelectCity(city)}
						>
							{city}
						</button>
					);
				})}
			</div>
		);
	}
}
