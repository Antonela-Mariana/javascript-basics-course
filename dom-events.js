function showMessage() {
  document.getElementsByTagName('p')[0].innerHTML = 'Button pressed';
}

function mouseOut() {
  document.getElementsByClassName('divStyle')[0].innerHTML = 'Mouse out';
  document.getElementsByClassName('divStyle')[0].style.backgroundColor = 'blue';
}

function mouseOver() {
  document.getElementsByClassName('divStyle')[0].innerHTML = 'Mouse Over Me';
  document.getElementsByClassName('divStyle')[0].style.backgroundColor = 'red';
}

// document.getElementById('buttonOne').onclick = showMessage;
// document.getElementsByClassName('divStyle')[0].onmouseover = mouseOver;
// document.getElementsByClassName('divStyle')[0].onmouseout = mouseOut;

document.getElementById('buttonOne').addEventListener('click', showMessage);
document
  .getElementsByClassName('divStyle')[0]
  .addEventListener('mouseover', mouseOver);
document
  .getElementsByClassName('divStyle')[0]
  .addEventListener('mouseout', mouseOut);

document
  .getElementsByClassName('divStyle')[0]
  .removeEventListener('mouseout', mouseOut); //maybe after callbacks
