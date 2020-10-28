function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function scoreComputer(scoreComputer){
	document.getElementById('scoreComputer').innerHTML=scoreComputer;
}

function scorePlayer(scorePlayer){
document.getElementById('scorePlayer').innerHTML=scorePlayer;
}

function clearPlayer(){
	document.getElementById('scorePlayer').innerHTML = '';
}


function clearComputer(){
	document.getElementById('scoreComputer').innerHTML = '';
}

