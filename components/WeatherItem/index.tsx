import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { WeatherItemProps } from './types';
import { WeatherItemDumb } from './Dumb';
import {
	useDispatchApp,
	useWeatherDateRange,
	useSelectWeatherByDate,
} from 'app/hooks';
import { getWeatherData, selectWeather } from 'redux/cities/citiesSlice';

export const WeatherItem: NextPage<WeatherItemProps> = ({ city }) => {
	const [date, setDate] = useState(new Date());
	const dispatch = useDispatchApp();

	const { data, pending, error } = useSelectWeatherByDate(date);
	const allowDateRange = useWeatherDateRange();

	useEffect(() => {
		dispatch(getWeatherData({ city }));
	}, [city, dispatch]);

	return pending ? (
		<div className="flex items-center justify-center mt-20">
			<div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
		</div>
	) : error ? (
		<div className="flex items-center justify-center mt-20">
			<div
				className="bg-red-100 w-4/6 border border-red-400 text-red-700 px-4 py-3 rounded relative"
				role="alert"
			>
				<strong className="font-bold">
					Error! Something seriously bad happened.
				</strong>
			</div>
		</div>
	) : (
		<WeatherItemDumb
			date={date}
			setDate={setDate}
			weather={data}
			allowDateRange={allowDateRange}
		/>
	);
};
