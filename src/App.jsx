/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import MeuContador from "./components/MeuContador";
// import MinhaLista from "./components/MinhaLista";
// import MeuContador from "./components/MeuContador";


const tarefas = [
  { id: '1', title: 'minha primeira tarefa' },
  { id: '2', title: 'minha segunda tarefa' },
  { id: '3', title: 'minha terceira tarefa' },
  { id: '4', title: 'minha quarta tarefa' },
]

export default function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(()=> {

    async function buscarDados(){
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => setTarefas(res))
    }

    buscarDados()
  }, [])

  return (
    <div>
      <h1>Deploy na vercel</h1>
      <div>
        {tarefas.map((tarefa) => {
          return(
            <div className="task-item" key={tarefa.id}>
              <p> {tarefa.id} - {tarefa.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
