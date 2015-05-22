//displays the current time
var d, h, m, s, clock;
//created a function named 'displayTime' to run 
function displayTime() {
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();
	
//add zero to the left of the numbers if they are single digits
if(h <= 9) {
	h = '0'+h;
}

if(m <= 9) {
	m = '0'+m;
}

if(s <= 9) {
	s = '0'+s;
}

clock = h+":"+m+":"+s;

document.getElementById("clkcolor").innerHTML = clock;

//hand picked colors in an array called 'colors'
var colors = ["#221752","#c0c0c0","#587b2e","#000000","#464646","#99081E"];
//created a variable for choosing a random color from the length of the 'colors' array
//and named it 'bodyColor'
var bodyColor = Math.floor(Math.random() * colors.length);


var selectedcolor = colors[bodyColor];

document.body.style.background = selectedcolor;
}

setInterval(displayTime, 1000);