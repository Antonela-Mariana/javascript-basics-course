function sum(p1, p2) {
  return p1 + p2;
}

const result = sum(3, 4);
console.log('3+4 = ' + result); //output will be 3+4 = 7
//////

var mySum = 0;
const sum2 = function (p1, p2) {
  mySum = p1 + p2;
};
sum2(3, 4);
console.log('sum2 = ' + mySum); //output will be sum2 = 7
//////

(function () {
  console.log('Self invoking');
})(); //output will be Self invoking

function calculate(p1, p2 = 2) {
  console.log('result = ' + p1 * p2);
}

const double = calculate(3); //output will be result = 6
const triple = calculate(3, 3); //output will be result = 9
const triple1 = calculate(3, 3, 3); //parametru in plus
const stringMultiply = calculate('test');
const arrayMultiply = calculate([2, 3, 4])

function divide(el1, el2) {
  console.log('divide result: ', el1 - el2);
};

const divide1 = divide(7,5);
const divide2 = divide(2);  //second param undefined


const x = (a, b) => {
  return a + b;
}; //arrow function
console.log(x(3, 4)); //output will be 7

function forSort(a, b) {
  return a - b;
}

const array = [5, 4, 8, 7, 9, 3];
array.sort(function forSort(a, b) {
  return a - b;
});
console.log(array); //output will be [3, 4, 5, 7, 8, 9]

array.sort((a, b) => forSort(a, b));
console.log(array); //output will be [3, 4, 5, 7, 8, 9]

array.sort((a, b) => b - a);
console.log(array); //output will be [9, 8, 7, 5, 4, 3]

const newArray = array.filter(function (a) {
  return a % 2 == 0;
});
console.log(array); //output will be [9, 8, 7, 5, 4, 3]
console.log(newArray); //output will be [8, 4]
//console.log(newArray.toString());
// ('8,4');
