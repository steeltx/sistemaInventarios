import { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";

export const AddCategory = ( { onAddCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onAddCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        <>
            <form onSubmit={ onSubmit } aria-label="form">
                <div className="field">
                    <label>Categoría</label>
                    <InputText
                        type="text"
                        value={inputValue} 
                        onChange={onInputChange}
                        placeholder="Ingresa la nueva categoria"
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                    />
                </div>
                <Button 
                    label="Agregar" 
                    className="my-2"
                />
            </form>
            
        </>
    );
}
