// async function display() {
//   let myPromise = new Promise(function (resolve, reject) {
//     resolve("i'm a resolved promiseeee !!");
//   });
//   document.getElementById('demo').innerHTML = await myPromise;
// }
// display();

function display() {
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("i'm a resolved promise !!"), 3000);
    // let x = Math.floor(Math.random() * 10);
    // if (x > 3) {
    //   setTimeout(() => resolve('OK: ' + x));
    // } else {
    //   setTimeout(() => reject('Reject: ' + x));
    // }
  });
  return myPromise;
}

async function waitFunction() {
  document.getElementById('demo').innerHTML = await display();

  // const response = await display().catch((err) => {
  //   console.error(err);
  //   return 'default response';
  // });
  // document.getElementById('demo').innerHTML = response;
}
//display();

waitFunction();
