import { Options, PersonOpts } from './types';
import {
	sexes,
	heights,
	ages
} from './globals';

// eslint-disable-next-line
export const isSet = (k: any): boolean => k !== undefined;

/**
 * Validates the options object passed to mock
 * @param opts Config options
 * @ignore
 */
export function validateOptions(defaultOptions: Options, opts?: Options): Options | undefined {
	// in case Mockachino.mock(): no options at all
	if (!opts) {
		return defaultOptions;
	}

	// validate keys
	// in case Mockachino.mock({}): empty object as the options
	if (!isSet(opts.locale) && !isSet(opts.person)) {
		opts.person = defaultOptions.person;
		opts.locale = defaultOptions.locale;
		return opts;
	}

	if (isSet(opts.person) && !isSet(opts.locale)) {
		opts.locale = defaultOptions.locale;
		return opts;
	}

	if (isSet(opts.locale) && !isSet(opts.person)) {
		opts.person = defaultOptions.person;
		return opts;
	}

	if (isSet(opts)) {
		return opts;
	}

	return;
}

/**
 * Validates the options object passed to mock a person specifically
 * @param opts Person config options
 * @ignore
 */
export function validatePersonOpts(opts: PersonOpts): PersonOpts | undefined {
	const definedSex = isSet(opts.sex)
		&& sexes.indexOf(opts.sex) !== -1
		&& opts.sex;

	const definedAge = isSet(opts.age)
		&& ages.indexOf(opts.age) !== -1
		&& opts.age;

	const definedHeight = isSet(opts.height)
		&& heights.indexOf(opts.height) !== -1
		&& opts.height;

	if (definedSex && definedAge && definedHeight) {
		return {
			age: definedAge,
			height: definedHeight,
			sex: definedSex
		};
	}

	return;
}
