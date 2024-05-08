document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('chessboard');
    let isBlack = false;
    const rows = ["♜♞♝♛♚♝♞♜", "♟♟♟♟♟♟♟♟", "", "", "", "", "♙♙♙♙♙♙♙♙", "♖♘♗♕♔♗♘♖"];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.className = `square ${(i + j) % 2 === 0 ? 'white' : 'black'}`;
            square.textContent = rows[i][j] || '';
            square.draggable = true;
            square.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData('piece', e.target.textContent);
                e.dataTransfer.effectAllowed = 'move';
            });
            square.addEventListener('dragover', function(e) {
                e.preventDefault();
            });
            square.addEventListener('drop', function(e) {
                e.preventDefault();
                const data = e.dataTransfer.getData('piece');
                if (!e.target.textContent) {
                    e.target.textContent = data;
                    e.dataTransfer.clearData();
                }
            });
            board.appendChild(square);
        }
    }
});
