//changes color of 1-1
function test1() {
    console.log("Test 1");
    document.getElementById("cell-1-1").style.backgroundColor = "rgb(0,0,0)";
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
            console.log("last color: " + lastColor);
        } else {
            console.log("current color: " + initialColor);
        }
    })
}

//logging last color and current color.
function test10() {
    console.log("Test 10");
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
            console.log("last color: " + lastColor);
        } else {
            console.log("current color: " + initialColor);
        }
    })
}

//simple return statement which i'm trying to pass as a parameter.
function test11() {
    return 1;
}

//simple function that receives a value. (passing test11() as a value works.)
function test12(x) {
    return x + 2;
}

//logging an array of all cells.
function test13() {
    var x = document.getElementsByClassName("cell")
    console.log(x);
}

//logging each cell in a different line.
function test14() {
    for (var i = 0; i < gridSize * gridSize; i++) {
        var x = document.getElementsByClassName("cell")[i]
        console.log(x);
    }
}

//turning all tiles in the board gray.
function test15() {
    for (var i = 0; i < gridSize * gridSize; i++) {
        var cell = document.getElementsByClassName("cell")[i]
        cell.style.backgroundColor = "rgb(128, 128, 128)";
    }
}