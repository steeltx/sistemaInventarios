import { useState } from "react";
import categorias from "../data/categorias.json";

const useCategoryData = () => {

    const [ data, setData ] = useState(categorias);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    const addData = (newData) => {
        setData(newData);
    }

    return {
        data,
        isLoading,
        error,
        addData
    }
}

export default useCategoryData;