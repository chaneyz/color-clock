var boxElement = document.querySelector('.box');
boxElement.style.width = '500px';
boxElement.style.height = '500px';
boxElement.style.backgroundColor = 'red';

var currentDate = new Date();
console.log(currentDate);
// var currentHours = currentTime.getHours ();
// console.log(currentHours);
var currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
console.log(currentMinutes);
var currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
console.log(currentSeconds);



function changeColor() {
	var currentColor = boxElement.style.backgroundColor;
	if(currentColor == '') {
		currentColor = 0;
	}
	var newColor = parseInt(currentColor) + 1;
	console.log(newColor);
	boxElement.style.backgroundColor = newColor+'blue';
	console.log(boxElement.style.backgroundColor);
}

// setInterval(changeColor, 50);