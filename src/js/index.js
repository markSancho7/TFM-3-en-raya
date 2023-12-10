const boardGameElement = document.getElementById('boardGame');
const turnElement = document.getElementById('turn');

let counterCircle = 0;
let counterEx = 0;

const selectCell = event => {
	console.log(event.target.tagName);
	if (event.target.tagName === 'SPAN');
	else {
		if (counterCircle === counterEx) {
			console.log('circulo');
			const circle = document.createElement('span');
			circle.textContent = 'O';
			circle.id = 'circle';
			event.target.append(circle);
			turnElement.textContent = 'Turn Ex';
			counterCircle++;
		} else {
			console.log('equis');
			const ex = document.createElement('span');
			ex.textContent = 'X';
			ex.id = 'ex';
			event.target.append(ex);
			turnElement.textContent = 'Turn Cicle';
			counterEx++;
		}
	}
	verifyWiner();
};
const verifyWiner = () => {
	console.log(boardGameElement.children[0].children[0].id);
	if (!boardGameElement) {
		console.log('pepe');
	}
	if (
		(boardGameElement.children[3].children[0].id,
		boardGameElement.children[4].children[0].id,
		boardGameElement.children[5].children[0].id) === 'circle'
	) {
		turnElement.textContent = 'GANASTE';
	} else if (
		(boardGameElement.children[0].children[0].id,
		boardGameElement.children[1].children[0].id,
		boardGameElement.children[2].children[0].id === 'circle')
	) {
		console.log('ganstes');
	} else {
		turnElement.textContent = 'GANO EX';
	}
};

boardGameElement.addEventListener('click', selectCell);
