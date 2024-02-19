import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';       
import useCategoriasDatos from '../../hooks/useCategoriasDatos';

export const Categorias = () => {

    const { data } = useCategoriasDatos();

    const renderCategorias = () => {
        return (
            <DataTable 
                value={data} header="Categorías" showGridlines stripedRows
                paginator rows={10} rowsPerPageOptions={[10, 20, 30, 50]} 
            >
                <Column field="nombre" header="Nombre" sortable></Column>
                <Column field="estatus" header="Estado" sortable></Column>
            </DataTable>
        );
    }

    return (
        <>  
            { renderCategorias() }
        </>
    )
}
