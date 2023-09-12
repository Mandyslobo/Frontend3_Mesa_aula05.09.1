import { useEffect, useState } from "react";

export function Pizza() {

    const [exibePizza, setExibePizza] = useState('')
    
    useEffect(() => {
        setTimeout(() => {
            setExibePizza('Pizza')
            console.log('O componente foi atualizado')
        }, 2000)
    }, [])

    return (
        <h1>Seu Pedido: {exibePizza} </h1>
    )
}