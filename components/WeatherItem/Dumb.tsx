import { NextPage } from 'next';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { WeatherItemDumbProps } from './types';

export const WeatherItemDumb: NextPage<WeatherItemDumbProps> = ({
	weather,
	date,
	setDate,
	allowDateRange,
}) => (
	<div className="flex mt-5">
		<div className="grid grid-cols-3 mr-20">
			{weather?.map((item) => (
				<div className="flex justify-center" key={`${item.icon}/${item.date}`}>
					<div className="card  min-w-sm max-w-sm border border-gray-100 bg-gray-50   transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full bg-green-600 text-purple-50 rounded-md">
						<h2 className="text-md mb-2 px-4 pt-4">
							<div className="flex justify-between">
								<div className="badge relative top-0">
									<span className="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4">
										{item.title}
									</span>
								</div>
								<span className="text-lg font-bold ">
									{item.date.toLocaleTimeString()}
								</span>
							</div>
						</h2>

						<div className="flex items-center">
							<div className="flex justify-center items-center w-80">
								<Image
									width="150"
									height="150"
									src={`https://openweathermap.org/img/wn/${item.icon}@4x.png`}
									alt="weather icon"
								/>
							</div>
						</div>
						<div className="text-md pt-4 pb-4 px-4">
							<div className="flex justify-between items-center">
								<div className="space-y-2">
									<span className="flex space-x-2 items-center">
										<span>{item.speed} km/h</span>
									</span>
									<span className="flex space-x-2 items-center">
										<svg
											height="20"
											width="20"
											viewBox="0 0 32 32"
											className="fill-current"
										>
											<path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path>
											<path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path>
										</svg>
										<span>{item.humidity}%</span>
									</span>
								</div>
								<div>
									<h4 className="text-2xl">{item.temperature}°</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
		<div>
			<DatePicker
				className="p-2 border-2 border-sky-500 rounded"
				selected={date}
				onChange={(date) => setDate(date)}
				includeDates={allowDateRange}
			/>
		</div>
	</div>
);
