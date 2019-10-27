/*!
 * Mockachino
 * Generate mock data for your apps. Take a sip and relax
 * (c) 2018 Verdexdesign
*/

import { randn } from './utils';
import Randi from './randi';

import {
	Options,
	Person,
	Mocked,
	Random,
	Lorem,
	PicsumOptions,
	PicsumUrl,
	PicsumBlob,
	UsAddress,
	UsPhoneNumber
} from './types';

import {
	titles,
	emailProviders,
	locales,
	defaultOptions,
	PicsumDefault,
	fetchInit
} from './globals';

import menNames from '../data/locale/us/menNames.json';
import states from '../data/locale/us/states.json';
import majorCities from '../data/locale/us/majorCities.json';
import forLorem from '../data/forLorem.json';

// images

function buildPicsumUrl(id: number, w?: number, h?: number, o?: PicsumOptions): PicsumUrl {
	let url = `https://picsum.photos/id/${id}/${w}`;
	h && `${url}/${h}`;

	if (o) {
		// handle extension
		o.ext && o.ext === 'jpeg' ? url += '.jpg' : url += `.${o.ext}`;

		// handle grayscale
		o.grayscale && (url += '?grayscale');

		// handle blur
		switch (true) {
		case typeof o.blur === 'number' && o.blur >= 1 && o.blur <= 10:
			url += o.grayscale ? `&blur=${o.blur}` : `?blur=${o.blur}`;
			break;
		case typeof o.blur === 'boolean' && o.blur === true:
			url += o.grayscale ? '&blur' : '?blur';
			break;
		case o.blur && o.blur < 1 || o.blur && o.blur > 10:
			url += o.grayscale ? '&blur' : '?blur';
			break;
		}
	}

	return { data: url, info: `https://picsum.photos/id/${id}/info` };
}

/**
 * Fetches an image blob from picsum with image metadata
 * @see [Picsum](https://picsum.photos/)
 * @see [Using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
 * @see [Using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
 * @see [Blob Reader](https://developer.mozilla.org/en-US/docs/Web/API/Body/body)
 * @param {number} id The id of the image to fetch from picsum
 * @param {number} w The with of the image to fetch
 * @param {number} h The height of the image to fetch
 * @param {PicSumOptions} o Options to build the image to fetch
 */
async function fetchPicsum(id: number, w?: number, h?: number, o?: PicsumOptions): Promise<PicsumBlob> {
	const opts = { ...o, ext: o && o.ext || 'jpg' };
	const urls = buildPicsumUrl(id, w, h, opts);
	let data = await fetch(urls.data, fetchInit);

	// read the body
	if (data.body) {
		const reader = data.body.getReader();

		const stream = await new ReadableStream({
			// eslint-disable-next-line
			start(controller: any): Promise<void> {
				const pump = (): Promise<void> => reader.read()
					.then(({ done, value }) => {
						// when no more data needs to be consumed, close the stream
						if (done) {
							controller.close();
							return;
						}

						// enqueue the next data chunk into our target stream
						controller.enqueue(value);
						return pump();
					});

				return pump();
			}
		});

		const res = new Response(stream);

		// to return
		let ret = { blob: await res.blob(), info: null };
		// if user wants metadata info
		if (o && o.withInfo) {
			let info = await fetch(urls.info, fetchInit);
			ret.info = await info.json();
		}

		return ret;
	}

	return { blob: null, info: null };
}

// locale specific

function usZipcode(): string {
	let zipcode = '';
	// A US zip code is a 5 digits number consisting of digits from 0-9
	for (let i = 0; i < 5; i++) zipcode += randn(9);
	return zipcode;
}

function usAddress(): UsAddress {
	// select a random state
	let si = randn(states.length);
	let state = states[si + 1];

	//usMajorCities are defines as 'city, state'
	//so we need to split the string first and than return the city
	let cityIndex = randn(majorCities.length);
	let city = majorCities[cityIndex].split(',')[0];

	return {
		city,
		state: state.name,
		stateAbbrev: state.abbreviation,
		zipCode: usZipcode(),
		countryAbbrev: 'U.S',
		country: 'United States of America'
	};
}

/**
 * Generates a US phone number
 * @see {@link https://bit.ly/2LvNuVn | US phone number format}
 * @returns A ten digit string representing a US phone number
 */
function usPhoneNumber(): UsPhoneNumber {
	//NPA-NXX-XXXX
	//NPA - Area code. PA goes from 0 - 9
	//NXX-XXXX - 7 digit subscriber number
	//N - code for the local central office, goes from 2 to 9

	let areaCode = `${randn(10, 2)}${randn(9)}${randn(9)}`;

	//generate the rest of the 7 digit subscriber number
	let subNumber = `${randn(10, 2)}`;
	for (let i = 0; i < 6; i++) subNumber += i;

	let number = {
		subNumber,
		country: 'us',
		countryCode: '+1',
		cityCode: areaCode,
		number: `${areaCode}${subNumber}`,
		withAreaCode: `+1${areaCode}${subNumber}`
	};

	return number;
}

function usPersonHeight(h: string): string {
	// short: 4 - 5 ft
	const [shortMinFt, shortMaxFt] = [4, 5];
	// short: 0 - 8 inches
	const [, shortMaxIn] = [0, 8];
	// tall: 5 - 6 ft
	const [tallMinFt, tallMaxFt] = [5, 6];
	// tall: 9 - 12 inches
	const [tallMinIn, tallMaxIn] = [9, 11];
	// get random number for height in feets
	const sFt: number = randn(shortMaxFt + 1, shortMinFt);
	const tFt: number = randn(tallMaxFt + 1, tallMinFt);
	// build
	switch (true) {
	case h === 'short':
	case sFt === shortMinFt:
		return `${sFt}.${randn(tallMaxIn + 1)}`;
	case h === 'short':
	case sFt === shortMaxFt:
		return `${sFt}.${randn(shortMaxIn + 1)}`;
	case h === 'tall':
	case tFt === shortMaxFt:
		return `${tFt}.${randn(tallMaxIn + 1, tallMinIn)}`;
	case h === 'tall':
	case tFt === tallMaxFt:
		return `${tFt}.${randn(tallMaxIn + 1)}`;
	default: return `${tFt}.${randn(tallMaxIn + 1, tallMinIn)}`;
	}
}

function personAge(age: string): number {
	switch (age) {
	case '20s': return randn(30, 20);
	case '30s': return randn(40, 30);
	case '40s': return randn(50, 40);
	case 'young': return randn(51, 13);
	case 'old': return randn(100, 51);
	default: return randn(99, 13);
	}
}

function usPerson(opts: Options): Person {
	// get random indexes
	const ni: number = randn(menNames.length);
	const mi: number = randn(menNames.length);
	const si: number = randn(menNames.length);
	const ti: number = randn(titles.prefixTitle.length);
	const sfi: number = randn(titles.suffixTitle.length);
	// build
	const name: string = menNames[ni];
	const middlename: string = menNames[mi];
	const middleInitial: string = middlename.charAt(0);
	const lastname: string = menNames[si];
	const eprovider: string = emailProviders[randn(emailProviders.length)];
	const initials = `${name.charAt(0)}.${lastname.charAt(0)}`;
	const email = `${name.toLowerCase()}.${lastname.toLowerCase()}@${eprovider}`;

	return {
		name,
		middlename,
		middleInitial,
		lastname,
		initials,
		email,
		academicTitle: titles.academic[randn(titles.academic.length)],
		sex: opts.person.sex,
		age: personAge(opts.person.age),
		height: usPersonHeight(opts.person.height),
		nationality: opts.locale,
		title: titles.prefixTitle[ti],
		suffixTitle: titles.suffixTitle[sfi]
	};
}

// locale builders

function buildPhoneNumber(opts: Options): UsPhoneNumber {
	switch (opts.locale) {
	case 'en-US': return usPhoneNumber();
	default: return usPhoneNumber();
	}
}

function buildAddress(opts: Options): UsAddress {
	switch (opts.locale) {
	case 'en-US': return usAddress();
	default: return usAddress();
	}
}

function buildPerson(opts: Options): Person {
	switch (opts.locale) {
	case 'en-US': return usPerson(opts);
	default: return usPerson(defaultOptions);
	}
}

// interface

export function mock(options?: Options): Mocked | void {
	const definedOptions = options || defaultOptions;
	const { locale } = definedOptions;
	if (locales[locale]) {
		// pass
		return {
			person: buildPerson(definedOptions),
			phoneNumber: buildPhoneNumber(definedOptions),
			address: buildAddress(definedOptions)
		};
	}

	return;
}

export function random(w?: number, h?: number, o?: PicsumOptions): Random;
export function random(max?: number, min?: number): Random;
export function random(separator?: string): Random;
// eslint-disable-next-line
export function random(x?: any, y?: any, z?: any): Random {
	return {
		number: randn(x || 101, y || 0),
		title: Randi(x || ' '),
		imageUrl: buildPicsumUrl(randn(PicsumDefault.ni), x || PicsumDefault.w, y, z || PicsumDefault.o),
		imageBlob: fetchPicsum(randn(PicsumDefault.ni), x || PicsumDefault.w, y, z || PicsumDefault.o)
	};
}

export function lorem(sep?: string): Lorem {
	sep = sep || '\n';
	// takes a param that defines the amount of sentences needed
	const build = (length: number): string => {
		let ret = '';
		// create paragraphs of 'number of sentences' length
		for (let i = 0; i < length; i++) {
			// select random sentences by round robyn
			ret += `${forLorem[i % forLorem.length]}.${sep}`;
		}
		return ret;
	};

	return {
		sentence: forLorem[randn(forLorem.length)],
		paragraph: build(5),
		text: build
	};
}
