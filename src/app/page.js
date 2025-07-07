async function loader() {
	const URL_BASE = 'http://localhost:1337';
	const path = '/api/home-page';
	const url = new URL(path, URL_BASE);

	const response = await fetch(url.href);
	const data = await response.json();

	return { ...data.data };
}

export default async function HomeRoute() {
	const data = await loader();
	console.log('data:', data);
	return (
		<>
			<h1 className='text-2xl text-green-500'>{data.title}</h1>
			<p>{data.desc}</p>
		</>
	);
}
