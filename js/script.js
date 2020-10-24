
var buttonRock;
var buttonPaper;
var buttonScissors;

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

var argButtonName;
var playerScore = 0;
var computerScore = 0;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == '1') {
    return 'kamień';
  } else if (argMoveId == '2') {
  	return 'papier';
  } else if (argMoveId == '3') {
  	return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}


function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerScore++;
    clearPlayer();
    scorePlayer(playerScore);
    console.log(playerScore);
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
  	printMessage('Wygrywasz!');
    playerScore++;
    clearPlayer();
    scorePlayer(playerScore);
    console.log(playerScore);
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
  	printMessage('Wygrywasz!');
    playerScore++;
    clearPlayer();
    scorePlayer(playerScore);
    console.log(playerScore);
  } else if (argPlayerMove == argComputerMove) {
  	printMessage('Remis &nbsp;');
  } else {
    printMessage('Przegrywasz.');
    computerScore++
    clearComputer();
    scoreComputer(computerScore);
    console.log(computerScore);
  }
  printMessage(' &nbsp;&nbsp Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


playerMove = argButtonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

}

buttonRock.addEventListener('click',function() {
	buttonClicked('kamień') });

buttonPaper.addEventListener('click', function() {
	buttonClicked('papier') });

buttonScissors.addEventListener('click' , function() {
	buttonClicked('nożyce') });






