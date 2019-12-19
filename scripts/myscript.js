		
const newYear = () => {
	let nextYear = new Date().getFullYear() + 1;
	let str = 'Jan 1, '+nextYear+' 00:00:00';
	let countDate = new Date(str).getTime();
	
	
	let now = new Date().getTime();
	let	gap = countDate - now;
			
	let seconds = 1000;
	let minutes = seconds * 60;
	let hour    = minutes * 60;
	let day     = hour * 24;
			
	let cDays = Math.floor(gap/(day));
	let cHour = Math.floor((gap % (day)) / (hour));
	let cMin  = Math.floor((gap % (hour)) / (minutes));
	let cSec  = Math.floor((gap % (minutes)) / (seconds));
			
	document.getElementById('day').innerText = cDays;
	document.getElementById('hour').innerText = cHour;
	document.getElementById('minutes').innerText = cMin;
	document.getElementById('seconds').innerText = cSec; 
	
	
	//let str = '<span>Countdown to New Year</span>'+ nextYear;
	document.getElementById('ny').innerText = nextYear;
	
	
}
		
setInterval(function(){ newYear();}, 1000);