const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [
    "", "", "", 
    "", "", "", 
    "", "", ""
]

// let clickedSquare = 0;

let turn = "frog"
infoDisplay.textContent = "Frog goes first"
// infoDisplay.textContent = "FROG GOES FIRST"
// const uppercase = infoDisplay.toUpperCase()

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
        turnDisplay.classList.add(turn)
        event.target.append(turnDisplay)
        event.target.classList.add("clicked")
        turn = turn === "frog" ? "duck" : "frog"
        infoDisplay.textContent = "It is now " + turn + "'s turn!"
        checkScore()
        // string.toUpperCase(infoDisplay.textContent)
    }

    function checkScore() {
        const allSquares = document.querySelectorAll(".square")
        const winningCombos = [
            [0,1,2], [0,4,8], [0,3,6], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8]
        ]

        // console.log(allSquares[0]);

    winningCombos.forEach(array => {
        const froggyWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("frog"))

        if (froggyWins) {
            infoDisplay.textContent = "Froggy wins!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
                }
        })


    winningCombos.forEach(array => {
        const duckyWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("duck"))

        if (duckyWins) {
            infoDisplay.textContent = "Ducky wins!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
                }
        })
    }
