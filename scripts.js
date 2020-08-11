//global variables
var gridSize = 8;

//loads necessary functions.
function start() {
    console.log("starting scripts.");
    generateGrid()
    loadLevel()
}

//generates grid for our level to load.
function generateGrid() {
    console.log("generating grid.");
    for (var i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.setAttribute("id", "row-" + i)
        div.innerHTML = `
            <div id="cell-`+ i + `-1" class="cell"></div>
            <div id="cell-`+ i + `-2" class="cell"></div>
            <div id="cell-`+ i + `-3" class="cell"></div>
            <div id="cell-`+ i + `-4" class="cell"></div>
            <div id="cell-`+ i + `-5" class="cell"></div>
            <div id="cell-`+ i + `-6" class="cell"></div>
            <div id="cell-`+ i + `-7" class="cell"></div>
            <div id="cell-`+ i + `-8" class="cell"></div>
        `;
        document.getElementById('row').appendChild(div);
    }
    console.log("grid done generated.");
}

//will load level data when we get that far.
function loadLevel() {
    console.log("no levels to load... yet.");
}

//
//functions for testing
//

//changes color of 1-1
function test1() {
    console.log("Test");
    document.getElementById("cell-0-1").style.backgroundColor = "rgb(0,0,0)";
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
        document.getElementById(clicked).style.backgroundColor = "rgb(0,0,0)";
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
    console.log("Test 5");
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
    console.log("Test 6");
    var mouseDown = false;
    window.addEventListener('mousedown', function () { mouseDown = true })
    window.addEventListener('mouseup', function () { mouseDown = false })
    window.addEventListener('mousemove', function (e) {
        if (!mouseDown) {
            return;
        }
        var current = e.target.id;
        console.log(current);
        document.getElementById(current).style.backgroundColor = "rgb(0,0,0)";
    })
}

//changes color of first tile and logs color of current hovered cell.
function test7() {
    console.log("Test 7");
    document.getElementById("cell-0-1").style.backgroundColor = "rgb(0,0,0)";

    var mouseDown = false;
    window.addEventListener('mousedown', function () { mouseDown = true })
    window.addEventListener('mouseup', function () { mouseDown = false })
    window.addEventListener('mousemove', function (e) {
        if (!mouseDown) {
            return;
        }
        var current = e.target.id;
        var elem = document.getElementById(current);
        var currentColor = window.getComputedStyle(elem, null).getPropertyValue("background-color");
        console.log(currentColor);
    })
}

//change color of hovered cell while mouse is down AND changing color if runs into a different colored cell.
function test8() {
    console.log("Test 8");
    document.getElementById("cell-3-4").style.backgroundColor = "rgb(0,0,0)";
    document.getElementById("cell-3-6").style.backgroundColor = "rgb(0,128,0)";

    var mouseDown = false;
    var initialId;
    var initialElem;
    var initialColor;
    var gray = "rgb(128, 128, 128)";
    //var green = "rgb(0, 128, 0)";
    window.addEventListener('mousedown', function (e) {
        initialId = e.target.id;
        initialElem = document.getElementById(initialId);
        initialColor = window.getComputedStyle(initialElem, null).getPropertyValue("background-color");
        mouseDown = true
    })
    window.addEventListener('mouseup', function () {
        mouseDown = false
    })
    window.addEventListener('mousemove', function (e) {
        if (!mouseDown) {
            return;
        }
        var currentId = e.target.id;
        var currentElem = document.getElementById(currentId);
        var currentColor = window.getComputedStyle(currentElem, null).getPropertyValue("background-color");
        console.log("current color: " + currentColor);
        console.log(gray);

        if (currentColor != gray) {
            initialColor = currentColor;
            document.getElementById(currentId).style.backgroundColor = currentColor;
        } else {
            document.getElementById(currentId).style.backgroundColor = initialColor;
        }
    })
}

//logging current color and last color on mouse down.
function test9() {
    console.log("Test 9");
    document.getElementById("cell-3-4").style.backgroundColor = "rgb(0,0,0)";
    document.getElementById("cell-3-6").style.backgroundColor = "rgb(0,128,0)";

    var mouseDown = false;
    var initialElem;
    var initialColor;
    var lastColor = "None";
    var gray = "rgb(128, 128, 128)";
    window.addEventListener('mousedown', function (e) {
        initialElem = document.getElementById(e.target.id);
        initialColor = window.getComputedStyle(initialElem, null).getPropertyValue("background-color");
        mouseDown = true
    })
    window.addEventListener('mouseup', function () {
        mouseDown = false
    })
    window.addEventListener('mousemove', function (e) {
        if (!mouseDown) {
            return;
        }
        var currentElem = document.getElementById(e.target.id);
        var currentColor = window.getComputedStyle(currentElem, null).getPropertyValue("background-color");

        if (currentColor != initialColor) {
            lastColor = initialColor;
            initialColor = currentColor;
            console.log("last color: "+lastColor);
        } else {
            console.log("current color: "+initialColor);
        }
    })
}