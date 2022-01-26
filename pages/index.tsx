import type { NextPage } from 'next';
import { Header, Weather } from 'components';

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Weather />
		</>
	);
};

export default Home;
