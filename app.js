const text = document.querySelector('.text');
const main = document.querySelector('.main-text');

setTimeout(function () {
  text.style.opacity = "1";
  text.style.transition = "opacity 2s";
}, 2000);
setTimeout(function () {
  main.style.display = "block";
}, 1000);
setTimeout(function () {
  main.style.opacity = "0";
  main.style.transition = "opacity 1s";
}, 7000);