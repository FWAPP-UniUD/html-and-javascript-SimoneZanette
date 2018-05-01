function onClick() {
    alert("Hai cliccato con il tasto sinistro sull'immagine.");
}
function onMouseover() {
    alert("Il mouse è sopra l'immagine.");
}
function onMouseout() {
    alert("Il mouse è fuori dall'immagine.");
}
function onContextmenu() {
    alert("Hai cliccato con tasto destro sull'immagine.");
}

document.getElementById("immagine").addEventListener("click", onClick);
document.getElementById("immagine").addEventListener("mouseover", onMouseover);
document.getElementById("immagine").addEventListener("mouseout", onMouseout);
document.getElementById("immagine").addEventListener("contextmenu", onContextmenu);