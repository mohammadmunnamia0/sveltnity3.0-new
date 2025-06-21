import { createClient } from '@sanity/client';

export const sanity = createClient({
	projectId: 'lbmi3d0w', 
	dataset: 'production', 
	apiVersion: '2023-01-01', 
	useCdn: true
});
