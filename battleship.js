
var randomloc=Math.floor(Math.random()*5);
var location1=randomloc;
var location2=location1+1;
var location3=location1+2;
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