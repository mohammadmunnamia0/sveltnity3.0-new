import {
	featuresSectionQuery,
	heroBannerQuery,
	heroQuery,
	navbarQuery,
	statsHighlightQuery,
	testCallQuery
} from '$lib/fetch-sanity/query';
import { sanity } from '$lib/fetch-sanity/sanity-client';

export async function load() {
	const [navbar, hero, featuresSection, statsHighlight, testCall, heroBanner] = await Promise.all([
		sanity.fetch(navbarQuery),
		sanity.fetch(heroQuery),
		sanity.fetch(featuresSectionQuery),
		sanity.fetch(statsHighlightQuery),
		sanity.fetch(testCallQuery),
		sanity.fetch(heroBannerQuery)
	]);

	return {
		navbar,
		hero,
		featuresSection,
		statsHighlight,
		testCall,
		heroBanner
	};
}
