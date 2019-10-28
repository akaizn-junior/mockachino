"use strict";
exports.__esModule = true;
function randn(max, min) {
    min = Math.ceil(Math.abs(min || 0));
    max = Math.floor(Math.abs(max || 1));
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.randn = randn;
//# sourceMappingURL=utils.js.map