const corpo = document.getElementsByTagName(body)

if(corpo.requestFullscreem) {
    corpo.requestFullscreem();
} else if (corpo.webkitRequestFullScreen) {
    corpo.webkitRequestFullScreen();
} else if (corpo.mozRequestFullScreen) {
    corpo.mozRequestFullScreen();
} else {
    console.log("não funciona")
}