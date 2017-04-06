// alternative to load event
/*document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        var element = document.querySelector( "#overlay-thingy" );
        element.classList.add("overlay-content");
    }
}*/

//document.getElementById("test").onclick = function () {slidefunction()};
function slidefunction(){
    var element = document.querySelector(".overlay-content");
    element.classList.add("slide-menu");
    var kalle = document.querySelector(".overlay.hide");
    kalle.classList.remove("hide");
}

function slidebackfunction() {
    var element = document.querySelector(".overlay-content");
    element.classList.remove("slide-menu");
    var kalle = document.querySelector(".overlay");
    kalle.classList.add("hide");
    var open = document.querySelector(".adding");
    open.classList.remove("open-adding");
    open.classList.add("hide");

}
function openadding() {
    var element = document.querySelector(".overlay.hide");
    element.classList.remove("hide");
    var kalle = document.querySelector(".adding");
    kalle.classList.add("open-adding");
    kalle.classList.remove("hide");
}
function open_thing1(arrow) {
    var karl = document.querySelector("#breakfast-info");
    karl.classList.toggle("not-open");
    arrow.classList.toggle("arrow1")
    arrow.classList.toggle("arrow_down")
}
function open_thing2(arrow2) {
    var karl = document.querySelector("#lunch-info");
    karl.classList.toggle("not-open");
    arrow2.classList.toggle("arrow2")
    arrow2.classList.toggle("arrow_down")
}
function open_thing3(arrow3) {
    var karl = document.querySelector("#supper-info");
    karl.classList.toggle("not-open");
    arrow3.classList.toggle("arrow3")
    arrow3.classList.toggle("arrow_down")
}

function resizetexarea(description) {

}
