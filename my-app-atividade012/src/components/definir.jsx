import { useState, useEffect } from 'react';


function useDefinir(){
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

    return {
        formData,
        setFormData,
        listaProdutos,
        setListaProdutos
    };
}

export default useDefinir





