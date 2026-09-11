import { useState, useEffect } from 'react'
import './estilosATT12.css';

function ProdutoCard({ nome, preco, descricao, botaoRemover }){
    return(
        <>
            <li className="li">
                <p>Nome do produto: {nome}</p>
                <p>Preço: ${preco}</p>
                <p>Descrição: {descricao}</p>
                {botaoRemover}
            </li>
        </>
    );
}

export default ProdutoCard;