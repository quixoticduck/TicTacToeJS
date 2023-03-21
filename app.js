const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [
    "", "", "", 
    "", "", "", 
    "", "", ""
]

let turn = "frog"
infoDisplay.textContent = "Frog goes first"

function createBoard() {
    //for each cell in the board, create a div element
    //underscore before 'cell' tells our code that it is not being used
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div")
    //add the class of square to them
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click", addTurn)
        gameBoard.append(cellElement)
    })
}

createBoard()

function addTurn(event) {
    // console.log(event.target)
    // if (!cellElement.classList.contains("frog")) {
        const turnDisplay = document.createElement("div")
        turnDisplay.classList.add("frog")
        event.target.append(turnDisplay)
    }