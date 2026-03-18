function moverPonteiro(valor) {

    let pos;

    if (valor <= 0.3) {
        pos = (valor / 0.3) * 33.33;
    }
    else if (valor <= 0.4) {
        pos = 33.33 + ((valor - 0.3) / 0.1) * 33.33;
    }
    else if (valor <= 1) {
        pos = 66.66 + ((valor - 0.4) / 0.6) * 33.34;
    }
    else {
        pos = 100;
    }
    return pos;
}


prodfinal = JSON.parse(localStorage.getItem("prodfinal"));
console.log(prodfinal);

setacaloria = document.getElementById("ponteiroprocalorias");
console.log("Posição Calorias: " + moverPonteiro(prodfinal.valor_energetico));

setaproteina = document.getElementById("ponteiroprodteina");
console.log("Posição Proteínas: " + moverPonteiro(prodfinal.proteinas));

setacarboidrato = document.getElementById("ponteiroprocarboidrato");
console.log("Posição Carboidratos: " + moverPonteiro(prodfinal.carboidratos));

setagordura = document.getElementById("ponteiroprogorduras");
console.log("Posição Gorduras: " + moverPonteiro(prodfinal.gorduras));

setafibras = document.getElementById("ponteiroprofibras");
console.log("Posição Fibras: " + moverPonteiro(prodfinal.fibras));


document.addEventListener("DOMContentLoaded", async () => {
    for (let i = 0; i <= 100; i += 0.1) {
        if (i <= moverPonteiro(prodfinal.valor_energetico)) {
            setacaloria.style.left = (i) + "%";
        }
        if (i <= moverPonteiro(prodfinal.proteinas)) {
            setaproteina.style.left = (i) + "%";
        }
        if (i <= moverPonteiro(prodfinal.carboidratos)) {
            setacarboidrato.style.left = (i) + "%";
        }
        if (i <= moverPonteiro(prodfinal.gorduras)) {
            setagordura.style.left = (i) + "%";
        }
        if (i <= moverPonteiro(prodfinal.fibras)) {
            setafibras.style.left = (i) + "%";
        }
        await new Promise(resolve => setTimeout(resolve, 0.1));
        console.log(i);
    }

});
