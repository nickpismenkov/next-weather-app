import { CityT } from 'redux/cities/types';
import type { setActiveType } from 'redux/cities/citiesSlice';
import { AppDispatch } from 'app/store';

export type WeatherDumbProps = {
	cities: CityT[];
	activeIndex: number;
	setActive: setActiveType;
	dispatch: AppDispatch;
};
