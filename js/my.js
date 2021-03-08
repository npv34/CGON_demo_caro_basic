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
    if (arr[x][y] === '*'){
        if (player === 1) {
            document.getElementById(x + '-' + y).innerHTML = 'X';
            player = 2;
            arr[x][y] = 'X'
        } else {
            document.getElementById(x + '-' + y).innerHTML = 'O';
            player = 1;
            arr[x][y] = '0'
        }

        checkWin(x, y);
    }

}

function checkWin(x, y) {

    let count = 1;
    // checkWin theo chieu ngang
    // chech theo chieu ngang ve ben trai o dang danh
    let j = 1;
    while (arr[x][y - j] === arr[x][y] && y - j >= 0) {
        j++;
        count++;
    }
    // chech theo chieu ngang ve ben phai o dang danh
    while (arr[x][y + j] === arr[x][y] && y + j <= 10) {
        j++;
        count++;
    }
    extracted(count)

    // checkWin theo chieu doc
    let i = 1;
    let n = 1;
    while (arr[x + i][y] === arr[x][y] && x + i <= 10) {
        i++;
        n++;
    }

    let m = 1;
    while (arr[x - m][y] === arr[x][y] && x - m >= 0) {
        m++;
        n++;
    }

    extracted(n);

    // checkWin theo duong cheo trai
    let k = 1;
    let sum = 1;
    while (arr[x + k][y - k] === arr[x][y]) {
        k++;
        sum++;
    }

    // checkWin theo duong cheo phai

    let h = 1;
    while (arr[x - h][y + h] === arr[x][y] && x - h >= 0) {
        h++;
        sum++;
    }
    extracted(sum);



}

function extracted(count) {
    if (count === 5) {
        alert("Game over")
        return;
    }
}
