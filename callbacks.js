function calculate(param1, param2, myCallback) {
  let sum = param1 + param2;
  //console.log('sum: ', sum)
  myCallback(sum);
}

function writeInConsole(val) {
  console.log('sum: ', val);
}

function writeInDiv(val) {
  document.getElementById('demo').innerHTML = 'sum= ' + val;
}

calculate(1, 2, writeInConsole);
calculate(2, 3, writeInDiv);

function showTime() {
  let date = new Date();
  let div = document.getElementById('time');
  div.innerHTML =
    date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

setInterval(showTime, 1000);

function someThing(callback) {
  console.log('Do Something!');
  callback();
}

function someThingElse(callback) {
  console.log('Do Something Else!');
  callback();
}

function doThirdThing(callback) {
  console.log('Do Third thing!');
  callback();
}

someThing(function () {
  console.log('First anonymous callback!');
  someThingElse(function () {
    console.log('Second anonymous callback!');
    doThirdThing(function () {
      console.log('Third anonymous callback!');
    });
  });
});
