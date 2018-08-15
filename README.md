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
    e.g: Object { name: "Nicholas", lastname: "Richardson", initials: "NR", email: "nicholas.richardson@outlook.com",
    title: "Mr.", middlename: "Liam", middleInitial: "L." }
    */
</script>
```

Install via npm
```bash
npm i --save-dev mockachino
```

Import via es6 or CommonJS module
```js
import mocka from 'Mockachino'; or const mocka = require('Mockachino');
let mocka = new Mockachino();
console.log(mocka.mock().person);
/*
e.g: Object { name: "Nicholas", lastname: "Richardson", initials: "NR", email: "nicholas.richardson@outlook.com", title: "Mr.", middlename: "Liam", middleInitial: "L." }
*/
```
## Options

<table>
    <tr>
        <td>Person</td>
    </tr>
    <tr>
        <td>Address</td>
    </tr>
    <tr>
        <td>Phone Number</td>
    </tr>
    <tr>
        <td>Job</td>
    </tr>
    <tr>
        <td>Text</td>
    </tr>
    <tr>
        <td>Sentence</td>
    </tr>
    <tr>
        <td>Paragraph</td>
    </tr>
</table>

<p>&nbsp;</p>
Copyright &copy; 2018 Simao Nziaka
