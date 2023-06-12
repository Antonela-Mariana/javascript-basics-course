var date = new Date();
console.log('date: ', date.toString());

var date1 = new Date(2023, 6, 13);
console.log('date1: ', date1.toDateString());

var date2 = new Date('2023-06-13');
console.log('date2: ', date2.toDateString());

var date3 = new Date(1686603600000);
console.log('date3: ' + date3);

console.log(date.getFullYear()); //will show 2023
console.log(date.getDate()); //return the day in the month; will show 16
console.log(date.getDay()); //will show 5
console.log(date.getMonth()); //will show 6
date.setDate(3);
console.log(date.getDate()); //will show 3
date.setMonth(8);
console.log(date.getMonth()); //will show 8
