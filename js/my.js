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


/*
    Viết chương trình tính tổng các đường chéo mảng N x N .
    Ví dụ:
    input:
    arr = [
        [1, 3, 4, 5],
        [0, 4, 5, 7],
        [4, 5, 8, 7],
        [2, 4, 5, 6]
    ]
    output = 1 + 4 + 8 + 6 + 5 + 5 + 5 + 2 =

 */
