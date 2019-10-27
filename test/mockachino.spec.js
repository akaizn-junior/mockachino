import { describe, it } from 'mocha';
import { expect } from 'chai';

import * as mockachino from './tmp/lib/mockachino';

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
