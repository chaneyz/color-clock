//lets display the current time
var d, h, m, s, clock;
function displayTime() {
	d = new Date(); //new data object
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
//set time
document.getElementById("clkcolor").innerHTML = clock;
	
var colors = ["#0099cc","#c0c0c0","#587b2e","#990000","#1C8200","#987baa","#464646","#AA8971","#1987FC","#99081E"];

setInterval(function() {

var bodybgarrayno = Math.floor(Math.random() * colors.length);
var selectedcolor = colors[bodybgarrayno];

document.body.style.background = selectedcolor;
	}, 2000);
}

//call the function
setInterval(displayTime, 1000);