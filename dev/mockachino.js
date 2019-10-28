(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Mockachino"] = factory();
	else
		root["Mockachino"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/mockachino.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/forLorem.json":
/*!****************************!*\
  !*** ./data/forLorem.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Laborum irure culpa ipsum id laboris sunt quis nisi non mollit ea laborum dolor\",\"Aute Lorem aliquip mollit sunt excepteur velit irure do non laborum\",\"Duis fugiat mollit commodo incididunt\",\"Ex id velit do quis\",\"Fugiat quis anim cillum exercitation et adipisicing minim ipsum ullamco ut voluptate eu\",\"Adipisicing sit ipsum non adipisicing eu dolore dolore laborum\",\"Sit magna laborum exercitation aute officia enim ex elit aute aliqua ut\",\"Do nostrud cupidatat sint in ad qui Lorem non dolore Lorem nostrud cillum\",\"The quick brown fox stopped to watch the chicken cross the road\",\"Miss earth would lose against miss jupiter if the miss universe contenst was really universal\",\"One apple a day keeps the doctor away\",\"Dont borrow money from the mafia! Dont borrow money from the mafia!\"]");

/***/ }),

/***/ "./data/forRandi.ts":
/*!**************************!*\
  !*** ./data/forRandi.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.nouns = ['accelerator', 'accordion', 'account', 'accountant', 'acknowledgment', 'acoustic', 'acrylic', 'act', 'action', 'active',
    'activity', 'actor', 'actress', 'adapter', 'addition', 'address', 'adjustment', 'adult', 'advantage', 'advertisement',
    'advice', 'afghanistan', 'africa', 'aftermath', 'afternoon', 'aftershave', 'afterthought', 'age', 'agenda', 'agreement',
    'air', 'airbus', 'airmail', 'airplane', 'airport', 'airship', 'alarm', 'albatross', 'alcohol', 'algebra', 'algeria',
    'alibi', 'alley', 'alligator', 'alloy', 'almanac', 'alphabet', 'alto', 'aluminium', 'aluminum', 'ambulance', 'america',
    'amount', 'amusement', 'anatomy', 'anethesiologist', 'anger', 'angle', 'angora', 'animal', 'anime', 'ankle', 'answer',
    'ant', 'antarctica', 'anteater', 'antelope', 'anthony', 'anthropology', 'apartment', 'apology', 'apparatus', 'apparel',
    'appeal', 'appendix', 'apple', 'appliance', 'approval', 'april', 'aquarius', 'arch', 'archaeology', 'archeology',
    'archer', 'architecture', 'area', 'argentina', 'argumenat', 'aries', 'arithmetic', 'arm', 'armadillo', 'armchair',
    'armenian', 'army', 'arrow', 'art', 'ash', 'ashtray', 'asia', 'asparagus', 'asphalt', 'asterisk', 'astronomy', 'athlete',
    'atm', 'atom', 'attack', 'attempt', 'attention', 'attic', 'attraction', 'august', 'aunt', 'australia', 'australian', 'author',
    'authorisation', 'authority', 'authorization', 'avenue', 'babies', 'baboon', 'baby', 'back', 'backbone', 'bacon', 'badge', 'badger',
    'bag', 'bagel', 'bagpipe', 'bail', 'bait', 'baker', 'bakery', 'balance', 'balinese', 'ball', 'balloon', 'bamboo', 'banana', 'band',
    'bandana', 'bangladesh', 'bangle', 'banjo', 'bank', 'bankbook', 'banker', 'bar', 'barbara', 'barber', 'barge', 'baritone', 'barometer',
    'base', 'baseball', 'basement', 'basin', 'basket', 'basketball', 'bass', 'bassoon', 'bat', 'bath', 'bathroom', 'bathtub', 'battery',
    'battle', 'bay', 'beach', 'bead', 'beam', 'bean', 'bear', 'beard', 'beast', 'beat', 'beautician', 'beauty', 'beaver', 'bed', 'bedroom',
    'bee', 'beech', 'beef', 'beer', 'beet', 'beetle', 'beggar', 'beginner', 'begonia', 'behavior', 'belgian', 'belief', 'believe', 'bell',
    'belt', 'bench', 'bengal', 'beret', 'berry', 'bestseller', 'betty', 'bibliography', 'bicycle', 'bike', 'bill', 'billboard', 'biology',
    'biplane', 'birch', 'bird', 'birth', 'birthday', 'bit', 'bite', 'black', 'bladder', 'blade', 'blanket', 'blinker', 'blizzard', 'block',
    'blood', 'blouse', 'blow', 'blowgun', 'blue', 'board', 'boat', 'bobcat', 'body', 'bolt', 'bomb', 'bomber', 'bone', 'bongo', 'bonsai',
    'book', 'bookcase', 'booklet', 'boot', 'border', 'botany', 'bottle', 'bottom', 'boundary', 'bow', 'bowl', 'bowling', 'box', 'boy', 'bra',
    'brace', 'bracket', 'brain', 'brake', 'branch', 'brand', 'brandy', 'brass', 'brazil', 'bread', 'break', 'breakfast', 'breath', 'brian',
    'brick', 'bridge', 'british', 'broccoli', 'brochure', 'broker', 'bronze', 'brother', 'brother-in-law', 'brow', 'brown', 'brush', 'bubble',
    'bucket', 'budget', 'buffer', 'buffet', 'bugle', 'building', 'bulb', 'bull', 'bulldozer', 'bumper', 'bun', 'burglar', 'burma', 'burn',
    'burst', 'bus', 'bush', 'business', 'butane', 'butcher', 'butter', 'button', 'buzzard', 'c-clamp', 'cabbage', 'cabinet', 'cable', 'cactus',
    'cafe', 'cake', 'calculator', 'calculus', 'calendar', 'calf', 'call', 'camel', 'camera', 'camp', 'can', 'canada', 'canadian', 'cancer',
    'candle', 'cannon', 'canoe', 'canvas', 'cap', 'capital', 'cappelletti', 'capricorn', 'captain', 'caption', 'car', 'caravan', 'carbon',
    'card', 'cardboard', 'cardigan', 'care', 'carnation', 'carol', 'carp', 'carpenter', 'carriage', 'carrot', 'cart', 'cartoon', 'case',
    'cast', 'castanet', 'cat', 'catamaran', 'caterpillar', 'cathedral', 'catsup', 'cattle', 'cauliflower', 'cause', 'caution', 'cave', 'cd',
    'ceiling', 'celery', 'celeste', 'cell', 'cellar', 'cello', 'celsius', 'cement', 'cemetery', 'cent', 'centimeter', 'century', 'ceramic',
    'cereal', 'certification', 'chain', 'chair', 'chalk', 'chance', 'change', 'channel', 'character', 'chard', 'charles', 'chauffeur', 'check',
    'cheek', 'cheese', 'cheetah', 'chef', 'chemistry', 'cheque', 'cherries', 'cherry', 'chess', 'chest', 'chick', 'chicken', 'chicory',
    'chief', 'child', 'children', 'chill', 'chime', 'chimpanzee', 'chin', 'china', 'chinese', 'chive', 'chocolate', 'chord', 'christmas',
    'christopher', 'chronometer', 'church', 'cicada', 'cinema', 'circle', 'circulation', 'cirrus', 'citizenship', 'city', 'clam', 'clarinet',
    'class', 'claus', 'clave', 'clef', 'clerk', 'click', 'client', 'climb', 'clipper', 'cloakroom', 'clock', 'close', 'closet', 'cloth',
    'cloud', 'cloudy', 'clover', 'club', 'clutch', 'coach', 'coal', 'coast', 'coat', 'cobweb', 'cockroach', 'cocktail', 'cocoa', 'cod',
    'coffee', 'coil', 'coin', 'coke', 'cold', 'collar', 'college', 'collision', 'colombia', 'colon', 'colony', 'color', 'colt', 'column',
    'columnist', 'comb', 'comfort', 'comic', 'comma', 'command', 'commission', 'committee', 'community', 'company', 'comparison',
    'competition', 'competitor', 'composer', 'composition', 'computer', 'condition', 'condor', 'cone', 'confirmation', 'conga', 'congo',
    'conifer', 'connection', 'consonant', 'continent', 'control', 'cook', 'cooking', 'copper', 'copy', 'copyright', 'cord', 'cork',
    'cormorant', 'corn', 'cornet', 'correspondent', 'cost', 'cotton', 'couch', 'cougar', 'cough', 'country', 'course', 'court', 'cousin',
    'cover', 'cow', 'cowbell', 'crab', 'crack', 'cracker', 'craftsman', 'crate', 'crawdad', 'crayfish', 'crayon', 'cream', 'creator',
    'creature', 'credit', 'creditor', 'creek', 'crib', 'cricket', 'crime', 'criminal', 'crocodile', 'crocus', 'croissant', 'crook', 'crop',
    'cross', 'crow', 'crowd', 'crown', 'crush', 'cry', 'cub', 'cuban', 'cucumber', 'cultivator', 'cup', 'cupboard', 'cupcake', 'curler',
    'currency', 'current', 'curtain', 'curve', 'cushion', 'custard', 'customer', 'cut', 'cuticle', 'cycle', 'cyclone', 'cylinder', 'cymbal',
    'dad', 'daffodil', 'dahlia', 'daisy', 'damage', 'dance', 'dancer', 'danger', 'daniel', 'dash', 'dashboard', 'database', 'date', 'daughter',
    'david', 'day', 'dead', 'deadline', 'deal', 'death', 'deborah', 'debt', 'debtor', 'decade', 'december', 'decimal', 'decision', 'decrease',
    'dedication', 'deer', 'defense', 'deficit', 'degree', 'delete', 'delivery', 'den', 'denim', 'dentist', 'deodorant', 'department',
    'deposit', 'description', 'desert', 'design', 'desire', 'desk', 'dessert', 'destruction', 'detail', 'detective', 'development', 'dew',
    'diamond', 'diaphragm', 'dibble', 'dictionary', 'dietician', 'difference', 'digestion', 'digger', 'digital', 'dill', 'dime', 'dimple',
    'dinghy', 'dinner', 'dinosaur', 'diploma', 'dipstick', 'direction', 'dirt', 'disadvantage', 'discovery', 'discussion', 'disease',
    'disgust', 'dish', 'distance', 'distribution', 'distributor', 'diving', 'division', 'divorced', 'dock', 'doctor', 'dog', 'dogsled',
    'doll', 'dollar', 'dolphin', 'domain', 'donald', 'donkey', 'donna', 'door', 'dorothy', 'double', 'doubt', 'downtown', 'dragon',
    'dragonfly', 'drain', 'drake', 'drama', 'draw', 'drawbridge', 'drawer', 'dream', 'dredger', 'dress', 'dresser', 'dressing', 'drill',
    'drink', 'drive', 'driver', 'driving', 'drizzle', 'drop', 'drug', 'drum', 'dry', 'dryer', 'duck', 'duckling', 'dugout', 'dungeon',
    'dust', 'eagle', 'ear', 'earth', 'earthquake', 'ease', 'east', 'edge', 'edger', 'editor', 'editorial', 'education', 'edward', 'eel',
    'effect', 'egg', 'eggnog', 'eggplant', 'egypt', 'eight', 'elbow', 'element', 'elephant', 'elizabeth', 'ellipse', 'emery', 'employee',
    'employer', 'encyclopedia', 'end', 'enemy', 'energy', 'engine', 'engineer', 'engineering', 'english', 'enquiry', 'entrance',
    'environment', 'epoch', 'epoxy', 'equinox', 'equipment', 'era', 'error', 'estimate', 'ethernet', 'ethiopia', 'euphonium', 'europe',
    'evening', 'event', 'ex-husband', 'ex-wife', 'examination', 'example', 'exchange', 'exclamation', 'exhaust', 'existence', 'expansion',
    'experience', 'expert', 'explanation', 'eye', 'eyebrow', 'eyelash', 'eyeliner', 'face', 'facilities', 'fact', 'factory', 'fahrenheit',
    'fairies', 'fall', 'family', 'fan', 'fang', 'farm', 'farmer', 'fat', 'father', 'father-in-law', 'faucet', 'fear', 'feast', 'feather',
    'feature', 'february', 'fedelini', 'feedback', 'feeling', 'feet', 'felony', 'female', 'fender', 'ferry', 'ferryboat', 'fertilizer',
    'fiber', 'fiberglass', 'fibre', 'fiction', 'field', 'fifth', 'fight', 'fighter', 'file', 'find', 'fine', 'finger', 'fir', 'fire',
    'fired', 'fireman', 'fireplace', 'firewall', 'fish', 'fisherman', 'flag', 'flame', 'flare', 'flat', 'flavor', 'flax', 'flesh', 'flight',
    'flock', 'flood', 'floor', 'flower', 'flugelhorn', 'flute', 'fly', 'foam', 'fog', 'fold', 'font', 'food', 'foot', 'football', 'footnote',
    'force', 'forecast', 'forehead', 'forest', 'forgery', 'fork', 'form', 'format', 'fortnight', 'foundation', 'fountain', 'fowl', 'fox',
    'foxglove', 'fragrance', 'frame', 'france', 'freckle', 'freeze', 'freezer', 'freighter', 'french', 'freon', 'friction', 'friday',
    'fridge', 'friend', 'frog', 'front', 'frost', 'frown', 'fruit', 'fuel', 'fur', 'furniture', 'galley', 'gallon', 'game', 'gander',
    'garage', 'garden', 'garlic', 'gas', 'gasoline', 'gate', 'gateway', 'gauge', 'gazelle', 'gear', 'gearshift', 'geese', 'gemini', 'gender',
    'geography', 'geology', 'geometry', 'george', 'geranium', 'german', 'germany', 'ghana', 'ghost', 'giant', 'giraffe', 'girdle', 'girl',
    'gladiolus', 'glass', 'glider', 'gliding', 'glockenspiel', 'glove', 'glue', 'goal', 'goat', 'gold', 'goldfish', 'golf', 'gondola',
    'gong', 'good-bye', 'goose', 'gore-tex', 'gorilla', 'gosling', 'government', 'governor', 'grade', 'grain', 'gram', 'granddaughter',
    'grandfather', 'grandmother', 'grandson', 'grape', 'graphic', 'grass', 'grasshopper', 'gray', 'grease', 'great-grandfather',
    'great-grandmother', 'greece', 'greek', 'green', 'grenade', 'grey', 'grill', 'grip', 'ground', 'group', 'grouse', 'growth', 'guarantee',
    'guatemalan', 'guide', 'guilty', 'guitar', 'gum', 'gun', 'gym', 'gymnast', 'hacksaw', 'hail', 'hair', 'haircut', 'half-brother',
    'half-sister', 'halibut', 'hall', 'hallway', 'hamburger', 'hammer', 'hamster', 'hand', 'handball', 'handicap', 'handle', 'handsaw',
    'harbor', 'hardboard', 'hardcover', 'hardhat', 'hardware', 'harmonica', 'harmony', 'harp', 'hat', 'hate', 'hawk', 'head', 'headlight',
    'headline', 'health', 'hearing', 'heart', 'heat', 'heaven', 'hedge', 'height', 'helen', 'helicopter', 'helium', 'hell', 'helmet', 'help',
    'hemp', 'hen', 'heron', 'herring', 'hexagon', 'hill', 'himalayan', 'hip', 'hippopotamus', 'history', 'hobbies', 'hockey', 'hole',
    'holiday', 'home', 'honey', 'hood', 'hook', 'hope', 'horn', 'horse', 'hose', 'hospital', 'hot', 'hour', 'hourglass', 'house',
    'hovercraft', 'hub', 'hubcap', 'humidity', 'humor', 'hurricane', 'hyacinth', 'hydrant', 'hydrofoil', 'hydrogen', 'hyena', 'hygienic',
    'ice', 'icebreaker', 'icicle', 'icon', 'idea', 'ikebana', 'illegal', 'imprisonment', 'improvement', 'impulse', 'inch', 'income',
    'increase', 'index', 'india', 'indonesia', 'industry', 'ink', 'innocent', 'input', 'insect', 'instruction', 'instrument', 'insulation',
    'insurance', 'interactive', 'interest', 'internet', 'interviewer', 'intestine', 'invention', 'inventory', 'invoice', 'iran', 'iraq',
    'iris', 'iron', 'island', 'israel', 'italian', 'italy', 'jacket', 'jaguar', 'jail', 'jam', 'james', 'january', 'japan', 'japanese',
    'jar', 'jar-jar', 'jasmine', 'jason', 'jaw', 'jeans', 'jeep', 'jeff', 'jelly', 'jellyfish', 'jennifer', 'jet', 'jewel', 'jogging', 'john', 'join',
    'joke', 'joseph', 'journey', 'judge', 'judo', 'juice', 'july', 'jumbo', 'jump', 'jumper', 'june', 'jury', 'justice', 'jute', 'kale',
    'kamikaze', 'kangaroo', 'karate', 'karen', 'kayak', 'kendo', 'kenneth', 'kenya', 'ketchup', 'kettle', 'kettledrum', 'kevin', 'key',
    'keyboard', 'keyboarding', 'kick', 'kidney', 'kilogram', 'kilometer', 'kimberly', 'kiss', 'kitchen', 'kite', 'kitten', 'kitty', 'knee',
    'knickers', 'knife', 'knight', 'knot', 'knowledge', 'kohlrabi', 'korean', 'laborer', 'lace', 'ladybug', 'lake', 'lamb', 'lamp', 'lan',
    'land', 'landmine', 'language', 'larch', 'lasagna', 'latency', 'latex', 'lathe', 'laugh', 'laundry', 'laura', 'law', 'lawyer', 'layer',
    'lead', 'leaf', 'learning', 'leather', 'leek', 'leg', 'legal', 'lemonade', 'lentil', 'leo', 'leopard', 'letter', 'lettuce', 'level',
    'libra', 'library', 'license', 'lier', 'lift', 'light', 'lightning', 'lilac', 'lily', 'limit', 'linda', 'line', 'linen', 'link', 'lion',
    'lip', 'lipstick', 'liquid', 'liquor', 'lisa', 'list', 'literature', 'litter', 'liver', 'lizard', 'llama', 'loaf', 'loan', 'lobster',
    'lock', 'locket', 'locust', 'look', 'loss', 'lotion', 'love', 'low', 'lumber', 'lunch', 'lunchroom', 'lung', 'lunge', 'lute', 'luttuce',
    'lycra', 'lynx', 'lyocell', 'lyre', 'lyric', 'macaroni', 'machine', 'macrame', 'magazine', 'magic', 'magician', 'maid', 'mail',
    'mailbox', 'mailman', 'makeup', 'malaysia', 'male', 'mall', 'mallet', 'man', 'manager', 'mandolin', 'manicure', 'manx', 'map', 'maple',
    'maraca', 'marble', 'march', 'margaret', 'margin', 'maria', 'marimba', 'mark', 'market', 'married', 'mary', 'mascara', 'mask', 'mass',
    'match', 'math', 'mattock', 'may', 'mayonnaise', 'meal', 'measure', 'meat', 'mechanic', 'medicine', 'meeting', 'melody', 'memory',
    'men', 'menu', 'mercury', 'message', 'metal', 'meteorology', 'meter', 'methane', 'mexican', 'mexico', 'mice', 'michael', 'michelle',
    'microwave', 'middle', 'mile', 'milk', 'milkshake', 'millennium', 'millimeter', 'millisecond', 'mimosa', 'mind', 'mine', 'mini-skirt',
    'minibus', 'minister', 'mint', 'minute', 'mirror', 'missile', 'mist', 'mistake', 'mitten', 'moat', 'modem', 'mole', 'mom', 'monday',
    'money', 'monkey', 'month', 'moon', 'morning', 'morocco', 'mosque', 'mosquito', 'mother', 'mother-in-law', 'motion', 'motorboat',
    'motorcycle', 'mountain', 'mouse', 'moustache', 'mouth', 'move', 'multi-hop', 'multimedia', 'muscle', 'museum', 'music', 'musician',
    'mustard', 'myanmar', 'nail', 'name', 'nancy', 'napkin', 'narcissus', 'nation', 'neck', 'need', 'needle', 'neon', 'nepal', 'nephew',
    'nerve', 'nest', 'net', 'network', 'news', 'newsprint', 'newsstand', 'nic', 'nickel', 'niece', 'nigeria', 'night', 'nitrogen', 'node',
    'noise', 'noodle', 'north', 'north america', 'north korea', 'norwegian', 'nose', 'note', 'notebook', 'notify', 'novel', 'november',
    'number', 'numeric', 'nurse', 'nut', 'nylon', 'oak', 'oatmeal', 'objective', 'oboe', 'observation', 'occupation', 'ocean', 'ocelot',
    'octagon', 'octave', 'october', 'octopus', 'odometer', 'offence', 'offer', 'office', 'oil', 'okra', 'olive', 'onion', 'open', 'opera',
    'operation', 'ophthalmologist', 'opinion', 'option', 'orange', 'orchestra', 'orchid', 'order', 'organ', 'organisation', 'organization',
    'ornament', 'ostrich', 'otter', 'ounce', 'output', 'outrigger', 'oval', 'oven', 'overcoat', 'owl', 'owner', 'ox', 'oxygen', 'oyster',
    'package', 'packet', 'page', 'pail', 'pain', 'paint', 'pair', 'pajama', 'pakistan', 'palm', 'pamphlet', 'pan', 'pancake', 'pancreas',
    'panda', 'pansy', 'panther', 'panties', 'pantry', 'pants', 'panty', 'pantyhose', 'paper', 'paperback', 'parade', 'parallelogram',
    'parcel', 'parent', 'parentheses', 'park', 'parrot', 'parsnip', 'part', 'particle', 'partner', 'partridge', 'party', 'passbook',
    'passenger', 'passive', 'pasta', 'paste', 'pastor', 'pastry', 'patch', 'path', 'patient', 'patio', 'patricia', 'paul', 'payment',
    'pea', 'peace', 'peak', 'peanut', 'pear', 'pedestrian', 'pediatrician', 'peen', 'peer-to-peer', 'pelican', 'pen', 'penalty',
    'pencil', 'pendulum', 'pentagon', 'peony', 'pepper', 'perch', 'perfume', 'period', 'periodical', 'peripheral', 'permission',
    'persian', 'person', 'peru', 'pest', 'pet', 'pharmacist', 'pheasant', 'philippines', 'philosophy', 'phone', 'physician', 'piano',
    'piccolo', 'pickle', 'picture', 'pie', 'pig', 'pigeon', 'pike', 'pillow', 'pilot', 'pimple', 'pin', 'pine', 'ping', 'pink',
    'pint', 'pipe', 'pisces', 'pizza', 'place', 'plain', 'plane', 'planet', 'plant', 'plantation', 'plaster', 'plasterboard',
    'plastic', 'plate', 'platinum', 'play', 'playground', 'playroom', 'pleasure', 'plier', 'plot', 'plough', 'plow', 'plywood',
    'pocket', 'poet', 'point', 'poison', 'poland', 'police', 'policeman', 'polish', 'politician', 'pollution', 'polo', 'polyester',
    'pond', 'popcorn', 'poppy', 'population', 'porch', 'porcupine', 'port', 'porter', 'position', 'possibility', 'postage', 'postbox',
    'pot', 'potato', 'poultry', 'pound', 'powder', 'power', 'precipitation', 'preface', 'prepared', 'pressure', 'price', 'priest',
    'print', 'printer', 'prison', 'probation', 'process', 'processing', 'produce', 'product', 'production', 'professor', 'profit',
    'promotion', 'propane', 'property', 'prose', 'prosecution', 'protest', 'protocol', 'pruner', 'psychiatrist', 'psychology',
    'ptarmigan', 'puffin', 'pull', 'puma', 'pump', 'pumpkin', 'punch', 'punishment', 'puppy', 'purchase', 'purple', 'purpose',
    'push', 'pvc', 'pyjama', 'pyramid', 'quail', 'quality', 'quart', 'quarter', 'quartz', 'queen', 'question', 'quicksand',
    'quiet', 'quill', 'quilt', 'quince', 'quit', 'quiver', 'quotation', 'rabbi', 'rabbit', 'racing', 'radar', 'radiator',
    'radio', 'radish', 'raft', 'rail', 'railway', 'rain', 'rainbow', 'raincoat', 'rainstorm', 'rake', 'ramie', 'random',
    'range', 'rat', 'rate', 'raven', 'ravioli', 'ray', 'rayon', 'reaction', 'reading', 'reason', 'receipt', 'recess', 'record',
    'recorder', 'rectangle', 'red', 'reduction', 'refrigerator', 'refund', 'regret', 'reindeer', 'relation', 'relative',
    'religion', 'relish', 'reminder', 'repair', 'replace', 'report', 'representative', 'request', 'resolution', 'respect',
    'responsibility', 'rest', 'restaurant', 'result', 'retailer', 'revolve', 'revolver', 'reward', 'rhinoceros', 'rhythm',
    'rice', 'richard', 'riddle', 'rifle', 'ring', 'rise', 'risk', 'river', 'riverbed', 'road', 'roadway', 'roast', 'robert',
    'robin', 'rock', 'rocket', 'rod', 'roll', 'romania', 'romanian', 'ronald', 'roof', 'room', 'rooster', 'root', 'rose',
    'rotate', 'route', 'router', 'rowboat', 'rub', 'rubber', 'rugby', 'rule', 'run', 'russia', 'russian', 'rutabaga', 'ruth',
    'sack', 'sagittarius', 'sail', 'sailboat', 'sailor', 'salad', 'salary', 'sale', 'salesman', 'salmon', 'salt', 'sampan',
    'samurai', 'sand', 'sandra', 'sandwich', 'santa', 'sarah', 'sardine', 'satin', 'saturday', 'sauce', 'saudi arabia', 'sausage',
    'save', 'saw', 'saxophone', 'scale', 'scallion', 'scanner', 'scarecrow', 'scarf', 'scene', 'scent', 'schedule', 'school',
    'science', 'scissors', 'scooter', 'scorpio', 'scorpion', 'scraper', 'screen', 'screw', 'screwdriver', 'sea', 'seagull',
    'seal', 'seaplane', 'search', 'seashore', 'season', 'seat', 'second', 'secretary', 'secure', 'security', 'seed', 'seeder',
    'segment', 'select', 'selection', 'self', 'semicircle', 'semicolon', 'sense', 'sentence', 'separated', 'september', 'servant',
    'server', 'session', 'sex', 'shade', 'shadow', 'shake', 'shallot', 'shame', 'shampoo', 'shape', 'share', 'shark', 'sharon',
    'shears', 'sheep', 'sheet', 'shelf', 'shell', 'shield', 'shingle', 'ship', 'shirt', 'shock', 'shoe', 'shoemaker', 'shop',
    'shorts', 'shoulder', 'shovel', 'show', 'shrimp', 'shrine', 'siamese', 'siberian', 'side', 'sideboard', 'sidecar', 'sidewalk',
    'sign', 'signature', 'silica', 'silk', 'silver', 'sing', 'singer', 'single', 'sink', 'sister', 'sister-in-law', 'size', 'skate',
    'skiing', 'skill', 'skin', 'skirt', 'sky', 'slash', 'slave', 'sled', 'sleep', 'sleet', 'slice', 'slime', 'slip', 'slipper',
    'slope', 'smash', 'smell', 'smile', 'smoke', 'snail', 'snake', 'sneeze', 'snow', 'snowboarding', 'snowflake', 'snowman',
    'snowplow', 'snowstorm', 'soap', 'soccer', 'society', 'sociology', 'sock', 'soda', 'sofa', 'softball', 'softdrink', 'software',
    'soil', 'soldier', 'son', 'song', 'soprano', 'sort', 'sound', 'soup', 'sousaphone', 'south africa', 'south america', 'south korea',
    'soy', 'soybean', 'space', 'spade', 'spaghetti', 'spain', 'spandex', 'spark', 'sparrow', 'spear', 'specialist', 'speedboat',
    'sphere', 'sphynx', 'spider', 'spike', 'spinach', 'spleen', 'sponge', 'spoon', 'spot', 'spring', 'sprout', 'spruce', 'spy',
    'square', 'squash', 'squid', 'squirrel', 'stage', 'staircase', 'stamp', 'star', 'start', 'starter', 'state', 'statement',
    'station', 'statistic', 'steam', 'steel', 'stem', 'step', 'step-aunt', 'step-brother', 'step-daughter', 'step-father', 'step-grandfather',
    'step-grandmother', 'step-mother', 'step-sister', 'step-son', 'step-uncle', 'stepdaughter', 'stepmother', 'stepson', 'steven',
    'stew', 'stick', 'stinger', 'stitch', 'stock', 'stocking', 'stomach', 'stone', 'stool', 'stop', 'stopsign', 'stopwatch', 'store',
    'storm', 'story', 'stove', 'stranger', 'straw', 'stream', 'street', 'streetcar', 'stretch', 'string', 'structure', 'study', 'sturgeon',
    'submarine', 'substance', 'subway', 'success', 'sudan', 'suede', 'sugar', 'suggestion', 'suit', 'summer', 'sun', 'sunday', 'sundial',
    'sunflower', 'sunshine', 'supermarket', 'supply', 'support', 'surfboard', 'surgeon', 'surname', 'surprise', 'susan', 'sushi',
    'swallow', 'swamp', 'swan', 'sweater', 'sweatshirt', 'sweatshop', 'swedish', 'sweets', 'swim', 'swimming', 'swing', 'swiss',
    'switch', 'sword', 'swordfish', 'sycamore', 'syria', 'syrup', 'system', 't-shirt', 'table', 'tablecloth', 'tabletop', 'tachometer',
    'tadpole', 'tail', 'tailor', 'taiwan', 'talk', 'tank', 'tanker', 'tanzania', 'target', 'taste', 'taurus', 'tax', 'taxi', 'taxicab',
    'tea', 'teacher', 'teaching', 'team', 'technician', 'teeth', 'television', 'teller', 'temper', 'temperature', 'temple', 'tempo',
    'tendency', 'tennis', 'tenor', 'tent', 'territory', 'test', 'text', 'textbook', 'texture', 'thailand', 'theater', 'theory',
    'thermometer', 'thing', 'thistle', 'thomas', 'thought', 'thread', 'thrill', 'throat', 'throne', 'thumb', 'thunder', 'thunderstorm',
    'thursday', 'ticket', 'tie', 'tiger', 'tights', 'tile', 'timbale', 'time', 'timer', 'timpani', 'tin', 'tip', 'tire', 'titanium',
    'title', 'toad', 'toast', 'toe', 'toenail', 'toilet', 'tom-tom', 'tomato', 'ton', 'tongue', 'tooth', 'toothbrush', 'toothpaste',
    'top', 'tornado', 'tortellini', 'tortoise', 'touch', 'tower', 'town', 'toy', 'tractor', 'trade', 'traffic', 'trail', 'train', 'tramp',
    'transaction', 'transmission', 'transport', 'trapezoid', 'tray', 'treatment', 'tree', 'trial', 'triangle', 'trick', 'trigonometry',
    'trip', 'trombone', 'trouble', 'trousers', 'trout', 'trowel', 'truck', 'trumpet', 'trunk', 'tsunami', 'tub', 'tuba', 'tuesday', 'tugboat',
    'tulip', 'tuna', 'tune', 'turkey', 'turkish', 'turn', 'turnip', 'turnover', 'turret', 'turtle', 'tv', 'twig', 'twilight', 'twine',
    'twist', 'typhoon', 'tyvek', 'uganda', 'ukraine', 'ukrainian', 'umbrella', 'uncle', 'underclothes', 'underpants', 'undershirt',
    'underwear', 'unit', 'united kingdom', 'unshielded', 'use', 'utensil', 'uzbekistan', 'vacation', 'vacuum', 'valley', 'value', 'van',
    'vase', 'vault', 'vegetable', 'vegetarian', 'veil', 'vein', 'velvet', 'venezuela', 'venezuelan', 'verdict',
    'vermicelli', 'verse', 'vessel', 'vest', 'veterinarian', 'vibraphone', 'vietnam', 'view', 'vinyl', 'viola', 'violet', 'violin',
    'virgo', 'viscose', 'vise', 'vision', 'visitor', 'voice', 'volcano', 'volleyball', 'voyage', 'vulture', 'waiter', 'waitress',
    'walk', 'wall', 'wallaby', 'wallet', 'walrus', 'war', 'warm', 'wash', 'washer', 'wasp', 'waste', 'watch', 'watchmaker', 'water',
    'waterfall', 'wave', 'wax', 'way', 'wealth', 'weapon', 'weasel', 'weather', 'wedge', 'wednesday', 'weed', 'weeder', 'week',
    'weight', 'whale', 'wheel', 'whip', 'whiskey', 'whistle', 'white', 'wholesaler', 'whorl', 'wilderness', 'william', 'willow',
    'wind', 'windchime', 'window', 'windscreen', 'windshield', 'wine', 'wing', 'winter', 'wire', 'wish', 'witch', 'withdrawal',
    'witness', 'wolf', 'woman', 'women', 'wood', 'wool', 'woolen', 'word', 'work', 'workshop', 'worm', 'wound', 'wrecker', 'wren',
    'wrench', 'wrinkle', 'wrist', 'writer', 'xylophone', 'yacht', 'yak', 'yam', 'yard', 'yarn', 'year', 'yellow', 'yew', 'yogurt',
    'yoke', 'yugoslavian', 'zebra', 'zephyr', 'zinc', 'zipper', 'zone', 'zoo', 'zoology'];
exports.adjectives = ['aback', 'abaft', 'abandoned', 'abashed', 'aberrant', 'abhorrent', 'abiding', 'abject', 'ablaze', 'able', 'abnormal', 'aboard',
    'aboriginal', 'abortive', 'abounding', 'abrasive', 'abrupt', 'absent', 'absorbed', 'absorbing', 'abstracted', 'absurd', 'abundant', 'abusive',
    'acceptable', 'accessible', 'accidental', 'accurate', 'acid', 'acidic', 'acoustic', 'acrid', 'actually', 'ad', 'hoc', 'adamant', 'adaptable',
    'addicted', 'adhesive', 'adjoining', 'adorable', 'adventurous', 'afraid', 'aggressive', 'agonizing', 'agreeable', 'ahead', 'ajar', 'alcoholic',
    'alert', 'alike', 'alive', 'alleged', 'alluring', 'aloof', 'amazing', 'ambiguous', 'ambitious', 'amuck', 'amused', 'amusing', 'ancient', 'angry',
    'animated', 'annoyed', 'annoying', 'anxious', 'apathetic', 'aquatic', 'aromatic', 'arrogant', 'ashamed', 'aspiring', 'assorted', 'astonishing',
    'attractive', 'auspicious', 'automatic', 'available', 'average', 'awake', 'aware', 'awesome', 'awful', 'axiomatic', 'bad', 'barbarous', 'bashful',
    'bawdy', 'beautiful', 'befitting', 'belligerent', 'beneficial', 'bent', 'berserk', 'best', 'better', 'bewildered', 'big', 'billowy', 'bite-sized',
    'bitter', 'bizarre', 'black', 'black-and-white', 'bloody', 'blue', 'blue-eyed', 'blushing', 'boiling', 'boorish', 'bored', 'boring', 'bouncy',
    'boundless', 'brainy', 'brash', 'brave', 'brawny', 'breakable', 'breezy', 'brief', 'bright', 'bright', 'broad', 'broken', 'brown', 'bumpy', 'burly',
    'bustling', 'busy', 'cagey', 'calculating', 'callous', 'calm', 'capable', 'capricious', 'careful', 'careless', 'caring', 'cautious', 'ceaseless',
    'certain', 'changeable', 'charming', 'cheap', 'cheerful', 'chemical', 'chief', 'childlike', 'chilly', 'chivalrous', 'chubby', 'chunky', 'clammy',
    'classy', 'clean', 'clear', 'clever', 'cloistered', 'cloudy', 'closed', 'clumsy', 'cluttered', 'coherent', 'cold', 'colorful', 'colossal', 'combative',
    'comfortable', 'common', 'complete', 'complex', 'concerned', 'condemned', 'confused', 'conscious', 'cooing', 'cool', 'cooperative', 'coordinated',
    'courageous', 'cowardly', 'crabby', 'craven', 'crazy', 'creepy', 'crooked', 'crowded', 'cruel', 'cuddly', 'cultured', 'cumbersome', 'curious', 'curly',
    'curved', 'curvy', 'cut', 'cute', 'cute', 'cynical', 'daffy', 'daily', 'damaged', 'damaging', 'damp', 'dangerous', 'dapper', 'dark', 'dashing', 'dazzling',
    'dead', 'deadpan', 'deafening', 'dear', 'debonair', 'decisive', 'decorous', 'deep', 'deeply', 'defeated', 'defective', 'defiant', 'delicate',
    'delicious', 'delightful', 'demonic', 'delirious', 'dependent', 'depressed', 'deranged', 'descriptive', 'deserted', 'detailed', 'determined',
    'devilish', 'didactic', 'different', 'difficult', 'diligent', 'direful', 'dirty', 'disagreeable', 'disastrous', 'discreet', 'disgusted',
    'disgusting', 'disillusioned', 'dispensable', 'distinct', 'disturbed', 'divergent', 'dizzy', 'domineering', 'doubtful', 'drab', 'draconian',
    'dramatic', 'dreary', 'drunk', 'dry', 'dull', 'dusty', 'dynamic', 'dysfunctional', 'eager', 'early', 'earsplitting', 'earthy', 'easy', 'eatable',
    'economic', 'educated', 'efficacious', 'efficient', 'eight', 'elastic', 'elated', 'elderly', 'electric', 'elegant', 'elfin', 'elite',
    'embarrassed', 'eminent', 'empty', 'enchanted', 'enchanting', 'encouraging', 'endurable', 'energetic', 'enormous', 'entertaining',
    'enthusiastic', 'envious', 'equable', 'equal', 'erect', 'erratic', 'ethereal', 'evanescent', 'evasive', 'even excellent excited',
    'exciting exclusive', 'exotic', 'expensive', 'extra-large extra-small exuberant', 'exultant', 'fabulous', 'faded', 'faint fair',
    'faithful', 'fallacious', 'false familiar famous', 'fanatical', 'fancy', 'fantastic', 'far', ' far-flung', ' fascinated', 'fast',
    'fat faulty', 'fearful fearless', 'feeble feigned', 'female fertile', 'festive', 'few fierce', 'filthy', 'fine', 'finicky', 'first',
    'five', ' fixed', ' flagrant', 'flaky', 'flashy', 'flat', 'flawless', 'flimsy', ' flippant', 'flowery', 'fluffy', 'fluttering', 'foamy',
    'foolish', 'foregoing', 'forgetful', 'fortunate', 'four frail', 'fragile', 'frantic', 'free', ' freezing', ' frequent', ' fresh', ' fretful',
    'friendly', 'frightened frightening full fumbling functional', 'funny', 'furry furtive', 'future futuristic', 'fuzzy ', 'gabby', 'gainful',
    'gamy', 'gaping', 'garrulous', 'gaudy', 'general gentle', 'giant', 'giddy', 'gifted', 'gigantic', 'glamorous', 'gleaming', 'glib',
    'glistening glorious', 'glossy', 'godly', 'good', 'goofy', 'gorgeous', 'graceful', 'grandiose', 'grateful gratis', 'gray greasy great',
    'greedy', 'green grey grieving', 'groovy', 'grotesque', 'grouchy', 'grubby gruesome', 'grumpy', 'guarded', 'guiltless', 'gullible gusty', 'half',
    'hallowed', 'halting', 'handsome', 'handsomely', 'handy', 'hanging', 'hapless', 'happy', 'hard', 'hard-to-find', 'harmonious', 'harsh', 'hateful',
    'heady', 'healthy', 'heartbreaking', 'heavenly heavy hellish', 'helpful', 'helpless', 'hesitant', 'hideous high', 'highfalutin', 'high-pitched',
    'hilarious', 'hissing', 'historical', 'holistic', 'hollow', 'homeless', 'homely', 'honorable', 'horrible', 'hospitable', 'hot huge', 'hulking', 'humdrum',
    'humorous', 'hungry', 'hurried', 'hurt', 'hushed', 'husky', 'hypnotic', 'hysterical', 'icky', 'icy', 'idiotic', 'ignorant', 'ill', 'illegal', 'ill-fated',
    'ill-informed', 'illustrious', 'imaginary', 'immense', 'imminent', 'impartial', 'imperfect', 'impolite', 'important', 'imported', 'impossible', 'incandescent',
    'incompetent', 'inconclusive', 'industrious', 'incredible', 'inexpensive', 'infamous', 'innate', 'innocent', 'inquisitive', 'insidious', 'instinctive', 'intelligent',
    'interesting', 'internal', 'invincible', 'irate', 'irritating', 'itchy', 'jaded', 'jagged', 'jazzy', 'jealous', 'jittery', 'jobless', 'jolly', 'joyous', 'judicious',
    'juicy', 'jumbled', 'jumpy', 'juvenile', 'kaput', 'keen', 'kind', 'kindhearted', 'kindly', 'knotty', 'knowing', 'knowledgeable', 'known', 'labored', 'lackadaisical',
    'lacking', 'lame', 'lamentable', 'languid', 'large', 'last', 'late', 'laughable', 'lavish', 'lazy',
    'lean', 'learned', 'left', 'legal', 'lethal', 'level', 'lewd', 'light', 'like', 'likeable', 'limping', 'literate', 'little', 'lively',
    'lively', 'living', 'lonely', 'long', 'longing', 'long-term', 'loose', 'lopsided', 'loud', 'loutish', 'lovely', 'loving', 'low', 'lowly',
    'lucky', 'ludicrous', 'lumpy', 'lush', 'luxuriant', 'lying', 'lyrical', 'macabre', 'macho', 'maddening', 'madly', 'magenta', 'magical',
    'magnificent', 'majestic', 'makeshift', 'male', 'malicious', 'mammoth', 'maniacal', 'many', 'marked', 'massive', 'married', 'marvelous',
    'material', 'materialistic', 'mature', 'mean', 'measly', 'meaty', 'medical', 'meek', 'mellow', 'melodic', 'melted', 'merciful', 'mere',
    'messy', 'mighty', 'military', 'milky', 'mindless', 'miniature', 'minor', 'miscreant', 'misty', 'mixed', 'moaning', 'modern', 'moldy',
    'momentous', 'motionless', 'mountainous', 'muddled', 'mundane', 'murky', 'mushy', 'mute', 'mysterious', 'naive', 'nappy', 'narrow', 'nasty',
    'natural', 'naughty', 'nauseating', 'near', 'neat', 'nebulous', 'necessary', 'needless', 'needy', 'neighborly', 'nervous', 'new', 'next', 'nice',
    'nifty', 'nimble', 'nine', 'nippy', 'noiseless', 'noisy', 'nonchalant', 'nondescript', 'nonstop', 'normal', 'nostalgic', 'nosy', 'noxious', 'null',
    'numberless', 'numerous', 'nutritious', 'nutty', 'oafish', 'obedient', 'obeisant', 'obese', 'obnoxious', 'obscene', 'obsequious', 'observant',
    'obsolete', 'obtainable', 'oceanic', 'odd', 'offbeat', 'old', 'old-fashioned', 'omniscient', 'one', 'onerous', 'open', 'opposite', 'optimal',
    'orange', 'ordinary', 'organic', 'ossified', 'outgoing', 'outrageous', 'outstanding', 'oval', 'overconfident', 'overjoyed', 'overrated', 'overt',
    'overwrought', 'painful', 'painstaking', 'pale', 'paltry', 'panicky', 'panoramic', 'parallel', 'parched', 'parsimonious', 'past', 'pastoral',
    'pathetic', 'peaceful', 'penitent', 'perfect', 'periodic', 'permissible', 'perpetual', 'petite', 'petite', 'phobic', 'physical', 'picayune',
    'pink', 'piquant', 'placid', 'plain', 'plant', 'plastic', 'plausible', 'pleasant', 'plucky', 'pointless', 'poised', 'polite', 'political', 'poor',
    'possessive', 'possible', 'powerful', 'precious', 'premium', 'present', 'pretty', 'previous', 'pricey', 'prickly', 'private', 'probable',
    'productive', 'profuse', 'protective', 'proud', 'psychedelic', 'psychotic', 'public', 'puffy', 'pumped', 'puny', 'purple', 'purring', 'pushy',
    'puzzled', 'puzzling', 'quack', 'quaint', 'quarrelsome', 'questionable', 'quick', 'quickest', 'quiet', 'quirky', 'quixotic', 'quizzical', 'rabid',
    'racial', 'ragged', 'rainy', 'rambunctious', 'rampant', 'rapid', 'rare', 'raspy', 'ratty', 'ready', 'real', 'rebel', 'receptive', 'recondite', 'red',
    'redundant', 'reflective', 'regular', 'relieved', 'remarkable', 'reminiscent', 'repulsive', 'resolute', 'resonant', 'responsible', 'rhetorical',
    'rich', 'right', 'righteous', 'rightful', 'rigid', 'ripe', 'ritzy', 'roasted', 'robust', 'romantic', 'roomy', 'rotten', 'rough', 'round', 'royal',
    'ruddy', 'rude', 'rural', 'rustic', 'ruthless', 'sable', 'sad', 'safe', 'salty', 'same', 'sassy', 'satisfying', 'savory', 'scandalous', 'scarce',
    'scared', 'scary', 'scattered', 'scientific', 'scintillating', 'scrawny', 'screeching', 'second', 'second-hand', 'secret', 'secretive', 'sedate',
    'seemly', 'selective', 'selfish', 'separate', 'serious', 'shaggy', 'shaky', 'shallow', 'sharp', 'shiny', 'shivering', 'shocking', 'short', 'shrill',
    'shut', 'shy', 'sick', 'silent', 'silent', 'silky', 'silly', 'simple', 'simplistic', 'sincere', 'six', 'skillful', 'skinny', 'sleepy', 'slim', 'slimy',
    'slippery', 'sloppy', 'slow', 'small', 'smart', 'smelly', 'smiling', 'smoggy', 'smooth', 'sneaky', 'snobbish', 'snotty', 'soft', 'soggy',
    'solid', 'somber', 'sophisticated', 'sordid', 'sore', 'sore', 'sour', 'sparkling', 'special', 'spectacular', 'spicy', 'spiffy', 'spiky',
    'spiritual', 'spiteful', 'splendid', 'spooky', 'spotless', 'spotted', 'spotty', 'spurious', 'squalid', 'square', 'squealing', 'squeamish',
    'staking', 'stale', 'standing', 'statuesque', 'steadfast', 'steady', 'steep', 'stereotyped', 'sticky', 'stiff', 'stimulating', 'stingy',
    'stormy', 'straight', 'strange', 'striped', 'strong', 'stupendous', 'stupid', 'sturdy', 'subdued', 'subsequent', 'substantial', 'successful',
    'succinct', 'sudden', 'sulky', 'super', 'superb', 'superficial', 'supreme', 'swanky', 'sweet', 'sweltering', 'swift', 'symptomatic', 'synonymous',
    'taboo', 'tacit', 'tacky', 'talented', 'tall', 'tame', 'tan', 'tangible', 'tangy', 'tart', 'tasteful', 'tasteless', 'tasty', 'tawdry', 'tearful',
    'tedious', 'teeny', 'teeny-tiny', 'telling', 'temporary', 'ten', 'tender tense', 'tense', 'tenuous', 'terrible', 'terrific', 'tested', 'testy',
    'thankful', 'therapeutic', 'thick', 'thin', 'thinkable', 'third', 'thirsty', 'thoughtful', 'thoughtless', 'threatening', 'three', 'thundering',
    'tidy', 'tight', 'tightfisted', 'tiny', 'tired', 'tiresome', 'toothsome', 'torpid', 'tough', 'towering', 'tranquil', 'trashy', 'tremendous',
    'tricky', 'trite', 'troubled', 'truculent', 'true', 'truthful', 'two', 'typical', 'ubiquitous', 'ugliest', 'ugly', 'ultra', 'unable', 'unaccountable',
    'unadvised', 'unarmed', 'unbecoming', 'unbiased', 'uncovered', 'understood', 'undesirable', 'unequal', 'unequaled', 'uneven', 'unhealthy',
    'uninterested', 'unique', 'unkempt', 'unknown', 'unnatural', 'unruly', 'unsightly', 'unsuitable', 'untidy', 'unused', 'unusual', 'unwieldy',
    'unwritten', 'upbeat', 'uppity', 'upset', 'uptight', 'used', 'useful', 'useless', 'utopian', 'utter', 'uttermost', 'vacuous', 'vagabond', 'vague',
    'valuable', 'various', 'vast', 'vengeful', 'venomous', 'verdant', 'versed', 'victorious', 'vigorous', 'violent', 'violet', 'vivacious', 'voiceless',
    'volatile', 'voracious', 'vulgar', 'wacky', 'waggish', 'waiting', '', 'wakeful', 'wandering', 'wanting', 'warlike', 'warm', 'wary', 'wasteful', 'watery',
    'weak', 'wealthy', 'weary', 'well-groomed', 'well-made', 'well-off', 'well-to-do', 'wet', 'whimsical', 'whispering', 'white', 'whole', 'wholesale',
    'wicked', 'wide', 'wide-eyed', 'wiggly', 'wild', 'willing', 'windy', 'wiry', 'wise', 'wistful', 'witty', 'woebegone', 'womanly', 'wonderful', 'wooden',
    'woozy', 'workable', 'worried', 'worthless', 'wrathful', 'wretched', 'wrong', 'wry', 'xenophobic', 'yellow', 'yielding', 'young', 'youthful', 'yummy',
    'zany', 'zealous', 'zesty', 'zippy', 'zonked'];


/***/ }),

/***/ "./data/locale/us/majorCities.json":
/*!*****************************************!*\
  !*** ./data/locale/us/majorCities.json ***!
  \*****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"New York, New York\",\"Los Angeles, California\",\"Chicago, Illinois\",\"Houston, Texas\",\"Philadelphia, Pennsylvania\",\"Phoenix, Arizona\",\"San Diego, California\",\"Dallas, Texas\",\"San Antonio, Texas\",\"Detroit, Michigan\",\"San Jose, California\",\"Indianapolis, Indiana\",\"San Francisco, California\",\"Jacksonville, Florida\",\"Columbus, Ohio\",\"Austin, Texas\",\"Memphis, Tennessee\",\"Baltimore, Maryland\",\"Milwaukee, Wisconsin\",\"Boston, Massachusetts\",\"Charlotte, North Carolina\",\"El Paso, Texas\",\"Washington, D.C.\",\"Seattle, Washington\",\"Fort Worth, Texas\",\"Denver, Colorado\",\"Nashville-Davidson, Tennessee\",\"Portland, Oregon\",\"Oklahoma City, Oklahoma\",\"Las Vegas, Nevada\"]");

/***/ }),

/***/ "./data/locale/us/menNames.json":
/*!**************************************!*\
  !*** ./data/locale/us/menNames.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Liam\",\"Noah\",\"William\",\"James\",\"Logan\",\"Benjamin\",\"Mason\",\"Elijah\",\"Oliver\",\"Jacob\",\"Lucas\",\"Michael\",\"Alexander\",\"Ethan\",\"Daniel\",\"Matthew\",\"Aiden\",\"Henry\",\"Joseph\",\"Jackson\",\"Samuel\",\"Sebastian\",\"David\",\"Carter\",\"Wyatt\",\"Jayden\",\"John\",\"Owen\",\"Dylan\",\"Luke\",\"Gabriel\",\"Anthony\",\"Isaac\",\"Grayson\",\"Jack\",\"Julian\",\"Levi\",\"Christopher\",\"Joshua\",\"Andrew\",\"Lincoln\",\"Mateo\",\"Ryan\",\"Jaxon\",\"Nathan\",\"Aaron\",\"Isaiah\",\"Thomas\",\"Charles\",\"Caleb\",\"Josiah\",\"Christian\",\"Hunter\",\"Eli\",\"Jonathan\",\"Connor\",\"Landon\",\"Adrian\",\"Asher\",\"Cameron\",\"Leo\",\"Theodore\",\"Jeremiah\",\"Hudson\",\"Robert\",\"Easton\",\"Nolan\",\"Nicholas\",\"Ezra\",\"Colton\",\"Angel\",\"Brayden\",\"Jordan\",\"Dominic\",\"Austin\",\"Ian\",\"Adam\",\"Elias\",\"Jaxson\",\"Greyson\",\"Jose\",\"Ezekiel\",\"Carson\",\"Evan\",\"Maverick\",\"Bryson\",\"Jace\",\"Cooper\",\"Xavier\",\"Parker\",\"Roman\",\"Jason\",\"Santiago\",\"Chase\",\"Sawyer\",\"Gavin\",\"Leonardo\",\"Kayden\",\"Ayden\",\"Jameson\"]");

/***/ }),

/***/ "./data/locale/us/states.json":
/*!************************************!*\
  !*** ./data/locale/us/states.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Alabama\",\"abbreviation\":\"AL\"},{\"name\":\"Alaska\",\"abbreviation\":\"AK\"},{\"name\":\"American Samoa\",\"abbreviation\":\"AS\"},{\"name\":\"Arizona\",\"abbreviation\":\"AZ\"},{\"name\":\"Arkansas\",\"abbreviation\":\"AR\"},{\"name\":\"California\",\"abbreviation\":\"CA\"},{\"name\":\"Colorado\",\"abbreviation\":\"CO\"},{\"name\":\"Connecticut\",\"abbreviation\":\"CT\"},{\"name\":\"Delaware\",\"abbreviation\":\"DE\"},{\"name\":\"District Of Columbia\",\"abbreviation\":\"DC\"},{\"name\":\"Federated States Of Micronesia\",\"abbreviation\":\"FM\"},{\"name\":\"Florida\",\"abbreviation\":\"FL\"},{\"name\":\"Georgia\",\"abbreviation\":\"GA\"},{\"name\":\"Guam\",\"abbreviation\":\"GU\"},{\"name\":\"Hawaii\",\"abbreviation\":\"HI\"},{\"name\":\"Idaho\",\"abbreviation\":\"ID\"},{\"name\":\"Illinois\",\"abbreviation\":\"IL\"},{\"name\":\"Indiana\",\"abbreviation\":\"IN\"},{\"name\":\"Iowa\",\"abbreviation\":\"IA\"},{\"name\":\"Kansas\",\"abbreviation\":\"KS\"},{\"name\":\"Kentucky\",\"abbreviation\":\"KY\"},{\"name\":\"Louisiana\",\"abbreviation\":\"LA\"},{\"name\":\"Maine\",\"abbreviation\":\"ME\"},{\"name\":\"Marshall Islands\",\"abbreviation\":\"MH\"},{\"name\":\"Maryland\",\"abbreviation\":\"MD\"},{\"name\":\"Massachusetts\",\"abbreviation\":\"MA\"},{\"name\":\"Michigan\",\"abbreviation\":\"MI\"},{\"name\":\"Minnesota\",\"abbreviation\":\"MN\"},{\"name\":\"Mississippi\",\"abbreviation\":\"MS\"},{\"name\":\"Missouri\",\"abbreviation\":\"MO\"},{\"name\":\"Montana\",\"abbreviation\":\"MT\"},{\"name\":\"Nebraska\",\"abbreviation\":\"NE\"},{\"name\":\"Nevada\",\"abbreviation\":\"NV\"},{\"name\":\"New Hampshire\",\"abbreviation\":\"NH\"},{\"name\":\"New Jersey\",\"abbreviation\":\"NJ\"},{\"name\":\"New Mexico\",\"abbreviation\":\"NM\"},{\"name\":\"New York\",\"abbreviation\":\"NY\"},{\"name\":\"North Carolina\",\"abbreviation\":\"NC\"},{\"name\":\"North Dakota\",\"abbreviation\":\"ND\"},{\"name\":\"Northern Mariana Islands\",\"abbreviation\":\"MP\"},{\"name\":\"Ohio\",\"abbreviation\":\"OH\"},{\"name\":\"Oklahoma\",\"abbreviation\":\"OK\"},{\"name\":\"Oregon\",\"abbreviation\":\"OR\"},{\"name\":\"Palau\",\"abbreviation\":\"PW\"},{\"name\":\"Pennsylvania\",\"abbreviation\":\"PA\"},{\"name\":\"Puerto Rico\",\"abbreviation\":\"PR\"},{\"name\":\"Rhode Island\",\"abbreviation\":\"RI\"},{\"name\":\"South Carolina\",\"abbreviation\":\"SC\"},{\"name\":\"South Dakota\",\"abbreviation\":\"SD\"},{\"name\":\"Tennessee\",\"abbreviation\":\"TN\"},{\"name\":\"Texas\",\"abbreviation\":\"TX\"},{\"name\":\"Utah\",\"abbreviation\":\"UT\"},{\"name\":\"Vermont\",\"abbreviation\":\"VT\"},{\"name\":\"Virgin Islands\",\"abbreviation\":\"VI\"},{\"name\":\"Virginia\",\"abbreviation\":\"VA\"},{\"name\":\"Washington\",\"abbreviation\":\"WA\"},{\"name\":\"West Virginia\",\"abbreviation\":\"WV\"},{\"name\":\"Wisconsin\",\"abbreviation\":\"WI\"},{\"name\":\"Wyoming\",\"abbreviation\":\"WY\"}]");

/***/ }),

/***/ "./lib/globals.ts":
/*!************************!*\
  !*** ./lib/globals.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ "./lib/mockachino.ts":
/*!***************************!*\
  !*** ./lib/mockachino.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var utils_1 = __webpack_require__(/*! ./utils */ "./lib/utils.ts");
var randi_1 = __importDefault(__webpack_require__(/*! ./randi */ "./lib/randi.ts"));
var globals_1 = __webpack_require__(/*! ./globals */ "./lib/globals.ts");
var menNames_json_1 = __importDefault(__webpack_require__(/*! ../data/locale/us/menNames.json */ "./data/locale/us/menNames.json"));
var states_json_1 = __importDefault(__webpack_require__(/*! ../data/locale/us/states.json */ "./data/locale/us/states.json"));
var majorCities_json_1 = __importDefault(__webpack_require__(/*! ../data/locale/us/majorCities.json */ "./data/locale/us/majorCities.json"));
var forLorem_json_1 = __importDefault(__webpack_require__(/*! ../data/forLorem.json */ "./data/forLorem.json"));
function buildPicsumUrl(w, h, o) {
    var id = utils_1.randn(globals_1.PicsumDefault.ni);
    var opts = o || globals_1.PicsumDefault.o;
    var url = "https://picsum.photos/id/" + id + "/" + w;
    h && (url += "/" + h);
    if (opts) {
        opts.ext && opts.ext === 'jpeg' ? url += '.jpg' : url += "." + opts.ext;
        opts.grayscale && (url += '?grayscale');
        switch (true) {
            case typeof opts.blur === 'number' && opts.blur >= 1 && opts.blur <= 10:
                url += opts.grayscale ? "&blur=" + opts.blur : "?blur=" + opts.blur;
                break;
            case typeof opts.blur === 'boolean' && opts.blur === true:
                url += opts.grayscale ? '&blur' : '?blur';
                break;
            case opts.blur && opts.blur < 1 || opts.blur && opts.blur > 10:
                url += opts.grayscale ? '&blur' : '?blur';
                break;
        }
    }
    return { data: url, info: "https://picsum.photos/id/" + id + "/info" };
}
function fetchPicsum(w, h, o) {
    return __awaiter(this, void 0, void 0, function () {
        var opts, urls, data, reader_1, stream, res, ret, _a, info, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    opts = __assign(__assign({}, o), { ext: o && o.ext || 'jpg' });
                    urls = buildPicsumUrl(w, h, opts);
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
    var state = states_json_1["default"][si];
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
        imageUrl: buildPicsumUrl(x || globals_1.PicsumDefault.w, y, z),
        imageBlob: fetchPicsum(x || globals_1.PicsumDefault.w, y, z)
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


/***/ }),

/***/ "./lib/randi.ts":
/*!**********************!*\
  !*** ./lib/randi.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var utils_1 = __webpack_require__(/*! ./utils */ "./lib/utils.ts");
var forRandi_1 = __webpack_require__(/*! ../data/forRandi */ "./data/forRandi.ts");
function Randi(separator) {
    separator = separator || ' ';
    var randomAjective = forRandi_1.adjectives[utils_1.randn(forRandi_1.adjectives.length, 0)];
    var randomNoun = forRandi_1.nouns[utils_1.randn(forRandi_1.nouns.length, 0)];
    randomAjective = randomAjective.trim().replace(/\s/g, separator);
    randomNoun = randomNoun.trim().replace(/\s/g, separator);
    return randomAjective.concat(separator, randomNoun);
}
exports["default"] = Randi;


/***/ }),

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function randn(max, min) {
    min = Math.ceil(Math.abs(min || 0));
    max = Math.floor(Math.abs(max || 1));
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.randn = randn;


/***/ })

/******/ });
});
//# sourceMappingURL=mockachino.js.map