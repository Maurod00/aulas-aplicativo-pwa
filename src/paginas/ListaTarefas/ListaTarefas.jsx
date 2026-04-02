import "./ListaTarefas.css"
import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado"

import { BsTrashFill } from "react-icons/bs";

function ListaTarefas({}) {
  const [novaTarefa, setNovaTarefa] = useState("");

  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") {
      alert("Digite uma tarefa para adicionar !");
      return;
    }
    console.log(novaTarefa);

    setTarefas([{ concluida: false, descricao: novaTarefa}, ...tarefas]);
    setNovaTarefa("");
  };

  const removerDaLista = (indice) => {
    if (confirm("Tem certeza que deseja remover esta tarefa?")) {
    tarefas.splice(indice, 1);
    setTarefas([...tarefas]);
    };
  }

  const marcarComoConcluida = (indice) => {
    console.log("Marcar como concluída", indice);
    console.log("Tarefas antes", tarefas)
    tarefas[indice].concluida = !tarefas[indice].concluida;
    setTarefas([...tarefas]);
  };

  return (
    <Principal>
      <h2>Lista de Tarefas</h2>
       
      <div className="lista-tarefas__campo-adicionar">
      <CampoCustomizado
        label="Nova Tarefa"
        id="nova-tarefa"
        type="text"
        placeholder="Precione Enter para adicionar"
        value={novaTarefa}
        onChange={(event) => setNovaTarefa(event.target.value)}
        onKeyPress={(event) =>{
          if(event.code === "Enter"){
            adicionarTarefa();
          }
        }}
      />

      <BotaoCustomizado tipo="secundario" aoClicar={adicionarTarefa}>+</BotaoCustomizado>
      </div> 

      {!tarefas.length && <span className="lista-tarefas__mensagem-sem-tarefas">Não há tarefas para mostrar.</span>}

      {tarefas.map((item, indice)=> {
        return (
         <div key={indice} className="lista-tarefas__tarefa">
          <input type="checkbox" checked={item.concluida} onChange={() => marcarComoConcluida(indice)}/>
          <span>{item.descricao}</span>
          <BsTrashFill onClick={() => removerDaLista(indice)} />
         </div>
        )

      })}

      
    </Principal>
  );
}

export default ListaTarefas;
