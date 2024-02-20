import { useState } from "react";

const useDataLocal = (initialData) => {

    const [ data, setData ] = useState(initialData);
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

export default useDataLocal;