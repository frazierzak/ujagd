// /* Toggle Animations */
// const jstoggle = document.getElementById('start');
// jstoggle.addEventListener('click', () => {
//   const animations = document.querySelectorAll('[data-animation');
//   animations.forEach(animation => {
//     const running = animation.style.animationPlayState || 'running';
//     animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
//   })
// });

// const jsreset = document.getElementById('reset');
// const secondhand = document.getElementById('secondhand');
// jsreset.addEventListener('click', () => {
//   secondhand.classList.add("reset");
//   void secondhand.offsetWidth;
//   secondhand.classList.remove("reset");
//   }, false);

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const secondhand = document.getElementById('secondhand');

start.addEventListener('click', () => {
  secondhand.className = '';
  secondhand.classList.add('start');
})

stop.addEventListener('click', () => {
  secondhand.className = '';
  secondhand.classList.add('stop');
})

reset.addEventListener('click', () => {
  secondhand.classList.add('reset');
  secondhand.style.animation = 'none';
  secondhand.offsetHeight; /* trigger reflow */
  secondhand.style.animation = null; 
})