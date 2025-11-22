// testar
//https://concepcaoweb.com.br/fullscreem-com-javascript/

"use strict"
let fullScreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
let fullsScreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;


let isFull = false;
let method;
let elementToToggle

let enterFullScreen;

function isFullScreenSupported() {
    return !!(document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled)
}

function enterFullScreen() {
    if (!isFullScreenSupported()) {
        console.log("Navegador não suporta")
        return
    }

    elementToToggle = element || document.documentElement

    if (elementToToggle.requestFullscreen) {
        elementToToggle.requestFullscreen()

    } else if (elementToToggle.mozRequestFullscreen) { 
        elementToToggle.mozRequestFullscreen()

    } else if (elementToToggle.webkitRequestFullscreen) {
        elementToToggle.webkitRequestFullscreen()

    } else if (elementToToggle.msRequestFullscreen) { 
        elementToToggle.msRequestFullscreen()

    }
    isFull = true;
}

isFullScreen = function() {
    return document.fullscreen ||
           document.msFullScreen ||
           document.mozFullScreen ||
           document.webkitFullScreen;
}

