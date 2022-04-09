import React, { Component } from 'react';
import classNames from 'classnames';

import './Cities.css';
import { constants } from '../../utils';
import mockup from '../../assets/mockup.png';

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
				{/* <img src={mockup} alt='mockup' width={740} /> */}
				{CITIES.map((city, idx) => {
					const classes = classNames({
						'city-name': true,
						'city-selected': city === selectedCity,
					});
					return (
						<button
							key={idx}
							className={classes}
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
