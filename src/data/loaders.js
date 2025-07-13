import fetchAPI from '@/ultils/fetch-app';
import { getStrapiURL } from '@/ultils/get-strapi-url';

const homePageQuery =
	'/api/home-page?populate[sections][on][sections.hero-section][populate][image][fields][0]=url&populate[sections][on][sections.hero-section][populate][image][fields][1]=alternativeText&populate[sections][on][sections.hero-section][populate][cta]=true&populate[sections][on][sections.info-section][populate][image][fields][0]=url&populate[sections][on][sections.info-section][populate][image][fields][1]=alternativeText&populate[sections][on][sections.info-section][populate][cta]=true';

export async function getHomePage() {
	const URL_BASE = getStrapiURL();
	// const path = '/api/home-page';
	const path = '/api/home-page';
	const url = new URL(path, URL_BASE);

	return await fetchAPI(url.href, { method: 'GET' });
}
