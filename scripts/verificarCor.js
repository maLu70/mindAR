const produtosN = localStorage.getItem("produtos");
const produtosS = JSON.parse(produtosN);

if (produtosS.length <= 0) {
    const confirmar = document.getElementById("confirmar");
    confirmar.style.backgroundColor = "gray";
    confirmar.onclick = null;
}



