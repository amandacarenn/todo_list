let numeroLinhas = 0;

document.getElementById("btnAdicionar").addEventListener("click", adicionarTarefa);

function adicionarTarefa () {
    numeroLinhas += 1;
    console.log('acionado');
    const tarefa = window.document.getElementById('tarefa').value;
    const tabela = document.getElementById('tabelaTarefa').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    const celula1 = novaLinha.insertCell(0);
    const celula2 = novaLinha.insertCell(1);
    const celula3 = novaLinha.insertCell(2);
    const novaTarefa = document.createTextNode(tarefa);
    celula1.appendChild(novaTarefa);
    celula2.innerHTML = `<button class="btn btn-warning btn-sm"
    id="editar-${numeroLinhas}"
    title="Editar">
        <i class="fas fa-edit"></i>
    </button>`;
    celula3.innerHTML =`<button class="btn btn-danger btn-sm"
    id="excluir-${numeroLinhas}"
    title="Excluir">
        <i class="fas fa-trash-alt"></i>
    </button>`;

    document.getElementById('tarefa').value = '';

    document.getElementById(`editar-${numeroLinhas}`).addEventListener("click", function () {

    });
    document.getElementById(`excluir-${numeroLinhas}`).addEventListener("click", function () {
        console.log('acionado');
        document.getElementById('tabelaTarefa').deleteRow(numeroLinhas);
        numeroLinhas -= 1;
    });
}