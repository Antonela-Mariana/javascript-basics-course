localStorage.setItem('date', new Date().toDateString());

var currentDate = localStorage.getItem('date');
console.log(currentDate);

sessionStorage.setItem('day', new Date().getDate());

var currentDay = sessionStorage.getItem('day');
console.log(currentDay);

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  console.log(cname + '=' + cvalue + ';' + expires + ';path=/');
}

function getCookie(cname) {
  let name = cname + '=';
  let cookies = document.cookie.split(';');
  for (let c of cookies) {
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

setCookie('username', 'Anto', 365);
let user = getCookie('username');
console.log('teeeeeest', user);
