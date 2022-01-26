import { NextPage } from 'next';
import { useState } from 'react';
import { WeatherDumb } from './Dumb';
import { useAppSelector, useDispatchApp } from 'app/hooks';
import {
	selectCities,
	selectActiveIndex,
	setActive,
} from 'redux/cities/citiesSlice';

export const Weather: NextPage = () => {
	const cities = useAppSelector(selectCities);
	const activeIndex = useAppSelector(selectActiveIndex);
	const dispatch = useDispatchApp();

	return (
		<WeatherDumb
			cities={cities}
			activeIndex={activeIndex}
			setActive={setActive}
			dispatch={dispatch}
		/>
	);
};
