import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import cities from 'redux/cities/citiesSlice';

export const store = configureStore({
	reducer: {
		cities,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
