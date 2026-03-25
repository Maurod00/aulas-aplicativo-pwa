import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function ListaTarefas({}) {
  const [novaTarefa, setNovaTarefa] = useState("");

  return (
    <Principal>
      <h2>Lista de Tarefas</h2>

      <CampoCustomizado
        label="Nova Tarefa"
        type="text"
        placeholder="Precione Enter para adicionar"
        value={novaTarefa}
        onChange={(event) => setNovaTarefa(event.target.value)}
      />
    </Principal>
  );
}

export default ListaTarefas;
