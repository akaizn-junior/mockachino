import { describe, it } from 'mocha';
import { expect } from 'chai';

import * as mockachino from '../lib/mockachino';

describe('mockachino tests', () => {
	it('should mock a person', () => {
		expect(mockachino.mock).to.be.a('function');
	});
});
