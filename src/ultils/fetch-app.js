export default async function fetchAPI(url, options) {
	const { method, authToken, body, next } = options;
	const headers = {
		method,
		headers: {
			'Content-Type': 'application/json',
			...(authToken && { Authorization: `Bearer ${authToken}` }),
		},
		...(body && { body: JSON.stringify(body) }),
		...(next && { next }),
	};
	console.log(headers);

	try {
		const res = await fetch(url, headers);
		const contentType = res.headers.get('content-type');
		if (contentType && contentType.includes('application/json') && res.ok) {
			return await res.json();
		} else {
			return { status: res.status, statusText: res.statusText };
		}
	} catch (err) {
		console.error(err);
		throw err;
	}
}
