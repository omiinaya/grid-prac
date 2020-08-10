//changes color of 1-1
function test1() {
    console.log("Test");
    document.getElementById("cell-1-1").style.backgroundColor = "black";
}

//logs id of clicked cell.
function test2() {
    document.addEventListener('click', function(e) {
        console.log( e.target.id );
    }, false);     
}

//changes color of clicked cell.
function test3() {
    console.log("Test 2");
    document.addEventListener('click', function(e) {
        var clicked = e.target.id
        console.log(clicked);
        document.getElementById(clicked).style.backgroundColor = "black";
    }, false);
}

