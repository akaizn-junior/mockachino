
![Mockachino logo](./logo.gif)

- Faker
- Mocker
- Mocha?
- Mochachino?!

# Mockachino

Generate mock data for your apps, take a sip and relax!

    * People
    * Addresses
    * Phone Numbers
    * Jobs
    * Sentences
    * Paragraphs
    * Texts
    * Cities
    * & more

    Based on US data; other countries to come.

### [Documentation](https://akaizn-junior.github.io/mockachino/)

## How to use

### Script tag

```js
<script src="mockachino.min.js"></script>
<script>
    let mocka = new Mockachino().mock();
    //show mocked data in the console
    console.log(mocka.person);
    /*
    e.g: Object { name: "Valentina", middlename: "Nevaeh", middleInitial: "N.", lastname: "Adams", initials: "V.A", email: "valentina.adams@hotmail.com", academicTitle: "Prof.", sex: "woman", age: 23, height: "4.1", … }
    */
</script>
```

### npm

```bash
npm i --save-dev mockachino
```

### import or require

```js
//for import remember to transpile your code with babel
const mocka = require('Mockachino');

let mocka = new Mockachino({
    locale: 'us',
    person: {
        sex: 'man',
        height: 'tall',
        age: '20s'
    }
});

console.log(mocka.mock().person);
/*
e.g: Object { name: "Elias", middlename: "Ethan", middleInitial: "E.", lastname: "Coleman", initials: "E.C", email: "elias.coleman@hotmail.com", academicTitle: "Dr.", sex: "man", age: 25, height: "5.10", … }
*/
```

## Options

| Option | Description |
| --- | --- |
| Locale | Defines the locale the data should be based on. Defaults to 'us', more locales to come |
| Person | Mock a person, define the person sex, age, and height |

|Person||
|--|--|
|sex| woman, man|
|height| tall, short|
|age| young, old, 20s, 30s|

## Badges

[![Build Status](https://travis-ci.org/akaizn-junior/mockachino.svg?branch=master)](https://travis-ci.org/akaizn-junior/mockachino)

## Shout outs

[lunapic](https://www110.lunapic.com/editor/) and [frankie on Unsplash](https://unsplash.com/photos/F_EfOSXh0sI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) for the amazing editor and pic that allowed me to make the awesome logo.

[jsdoc](https://github.com/jsdoc3/jsdoc) and [minami](https://github.com/Nijikokun/minami) for being awesome at generating awesome websites from simple comments.

[makever](https://www.npmjs.com/package/makever) for making creating releases on github super easy.

## Author

&copy; 2018 [Simao Nziaka](https://simaonziaka.com)

## Licence

The MIT License [MIT](https://opensource.org/licenses/MIT)
