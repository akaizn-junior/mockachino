import { randn } from './utils';

import {
	UsAddress,
	UsPhoneNumber,
	PersonOpts,
	Person
} from './types';

import {
	titles,
	emailProviders
} from './globals';

import menNames from '../data/locale/us/menNames.json';
import womenNames from '../data/locale/us/womenNames.json';
import surnames from '../data/locale/us/surnames.json';
import states from '../data/locale/us/states.json';
import majorCities from '../data/locale/us/majorCities.json';

/**
 * Builder a proper person object based on the sex
 * @param sex The person's sex
 * @ignore
 */
function personBySex(sex: string): Record<string, string> {
	const isWoman = sex === 'woman';
	const isMan = sex === 'man';
	const namesList = isMan ? menNames : isWoman ? womenNames : [];
	const titlesBySex = isMan ? titles.menTitles : isWoman ? titles.womenTitles : [];

	// build
	const name: string = namesList[randn(namesList.length)];
	const middlename: string = namesList[randn(namesList.length)];
	const middleInitial: string = middlename.charAt(0);
	const lastname: string = surnames[randn(surnames.length)];
	const eprovider: string = emailProviders[randn(emailProviders.length)];
	const initials = `${name.charAt(0)}.${lastname.charAt(0)}`;
	const email = `${name.toLowerCase()}.${lastname.toLowerCase()}@${eprovider}`;
	const title = titlesBySex[randn(titlesBySex.length)];
	const suffixTitle = titles.suffixTitle[randn(titles.suffixTitle.length)];

	return {
		name,
		middlename,
		middleInitial,
		lastname,
		initials,
		email,
		title,
		suffixTitle
	};
}

/**
 * Generates a number that will represent age based on a seed value
 * @param age The seed used for the age value
 * @ignore
 */
function personAge(age: string): number {
	switch (age) {
	case '20s': return randn(30, 20);
	case '30s': return randn(40, 30);
	case '40s': return randn(50, 40);
	case 'young': return randn(18, 13);
	case 'youngAdult': return randn(23, 18);
	case 'mid20s': return randn(30, 25);
	case 'mid40s': return randn(40, 35);
	case 'middleAged': return randn(61, 40);
	case 'old': return randn(100, 61);
	default: return randn(99, 13);
	}
}

/**
 * Build a US zipcod
 * @ignore
 */
function usZipcode(): string {
	let zipcode = '';
	// A US zip code is a 5 digits number consisting of digits from 0-9
	for (let i = 0; i < 5; i++) zipcode += randn(9);
	return zipcode;
}

// locale specific

/**
 * Generates a height value in imperial units
 * @param h The seed used to build the height
 * @ignore
 */
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
	if (h === 'short' && sFt === shortMinFt) {
		return `${sFt}.${randn(tallMaxIn + 1)}`;
	}

	if (h === 'short' && sFt === shortMaxFt) {
		return `${sFt}.${randn(shortMaxIn + 1)}`;
	}

	if (h === 'tall' && tFt === tallMinFt) {
		return `${tFt}.${randn(tallMaxIn + 1, tallMinIn)}`;
	}

	if (h === 'tall' && tFt === tallMaxFt) {
		return `${tFt}.${randn(tallMaxIn + 1)}`;
	}

	// default
	return `${tFt}.${randn(tallMaxIn + 1)}`;
}

/**
 * Build a US address
 * @ignore
 */
export function usAddress(): UsAddress {
	// select a random state
	let si = randn(states.length);
	let state = states[si];

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
 * @ignore
 */
export function usPhoneNumber(): UsPhoneNumber {
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

/**
 * Build a person obejct filled with data based on the 'us' locale
 * @param opts Config options
 * @ignore
 */
export function usPerson(opts: PersonOpts): Person {
	const {
		name,
		middlename,
		middleInitial,
		lastname,
		initials,
		email,
		title,
		suffixTitle
	} = personBySex(opts.sex);

	return {
		name,
		middlename,
		middleInitial,
		lastname,
		initials,
		email,
		title,
		suffixTitle,
		academicTitle: titles.academic[randn(titles.academic.length)],
		sex: opts.sex,
		age: personAge(opts.age),
		height: usPersonHeight(opts.height),
		nationality: 'US'
	};
}
