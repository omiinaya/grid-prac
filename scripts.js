//changes color of 1-1
function gridTest() {
    console.log("Test");
    document.getElementById("cell-1-1").style.backgroundColor = "black";
}

function gridTest2() {
    console.log("Test 2");
    document.addEventListener('click', function(e) {
        var clicked = e.target.id
        console.log(clicked);
        document.getElementById(clicked).style.backgroundColor = "black";

    }, false);

}

//logs id of clicked cell
function clickTest() {
    document.addEventListener('click', function(e) {
        console.log( e.target.id );
    }, false);     
}

