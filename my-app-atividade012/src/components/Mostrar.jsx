import { useState, useEffect } from 'react'
import './estilosATT12.css'
import ProdutoCard from './ProdutoCard.jsx'

function Mostrar({ listaProdutos, removerProduto}){
    return(
        <>
            <h3 className="sub-text">Lista de Produtos Cadastrados:</h3>
        
            {listaProdutos.length === 0 ? (
            <p className="sub-text">Nenhum produto adicionado ainda.</p>
                ) : (
            <ul className="li">
                {listaProdutos.map(produto => 
                <ProdutoCard 
                key={produto.id} 
                nome={produto.nome} 
                preco={produto.preco} 
                descricao={produto.descricao} 
                botaoRemover={<button className="button-remove" onClick={() => removerProduto(produto.id)}>Remover</button>}/>)}
            </ul>
            )}
        </>
    );
}

export default Mostrar