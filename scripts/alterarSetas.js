function moverPonteiro(seta, valor){

    let pos;

    if (valor <= 0.3){
        pos = (valor / 0.3) * 33.33;
    }
    else if (valor <= 0.4){
        pos = 33.33 + ((valor - 0.3) / 0.1) * 33.33;
    }
    else if (valor <= 1){
        pos = 66.66 + ((valor - 0.4) / 0.6) * 33.34;
    }
    else{
        pos = 100;
    }

    const ponteiro = document.getElementById(seta);
    ponteiro.style.left = pos + "%";
}

document.addEventListener("DOMContentLoaded", () => {

const prodfinal = JSON.parse(localStorage.getItem("prodfinal"));
moverPonteiro("ponteiroprocalorias", prodfinal.valor_energetico);
moverPonteiro("ponteiroprodteina", prodfinal.proteinas);
moverPonteiro("ponteiroprocarboidrato", prodfinal.carboidratos);
moverPonteiro("ponteiroprogorduras", prodfinal.gorduras);
moverPonteiro("ponteiroprofibras", prodfinal.fibras);
});
