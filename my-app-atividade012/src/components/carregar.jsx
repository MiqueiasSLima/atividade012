import { useState, useEffect } from 'react';

function useCarregar(){
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCarregando(false);
    }, 2000);
        return () => clearTimeout(timer);
    }, []); 

    return {
        carregando,
        setCarregando
    };
}

export default useCarregar

