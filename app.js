const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [
    "", "", "", 
    "", "", "", 
    "", "", ""
]

function createBoard() {
    //for each cell in the board, create a div element
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement("div")
    //add the class of square to them
        cellElement.classList.add("square")
        gameBoard.append(cellElement)
    })
}

createBoard()
console.log("hello");