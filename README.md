# Mockachino

- Faker
- Mocker
- Mocha?
- Mochachino?!

![Mockachino logo](./logo.gif)

Generate mock data for your apps, take a sip and relax!

- People
- Addresses
- Phone Numbers
- Jobs
- Sentences
- Paragraphs
- Texts
- Cities
- Picsum Image URLs
- Picsum Image Blobs
- Placeholder titles
- Random Numbers
- & more

Based on US data; other countries to come.

## Usage

### Browser

```js
<script src="mockachino.min.js"></script>
<script>
    // no options provided
    let mocked = Mockachino.mock();
    // show mocked data in the console
    console.log(mocked.phoneNumber);
    /* Object { cityCode: "468", country: "us", countryCode: "+1", number: "4687012345", subNumber: "7012345", withAreaCode: "+14687012345" }
    */
</script>
```

### Node

```npm i -D mockachino```

```js
const mockachino = require('Mockachino');

// with no options provided
let mocked = Mockachino.mock({
    locale: 'us',
    person: {
        sex: 'man',
        height: 'short',
        age: '20s'
    }
});

console.log(mocked.person);

/*
Object { name: "Valentina", middlename: "Nevaeh", middleInitial: "N.", lastname: "Adams", initials: "V.A", email: "valentina.adams@hotmail.com", academicTitle:  "Prof.", sex: "woman", age: 23, height: "4.5", … }
*/
```

## ```mockachino.mock``` options

| Option | Description |
| --- | --- |
| Locale | Defines the locale the data should be based on. Defaults to 'us', more locales to come |
| Person | Mock a person, define the person sex, age, and height |
|||
|sex| woman, man|
|height| tall, short|
|age| young, old, 20s, 30s, 40s, mid20s, mid40s, middleAged, youngAdult |

## ```mockachino.random``` usage

|Data| Description| Usage|
|--|--|--|
| Number | Just a random number | ```Mockachino.random(200, 15).number; // A random number from 15 to 199```
| Title | A random placeholder title | ```Mockachino.random('-').title; // A-random-title separated by '-'```
| ImageUrl | A random image URL from Picsum | ```Mockachino.random(350, 300).imageUrl; // A random image URL of 350x300 size from Picsum``` |
| ImageBlob | A random image blob from Picsum | ```Mockachino.random(400, 500).imageBlob; // A random image Blob of 400x500 size from Picsum``` |

## Read more

- [Documentation](https://verdebydesign.github.io/mockachino/)

## Status

[![Build Status](https://travis-ci.org/verdebydesign/mockachino.svg?branch=develop)](https://travis-ci.org/verdebydesign/mockachino)

[![Coverage Status](https://coveralls.io/repos/github/verdebydesign/mockachino/badge.svg?branch=develop)](https://coveralls.io/github/verdebydesign/mockachino?branch=develop)

## Shout outs

- [makever](https://www.npmjs.com/package/@verdebydesign/makever) for making creating releases on github super easy.
- [David Marby](https://dmarby.se/) and [Nijiko Yonskai](https://github.com/Nijikokun) @ [Picsum](https://picsum.photos/) for the amazing API for random images
- [lunapic](https://www110.lunapic.com/editor/) for the amazing editor
- [frankie on Unsplash](https://unsplash.com/photos/F_EfOSXh0sI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) for the pic that allowed me to make the awesome logo.
- [jsdoc](https://github.com/jsdoc3/jsdoc) and [minami](https://github.com/Nijikokun/minami) for being awesome at generating awesome websites from simple comments.

## Contribute

- Follow CONTRIBUTING.md
- Rules of Conduct [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](./CODE_OF_CONDUCT.md)

## Licence

The MIT License [MIT](https://opensource.org/licenses/MIT)

## Author

&copy; 2018 [Simao Nziaka](https://simaonziaka.com)
