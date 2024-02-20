import { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const AddUnit = ({ onAddUnit }) => {

    const [inputValue, setInputValue] = useState({
        nombre: '',
        clave: ''
    });

    const onInputChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        const newValues = {
            ...inputValue,
            [name]: value,
        };
        setInputValue(newValues);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue?.nombre.trim().length <= 1 || inputValue?.clave.trim().length <= 1 ) return;
        onAddUnit(inputValue?.nombre, inputValue?.clave);
        setInputValue({
            nombre: '',
            clave: ''
        });
    }

    return(
        <>
            <form onSubmit={ onSubmit } aria-label="form">
                <div className="field">
                    <label>Nombre</label>
                    <InputText
                        type="text"
                        name="nombre"
                        value={inputValue.nombre} 
                        onChange={onInputChange}
                        placeholder="Ingresa el nombre"
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                    />
                </div>
                <div className="field">
                    <label>Clave</label>
                    <InputText
                        type="text"
                        name="clave"
                        value={inputValue.clave} 
                        onChange={onInputChange}
                        placeholder="Ingresa la clave"
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
