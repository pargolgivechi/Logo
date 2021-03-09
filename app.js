const text = document.querySelector('.text');

setTimeout(function () {
  text.style.opacity = "1";
  text.style.transition = "opacity 2s";
}, 2000);
