const btnElement = document.getElementById('btn__element');
const btnState = document.getElementById('btn__state');

let clickCount = 0;

btnElement.addEventListener('click', function () {
  clickCount++;
  btnState.textContent = clickCount;
});