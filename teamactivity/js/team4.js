const board = document.querySelector('.board');
const resetButton = document.getElementById('reset');

const player1 = 'X';
const player2 = 'O';

let player = player1;

function move(a){
    console.log(a.target)
    console.log(player)
    a.target.innerHTML = player;
    if(player === player1){
        player = player2;
    }
    else{
        player = player1;
    }
}

function resetBoard() {
    for (let i = 0; i < board.children.length; i++) {
      board.children[i].innerText = '';
    }
    const children = Array.from(board.children);
    const empty = children.filter(function(child) {
      return child.innerText == 'X' || child.innerText == 'O';
    });
    player = player1;
}

board.addEventListener('click', move);
reset.addEventListener('click' , resetBoard);