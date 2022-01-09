const gameboard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementByClassName("box"));
const restart = document.getElementById("restart");
const playText = document.getElementById("playText");
const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = "";
        if (index < 3) {
            styleString += `border-bottom: 3px solid black;`;
        }
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid black;`;
        }
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid black`;
        }
        if (index > 5) {
            styleString += `borde-top: 3px solid black`;
        }
        box.style = styleString;
    })
}