/* Toggle Animations */
const jstoggle = document.getElementById('start');
jstoggle.addEventListener('click', () => {
  const animations = document.querySelectorAll('[data-animation');
  animations.forEach(animation => {
    const running = animation.style.animationPlayState || 'running';
    animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
  })
});

const jsreset = document.getElementById('reset');
const secondhand = document.getElementById('secondhand');
jsreset.addEventListener('click', () => {
  secondhand.classList.add("reset");
  void secondhand.offsetWidth;
  secondhand.classList.remove("reset");
  }, false);