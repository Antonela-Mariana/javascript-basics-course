var text = 'I learn javascript';
console.log('Length=' + text.length); //will display the string length

var newString = new String('test');

let uppercase = text.toUpperCase();
let lowercase = text.toLowerCase();

let array = text.split(' ');

console.log('upper: ' + uppercase); //will show "upper: I LEARN JAVASCRIPT"
console.log('lower: ' + lowercase); //will show "lower: i learn javascript"
console.log('trim: ' + text.trim()); //will  "trim: I learn javascript"
console.log('trim: ' + array[0]); //will show "trim: I"
console.log('slice: ' + text.slice(1, 7)); //will show "slice:  learn"
console.log('slice: ' + text.slice(-17, -11)); //will show "slice:  learn"
console.log('substr: ' + text.substr(1, 6)); //will show "substr:  learn"
console.log('replace: ' + text.replace('learn', 'like')); //will show "replace: I like javascript"

const text2 = 'This is a string which contains the word string';
let lastIndex = text2.lastIndexOf('string');
let index = text2.indexOf('string');
console.log('lastIndex: ' + lastIndex); //will show "lastIndex: 41"
console.log('index: ' + index); //will show "index: 10"
console.log('the string starts with This: ' + text2.startsWith('This')); //will show "the string starts with This: true"
