function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function scoreComputer(scoreComputer){
	var p = document.createElement('p');
	p.innerHTML=(scoreComputer);
	document.getElementById('scoreComputer').appendChild(p);
}

function scorePlayer(scorePlayer){
	var p = document.createElement('p');
	p.innerHTML=(scorePlayer);
	document.getElementById('scorePlayer').appendChild(p);
}

function clearPlayer(){
	document.getElementById('scorePlayer').innerHTML = '';
}


function clearComputer(){
	document.getElementById('scoreComputer').innerHTML = '';
}

