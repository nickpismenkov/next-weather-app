import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { RootState } from 'app/store';
import { CitiesStateT, GetWeatherDataT } from './types';

const initialState: CitiesStateT = {
	value: [
		{
			id: uuidv4(),
			name: 'new york',
			weather: { pending: false, error: false, data: undefined },
		},
		{
			id: uuidv4(),
			name: 'london',
			weather: { pending: false, error: false, data: undefined },
		},
		{
			id: uuidv4(),
			name: 'berlin',
			weather: { pending: false, error: false, data: undefined },
		},
		{
			id: uuidv4(),
			name: 'paris',
			weather: { pending: false, error: false, data: undefined },
		},
		{
			id: uuidv4(),
			name: 'tokyo',
			weather: { pending: false, error: false, data: undefined },
		},
	],
	activeIndex: 0,
};

export const getWeatherData = createAsyncThunk(
	'weather/weatherData',
	async ({ city }: GetWeatherDataT) => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}`
		);

		return await response.json();
	}
);

export const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		setActive: (state, action: PayloadAction<number>) => {
			state.activeIndex = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getWeatherData.pending, (state) => {
				state.value[state.activeIndex].weather.pending = true;
			})
			.addCase(getWeatherData.fulfilled, (state, { payload }) => {
				state.value[state.activeIndex].weather.pending = false;
				state.value[state.activeIndex].weather.data = payload.list.map(
					(item) => ({
						icon: item.weather[0].icon,
						temperature: (item.main.temp - 273.15).toFixed(2),
						speed: item.wind.speed,
						humidity: item.main.humidity,
						date: new Date(item.dt * 1000),
						title: item.weather[0].main,
					})
				);
			})
			.addCase(getWeatherData.rejected, (state) => {
				state.value[state.activeIndex].weather.pending = false;
				state.value[state.activeIndex].weather.error = true;
			});
	},
});

export const { setActive } = citiesSlice.actions;
export type setActiveType = typeof citiesSlice.actions.setActive;

export const selectWeather = (state: RootState) =>
	state.cities.value[state.cities.activeIndex].weather;
export const selectCities = (state: RootState) => state.cities.value;
export const selectActiveIndex = (state: RootState) => state.cities.activeIndex;

export default citiesSlice.reducer;
