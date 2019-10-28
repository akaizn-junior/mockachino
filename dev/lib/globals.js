"use strict";
exports.__esModule = true;
exports.emailProviders = [
    'gmail.com',
    'hotmail.com',
    'outlook.com',
    'live.com'
];
exports.titles = {
    prefixTitle: ['Mr.', 'Mrs.', 'Ms.'],
    suffixTitle: ['Sr.', 'Jr.', '3rd', 'The 3rd'],
    academic: ['Dr.', 'Prof.']
};
exports.locales = {
    us: 'en-US'
};
exports.defaultOptions = {
    locale: 'us',
    person: {
        age: '20s',
        height: 'short',
        sex: 'man'
    }
};
exports.PicsumDefault = {
    ni: 1000,
    w: 300,
    o: {
        ext: 'jpg',
        grayscale: false,
        blur: false,
        withInfo: true
    }
};
exports.fetchInit = {
    method: 'GET',
    cache: 'default'
};
//# sourceMappingURL=globals.js.map