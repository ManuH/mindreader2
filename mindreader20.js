function getcien (number) {
	var centena = Math.floor(number / 100);
	return centena;
}

function getdiez (number) {
	var decena = Math.floor(number / 10);
	return decena;
}

function getnumber (result) {

	var cien = getcien(result);
	var diez = getdiez(result - cien * 100);
	var uni = result - cien * 100 - diez * 10;
	var sum = cien + diez + uni;

	while (sum > 10) {

		var cien = getcien(sum);
		var diez = getdiez(sum - cien * 100);
		var uni = sum - cien * 100 - diez * 10;
		var sum = cien + diez + uni;
	};
	
	var test = 9 - sum;

	if (test % 9 > 0) {
		return test;
	} else {
		var choose = 9 - Math.abs(test);
		return choose;
	}
	
}

function send() {
	var unumber = document.getElementById('input').value;
	console.log(unumber);
	var result = getnumber(unumber);
	return result;
}

function show() {
	if (send() === null) {
		window.alert('Write your result!')
	}
	var result = send();
	document.getElementById('result').innerHTML = 'You choosed: ' + result;
	document.getElementById('restart').innerHTML = 'Try again';
}

function getname() {

	var name = document.getElementById('input').value;

	if (name === '') {
		document.getElementById('p1').innerHTML = "Come on, tell me your name";
		document.getElementById('p2').innerHTML = "Don't be shy";
	} else {

		document.getElementById('name').innerHTML = 'Well hello ' + name;
		document.getElementById('p1').innerHTML = "My name is Verstand, I'm a mind reader";
		document.getElementById('p2').innerHTML = "Do you want to play a game?. Click bellow and see my powers";
		var parent = document.getElementById("menu2");
		var child = document.getElementById("button");
		var child2 = document.getElementById("input");
		parent.removeChild(child);
		parent.removeChild(child2);
		document.getElementById('link').innerHTML = "click me!";
	}
	
	document.getElementById('input').value = "";

}