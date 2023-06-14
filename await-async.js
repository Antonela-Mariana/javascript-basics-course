// async function display() {
//   let myPromise = new Promise(function(resolve, reject) {
//     resolve("i'm a resolved promise !!");
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }
// display();

async function display() {
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("i'm a resolved promise !!"), 3000);
  });
  document.getElementById('demo').innerHTML = await myPromise;
}
display();
