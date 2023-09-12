import { useState } from 'react'
import { Pizza } from './components/pedido'

function App() {
  const [exibePedido, setExibePedido] = useState(true)

  const cancelarPedido = () => {
    alert('Seu pedido foi cancelado.')
    setExibePedido(false)
  }

  return (
    <>
    {exibePedido ? <Pizza/> : ''}
      <button onClick={cancelarPedido}>
        Cancelar Pedido
      </button>
    </>
  )
}

export default App