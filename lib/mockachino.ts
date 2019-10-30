/*!
 * Mockachino
 * Generate mock data for your apps. Take a sip and relax
 * (c) 2018 Verdexdesign
*/

import { randn } from './utils';
import randi from '@verdebydesign/randi';

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

import { validateOptions, validatePersonOpts } from './validators';
import {
	usPhoneNumber,
	usAddress,
	usPerson
} from './helpers';

import {
	locales,
	defaultOptions,
	PicsumDefault,
	fetchInit
} from './globals';

import forLorem from '../data/forLorem.json';

// images

/**
 * Fetches an image url from picsum with image metadata
 * @param w The with of the image to fetch
 * @param h The height of the image to fetch
 * @param o Options to build the image to fetch
 * @ignore
 */
function buildPicsumUrl(w?: number, h?: number, o?: PicsumOptions): PicsumUrl {
	const id = randn(PicsumDefault.ni); // The id of the image to fetch from picsum
	const opts = o || PicsumDefault.o;

	let url = `https://picsum.photos/id/${id}/${w}`;
	h && (url += `/${h}`);

	if (opts) {
		// handle extension
		opts.ext && opts.ext === 'jpeg' ? url += '.jpg' : url += `.${opts.ext}`;

		// handle grayscale
		opts.grayscale && (url += '?grayscale');

		// handle blur
		switch (true) {
		case typeof opts.blur === 'number' && opts.blur >= 1 && opts.blur <= 10:
			url += opts.grayscale ? `&blur=${opts.blur}` : `?blur=${opts.blur}`;
			break;
		case typeof opts.blur === 'boolean' && opts.blur === true:
			url += opts.grayscale ? '&blur' : '?blur';
			break;
		case opts.blur && opts.blur < 1 || opts.blur && opts.blur > 10:
			url += opts.grayscale ? '&blur' : '?blur';
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
 * @param w The with of the image to fetch
 * @param h The height of the image to fetch
 * @param o Options to build the image to fetch
 * @ignore
 */
async function fetchPicsum(w?: number, h?: number, o?: PicsumOptions): Promise<PicsumBlob> {
	const opts = { ...o, ext: o && o.ext || 'jpg' };
	const urls = buildPicsumUrl(w, h, opts);
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

// locale builders

/**
 * Builds a phone number based on the locale
 * @param locale The locale the data is built for
 * @ignore
 */
function buildPhoneNumber(locale: string): UsPhoneNumber {
	switch (locale) {
	case 'en-US': return usPhoneNumber();
	default: return usPhoneNumber();
	}
}

/**
 * Build an address based on the locale
 * @param locale The locale the data is built for
 * @ignore
 */
function buildAddress(locale: string): UsAddress {
	switch (locale) {
	case 'en-US': return usAddress();
	default: return usAddress();
	}
}

/**
 * Builds a person object based on the locale
 * @param locale The locale the data is built for
 * @param opts Config options
 * @ignore
 */
function buildPerson(locale: string, opts: Options): Person | undefined {
	if (validatePersonOpts(opts.person)) {
		switch (locale) {
		case 'en-US': return usPerson(opts.person);
		}
	}

	return;
}

// interface

/**
 * Generates random data representing a person, phone number, address and more.
 * @param options Config options
 * @example
 * let mocked = Mockachino.mock({
 *	    locale: 'us',
 *	    person: {
 *			sex: 'man',
 *			height: 'tall',
 *			age: '20s'
 *		}
 *	});
 *
 * // ex: Object { person: {...}, phoneNumber: {...}, address: {...}, ... }
 */
export function mock(options?: Options): Mocked | undefined {
	const definedOpts = validateOptions(defaultOptions, options);
	if (definedOpts && locales[definedOpts.locale]) {
		const definedLocale = locales[definedOpts.locale];

		return {
			person: buildPerson(definedLocale, definedOpts),
			phoneNumber: buildPhoneNumber(definedLocale),
			address: buildAddress(definedLocale)
		};
	}

	return;
}

/**
 * Generates a random Picsum image url or blob
 * @param w The width of the image
 * @param h The height of the image
 * @param o Config options to build the
 * @example
 * const randomImage = Mockachino.random(300, 350, { grayscale: true, ext: 'webp'}).imageUrl;
 *
 * // ex: Object { data: "https://picsum.photos/id/575/300/350.webp?grayscale", info: "https://picsum.photos/id/575/info" }
 */
export function random(w?: number, h?: number, o?: PicsumOptions): Random;
/**
 * Generates a random number based on a given range or just a max value
 * @param max The exclusive maximum value
 * @param min The incluse minimum value
 * @example
 * const randomNumber = Mockachino.random(200, 10);
 *
 * // ex: 87
 */
export function random(max?: number, min?: number): Random;
/**
 * Generates a random placeholder title
 * @param separator String separator other than space
 * @example
 * const randomTitle = Mockachino.random('-');
 *
 * // ex: a-random-title
 */
export function random(separator?: string): Random;

// eslint-disable-next-line
export function random(x?: any, y?: any, z?: any): Random {
	return {
		number: randn(x || 101, y || 0),
		title: randi(typeof x === 'string' && x || ' '),
		imageUrl: buildPicsumUrl(x || PicsumDefault.w, y, z),
		imageBlob: fetchPicsum(x || PicsumDefault.w, y, z)
	};
}

/**
 * Generates lorem ipsum data
 * @param sep Line separator other than the new-line '\n' char
 * @example
 * const loremData = Mockachino.lorem();
 *
 * // ex: Object { sentence: '...', paragraph: '...', text: '...' }
 */
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
