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

function comoJogar() {
    window.location.replace("../resources/regras.html");
}

function incial() {
    window.location.replace("../index.html");
}

function continuar() {
    localStorage.setItem("produtos", localStorage.getItem("produtos"));
    window.location.replace("../index.html?fs=1");
}
