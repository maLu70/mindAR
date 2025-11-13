// testar
//https://concepcaoweb.com.br/fullscreem-com-javascript/

"use strict"
let fullScreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
let fullsScreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;

let trigger;
let isFull;
let method;
let closed;

//-- Funções
let enterFullScreen;
let exitFullScreen;
let isFullScreen;

document.getElementsByTagName('body');
    function toggleFullScreen(tela, callBack) {
    isFull = false;
    method = null;

    tela.style.position = "absolute";

    if (tela.requestFullscreen) {
        tela.requestFullscreen();
        isFull = true;
        method = "";

    } else if (tela.msRequestFullscreen) {
        tela.msRequestFullscreen();
        isFull = true;
            method = "ms";

    } else if (tela.mozRequestFullscreen) {
        tela.mozRequestFullscreen();
        isFull = true;
        method = "moz";

    } else if (tela.webktiRequestFullscreen) {
        tela.msRequestFullscreen();
        isFull = true;
        method = "webkit";

    } else {
        console.log("Não tem jeito, paizão")
    }

    if (isFull) {
        if (callBack !=  undefined) callBack();
        
    }
}

isFullScreen = function() {
    return document.fullscreen ||
           document.msFullScreen ||
           document.mozFullScreen ||
           document.webkitFullScreen;
}

