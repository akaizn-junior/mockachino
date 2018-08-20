// *********************************************************************
// Mockachino - Generate mock data for your apps. Take a sip and relax
// *********************************************************************

const usStatesData = require('./data/locale/us/us_states.json');
const usMenNames = require('./data/locale/us/us_names_men.json');
const usWomenNames = require('./data/locale/us/us_names_women.json');
const usSurnames = require('./data/locale/us/us_surnames.json');
const usMajorCities = require('./data/locale/us/us_major_cities.json');
const usIndustries = require('./data/locale/us/us_job_indutries.json');
const lorem = require('./data/text/lorem.json');

class Mockachino {
    /**
     * Mock all sorts of things
     * @constructor
     * @param {object} opts Options for the mocker
     */
    constructor(opts = {}) {
        this.person = {};
        //set the sex of the person
        this.person.sex = opts.person ? opts.person.sex : undefined;
        //define locales
        this.locales = ['us'];
        this.locales.includes(opts.locale) ? this.setLocaleVars(opts.locale) : this.setLocaleVars();
    }

    /**
     * Resturns all mocked objects.
     * @returns An object of all the mocked items.
     */
    mock() {
        return {
            person: this.getPerson(),
            address: this.getAddress(),
            phoneNumber: this.getPhoneNumber().number,
            job: this.getJob(),
            text: Mockachino.getLorem().text,
            sentence: Mockachino.getLorem().sentence,
            paragraph: Mockachino.getLorem().paragraph
        };
    }

    /**
     * Set variables related to the current locale
     * @param {string} locale The current locale, default 'us'
     */
    setLocaleVars(locale = 'us') {
        switch (locale) {
        case 'us':
            this.locale = {
                states: usStatesData,
                menNames: usMenNames,
                womenNames: usWomenNames,
                surnames: usSurnames,
                majorCities: usMajorCities,
                industries: usIndustries,
                code: 1,
                abbrev: 'US',
                name: 'United States'
            };
            break;
        }
    }

    // **********************
    // Helpers
    // **********************

    /**
     * Generates random integers between min and max
     * @param {number} max An exclusive upper bound for the random number generated
     * @param {number} min An inclusive lower bound for the random number generated. 0 by default.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random | MDN: Math Random}
     * @returns A random number
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
     * Generates lorem ipsum data
     * @returns A lorem string
     */
    static getLorem() {
        //takes a param that defines the amount of sentences needed
        let lorems = length => {
            let ret = '';
            //create paragraphs of length number of sentences
            for(let i = 0; i < length; i++) {
                //Select random sentences circularly
                ret += `${lorem[i % lorem.length]}.\n`;
            }
            return ret;
        };

        return {
            sentence: lorem[Mockachino.getRandomInt(lorem.length)],
            paragraph: lorems(5),
            text: lorems
        };
    }

    /**
     * Mocks zip codes from anywhere depending on the locale
     * @returns A string representing a zipcode
     */
    getZipcode() {
        let zipcode = '';
        if(this.locale) {
            switch (this.locale.abbrev) {
            case 'US':
                //A US zip code is a 5 digits number consisting of digits from 0-9
                for(let i = 0; i < 5; i++) zipcode += Mockachino.getRandomInt(9);
                break;
            }
        }
        return zipcode;
    }

    /**
     * Generates a US phone number
     * @see {@link https://bit.ly/2LvNuVn | US phone number format}
     * @returns A ten digit string representing a phone number
     */
    getUsPhoneNumber() {
        //NPA-NXX-XXXX
        //NPA - Area code. PA goes from 0 - 9
        //NXX-XXXX - 7 digit subscriber number
        //N - code for the local central office, goes from 2 to 9

        let areaCode = `${Mockachino.getRandomInt(10, 2)}${Mockachino.getRandomInt(9)}${Mockachino.getRandomInt(9)}`;
        //generate the rest of the 7 digit subscriber number
        let subNumber = `${Mockachino.getRandomInt(10, 2)}`;
        for(let i = 0; i < 6; i++) subNumber += i;

        let number = {
            country: 'us',
            countryCode: '+1',
            cityCode: areaCode,
            subNumber,
            number: `${areaCode}${subNumber}`,
            numberWithAreaCode: `+1${areaCode}${subNumber}`
        };
        return number;
    }

    /**
     * Mocks a phone number from the locale
     * @returns A string representing a phone number
     */
    getPhoneNumber() {
        let number = {};
        if(this.locale) {
            switch (this.locale.abbrev) {
            case 'US':
                number = this.getUsPhoneNumber();
                break;
            }
        }
        return number;
    }

    /**
     * Mocks a person
     * @returns An object representing the person
     */
    getPerson() {
        //randI for random index - much descriptive name, shorter lines
        const randI = Mockachino.getRandomInt;
        let names = [];
        //the index of a random name in the names array
        let nameIndex = 0;
        let middleNameIndex = 0;
        let preTitleIndex;
        let suffixTitleIndex;

        const surnames = this.locale.surnames;
        let surnameIndex = randI(surnames.length);

        const emailProviders = [
            'gmail.com',
            'hotmail.com',
            'outlook.com',
            'live.com'
        ];

        //set all sorts of titles
        const titles = {
            prefixTitle: ['Mr.', 'Mrs.', 'Ms.'],
            suffixTitle: ['Sr.', 'Jr.', '3rd', 'The 3rd'],
            academic: ['Dr.', 'Prof.']
        };

        if(this.person.sex === undefined || this.person.sex !== 'man' && this.person.sex !== 'woman') {
            //create a composite names array
            let allNames = [this.locale.menNames, this.locale.womenNames];
            //grab either men or women names 0 or 1 respectively
            let nameListIndex = randI(allNames.length);
            //the names array randomly selected
            names = allNames[nameListIndex];
            nameIndex = randI(names.length);
            middleNameIndex = randI(names.length);
            //define the person titles
            if(nameListIndex === 0) {
                preTitleIndex = 0;
                suffixTitleIndex = randI(titles.suffixTitle.length);
            } else {
                preTitleIndex = randI(titles.prefixTitle.length, 1);
            }
        } else if(this.person.sex && this.person.sex === 'man') {
            nameIndex = randI(this.locale.menNames.length);
            middleNameIndex = randI(this.locale.menNames.length);
            names = this.locale.menNames;
            preTitleIndex = 0;
            suffixTitleIndex = randI(titles.suffixTitle.length);
        } else if(this.person.sex && this.person.sex === 'woman') {
            nameIndex = randI(this.locale.womenNames.length);
            middleNameIndex = randI(this.locale.womenNames.length);
            names = this.locale.womenNames;
            preTitleIndex = randI(titles.prefixTitle.length, 1);
        }

        let person = {
            name: names[nameIndex],
            middlename: names[middleNameIndex],
            middleInitial: `${names[middleNameIndex].charAt(0)}.`,
            lastname: surnames[surnameIndex],
            initials: `${names[nameIndex].charAt(0)}.${surnames[surnameIndex].charAt(0)}`,
            email: `${names[nameIndex].toLowerCase()}.${surnames[surnameIndex].toLowerCase()}@${emailProviders[randI(emailProviders.length)]}`,
            academicTitle: titles.academic[randI(titles.academic.length)]
        };

        //if prefix and suffix titles are set add them to the person's object
        if(preTitleIndex !== undefined) person.title = titles.prefixTitle[preTitleIndex];
        if(suffixTitleIndex !== undefined) person.suffixTitle = titles.suffixTitle[suffixTitleIndex];

        return person;
    }

    /**
     * Mocks an address
     * @returns An object representing a state
     */
    getAddress() {
        //select a state randomly
        let stateIndex = Mockachino.getRandomInt(this.locale.states.length);
        let state = this.locale.states[stateIndex];

        //usMajorCities are defines as 'city, state'
        //so we need to split the string first and than return the city
        let cityIndex = Mockachino.getRandomInt(this.locale.majorCities.length);
        let city = this.locale.majorCities[cityIndex].split(',')[0];

        return {
            city,
            state: state.name,
            stateAbbrev: state.abbreviation,
            zipCode: this.getZipcode(),
            countryAbbrev: this.locale.abbrev,
            country: this.locale.name
        };
    }

    /**
     * Mocks a job position
     * @returns An object representing a job
     */
    getJob() {
        //grab an industry
        //industry is an array of industry fields
        //curently the first field of the array is the industry name
        let industry = this.locale.industries[Mockachino.getRandomInt(this.locale.industries.length)];
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
            city: this.locale.majorCities[Mockachino.getRandomInt(this.locale.majorCities.length)].split(',')[0],
            industry: industryName,
            hours: jobHours[Mockachino.getRandomInt(jobHours.length)],
            type: jobType[Mockachino.getRandomInt(jobType.length)]
        };
    }
}

//export as a commonJS module
module.exports = Mockachino;
