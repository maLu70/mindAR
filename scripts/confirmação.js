document.addEventListener("DOMContentLoaded", function() {
    addElemento();

    const btnVoltar = document.getElementById("voltar")
    btnVoltar.addEventListener("click", function() {
        window.close()
    })

    const btnConfirmar = document.getElementById("confirmar")
    btnConfirmar.addEventListener("click", function() {
        window.open('/mindAR/resouces/resultado.html')
    })
})

function addElemento() {
    const modelosSavlosString = localStorage.getItem("modelosSalvos")
    const modelosSalvos = JSON.parse(modelosSavlosString)
    const container = document.getElementById("listaAlimentos")

    if (modelosSalvos && modelosSalvos.legth > 0) {
        modelosSalvos.array.forEach(produto => {
            const novaDiv = document.createElement('div')
            novaDiv.className = 'alimento'

            novaDiv.innerHTML = `
                <div class="bloc1">
                    <img src="/img/xadVerde.png" class="imgAlimento">
                    <div class="infAlimento">
                        <h3>${produto.nome}</h3>
                        <h4>Rico em: ${produto.categoria}</h4>
                    </div>
                </div>
            <p>${produto.peso ? produto.peso.toFixed(2) + 'g' : 'Peso não calculado'}</p>`

            container.appendChild(novaDiv)
        });

    } else {
        container.innerHTML = '<p>Nenhum alimento salvo</p>'
    }
}