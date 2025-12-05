function enterFullScreen() {
    console.log("oi")
    document.documentElement.requestFullscreen()
    
}

function proximap(){
    enterFullScreen();
    const block = document.getElementById("trocarblock");
    block.style.display = "block"
    block.style.zIndex = "999"
    const none = document.getElementById("container");
    none.style.zIndex = "0"
    none.style.display = "none";
    
}