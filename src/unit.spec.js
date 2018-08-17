'use strict';

/* globals describe, it */

//chai for assertions
import { expect } from 'chai';

//grab Mockachino
import Mockachino from './Mockachino';
//instatiate - mocks at instatiation
let mocka = new Mockachino();

describe('Mockachino', () => {
    it('should be a js class', () => {
        expect(Mockachino).to.be.a('function').that.respondsTo('constructor');
    });

    it('should have a mock method', () => {
        expect(Mockachino).to.respondTo('mock');
    });
});

describe('Method: mock', () => {
    it('should return an object', () => {
        expect(mocka.mock()).to.be.an('object');
    });

    let mockProperties = [{
        label: 'a person',
        property: 'person'
    }, {
        label: 'an address',
        property: 'address'
    }, {
        label: 'a phone number',
        property: 'phoneNumber'
    }, {
        label: 'a job',
        property: 'job'
    }, {
        label: 'a lorem text',
        property: 'text'
    }, {
        label: 'a lorem sentence',
        property: 'sentence'
    }, {
        label: 'a lorem paragraph',
        property: 'paragraph'
    }];

    for(let prop of mockProperties) {
        it(`should mock ${prop.label}`, () => {
            expect((new Mockachino()).mock()).to.haveOwnProperty(prop.property);
        });
    }
});

describe('Method: getZipcode', () => {
    it('should return a string representing a 5 digit number for default locale, US', () => {
        expect(mocka.getZipcode()).to.have.length(5);
    });
});

describe('Method: getPhoneNumber', () => {
    it('should return a string representing a 10 digit number for default locale, US', () => {
        expect(mocka.getPhoneNumber().number).to.have.length(10);
    });
});
