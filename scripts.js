const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let listaItens = [];

function novaTask() {
  listaItens.push({
    tarefaCon: input.value,
    concluida: false,
  });

  input.value = "";

  mostrarTask();
}

function mostrarTask() {
  let novaLi = "";

  listaItens.forEach((tarefa, posicao) => {
    novaLi += `
      <li class="task ${tarefa.concluida ? "done" : ""}">
      <img src="./img/checked.png" alt="check" onclick="concluirTarefa(${posicao})"/>
      <p>${tarefa.tarefaCon}</p>
      <img src="./img/trash.png" alt="lixo" onclick="deletarItens(${posicao})">
      </li>
      `;
  });

  listaCompleta.innerHTML = novaLi;

  localStorage.setItem("lista", JSON.stringify(listaItens));
}

function concluirTarefa(posicao) {
  if (listaItens[posicao]) {
    listaItens[posicao].concluida = !listaItens[posicao].concluida;
    mostrarTask();
  }
}

function deletarItens(posicao) {
  if (listaItens[posicao]) {
    listaItens.splice(posicao, 1);
    mostrarTask();
  }
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem("lista");

  if (tarefasDoLocalStorage) {
    listaItens = JSON.parse(tarefasDoLocalStorage);
  }

  mostrarTask();
}

recarregarTarefas();
button.addEventListener("click", novaTask);
