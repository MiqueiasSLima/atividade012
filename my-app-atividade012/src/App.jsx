import { useState, useEffect } from 'react'
import './components/estilosATT12.css'
import useCarregar from './components/carregar.jsx'
import useDefinir from './components/definir.jsx'
import useListar from './components/listar.jsx'
import Formulario from './components/Formulario.jsx'
import Mostrar from './components/Mostrar.jsx'


function App() {

  const { carregando, setCarregando } = useCarregar();
  const { listaProdutos, setListaProdutos, formData, setFormData } = useDefinir();

  const { handleChange, handleSubmit, removerProduto } = useListar({
    formData,
    setFormData,
    listaProdutos,
    setListaProdutos
  });

  if (carregando) {
    return <p className="main-text">Carregando lista de produtos...</p>;
  }

  return (
    <div className="main-diva">
      <div className="sub-diva">
        <Formulario
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        
        />
        <Mostrar
          listaProdutos={listaProdutos} 
          removerProduto={removerProduto}
        />
      </div>
    </div>
  );
}


export default App

