// CommonJS - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')


console.log(data);
console.log(names);
console.log(sayHi);

sayHi('Calvin')
sayHi(names.carlito)
sayHi(names.keishy)