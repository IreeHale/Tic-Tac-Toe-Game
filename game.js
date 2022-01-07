window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currnetPlayer = 'X';
    let isGameActive = true;

    const PLAYER_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';    

    resetButton.addEventListener('click', resetBoard);
});