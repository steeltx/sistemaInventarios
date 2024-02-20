import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';       
import useCategoriasDatos from '../../hooks/useCategoryData';
import { AddCategory } from './components/AddCategory';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export const Categories = () => {

    // usar el custom hook
    const { data, addData } = useCategoriasDatos();

    const onAddCategory = (newCategory) => {
		// si ya existe la categoria anteriormente, no agregar
		if(data.filter(e => e.nombre.toLocaleLowerCase() === newCategory.toLocaleLowerCase()).length > 0){
            return;
        }
        // agregar la nueva categoria con la estructura de objeto
        addData([{nombre: newCategory, estatus: 1},...data]);
	}

    const onDelete = ( { nombre } ) => {
        return (
            <Button 
            severity="danger" 
            label="Eliminar"
            onClick={() => deleteCategory(nombre)}
            />
        );
    }

    // buscar el index del registro y eliminarlo del arreglo
    const deleteCategory = (nombre) => {
        let newCategories = [...data];
        const categoryIndex = newCategories.findIndex(
			(category) => category.nombre === nombre
		);
		newCategories.splice(categoryIndex,1);
		addData(newCategories);
    }

    // input que se muestra al dar la opcion de editar el campo
    const textEditor = (options) => {
        return(
            <InputText 
                type="text" 
                value={options.value} 
                onChange={(e) => options.editorCallback(e.target.value)} 
            />
        );
    };

    // cuando se acepte la edicion, cambiar el valor del registro y actualizar estado
    const onRowEditComplete = (e) => {
        let newCategories = [...data];
        let { newData, index } = e;
        newCategories[index] = newData;
        addData(newCategories);
    };

    const renderCategorias = () => {
        return (
            <>
                <AddCategory onAddCategory={onAddCategory} />
                <DataTable 
                    value={data} header="Categorías" showGridlines stripedRows
                    paginator rows={10} rowsPerPageOptions={[10, 20, 30, 50]} 
                    editMode="row"
                    onRowEditComplete={onRowEditComplete}
                >
                    <Column 
                        field="nombre" 
                        header="Nombre" 
                        sortable 
                        editor={(options) => textEditor(options)}
                    ></Column>
                    <Column 
                        field="estatus" 
                        header="Estatus" 
                        sortable 
                        body={(rowData) => rowData.estatus === 1 ? 'Activo' : 'Inactivo'}
                    ></Column>
                    <Column 
                        rowEditor={true} 
                        headerStyle={{ width: '10%', minWidth: '8rem' }} 
                        bodyStyle={{ textAlign: 'center' }}
                    ></Column>
                    <Column body={onDelete}></Column>
                </DataTable>
            </>
        );
    }

    return (
        <>  
            { renderCategorias() }
        </>
    )
}
