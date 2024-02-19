import { useState } from "react";
import categorias from "../data/categorias.json";

const useCategoriasDatos = () => {

    const [ data, setData ] = useState(categorias);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    return {
        data,
        isLoading,
        error
    }
}

export default useCategoriasDatos;