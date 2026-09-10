import { useState, useEffect } from 'react';
import useDefinir from './definir'

function useListar({ formData, setFormData, listaProdutos, setListaProdutos }){

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

    return{
        handleChange,
        handleSubmit,
        removerProduto
    };
}


export default useListar
