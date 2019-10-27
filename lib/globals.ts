import { Options } from './types';

export const emailProviders: string[] = [
	'gmail.com',
	'hotmail.com',
	'outlook.com',
	'live.com'
];

export const titles: Record<string, string[]> = {
	prefixTitle: ['Mr.', 'Mrs.', 'Ms.'],
	suffixTitle: ['Sr.', 'Jr.', '3rd', 'The 3rd'],
	academic: ['Dr.', 'Prof.']
};

export const locales: Record<string, string> = {
	us: 'en-US'
};

export const defaultOptions: Options = {
	locale: 'us',
	person: {
		age: '20s',
		height: 'short',
		sex: 'man'
	}
};

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

export const fetchInit: RequestInit = {
	method: 'GET',
	cache: 'default'
};
