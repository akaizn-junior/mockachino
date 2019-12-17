const { describe, it } = require('mocha');
const { expect } = require('chai');
const fakeDOM = require('jsdom-global');

const mockFetch = () => ({
	body: { getReader: () => { } }
});

global.fetch = mockFetch;
global.ReadableStream = class { };
global.Response = class { blob() { } };

const hasValidValues = mocked =>
	Object.values(mocked)
	.every(object => object !== undefined && Object.values(object).every(value => value !== undefined));

const mockachino = require('./tmp/lib/mockachino');
const {
	mockKeys,
	loremKeys,
	personKeys,
	usNumberKeys,
	usAddressKeys,
	randomKeys,
	randomImageUrlKeys,
	randomImageBlobKeys
} = require('./keys');

describe('mockachino mock tests', () => {
	it('should test mock with no options', () => {
		expect(mockachino.mock).to.be.a('function');
		expect(mockachino.mock()).has.keys(mockKeys);
		expect(mockachino.mock({})).has.keys(mockKeys);
	});

	it('should test mock with all config options', () => {
		const opts = {
			locale: 'us',
			person: {
				sex: 'man',
				height: 'short',
				age: '40s'
			}
		};

		expect(mockachino.mock(opts)).has.keys(mockKeys);
		expect(mockachino.mock(opts)).has.keys(mockKeys);
	});

	it('should test mock with all config options and valid values', () => {
		const opts = {
			locale: 'us',
			person: {
				sex: 'man',
				height: 'short',
				age: '40s'
			}
		};

		expect(hasValidValues(mockachino.mock(opts))).to.be.true;
	});

	it('should test mock with no config options and valid values', () => {
		expect(hasValidValues(mockachino.mock())).to.be.true;
	});

	it('should test all mocked properties', () => {
		const opts = {
			locale: 'us',
			person: {
				sex: 'man',
				height: 'tall',
				age: '20s'
			}
		};

		const mocked = mockachino.mock(opts);
		expect(mocked.person).has.keys(personKeys);
		expect(mocked.phoneNumber).has.keys(usNumberKeys);
		expect(mocked.address).has.keys(usAddressKeys);
	});

	it('should test mock with no locale in config options', () => {
		const opts = {
			person: {
				sex: 'woman',
				height: 'default', // not a defined height
				age: '30s'
			}
		};

		// should mock default locale
		expect(mockachino.mock(opts)).has.keys(mockKeys);
		// person should be undefined
		expect(mockachino.mock(opts).person).to.be.undefined;
	});

	it('should test mock with correct generated data by config', () => {
		const opts = {
			locale: 'us',
			person: {
				sex: 'woman',
				height: 'tall',
				age: 'young'
			}
		};

		expect(mockachino.mock(opts).person.sex).to.equal('woman');
		expect(mockachino.mock(opts).person.age).to.be.lessThan(18);
		const ft = mockachino.mock(opts).person.height.split('.')[0];
		expect(Number(ft)).to.not.be.lessThan(5);
	});

	it('should test mock with no person in config options', () => {
		const opts = {
			locale: 'us'
		};

		expect(mockachino.mock(opts)).has.keys(mockKeys);
		// if no person config is given, person should fallacl to default
		expect(mockachino.mock(opts).person).to.not.be.undefined;
	});

	it('should test mock with non existing locale', () => {
		const opts = {
			locale: 'unkown'
		};

		expect(mockachino.mock(opts)).to.be.undefined;
	});

	it('should test mock with undefined person config options', () => {
		const opts = {
			locale: 'us',
			person: {
				sex: undefined,
				height: undefined,
				age: undefined
			}
		};

		// all undefined values will fallback to default values
		expect(mockachino.mock(opts)).has.keys(mockKeys);
		// undefined person object
		expect(mockachino.mock(opts).person).to.be.undefined;
	});

	it('should cover all possible ages', () => {
		let opts = {
			locale: 'us',
			person: {
				sex: 'man',
				height: 'short',
				age: '30s'
			}
		};

		expect(mockachino.mock(opts).person.age).to.not.be.lessThan(30);
		opts.person.age = 'youngAdult';
		expect(mockachino.mock(opts).person.age).to.not.be.lessThan(18);
		opts.person.age = 'mid20s';
		expect(mockachino.mock(opts).person.age).to.not.be.lessThan(25);
		opts.person.age = 'mid40s';
		expect(mockachino.mock(opts).person.age).to.not.be.lessThan(35);
		opts.person.age = 'middleAged';
		expect(mockachino.mock(opts).person.age).to.not.be.lessThan(40);
		opts.person.age = 'old';
		expect(mockachino.mock(opts).person.age).to.not.be.lessThan(61);
	});
});

describe('mockachino lorem tests', () => {
	it('should test lorem with no params', () => {
		expect(mockachino.lorem).to.be.a('function');
		expect(mockachino.lorem()).has.keys(loremKeys);
		expect(mockachino.lorem().paragraph).contains('\n');
	});

	it('should test lorem with params', () => {
		expect(mockachino.lorem('-')).has.keys(loremKeys);
		expect(mockachino.lorem('_').paragraph).contains('_');
		expect(mockachino.lorem('*').text(4)).contains('*');
		expect(mockachino.lorem('-').sentence).does.not.contain('-');
	});

	it('should test lorem with params and valid values', () => {
		expect(hasValidValues(mockachino.lorem('-'))).to.be.true;
	});

	it('should test lorem with no params and valid values', () => {
		expect(hasValidValues(mockachino.lorem())).to.be.true;
	});
});

describe('mockachino random tests', () => {
	let destroyFakeDOM;

	it('should initialize a fake DOM', () => {
		destroyFakeDOM = fakeDOM();
	});

	it('should test random params', () => {
		expect(mockachino.random).to.be.a('function');
		expect(mockachino.random()).has.keys(randomKeys);
	});

	it('should test random has valid values', () => {
		expect(hasValidValues(mockachino.random())).to.be.true;
		expect(hasValidValues(mockachino.random(20, 5))).to.be.true;
		expect(hasValidValues(mockachino.random('-'))).to.be.true;
	});

	it('should test random for random numbers', () => {
		const [max, min] = [50, 1];
		const defaultMax = 101;
		expect(mockachino.random(max, min).number).lessThan(max);
		expect(mockachino.random().number).lessThan(defaultMax);
	});

	it('should test random for random title', () => {
		const separator = '-';
		const defaultSeparator = ' ';
		expect(mockachino.random(separator).title).contains(separator);
		expect(mockachino.random().title).contains(defaultSeparator);
	});

	it('should test random for random imageUrl', () => {
		const width = 300;
		const height = 350;
		const opts = {
			ext: 'jpg',
			grayscale: false,
			blur: false
		};

		expect(mockachino.random(width, height, opts).imageUrl).has.keys(randomImageUrlKeys);
		expect(mockachino.random(width, height, opts).imageUrl.info).contains('https://picsum.photos/id/');
		expect(mockachino.random(width, height, opts).imageUrl.data).contains(`/${width}/${height}.${opts.ext}`);
	});

	it('should test random for random imageUrl with grayscale option on', () => {
		const width = 300;
		const height = 350;
		const opts = {
			ext: 'webp',
			grayscale: true
		};

		expect(mockachino.random(width, height, opts).imageUrl.data).contains(`/${width}/${height}.${opts.ext}?grayscale`);
	});

	it('should test random for random imageUrl with blur option on', () => {
		const width = 300;
		const height = 350;
		const opts = {
			ext: 'webp',
			blur: true
		};

		expect(mockachino.random(width, height, opts).imageUrl.data).contains(`/${width}/${height}.${opts.ext}?blur`);
	});

	it('should test random for random imageUrl with blur option set as a number between 1-10', () => {
		const width = 300;
		const height = 350;
		const opts = {
			ext: 'jpeg', // using 'jpeg' should just translate to 'jpg'
			blur: 3
		};

		expect(mockachino.random(width, height, opts).imageUrl.data).contains(`/${width}/${height}.jpg?blur=3`);
	});

	it('should test random for random imageUrl with blur option set as a number outside of the range 1-10', () => {
		const width = 300;
		const height = 350;
		const opts = {
			ext: 'jpeg',
			blur: 30
		};

		// if blur set as a number os outside of the range, the value should be ignored
		expect(mockachino.random(width, height, opts).imageUrl.data).contains(`/${width}/${height}.jpg?blur`);
	});

	it('should test random for random imageUrl with no (ext) config options', () => {
		const width = 300;
		const height = 350;
		const opts = {
			blur: true
		};

		expect(mockachino.random(width, height, opts).imageUrl.info).contains('https://picsum.photos/id/');
		expect(mockachino.random(width, height, opts).imageUrl.data).contains(`/${width}/${height}.${opts.ext}`);
	});

	it('should test random for random imageUrl with both blur and grayscale config options', () => {
		const width = 300;
		const height = 350;
		let opts = {
			ext: 'webp',
			blur: true,
			grayscale: true
		};

		expect(mockachino.random(width, height, opts).imageUrl.info).contains('https://picsum.photos/id/');
		expect(mockachino.random(width, height, opts).imageUrl.data).contains(`/${width}/${height}.${opts.ext}?grayscale&blur`);
		opts.blur = 3;
		expect(mockachino.random(width, height, opts).imageUrl.data).contains(`/${width}/${height}.${opts.ext}?grayscale&blur=3`);
	});

	it('should test random for random imageUrl with both blur (out of 1-10 range) and grayscale config options', () => {
		const width = 300;
		const height = 350;
		let opts = {
			ext: 'webp',
			blur: 30, // out of range
			grayscale: true
		};

		expect(mockachino.random(width, height, opts).imageUrl.data).contains(`/${width}/${height}.${opts.ext}?grayscale&blur`);
	});

	it('should test random for random imageUrl without config option', () => {
		const width = 300;
		const height = 350;

		expect(mockachino.random(width, height).imageUrl.info).contains('https://picsum.photos/id/');
		expect(mockachino.random(width, height).imageUrl.data).contains(`/${width}/${height}.jpg`);
	});

	it('should test random for random imageUrl without height', () => {
		const width = 300;

		expect(mockachino.random(width).imageUrl.info).contains('https://picsum.photos/id/');
		expect(mockachino.random(width).imageUrl.data).contains(`/${width}.jpg`);
	});

	it('should test random for random imageUrl without any params', () => {
		const defaultWidth = 300;
		expect(mockachino.random().imageUrl.info).contains('https://picsum.photos/id/');
		expect(mockachino.random().imageUrl.data).contains(`/${defaultWidth}.jpg`);
	});

	it('should test random for random imageBlob', async function () {
		const width = 300;
		const height = 350;

		const result = await mockachino.random(width, height, { withInfo: false }).imageBlob;
		expect(result).has.keys(randomImageBlobKeys);
	});

	it('should clean up the fake DOM', () => {
		destroyFakeDOM();
	});
});
