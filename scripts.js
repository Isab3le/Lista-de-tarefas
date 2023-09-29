const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let listaItens = [];

function novaTask() {
  listaItens.push({
    tarefa: input.value,
    concluida: false;
  })

  input.value = "";

  mostrarTask();
}

function mostrarTask() {
  let novaLi = "";

  listaItens.forEach((tarefa, posicao) => {
    novaLi =
      novaLi +
      `
      <li class="task ${tarefa.concluida && "done"}">
      <img src="./img/checked.png" alt="check" onclick="concluirTarefa(${posicao})">
      <p>${tarefa.tarefaCon}</p>
      <img src="./img/trash.png" alt="lixo" onclick="deletarItens(${posicao})">
      </li>
      `;
  });

  listaCompleta.innerHTML = novaLi;
}

function concluirTarefa(posicao) {
  listaItens[posicao].concluida = !listaItens[posicao].concluida
}

function deletarItens(posicao) {
  listaItens.splice(posicao, 1);

  mostrarTask();
}

button.addEventListener("click", novaTask);
