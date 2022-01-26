import { WeatherDataT } from 'redux/cities/types';

export type WeatherItemProps = {
	city: string;
};

export type WeatherItemDumbProps = {
	weather?: WeatherDataT[];
	setDate: any;
	date: any;
	allowDateRange?: Date[];
};
