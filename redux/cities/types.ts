export type WeatherDataT = {
	icon: string;
	date: Date;
	temperature: string;
	speed: string;
	humidity: string;
	title: string;
};

export type WeatherStateT = {
	data?: WeatherDataT[];
	pending: boolean;
	error: boolean;
};

export type CityT = {
	id: string;
	name: string;
	weather: WeatherStateT;
};

export type CitiesStateT = {
	value: CityT[];
	activeIndex: number;
};

export type GetWeatherDataT = {
	city: string;
};
