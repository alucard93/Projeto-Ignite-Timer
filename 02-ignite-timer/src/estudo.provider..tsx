// Context API REACT

// COMEÇO IMPORTANDO createContext (Uma função que eu preciso armazenar esse contexto numa variavel e essa variavel tem que ter o nome com alguma relação com o tipo de informação que eu iria guardar dentro desse contexto)

// Caso eu queira compartilhar a variavel com meus componentes é só importar o useContext

// const { --o que eu quero usar aqui-- } = useContext( --nome do contexto-- )

// Provider vem de dentro do Context por isso utilizo o context criado CycleContext

// Esse Provider recebe um valor e nesse valor, e preciso enviar quais informações vão ser compartilhadas, value={{ activeCycle, setActiveCycle }}

// Tem que tipar o que o context vai receber

import React, { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any) // qual o valor inicial desse contexto?

function NewCycleForm() {
    const { activeCycle, setActiveCycle } = useContext(CyclesContext)
    return (
        <h1>
            NewCycleForm {activeCycle}
            <button onClick={() => setActiveCycle(2)}>
                Alterar Ciclo ativo
            </button>
        </h1>
    )
}

function Countdown() {
    const { activeCycle } = useContext(CyclesContext)
    return <h1>Countdown {activeCycle}</h1>
}

export const Home = () => {
    const [activeCycle, setActiveCycle] = useState(0)

    return (
        <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
            <div>
                <NewCycleForm />
                <Countdown />
            </div>
        </CyclesContext.Provider>
    )
}
