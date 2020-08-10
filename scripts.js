//changes color of 1-1
function test1() {
    console.log("Test");
    document.getElementById("cell-1-1").style.backgroundColor = "black";
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