const { describe, it } = require('mocha');
const { expect } = require('chai');

const mockachino = require('./tmp/lib/mockachino');

describe('mockachino tests', () => {
	it('should test mock', () => {
		expect(mockachino.mock).to.be.a('function');
		expect(mockachino.mock()).has.keys([
			"person",
			"phoneNumber",
			"address"
		]);
	});
});
