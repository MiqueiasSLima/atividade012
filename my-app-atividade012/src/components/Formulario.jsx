import { useState, useEffect } from 'react'
import './estilosATT12.css';

function Formulario({ formData, handleChange, handleSubmit }){
    return(
        <>
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
        </>
    );
}

export default Formulario