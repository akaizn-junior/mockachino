// *********************************************************************
// Mockachino - Generate mock data for your apps. Take a sip and relax
// *********************************************************************

import usStatesData from './data/locale/us/us_states.json';
import usMenNames from './data/locale/us/us_names_men.json';
import usWomenNames from './data/locale/us/us_names_women.json';
import usSurnames from './data/locale/us/us_surnames.json';
import usMajorCities from './data/locale/us/us_major_cities.json';
import usIndustries from './data/locale/us/us_job_indutries.json';
import lorem from './data/text/lorem.json';

export default class Mockachino {
    /**
     * Mock all sorts of things
     * @constructor
     */
    mock() {
        return {
            person: this.getPerson(),
            address: this.getAddress(),
            phoneNumber: this.getPhoneNumber('US').number,
            job: this.getJob(),
            text: Mockachino.getLorem().text,
            sentence: Mockachino.getLorem().sentence,
            paragraph: Mockachino.getLorem().paragraph
        };
    }

    // **********************
    // Helpers
    // **********************

    /**
     * Generates random integers between min and max
     * @param {Number} max An exclusive upper bound for the random number generated
     * @param {Number} min An inclusive lower bound for the random number generated. 0 by default.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random | MDN: Math Random}
     */
    static getRandomInt(max, min = 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // **********************
    // Getters
    // **********************

    /**
     * Genrates lorem ipsum data
     */
    static getLorem() {
        //get a sentence from the lorem array
        let sentence = lorem[Mockachino.getRandomInt(lorem.length)];
        let lorems = length => {
            let ret = '';
            //concatenate the strings in lorem length times to form a bigger string
            //add line breaks to seprate each sentence/string in lorem
            //creating paragraphs of length number of sentences.
            for(let i = 0; i <= length; i++) {
                //Rotate the index, so that no matter what the size of the lorem array is
                //data is always retrieved. Avoiding exceeding the size of the array
                ret += `${lorem[i % lorem.length]}.\n`;
            }
            return ret;
        };

        //A paragraph will always have 5 sentences
        let paragraph = lorems(5);
        //text will allows the user to set the amount of sentences they need
        let text = lorems;

        return {
            text,
            sentence,
            paragraph
        };
    }

    /**
     * Mocks US zip codes
     * A US zip code is a 5 digits number consisting of digits from 0-9
     */
    getUsZipcode() {
        let zipcode = '';
        for(let i = 0; i < 5; i++) {
            zipcode += Mockachino.getRandomInt(9);
        }
        return zipcode;
    }

    /**
     * Generate a US phone number
     */
    getUsPhoneNumber() {
        //format of an US phone number
        //According to Wikipedia https://bit.ly/2LvNuVn
        //NPA-NXX-XXXX
        //NPA - Area code
        //NXX-XXXX - 7 digit subscriber number
        //N - code for the local central office
        //N goes from 2 to 9

        //generate the area code
        //generate N by generate a random int from 2 to 9
        //generate the PA part of the area code with random number from 0 to 9
        let areaCode = `${Mockachino.getRandomInt(10, 2)}${Mockachino.getRandomInt(9, 0)}${Mockachino.getRandomInt(9, 0)}`;
        //generate the rest of the 7 digit subscriber number
        let subNumber = `${Mockachino.getRandomInt(10, 2)}`;
        for(let i = 0; i < 6; i++) subNumber += i;

        let number = {
            country: 'US',
            countryCode: '+1',
            cityCode: areaCode,
            subNumber,
            number: `${areaCode}${subNumber}`,
            numberWithAreaCode: `+1${areaCode}${subNumber}`
        };
        return number;
    }

    /**
     * Mocks a phone number based on a country
     * @param {string} country The country in which the phone number should be from
     */
    getPhoneNumber(country) {
        let numberObj = {};
        switch (country) {
        case 'US':
            numberObj = this.getUsPhoneNumber();
            break;
        }
        return numberObj;
    }

    /**
     * Mocks a person
     */
    getPerson() {
        //define initial data
        const names = [usMenNames, usWomenNames];
        const surnames = usSurnames;

        const emailProviders = [
            'gmail.com',
            'hotmail.com',
            'outlook.com',
            'live.com'
        ];

        //All sorts of titles
        const titles = {
            prefixTitle: [
                'Mr.',
                'Mrs.',
                'Ms.'
            ],
            suffixTitle: [
                'Sr.',
                'Jr.',
                '3rd',
                'The 3rd'
            ],
            academic: [
                'Dr.',
                'Prof.'
            ]
        };

        //grab either men or women names
        let nameTypeIndex = Mockachino.getRandomInt(names.length);
        //get an index for surnames
        let surnameIndex = Mockachino.getRandomInt(surnames.length);
        //get an index for an array of names
        let nameArrayIndex = Mockachino.getRandomInt(names[nameTypeIndex].length);
        //get an index for email providers
        let emailProvIndex = Mockachino.getRandomInt(emailProviders.length);

        let person = {
            name: names[nameTypeIndex][nameArrayIndex],
            lastname: surnames[surnameIndex],
            initials: `${names[nameTypeIndex][nameArrayIndex].charAt(0)}${surnames[surnameIndex].charAt(0)}`,
            email: `${names[nameTypeIndex][nameArrayIndex].toLocaleLowerCase()}.${surnames[surnameIndex].toLocaleLowerCase()}@${emailProviders[emailProvIndex]}`,
            title: titles.prefixTitle[Mockachino.getRandomInt(titles.prefixTitle.length)]
        };

        //generate a middlename 50% of the time
        if(nameArrayIndex > Math.floor(names.length / 2)) {
            let midNmIndex = Mockachino.getRandomInt(names.length);
            let middlename = names[nameTypeIndex][midNmIndex];
            let middleInitial = middlename.charAt(0);
            person.middlename = middlename;
            person.middleInitial = `${middleInitial}.`;
        }

        return person;
    }

    /**
     * Mocks an address
     */
    getAddress() {
        //list of countries supported by Mockachino
        const countries = [{
            countryCode: 1,
            abbrev: 'US',
            name: 'United States'
        }];

        //grab a state in the array of states
        let stateIndex = Mockachino.getRandomInt(usStatesData.length);
        //get the actual state
        let stateData = usStatesData[stateIndex];
        //define an index for a country
        let countryIndex = 0;

        //usMajorCities are defines as string of city, state
        //so we need to split the string first and than return the city
        let cityIndex = Mockachino.getRandomInt(usMajorCities.length);
        let city = usMajorCities[cityIndex].split(',')[0];

        return {
            city,
            state: stateData.name,
            stateAbbrev: stateData.abbreviation,
            zipCode: this.getUsZipcode(),
            country: countries[countryIndex].abbrev
        };
    }

    /**
     * Mocks a job position
     */
    getJob() {
        //grab an industry
        //industry is an array of industry fields
        //curently the first field of the array is the industry name
        let industry = usIndustries[Mockachino.getRandomInt(usIndustries.length)];
        //get the industry name
        let industryName = industry[0];
        //get industry fields
        let industryField = industry[Mockachino.getRandomInt(industry.length, 1)];

        const jobHours = [
            'Part-time',
            'Full-time',
            'Fixed',
            'Flexible',
            'Rotating'
        ];

        const jobType = [
            'Remote',
            'Freelance',
            'Self-employed',
            'Consulting'
        ];

        return {
            name: industryField,
            city: this.getAddress().city,
            industry: industryName,
            hours: jobHours[Mockachino.getRandomInt(jobHours.length)],
            type: jobType[Mockachino.getRandomInt(jobType.length)]
        };
    }
}

module.exports = Mockachino;
