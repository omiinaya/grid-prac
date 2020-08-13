//global variables
var gridSize = 8;

//loads necessary functions.
function start() {
    console.log("starting scripts.");
    generateGrid()
}

function generateGrid() {
    console.log("generating grid.");
    generateRows()
    generateCols()
    console.log("grid is done generating.");
}

//generates grid for our level to load.
function generateRows() {
    for (var i = 1; i < gridSize + 1; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "row-" + i)
        div.innerHTML = `
            <div id="cell-`+ i + `-1" class="cell"></div>
        `;
        document.getElementById('row').appendChild(div);
    }
}

function generateCols() {
    for (var j = 1; j < gridSize+1; j++) {
        var x = 2;
        for (var i = 1; i < gridSize; i++) {
            const div = document.createElement('div');
            div.setAttribute("id", "cell-"+j+"-" + x)
            div.setAttribute("class", "cell")
            div.innerHTML = ``;
            document.getElementById('row-' + j).appendChild(div);
            x++;
        }
    }
}