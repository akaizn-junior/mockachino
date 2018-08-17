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
        //set the person object
        //so that new properties can later be set or left undefined
        this.person = {};
        //grab options
        //set the sex of the person
        this.person.sex = opts.person ? opts.person.sex : undefined;
        //set the locale - default us
        this.defineLocaleVars(opts.locale);
    }

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

    defineLocaleVars(locale = 'us') {
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
     * Mocks zip codes from anywhere depending on the locale
     */
    getZipcode() {
        let zipcode = '';
        if(this.locale !== undefined) {
            switch (this.locale.abbrev) {
            case 'US':
                //A US zip code is a 5 digits number consisting of digits from 0-9
                for(let i = 0; i < 5; i++) {
                    zipcode += Mockachino.getRandomInt(9);
                }
                break;
            }
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
        //N - code for the local central office, goes from 2 to 9

        //generate the area code
        //generate N by generate a random int from 2 to 9
        //generate the PA part of the area code with random number from 0 to 9
        let areaCode = `${Mockachino.getRandomInt(10, 2)}${Mockachino.getRandomInt(9, 0)}${Mockachino.getRandomInt(9, 0)}`;
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
     */
    getPhoneNumber() {
        let number = {};
        if(this.locale !== undefined) {
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
     */
    getPerson() {
        //the names array
        let names = [];
        //the index of a random name in the names array
        let nameIndex = 0;
        let middleNameIndex = 0;
        //the person titles
        let preTitleIndex;
        let suffixTitleIndex;

        //grab common surnames
        const surnames = this.locale.surnames;

        //set common email providers
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

        //if the person sex is defined
        if(this.person.sex !== undefined) {
            switch (this.person.sex) {
            case 'man':
                nameIndex = Mockachino.getRandomInt(this.locale.menNames.length);
                middleNameIndex = Mockachino.getRandomInt(this.locale.menNames.length);
                names = this.locale.menNames;
                preTitleIndex = 0;
                suffixTitleIndex = Mockachino.getRandomInt(titles.suffixTitle.length);
                break;
            case 'woman':
                nameIndex = Mockachino.getRandomInt(this.locale.womenNames.length);
                middleNameIndex = Mockachino.getRandomInt(this.locale.womenNames.length);
                names = this.locale.womenNames;
                preTitleIndex = Mockachino.getRandomInt(titles.prefixTitle.length, 1);
                break;
            }
        } else {
            //create a composite names array
            let allNames = [this.locale.menNames, this.locale.womenNames];
            //grab either men or women names 0 or 1 respectively
            let nameTypeIndex = Mockachino.getRandomInt(allNames.length);
            //the names array randomly selected
            names = allNames[nameTypeIndex];
            //get an index for the array of names which will be the name and middlename
            nameIndex = Mockachino.getRandomInt(names.length);
            middleNameIndex = Mockachino.getRandomInt(names.length);
            //define the person titles
            if(nameTypeIndex === 0) {
                preTitleIndex = 0;
                suffixTitleIndex = Mockachino.getRandomInt(titles.suffixTitle.length);
            } else {
                preTitleIndex = Mockachino.getRandomInt(titles.prefixTitle.length, 1);
            }
        }

        //get an index for surnames
        let surnameIndex = Mockachino.getRandomInt(surnames.length);
        //get an index for email providers
        let emailProvIndex = Mockachino.getRandomInt(emailProviders.length);

        let person = {
            name: names[nameIndex],
            middlename: names[middleNameIndex],
            middleInitial: `${names[middleNameIndex].charAt(0)}.`,
            lastname: surnames[surnameIndex],
            initials: `${names[nameIndex].charAt(0)}.${surnames[surnameIndex].charAt(0)}`,
            email: `${names[nameIndex].toLocaleLowerCase()}.${surnames[surnameIndex].toLocaleLowerCase()}@${emailProviders[emailProvIndex]}`,
            academicTitle: titles.academic[Mockachino.getRandomInt(titles.academic.length)]
        };

        //if prefix and suffix titles are set add them to the person's object
        if(preTitleIndex !== undefined) person.title = titles.prefixTitle[preTitleIndex];
        if(suffixTitleIndex !== undefined) person.suffixTitle = titles.suffixTitle[suffixTitleIndex];

        return person;
    }

    /**
     * Mocks an address
     */
    getAddress() {
        //grab a state in the array of states
        let stateIndex = Mockachino.getRandomInt(this.locale.states.length);
        //get the actual state
        let stateData = this.locale.states[stateIndex];

        //usMajorCities are defines as string of city, state
        //so we need to split the string first and than return the city
        let cityIndex = Mockachino.getRandomInt(this.locale.majorCities.length);
        let city = this.locale.majorCities[cityIndex].split(',')[0];

        return {
            city,
            state: stateData.name,
            stateAbbrev: stateData.abbreviation,
            zipCode: this.getZipcode(),
            countryAbbrev: this.locale.abbrev,
            country: this.locale.name
        };
    }

    /**
     * Mocks a job position
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
