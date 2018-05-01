function changeStatusFieldset(obj) {
    if(document.getElementById("myCheck").checked == true)
        document.getElementById("myFieldset").disabled = false;
    else if(document.getElementById("myCheck").checked == false)
        document.getElementById("myFieldset").disabled = true;
}
function checkedEnable() {
    document.getElementById("myCheck").checked = true;
}