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

  // const [tarefas, setTarefas] = useState([])

  // useEffect(()=> {
  //   async function buscarDados(){
  //     const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
  //     const resultadoFinal = await resultado.json()

  //     return resultadoFinal
  //   }

  //   buscarDados().then(res => setTarefas(res))
  // }, [])

  return (
    <div>
      <MeuContador/>
    </div>
  )
}
