
var myObj = {
  name: 'Javascript Basics',
  nrOfPArticipants: 12,
  tags: ['QA', 'Selenium', 'Javascript'],
  structure: {
    firstSession: {
      name: 'First Sesion',
      date: '13-06-2023',
    },
    secondSession: {
      name: 'Second Sesion',
      date: '15-06-2023',
    },
  },
};

console.log('obj: ', myObj);
let strifyedObj = JSON.stringify(myObj); //JSON
console.log('obj: ' + strifyedObj);

console.log(myObj['name']);
console.log(myObj.name);
console.log(myObj.structure.firstSession.name);

for (property in myObj) {
  if (typeof myObj[property] === 'object') {
    console.log('object');
  } else {
    console.log(property + ': ' + myObj[property]);
  }
}

const jsonText =
  '{"name":"Javascript Basics","nrOfPArticipants":12,"tags":["QA","Selenium","Javascript"],"structure":{"firstSession":{"name":"First Sesion","date":"13-06-2023"},"secondSession":{"name":"Second Sesion","date":"15-06-2023"}}}';
let jsObj = JSON.parse(jsonText);
console.log('object: ', jsObj);
