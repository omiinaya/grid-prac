////////////////////
//global variables//
////////////////////

var gridSize = 8;

/////////////////////////
//functions for testing//
/////////////////////////

//changes color of 1-1
function test1() {
    console.log("Test");
    document.getElementById("cell-0-1").style.backgroundColor = "black";
}

//logs id of clicked cell.
function test2() {
    console.log("Test 2");
    document.addEventListener('click', function (e) {
        console.log(e.target.id);
    }, false);
}

//changes color of clicked cell.
function test3() {
    console.log("Test 3");
    document.addEventListener('click', function (e) {
        var clicked = e.target.id
        console.log(clicked);
        document.getElementById(clicked).style.backgroundColor = "black";
    }, false);
}

//logs id of hovered over cell.
function test4() {
    console.log("Test 4");
    document.addEventListener('mouseover', function (e) {
        var current = e.target.id
        console.log(current);
    }, false);
}

//logs id of hovered over cell only while clicked.
function test5() {
    var mouseDown = false;
    window.addEventListener('mousedown', function () { mouseDown = true })
    window.addEventListener('mouseup', function () { mouseDown = false })
    window.addEventListener('mousemove', function (e) {
        if (!mouseDown) {
            return;
        }
        console.log(e.target.id);
    })
}

//changes color of hovered over cell while mouse is down.
function test6() {
    var mouseDown = false;
    window.addEventListener('mousedown', function () { mouseDown = true })
    window.addEventListener('mouseup', function () { mouseDown = false })
    window.addEventListener('mousemove', function (e) {
        if (!mouseDown) {
            return;
        }
        var current = e.target.id;
        console.log(current);
        document.getElementById(current).style.backgroundColor = "black";
    })
}

//changes color of first tile and logs color of current hovered cell. (except it doesnt for some reaason...)
function test7() {
    console.log("Test 7");
    document.getElementById("cell-0-1").style.backgroundColor = "black";

    var mouseDown = false;
    window.addEventListener('mousedown', function () { mouseDown = true })
    window.addEventListener('mouseup', function () { mouseDown = false })
    window.addEventListener('mousemove', function (e) {
        if (!mouseDown) {
            return;
        }
        var current = e.target.id;
        var currentColor = document.getElementById(current).style.backgroundColor;
        console.log(currentColor);
    })
}

//code start
function start() {
    console.log("starting scripts.");
    generateGrid()
}

function generateGrid() {
    console.log("generating grid.");
    for (var i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.setAttribute("id","row-"+i)
        div.innerHTML = `
            <div id="cell-`+i+`-1" class="cell"></div>
            <div id="cell-`+i+`-2" class="cell"></div>
            <div id="cell-`+i+`-3" class="cell"></div>
            <div id="cell-`+i+`-4" class="cell"></div>
            <div id="cell-`+i+`-5" class="cell"></div>
            <div id="cell-`+i+`-6" class="cell"></div>
            <div id="cell-`+i+`-7" class="cell"></div>
            <div id="cell-`+i+`-8" class="cell"></div>
        `;
        document.getElementById('row').appendChild(div);
    }
    console.log("grid finished generated.");
}