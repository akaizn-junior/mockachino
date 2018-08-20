```
Faker
Mocker
Mocha?
Mochachino?!
```

# Mockachino

## Generate mock data for your apps

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

### How to use

Script Tag

```js
<script src="mockachino.min.js"></script>
<script>
    let mocka = new Mockachino().mock();
    //show mocked data in the console
    console.log(mocka.person);
    /*
    e.g: Object { name: "Elizabeth", middlename: "Claire", middleInitial: "C.", lastname: "Cook", initials: "E.C", email: "elizabeth.cook@outlook.com", academicTitle: "Dr.", title: "Mrs." }
    */
</script>
```

Install via npm

```bash
npm i --save-dev mockachino
```

import or require

```js
//for import remember to transpile your code with babel
const mocka = require('Mockachino');

let mocka = new Mockachino({
    person: {
        sex: 'woman'
    }
});

console.log(mocka.mock().person);
/*
e.g: Object { name: "Elizabeth", middlename: "Claire", middleInitial: "C.", lastname: "Cook", initials: "E.C", email: "elizabeth.cook@outlook.com", academicTitle: "Dr.", title: "Mrs." }
*/
```

## Mock options

| Option | Description |
| --- | --- |
| Locale | Defines the locale the data should be based on. Defaults to 'us', more locales to come |
| Person | Mock a person, define the person sex, by setting person.sex to 'man' or 'woman' |

[![Build Status](https://travis-ci.org/akaizn-junior/mockachino.svg?branch=master)](https://travis-ci.org/akaizn-junior/mockachino)

Copyright &copy; 2018 Simao Nziaka
