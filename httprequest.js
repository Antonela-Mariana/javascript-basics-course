//loadRequest('https://meowfacts.herokuapp.com/fact', myFunction1);
// function loadRequest(url, cFunction) {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function () {
//     cFunction(xhttp);
//   };
//   xhttp.open('GET', url);
//   xhttp.send();
// }

// function myFunction1(xhttp) {
//   document.getElementById('demo').innerHTML = xhttp.responseText;
// }

// function loadRequest1(url, cFunction) {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     console.log('dfs status: ' + xhttp.status + ' ' + xhttp.readyState);
//     cFunction(xhttp);
//   };
//   xhttp.open('GET', url);
//   xhttp.send();
// }

// function myFunction2(xhttp) {
//   console.log('request', xhttp.status);
//   if (xhttp.readyState == 4 && xhttp.status == 200) {
//     //here we know that the request is done because readyState is 4 and it's done with success because status is 200
//     document.getElementById('demo').innerHTML = xhttp.responseText;
//     console.log(xhttp.responseText);
//     var obj = JSON.parse(xhttp.responseText);
//     return xhttp.responseText;
//   } else if (xhttp.readyState == 4 && xhttp.status == 404) {
//     //here we can make different things for different statuses: for 404 for example to show an error message
//     //to obtain an 404 error just modify the url to invalidate it
//     console.error('NOT FOUND: ' + xhttp.status);
//     return 'NOT FOUND';
//   } else {
//     console.log('status: ' + xhttp.status + ' ' + xhttp.readyState);
//   }
// }

// loadRequest1('https://meowfacts.herokuapp.com', myFunction2);

function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.send();
  });
}

makeRequest('GET', 'https://dog.ceo/api/breeds/image/random')
  .then((res) => {
    var mess = JSON.parse(res);
    console.log(mess.message);
    document.getElementById('img').src = mess.message;
  })
  .catch((err) => console.error(err));
