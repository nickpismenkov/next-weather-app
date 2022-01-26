import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { selectWeather } from 'redux/cities/citiesSlice';

export const useDispatchApp = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useWeatherDateRange = () => {
	const { data } = useAppSelector(selectWeather);

	return data?.map((item) => item.date);
};

export const useSelectWeatherByDate = (date) => {
	const { pending, error, data } = useAppSelector(selectWeather);

	return {
		data: data?.filter((item) => {
			return (
				item.date.toString().split(' ').splice(0, 4).join(' ') ===
				date.toString().split(' ').splice(0, 4).join(' ')
			);
		}),
		pending,
		error,
	};
};
