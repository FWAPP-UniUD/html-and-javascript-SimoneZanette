function hideFunction() {
    document.getElementById("placeholder").style.visibility = "hidden";
}
function seekFunction(obj) {
    document.getElementById("placeholder").style.visibility = "visible";
    document.getElementById("placeholder").innerHTML = "Lorem ipsum...";
}