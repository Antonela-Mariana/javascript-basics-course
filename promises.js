let myPromise = new Promise(function (resolve, reject) {
  let x = Math.floor(Math.random() * 10);
  if (x > 3) {
    resolve('OK: ' + x);
  } else {
    reject('Reject: ' + x);
  }
});

function display(message) {
  document.getElementById('promise-message').innerHTML = message;
  return res;
}

function handleError(error) {
  console.error(error);
  return error;
}
// myPromise.then(
//   (value) => display(value),
//   (error) => console.error(error)
// );

myPromise
  .then(
    (value) => display(value),
    (error) => handleError(error)
  )
  .then((value) => console.log('value: ' + value));
