document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 / 2 + 'px'; // 只针对手机端，不适合平板和电脑

window.addEventListener('load', function () {
  FastClick.attach(document.body);
}, false);

document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
  	e.preventDefault();
  }
}, false);
