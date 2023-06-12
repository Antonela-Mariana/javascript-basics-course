let a = '2';
let b = 2;

if (a == b) {
  console.log('equals');
} else {
  console.log('not equals');
}

console.log(2 + '3'); //will produce 23
console.log(2 + 4 + '3'); //will produce 63
console.log(2 + '4' + 3); //will produce 243

console.log('text' + 2); //will produce text2
console.log('text' + 'text'); //will prodcue texttext

let x = 'test';
let y = new String('test1');
console.log('type ' + typeof x);
console.log('instance ', y instanceof String);
console.log('type ' + typeof y);
