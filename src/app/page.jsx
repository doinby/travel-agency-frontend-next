import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';

const { getHomePage } = require('@/data/loaders');
const { notFound } = require('next/navigation');

async function loader() {
	const data = await getHomePage();
	if (!data) notFound();
	// console.log(data);
	return { ...data.data };
}

export default async function HomeRoute() {
	const data = await loader();
	// console.log(data);
	return (
		<>
			<Navbar />
			<HeroSection props={data.sections[0]} />
		</>
	);
}
