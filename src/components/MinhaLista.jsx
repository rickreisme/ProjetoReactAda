/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { useState } from "react"

const minhaLista = [
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'Legume' },
    { id: '3', value: 'Carne' },
]

export default function MinhaLista() {

    return minhaLista.map((item) => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })
}