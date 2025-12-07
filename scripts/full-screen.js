function proximap() {
    document.documentElement.requestFullscreen();
    const container = document.getElementById("container");
    container.style.display = "none";
    const bloco = document.getElementById("trocarblock");
    bloco.style.display = "flex";
    bloco.style.position = "absolute";
    bloco.style.width = "100vw";
    bloco.style.height = "100vh";
    bloco.style.zIndex = "10";
}

const cena = document.getElementById("scene");
    cena.style.display = "flex";
    cena.style.position = "absolute";
    cena.style.width = "100vw";
    cena.style.height = "100vh";
    cena.style.zIndex = "1";



