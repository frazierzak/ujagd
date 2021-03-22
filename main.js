const start = document.getElementById('start');
const reset = document.getElementById('reset');
const secondhand = document.getElementById('secondhand');

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

const toggle = document.getElementById('day_night_toggle');
var day_mode = false;

toggle.addEventListener('click', () => {
	if(day_mode) {
  		$("body").css({
  			"background": "#0c0c0c",
  			"color": "#ffffff"
  		})
  		$("#day_night_toggle").text("Day Mode");
  		$(secondhand).css({
  			"background": "#fff"
  		})
  		$(".clicker").addClass("night");
  		$( ".light" ).fadeOut("25", function() {
    		$( ".dark" ).fadeIn("5");
  		});
  		day_mode = false;
	} else {
		$("body").css({
  			"background": "#ffffff",
  			"color": "#0c0c0c"
  		})
  		$("#day_night_toggle").text("Night Mode");
  		$(secondhand).css({
  			"background": "#0c0c0c"
  		})
  		$(".clicker").removeClass("night");
  		$( ".dark" ).fadeOut( "25", function() {
    		$( ".light" ).fadeIn("5");
  		});
  		day_mode = true;
	}
})