import { NextPage } from 'next';
import { WeatherDumbProps } from './types';
import { WeatherItem } from 'components';

export const WeatherDumb: NextPage<WeatherDumbProps> = ({
	cities,
	activeIndex,
	setActive,
	dispatch,
}) => (
	<div className="m-10">
		<ul className="flex border-b">
			{cities.map((city, idx) =>
				activeIndex === idx ? (
					<li
						key={city.id}
						className="-mb-px mr-1"
						onClick={() => dispatch(setActive(idx))}
					>
						<a
							className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
							href="#"
						>
							{city.name.toUpperCase()}
						</a>
					</li>
				) : (
					<li
						key={city.id}
						className="mr-1"
						onClick={() => dispatch(setActive(idx))}
					>
						<a
							className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
							href="#"
						>
							{city.name.toUpperCase()}
						</a>
					</li>
				)
			)}
		</ul>
		<WeatherItem city={cities[activeIndex].name} />
	</div>
);
