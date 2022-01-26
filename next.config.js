/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'imgix',
		path: '',
		domains: ['openweathermap.org'],
		formats: ['image/avif', 'image/webp'],
	},
	env: {
		API_KEY: '',
	},
};

module.exports = nextConfig;
