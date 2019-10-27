/**
 * Generates random integers between min and max
 * @param {number} max An exclusive upper bound for the random number generated
 * @param {number} min An inclusive lower bound for the random number generated. 0 by default.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random | MDN: Math Random}
 * @returns A random number
 */
export function randn(max?: number, min?: number): number {
	min = Math.ceil(Math.abs(min || 0));
	max = Math.floor(Math.abs(max || 1));
	return Math.floor(Math.random() * (max - min)) + min;
}
