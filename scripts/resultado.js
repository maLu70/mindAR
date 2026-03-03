function telafinal(){
    const prodfinal = new produtos;
    const produtoescaneados = localStorage.getItem("produtos");
    const peso = null;
    produtoescaneados.array.forEach(produto => {
        prodfinal.peso += produto.peso;
        prodfinal.valor_energetico += produto.valor_energetico;
        prodfinal.proteinas += produto.proteinas;
        prodfinal.carboidratos+= produto.carboidratos;
        prodfinal.gorduras += produto.gorduras;
        prodfinal.fibras += produto.fibras;
        prodfinal.sodio += produto.sodio;
    });
    localStorage.setItem("prodfinal", prodfinal);
}