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
const reset = document.getElementById('reset');
const secondhand = document.getElementById('secondhand');
const toggle = document.getElementById('day_night');

start.addEventListener('click', () => {
  if(secondhand.classList.contains("stop")) {
  	secondhand.className = '';
  	secondhand.classList.add('start');
  	start.innerHTML = "Stop";
  } else {
  	if(secondhand.classList.contains(""))
  	secondhand.className = '';
  	secondhand.classList.add('stop');
  	start.innerHTML = "Start";
  }
})

reset.addEventListener('click', () => {
  secondhand.className = '';
  secondhand.classList.add('reset');
  secondhand.classList.add('stop');
  secondhand.style.animation = 'none';
  secondhand.offsetHeight; /* trigger reflow */
  secondhand.style.animation = null; 
  start.innerHTML = "Start";
})

toggle.addEventListener('input', () => {
	if(toggle.checked) {
  		$("body").css({
  			"background": "#0c0c0c",
  			"color": "#ffffff"
  		})
  		$(secondhand).css({
  			"background": "#bfbfbf"
  		})
  		$(".clicker").addClass("night");
  		$( ".light" ).fadeOut( "25", function() {
    		$( ".dark" ).fadeIn( "5", function() {
    		// Animation complete
  			});
  		});
	} else {
		$("body").css({
  			"background": "#ffffff",
  			"color": "#0c0c0c"
  		})
  		$(secondhand).css({
  			"background": "#0c0c0c"
  		})
  		$( ".dark" ).fadeOut( "25", function() {
    		$( ".light" ).fadeIn( "5", function() {
    		// Animation complete
  			});
  		});
	}
})