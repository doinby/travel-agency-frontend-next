import qs from 'qs';
import fetchAPI from '@/ultils/fetch-app';
import { getStrapiURL } from '@/ultils/get-strapi-url';

const homePageQuery = qs.stringify({
	populate: {
		sections: {
			on: {
				'sections.hero-section': {
					populate: {
						image: {
							fields: ['url', 'alternativeText'],
						},
						cta: true,
					},
				},
				'sections.info-section': {
					populate: {
						image: {
							fields: ['url', 'alternativeText'],
						},
						cta: true,
					},
				},
			},
		},
	},
});

export async function getHomePage() {
	const URL_BASE = getStrapiURL();
	const path = '/api/home-page';
	const url = new URL(path, URL_BASE);

	url.search = homePageQuery;

	return await fetchAPI(url.href, { method: 'GET' });
}
