var location1=3;
var location2=4;
var location3=5;
var guess;
var guesses=0;
var hit=0;
var isSunk=false;

while (isSunk==false){
	guess=prompt("please input 0-6 number");
	if (guess<0 || guess>6) {
		alert("please try it again");
	} else {
		guesses=guesses+1;
	}
	if (guess==location1||guess==location2||guess==location3) {
		hit=hit+1;
		if (hit==3) {
		isSunk=true;
		alert("you sunk the ship!");
		}
	}else{
		alert("you miss it")
	}
}
var state="you hit"+guesses+"and you succeed get it"+(3/guesses);
		alert(state);