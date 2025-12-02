let modeloAtivo = null;
let produtoAtivo = null;
let produtos = [];
let modelosSalvos = [];
let modelosAtivos = [];

// -------------------------
//  Carregar produtos do JSON
// -------------------------

async function carregarProdutos() {
    try {
        const resposta = await fetch('./produtos.json');
        const dados = await resposta.json();
        produtos = dados.produtos;

        const scene = document.getElementById("scene");
        const assets = document.getElementById("assets");

        //-------------------------
        //  Cria assets e entidades para cada produto no html
        //-------------------------
        produtos.forEach(produto => {
            const asset = document.createElement("a-asset-item");
            asset.setAttribute("id", `model_${produto.id}`);
            asset.setAttribute("url", produto.modelo);
            console.log(produto.nome+"="+produto.modelo)
            assets.appendChild(asset);

            const entity = document.createElement("a-entity");
            entity.setAttribute("mindar-image-target", `targetIndex: ${produto.id}`);
            entity.setAttribute("id", `target_${produto.id}`);

            const model = document.createElement("a-gltf-model");
            model.setAttribute("id", `model3d_${produto.id}`);
            model.setAttribute("rotation", "90 0 0");
            model.setAttribute("position", "0 0 0.1");
            model.setAttribute("scale", `${produto.escala.x} ${produto.escala.y} ${produto.escala.z}`);
            //--------------------------
            //Após a troca de servidor, trocar SRC por URL e inserir no JSON o caminho inteiro da imagem
            //--------------------------
            console.log("Após a troca de servidor, trocar SRC por URL e inserir no JSON o caminho inteiro da imagem");
            model.setAttribute("url", `#model_${produto.id}`);


            entity.appendChild(model);
            scene.appendChild(entity);
        });

        document.querySelectorAll("a-entity[mindar-image-target]").forEach((entity) => {
            entity.addEventListener("targetFound", () => {
                const id = parseInt(entity.id.split("_")[1]);
                const modelo = entity.querySelector("a-gltf-model");
                const produtoBase = produtos.find(p => p.id === id);
                const produtoSalvo = modelosSalvos.find(p => p.id === id);

                modeloAtivo = modelo;
                produtoAtivo = produtoBase;

                // Restaura escala salva se existir
                if (produtoSalvo) {
                    modelo.setAttribute("scale", produtoSalvo.escala);
                    Object.assign(produtoAtivo, produtoSalvo);
                }

                //  Adiciona aos ativos se ainda não estiver
                if (!modelosAtivos.some(p => p.id === id)) {
                    modelosAtivos.push(produtoAtivo);
                }

                // Atualiza painel de informações (RETIRAR FUNÇÃO TESTE)
                atualizarPainel();
                document.getElementById("info").style.display = "block";
            });

            //-------------------------
            // Funções de encontrar e perder alvo
            //-------------------------
            entity.addEventListener("targetLost", () => {
                const id = parseInt(entity.id.split("_")[1]);

                // Atualiza informações no histórico salvo
                const produtoAtivoAgora = modelosAtivos.find(p => p.id === id);
                const modelo = entity.querySelector("a-gltf-model");
                if (produtoAtivoAgora && modelo) {
                    const escala = modelo.getAttribute("scale");
                    const indexSalvo = modelosSalvos.findIndex(p => p.id === id);
                    if (indexSalvo !== -1) {
                        modelosSalvos[indexSalvo] = { ...produtoAtivoAgora, escala };
                    } else {
                        modelosSalvos.push({ ...produtoAtivoAgora, escala });
                    }
                }

                // Remove da lista de ativos (saiu de cena)
                modelosAtivos = modelosAtivos.filter(p => p.id !== id);

                if (modeloAtivo === modelo) {
                    modeloAtivo = null;
                    produtoAtivo = null;
                    document.getElementById("info").style.display = "none";
                }
            });
        });
    } catch (erro) {
        console.error("Erro ao carregar JSON:", erro);
    }
}

// -------------------------
//FUÇÃO DO PAINEL (TESTE)
// -------------------------

function atualizarPainel() {
    if (!produtoAtivo || !modeloAtivo) return;

    // Atualiza os valores dentro dos ativos (não retirar)
    const indexAtivo = modelosAtivos.findIndex(p => p.id === produtoAtivo.id);
    if (indexAtivo !== -1) {
        modelosAtivos[indexAtivo] = {
            ...produtoAtivo,
            peso,
            valor_energético,
            proteinas,
            gorduras,
            carboidratos,
            fibras,
            escala: { ...escala }
        };
    }
}

// -------------------------
//  Controles de escala
// -------------------------
document.getElementById("mais").addEventListener("click", () => {
    if (modeloAtivo) {
        const scale = modeloAtivo.getAttribute("scale");
        modeloAtivo.setAttribute("scale", {
            x: scale.x * 1.1,
            y: scale.y * 1.1,
            z: scale.z * 1.1
        });
        atualizarPainel();
    }
});

document.getElementById("menos").addEventListener("click", () => {
    if (modeloAtivo) {
        const scale = modeloAtivo.getAttribute("scale");
        modeloAtivo.setAttribute("scale", {
            x: scale.x * 0.9,
            y: scale.y * 0.9,
            z: scale.z * 0.9
        });
        atualizarPainel();
    }
});

// -------------------------
// Botão de salvar lista (apenas os os itens ativos) (está no console)
// -------------------------
document.getElementById("salvarLista").addEventListener("click", () => {
    if (modelosAtivos.length === 0) {
        console.warn("Nenhum modelo ativo no momento!");
        return;
    }
    console.log("Modelos ATIVOS:", modelosAtivos);
    localStorage.setItem("modelosSalvos", JSON.stringify(modelosAtivos))
    window.open('/mindAR/resouces/confirmacao.html')
});

window.addEventListener("load", carregarProdutos);
