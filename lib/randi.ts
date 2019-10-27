/*!
 * Random Names Generator
 * Data from https://gist.github.com/ijmacdowell/8325491 Erased original nouns index 2210 and other data
 * (c) 2019 Verdexdesign
 */
import { randn } from './utils';

import { nouns, adjectives } from '../data/forRandi';

/**
 * Generates a name from random adjectives and nouns
 * @param {string} separator A character other than white-space to use as separator
 */
export default function Randi(separator?: string): string {
	separator = separator || ' ';
	let randomAjective = adjectives[randn(adjectives.length, 0)];
	let randomNoun = nouns[randn(nouns.length, 0)];
	randomAjective = randomAjective.trim().replace(/\s/g, separator);
	randomNoun = randomNoun.trim().replace(/\s/g, separator);
	return randomAjective.concat(separator, randomNoun);
}
