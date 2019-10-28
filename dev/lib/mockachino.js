"use strict";
/*!
 * Mockachino
 * Generate mock data for your apps. Take a sip and relax
 * (c) 2018 Verdexdesign
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var utils_1 = require("./utils");
var randi_1 = __importDefault(require("./randi"));
var globals_1 = require("./globals");
var menNames_json_1 = __importDefault(require("../data/locale/us/menNames.json"));
var states_json_1 = __importDefault(require("../data/locale/us/states.json"));
var majorCities_json_1 = __importDefault(require("../data/locale/us/majorCities.json"));
var forLorem_json_1 = __importDefault(require("../data/forLorem.json"));
function buildPicsumUrl(id, w, h, o) {
    var url = "https://picsum.photos/id/" + id + "/" + w;
    h && url + "/" + h;
    if (o) {
        o.ext && o.ext === 'jpeg' ? url += '.jpg' : url += "." + o.ext;
        o.grayscale && (url += '?grayscale');
        switch (true) {
            case typeof o.blur === 'number' && o.blur >= 1 && o.blur <= 10:
                url += o.grayscale ? "&blur=" + o.blur : "?blur=" + o.blur;
                break;
            case typeof o.blur === 'boolean' && o.blur === true:
                url += o.grayscale ? '&blur' : '?blur';
                break;
            case o.blur && o.blur < 1 || o.blur && o.blur > 10:
                url += o.grayscale ? '&blur' : '?blur';
                break;
        }
    }
    return { data: url, info: "https://picsum.photos/id/" + id + "/info" };
}
function fetchPicsum(id, w, h, o) {
    return __awaiter(this, void 0, void 0, function () {
        var opts, urls, data, reader_1, stream, res, ret, _a, info, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    opts = __assign(__assign({}, o), { ext: o && o.ext || 'jpg' });
                    urls = buildPicsumUrl(id, w, h, opts);
                    return [4, fetch(urls.data, globals_1.fetchInit)];
                case 1:
                    data = _c.sent();
                    if (!data.body) return [3, 7];
                    reader_1 = data.body.getReader();
                    return [4, new ReadableStream({
                            start: function (controller) {
                                var pump = function () { return reader_1.read()
                                    .then(function (_a) {
                                    var done = _a.done, value = _a.value;
                                    if (done) {
                                        controller.close();
                                        return;
                                    }
                                    controller.enqueue(value);
                                    return pump();
                                }); };
                                return pump();
                            }
                        })];
                case 2:
                    stream = _c.sent();
                    res = new Response(stream);
                    _a = {};
                    return [4, res.blob()];
                case 3:
                    ret = (_a.blob = _c.sent(), _a.info = null, _a);
                    if (!(o && o.withInfo)) return [3, 6];
                    return [4, fetch(urls.info, globals_1.fetchInit)];
                case 4:
                    info = _c.sent();
                    _b = ret;
                    return [4, info.json()];
                case 5:
                    _b.info = _c.sent();
                    _c.label = 6;
                case 6: return [2, ret];
                case 7: return [2, { blob: null, info: null }];
            }
        });
    });
}
function usZipcode() {
    var zipcode = '';
    for (var i = 0; i < 5; i++)
        zipcode += utils_1.randn(9);
    return zipcode;
}
function usAddress() {
    var si = utils_1.randn(states_json_1["default"].length);
    var state = states_json_1["default"][si + 1];
    var cityIndex = utils_1.randn(majorCities_json_1["default"].length);
    var city = majorCities_json_1["default"][cityIndex].split(',')[0];
    return {
        city: city,
        state: state.name,
        stateAbbrev: state.abbreviation,
        zipCode: usZipcode(),
        countryAbbrev: 'U.S',
        country: 'United States of America'
    };
}
function usPhoneNumber() {
    var areaCode = "" + utils_1.randn(10, 2) + utils_1.randn(9) + utils_1.randn(9);
    var subNumber = "" + utils_1.randn(10, 2);
    for (var i = 0; i < 6; i++)
        subNumber += i;
    var number = {
        subNumber: subNumber,
        country: 'us',
        countryCode: '+1',
        cityCode: areaCode,
        number: "" + areaCode + subNumber,
        withAreaCode: "+1" + areaCode + subNumber
    };
    return number;
}
function usPersonHeight(h) {
    var _a = [4, 5], shortMinFt = _a[0], shortMaxFt = _a[1];
    var _b = [0, 8], shortMaxIn = _b[1];
    var _c = [5, 6], tallMinFt = _c[0], tallMaxFt = _c[1];
    var _d = [9, 11], tallMinIn = _d[0], tallMaxIn = _d[1];
    var sFt = utils_1.randn(shortMaxFt + 1, shortMinFt);
    var tFt = utils_1.randn(tallMaxFt + 1, tallMinFt);
    switch (true) {
        case h === 'short':
        case sFt === shortMinFt:
            return sFt + "." + utils_1.randn(tallMaxIn + 1);
        case h === 'short':
        case sFt === shortMaxFt:
            return sFt + "." + utils_1.randn(shortMaxIn + 1);
        case h === 'tall':
        case tFt === shortMaxFt:
            return tFt + "." + utils_1.randn(tallMaxIn + 1, tallMinIn);
        case h === 'tall':
        case tFt === tallMaxFt:
            return tFt + "." + utils_1.randn(tallMaxIn + 1);
        default: return tFt + "." + utils_1.randn(tallMaxIn + 1, tallMinIn);
    }
}
function personAge(age) {
    switch (age) {
        case '20s': return utils_1.randn(30, 20);
        case '30s': return utils_1.randn(40, 30);
        case '40s': return utils_1.randn(50, 40);
        case 'young': return utils_1.randn(51, 13);
        case 'old': return utils_1.randn(100, 51);
        default: return utils_1.randn(99, 13);
    }
}
function usPerson(opts) {
    var ni = utils_1.randn(menNames_json_1["default"].length);
    var mi = utils_1.randn(menNames_json_1["default"].length);
    var si = utils_1.randn(menNames_json_1["default"].length);
    var ti = utils_1.randn(globals_1.titles.prefixTitle.length);
    var sfi = utils_1.randn(globals_1.titles.suffixTitle.length);
    var name = menNames_json_1["default"][ni];
    var middlename = menNames_json_1["default"][mi];
    var middleInitial = middlename.charAt(0);
    var lastname = menNames_json_1["default"][si];
    var eprovider = globals_1.emailProviders[utils_1.randn(globals_1.emailProviders.length)];
    var initials = name.charAt(0) + "." + lastname.charAt(0);
    var email = name.toLowerCase() + "." + lastname.toLowerCase() + "@" + eprovider;
    return {
        name: name,
        middlename: middlename,
        middleInitial: middleInitial,
        lastname: lastname,
        initials: initials,
        email: email,
        academicTitle: globals_1.titles.academic[utils_1.randn(globals_1.titles.academic.length)],
        sex: opts.person.sex,
        age: personAge(opts.person.age),
        height: usPersonHeight(opts.person.height),
        nationality: opts.locale,
        title: globals_1.titles.prefixTitle[ti],
        suffixTitle: globals_1.titles.suffixTitle[sfi]
    };
}
function buildPhoneNumber(opts) {
    switch (opts.locale) {
        case 'en-US': return usPhoneNumber();
        default: return usPhoneNumber();
    }
}
function buildAddress(opts) {
    switch (opts.locale) {
        case 'en-US': return usAddress();
        default: return usAddress();
    }
}
function buildPerson(opts) {
    switch (opts.locale) {
        case 'en-US': return usPerson(opts);
        default: return usPerson(globals_1.defaultOptions);
    }
}
function mock(options) {
    var definedOptions = options || globals_1.defaultOptions;
    var locale = definedOptions.locale;
    if (globals_1.locales[locale]) {
        return {
            person: buildPerson(definedOptions),
            phoneNumber: buildPhoneNumber(definedOptions),
            address: buildAddress(definedOptions)
        };
    }
    return;
}
exports.mock = mock;
function random(x, y, z) {
    return {
        number: utils_1.randn(x || 101, y || 0),
        title: randi_1["default"](x || ' '),
        imageUrl: buildPicsumUrl(utils_1.randn(globals_1.PicsumDefault.ni), x || globals_1.PicsumDefault.w, y, z || globals_1.PicsumDefault.o),
        imageBlob: fetchPicsum(utils_1.randn(globals_1.PicsumDefault.ni), x || globals_1.PicsumDefault.w, y, z || globals_1.PicsumDefault.o)
    };
}
exports.random = random;
function lorem(sep) {
    sep = sep || '\n';
    var build = function (length) {
        var ret = '';
        for (var i = 0; i < length; i++) {
            ret += forLorem_json_1["default"][i % forLorem_json_1["default"].length] + "." + sep;
        }
        return ret;
    };
    return {
        sentence: forLorem_json_1["default"][utils_1.randn(forLorem_json_1["default"].length)],
        paragraph: build(5),
        text: build
    };
}
exports.lorem = lorem;
//# sourceMappingURL=mockachino.js.map