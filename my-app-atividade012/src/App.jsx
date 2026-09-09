import { useState, useEffect } from 'react';
import './components/estilosATT12.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    descricao: ''
  });

  const [listaProdutos, setListaProdutos] = useState([
    {
      id: 1,
      nome: "Relógio WatchCorner",
      preco: "250.00",
      descricao: "Relógio da marca WatchCorner 2025 aprova de água"
    },
    {
      id: 2,
      nome: "Teclado Mecânico Razer",
      preco: "400.00",
      descricao: "Teclado mecânico Razer de útlima geração"
    }
  ]);

  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []); 

  if (carregando) {
    return <p className="main-text">Carregando lista de produtos...</p>;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    const novoProduto = {
      ...formData,
      id: Date.now() 
    };

    setListaProdutos((prevLista) => [...prevLista, novoProduto]);
    setFormData({ nome: '', preco: '', descricao: '' });
  };

  const removerProduto = (idParaRemover) => {
    setListaProdutos((prevLista) => 
      prevLista.filter((produto) => produto.id !== idParaRemover)
    );
  };
  
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