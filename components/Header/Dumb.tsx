import { NextPage } from 'next';

export const HeaderDumb: NextPage = () => {
	return (
		<nav className="flex items-center justify-center flex-wrap bg-blue-500 p-6">
			<div className="flex text-white mr-6">
				<span className="font-semibold text-xl tracking-tight">
					Weather App
				</span>
			</div>
		</nav>
	);
};
