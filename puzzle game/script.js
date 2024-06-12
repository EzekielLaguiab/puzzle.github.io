document.getElementById('startButton').addEventListener('click', startGame);

const rows = 4;
const cols = 4;
const puzzleContainer = document.getElementById('puzzleContainer');
let pieces = [];

function startGame() {
    puzzleContainer.innerHTML = '';
    pieces = [];
    createPuzzlePieces();
    shufflePuzzlePieces();
    displayPuzzlePieces();
}

function createPuzzlePieces() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const piece = document.createElement('div');
            piece.classList.add('puzzlePiece');
            piece.style.backgroundImage = 'url(bam.jpeg)';
            piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
            piece.dataset.position = `${row}-${col}`;
            piece.addEventListener('click', swapPieces);
            pieces.push(piece);
        }
    }
}

function shufflePuzzlePieces() {
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }
}

function displayPuzzlePieces() {
    pieces.forEach(piece => {
        puzzleContainer.appendChild(piece);
    });
}

let firstPiece = null;
function swapPieces(event) {
    const clickedPiece = event.target;
    if (!firstPiece) {
        firstPiece = clickedPiece;
        clickedPiece.style.border = '2px solid red';
    } else {
        const tempPosition = clickedPiece.dataset.position;
        clickedPiece.dataset.position = firstPiece.dataset.position;
        firstPiece.dataset.position = tempPosition;

        const tempStyle = clickedPiece.style.backgroundPosition;
        clickedPiece.style.backgroundPosition = firstPiece.style.backgroundPosition;
        firstPiece.style.backgroundPosition = tempStyle;

        firstPiece.style.border = 'none';
        firstPiece = null;
    }
}

function checkIfPuzzleComplete() {
    let isComplete = true;
    pieces.forEach((piece, index) => {
        const position = piece.dataset.position;
        const correctPosition = `${Math.floor(index / cols)}-${index % cols}`;
        if (position !== correctPosition) {
            isComplete = false;
            return;
        }
    });
    if (isComplete) {
        alert("Happy Monthsarry Bam, I love you!");
    }
}

function swapPieces(event) {
    const clickedPiece = event.target;
    if (!firstPiece) {
        firstPiece = clickedPiece;
        clickedPiece.style.border = '2px solid red';
    } else {
        const tempPosition = clickedPiece.dataset.position;
        clickedPiece.dataset.position = firstPiece.dataset.position;
        firstPiece.dataset.position = tempPosition;

        const tempStyle = clickedPiece.style.backgroundPosition;
        clickedPiece.style.backgroundPosition = firstPiece.style.backgroundPosition;
        firstPiece.style.backgroundPosition = tempStyle;

        firstPiece.style.border = 'none';
        firstPiece = null;

        checkIfPuzzleComplete();
    }
}
