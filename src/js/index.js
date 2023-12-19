const boardGameElement = document.getElementById('boardGame');
const turnElement = document.getElementById('turn');
const winnerElement = document.getElementById('winner');
const buttonRestartELement = document.getElementById('buttonRestart');

const boardPosition = ['', '', '', '', '', '', '', '', ''];
const winnerCombinations = [
	'0-1-2',
	'3-4-5',
	'6-7-8',
	'0-3-6',
	'1-4-7',
	'2-5-8',
	'0-4-8',
	'2-4-6'
];
let currentPlayer = 'X';
buttonRestartELement.disabled = true;

// pintar tablero y pintar array
const printTurn = () => {
	turnElement.textContent = `Turn ${currentPlayer}`;
};
// cambio de jugador
const changePlayer = () => {
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
	printTurn();
};

const checkWinner = () => {
	for (let i = 0; i < winnerCombinations.length; i++) {
		const currentCombination = winnerCombinations[i];
		const position = currentCombination.split('-');
		if (
			boardPosition[position[0]] === currentPlayer &&
			boardPosition[position[1]] === currentPlayer &&
			boardPosition[position[2]] === currentPlayer
		) {
			buttonRestartELement.disabled = false;
			turnElement.classList.add('hide');
			winnerElement.textContent = `THE WINNER IS ${currentPlayer}`;
			winnerElement.classList.remove('hide');
			boardGameElement.removeEventListener('click', printSimbol);
		}
	}
	changePlayer();
};

const printSimbol = event => {
	const position = event.target.dataset.position;
	if (boardPosition[position] !== '') return;
	boardPosition[position] = currentPlayer;
	boardGameElement.children[position].textContent = currentPlayer;
	checkWinner();
};
const restartGame = () => {
	location.reload();
};

buttonRestartELement.addEventListener('click', restartGame);
boardGameElement.addEventListener('click', printSimbol);
