"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var forRandi_1 = require("../data/forRandi");
function Randi(separator) {
    separator = separator || ' ';
    var randomAjective = forRandi_1.adjectives[utils_1.randn(forRandi_1.adjectives.length, 0)];
    var randomNoun = forRandi_1.nouns[utils_1.randn(forRandi_1.nouns.length, 0)];
    randomAjective = randomAjective.trim().replace(/\s/g, separator);
    randomNoun = randomNoun.trim().replace(/\s/g, separator);
    return randomAjective.concat(separator, randomNoun);
}
exports["default"] = Randi;
//# sourceMappingURL=randi.js.map