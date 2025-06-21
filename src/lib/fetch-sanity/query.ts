export const navbarQuery = `*[_type == "navbar"][0]{logo, links}`;
export const heroQuery = `*[_type == "hero"][0]{heading, subheading, ctaText, ctaUrl, image}`;
export const featuresSectionQuery = `*[_type == "featuresSection"][0]{title, description, features}`;
export const statsHighlightQuery = `*[_type == "statsHighlight"][0]{title, stats}`;
export const testCallQuery = `*[_type == "testCall"][0]{title, description, ctaText, ctaUrl, image}`;
export const heroBannerQuery = `*[_type == "heroBanner"][0]{image, overlayText, ctaText, ctaUrl}`;
