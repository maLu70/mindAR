
document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem('prodfinal');
});

function telafinal() {


    localStorage.removeItem('prodfinal');

    const produtoescaneados = JSON.parse(localStorage.getItem("produtos"));
    produtoescaneados.array.forEach(produto => {
        prodfinal.peso += produto.peso;
        prodfinal.valor_energetico += produto.valor_energetico;
        prodfinal.proteinas += produto.proteinas;
        prodfinal.carboidratos+= produto.carboidratos;
        prodfinal.gorduras += produto.gorduras;
        prodfinal.fibras += produto.fibras;
        prodfinal.sodio += produto.sodio;
    });

    prodfinal.valor_energetico = (2000/prodfinal.valor_energetico).toFixed(2);
    prodfinal.proteinas = (300/prodfinal.proteinas).toFixed(2);
    prodfinal.carboidratos = (300/prodfinal.carboidratos).toFixed(2);
    prodfinal.gorduras = (55/prodfinal.gorduras).toFixed(2);
    prodfinal.fibras = (25/prodfinal.fibras).toFixed(2);
    prodfinal.sodio = (2400/prodfinal.sodio).toFixed(2);

    localStorage.setItem("prodfinal", JSON.stringify(prodfinal));
    window.location.href = "resultado.html";
}