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
			<h1>{data.title}</h1>
			<p>{data.desc}</p>
		</>
	);
}
