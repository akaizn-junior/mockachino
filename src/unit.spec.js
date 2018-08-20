'use strict';

/* globals describe, it */

//chai for assertions
import { expect } from 'chai';

//grab Mockachino
import Mockachino from './Mockachino';
//instatiate
let mocka = new Mockachino();

describe('Mockachino', () => {
    it('should be a js class', () => {
        expect(Mockachino).to.be.a('function').that.respondsTo('constructor');
    });

    it('should have a mock method', () => {
        expect(Mockachino).to.respondTo('mock');
    });
});

describe('Instatiate with options', () => {
    it('should instatiate with a defined locale', () => {
        expect(new Mockachino({locale: 'us'}))
            .to.be.an('object').that.ownProperty('locale')
            .that.ownProperty('abbrev').equals('US');
    });

    it('should instatiate with an undefined locale', () => {
        expect(new Mockachino({locale: 'und'}))
            .to.be.an('object').that.ownProperty('locale')
            .that.ownProperty('abbrev').equals('US');
    });

    it('should instatiate with a person defined as a man', () => {
        expect(new Mockachino({person: { sex: 'man' }}))
            .to.be.an('object').that.ownProperty('person');

        expect(new Mockachino({person: { sex: 'man' }}).mock().person)
            .to.ownProperty('title').equals('Mr.');

        expect(new Mockachino({person: { sex: 'man' }}).mock().person)
            .to.have.ownProperty('suffixTitle');
    });

    it('should instatiate with a person defined as a woman', () => {
        expect(new Mockachino({person: { sex: 'woman' }}))
            .to.be.an('object').that.ownProperty('person');

        expect(new Mockachino({person: { sex: 'woman' }}).mock().person)
            .to.not.ownProperty('suffixTitle');
    });

    it('should instatiate with an undefined person', () => {
        expect(new Mockachino({person: { sex: 'und' }}))
            .to.be.an('object').that.ownProperty('person');

        expect(new Mockachino({person: { sex: 'und' }}).mock().person)
            .to.ownProperty('name');
    });

    it('should instatiate with all options properly set', () => {
        expect(new Mockachino({
            locale: 'us',
            person: { sex: 'woman' }
        }).mock().person)
            .to.be.an('object').that.ownProperty('name');
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
    it('should return a string representing a 5 digits zipcode', () => {
        expect(mocka.getZipcode()).to.have.length(5);
    });
});

describe('Method: getPhoneNumber', () => {
    it('should return a string representing a 10 digits phone number', () => {
        expect(mocka.getPhoneNumber().number).to.have.length(10);
    });
});
