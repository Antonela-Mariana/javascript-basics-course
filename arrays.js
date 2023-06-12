const sports = ['football', 'handball', 'tennis', 'basketball'];

const sports1 = new Array('football', 'handball', 'tennis', 'basketball');

console.log('sports:', sports);
console.log('first:', sports[0]);
console.log('sports:', sports.toString());
console.log('sports:', sports.join(' & '));

console.log(sports.pop());
console.log('sports:', sports.join(' & '));

sports.push('basketball');
console.log('sports:', sports.join(' & '));

for (let i = 0; i < sports.length; i++) {
  console.log('el: ' + sports[i]);
}

for (sport of sports) {
  console.log('sport: ' + sport);
}
