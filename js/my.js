let arr = [];
let player = 1;

function drawGameBoard() {
    let html = '';
    for (let i = 0; i < 10; i++) {
        html += '<tr>';
        arr[i] = []
        for (let j = 0; j < 10; j++) {
            html += '<td onclick="play(' + i + ',' + j + ')" id="' + i + '-' + j + '">';
            html += '</td>';
            arr[i][j] = '*'
        }
        html += '</tr>';
    }
    document.getElementById('game-board').innerHTML = html
}

drawGameBoard();

function play(x, y) {
    if (player === 1) {
        document.getElementById(x + '-' + y).innerHTML = 'X';
        player = 2;
        arr[x][y] = 'X'
    } else {
        document.getElementById(x + '-' + y).innerHTML = 'O';
        player = 1;
        arr[x][y] = '0'
    }

    checkWin();
}

function checkWin() {

    let count = 0;
   // checkWin theo chieu ngang


    // checkWin theo chieu doc


    // checkWin theo duong cheo trai


    // checkWin theo duong cheo phai

    if (count === 5) {
        alert("Game over")
    }
}

