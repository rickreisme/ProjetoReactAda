/* eslint-disable no-unused-vars */

import { useState } from "react"
import styles from '../button.module.css'

export default function MeuContador(){

    const [contador, setContador] = useState(0)

    function aumentar(){
        setContador(contador + 1)
    }

    return(
        <div className="container">
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            {/* { contador > 9 ? <h1>Valor muito grande</h1> :
            null} */}
            <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
        </div>
    )
}