import { useState, useEffect } from 'react'
import './components/estilosATT12.css'
import useCarregar from './components/carregar.jsx'
import useDefinir from './components/definir.jsx'
import useListar from './components/listar.jsx'

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
      <h1 className="main-text">Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit} className="forms">
        <input className="text-insert"
          type="text"
          name="nome" 
          value={formData.nome} 
          onChange={handleChange} 
          placeholder="Nome do produto" 
          required
        />
        <input className="text-insert"
          type="number"
          name="preco" 
          value={formData.preco} 
          onChange={handleChange} 
          placeholder="Preço" 
          required
        />
        <input className="text-insert"
          type="text"
          name="descricao" 
          value={formData.descricao} 
          onChange={handleChange} 
          placeholder="Descrição" 
          required
        />

        <button type="submit" className="default-button">Salvar</button>
    
      </form>

      <div className="sub-diva">
        <h3 className="sub-text">Lista de Produtos Cadastrados:</h3>
        
        {listaProdutos.length === 0 ? (
          <p className="sub-text">Nenhum produto adicionado ainda.</p>
        ) : (
          <ul>
            {listaProdutos.map((produto) => (
              <li key={produto.id} className="li">
                <strong>Nome do produto:</strong> {produto.nome} | {' '}
                <strong>Preço:</strong> {produto.preco} | {' '}
                <strong>Descrição:</strong> {produto.descricao}
                <button className="button-remove" onClick={() => removerProduto(produto.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


export default App