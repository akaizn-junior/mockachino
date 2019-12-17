import { Options } from './types';

export const emailProviders: string[] = [
	'gmail.com',
	'hotmail.com',
	'outlook.com',
	'live.com'
];

export const titles = {
	menTitles: ['Mr.'],
	womenTitles: ['Miss', 'Mrs.', 'Ms.'],
	academic: ['Dr.', 'Prof.'],
	suffixTitle: ['Sr.', 'Jr.', '3rd', 'The 3rd']
};

export const locales: Record<string, string> = {
	us: 'en-US'
};

/**
 * Fallback configurations for 'mock'
 */
export const defaultOptions: Options = {
	locale: 'us',
	person: {
		age: '20s',
		height: 'short',
		sex: 'man'
	}
};

/**
 * Default options for Picsum image url and blob creation
 */
export const PicsumDefault = {
	ni: 1000, // number of images on Picsum
	w: 300,
	o: {
		ext: 'jpg',
		grayscale: false,
		blur: false,
		withInfo: true
	}
};

/**
 * fetch Web API request configurations
 */
export const fetchInit: RequestInit = {
	method: 'GET',
	cache: 'default'
};

export const sexes = ['man', 'woman'];
export const ages = [
	'20s', '30s', '40s', 'young', 'old', 'youngAdult',
	'mid20s', 'mid40s', 'middleAged'
];
export const heights = ['tall', 'short'];
