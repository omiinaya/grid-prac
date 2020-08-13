//global variables
var gridSize = 8;

document.addEventListener('DOMContentLoaded', function (event) {
    start()
})

//loads necessary functions.
function start() {
    console.log("starting scripts.");
    generateGrid()
}

function generateGrid() {
    console.log("generating grid.");
    generateCanvas()
    generateRows()
    generateCols()
}

function generateCanvas() {
    const div = document.createElement('div');
    div.setAttribute("class", "canvas")
    document.getElementsByClassName('board-container')[0].appendChild(div);
}

//generates grid for our level to load.
function generateRows() {
    for (var i = 1; i < gridSize + 1; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "row-" + i)
        document.getElementsByClassName('canvas')[0].appendChild(div);
    }
}

function generateCols() {
    for (var j = 1; j < gridSize + 1; j++) {
        var x = 1;
        for (var i = 1; i < gridSize + 1; i++) {
            const div = document.createElement('div');
            div.setAttribute("id", "cell-" + j + "-" + x)
            div.setAttribute("class", "cell")
            div.innerHTML = ``;
            document.getElementById('row-' + j).appendChild(div);
            x++;
        }
    }
}

function clearGrid() {
    for (var i = 0; i < gridSize * gridSize; i++) {
        var cell = document.getElementsByClassName("cell")[i]
        cell.style.backgroundColor = "rgb(128, 128, 128)";
    }
}