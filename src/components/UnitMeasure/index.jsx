import { DataTable } from 'primereact/datatable';
import { Badge } from 'primereact/badge';
import { Column } from 'primereact/column';       
import useDataLocal from '../../hooks/useDataLocal';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { AddUnit } from './components/AddUnit';
import unidadMedida from '../../data/unidadMedida.json';

export const UnitMeasure = () => {

    // usar el custom hook
    const { data, addData } = useDataLocal(unidadMedida);

    const onAddUnit = (newUnit, key) => {
		// si ya existe la categoria anteriormente, no agregar
		if(data.filter(e => e.nombre.toLocaleLowerCase() === newUnit.toLocaleLowerCase()).length > 0){
            return;
        }
        // agregar la nueva categoria con la estructura de objeto
        addData([{nombre: newUnit, clave: key, estatus: 1},...data]);
	}

    const onDelete = ( { nombre } ) => {
        return (
            <Button 
                icon="pi pi-trash"
                severity="danger" 
                label="Eliminar"
                onClick={() => deleteUnit(nombre)}
            />
        );
    }

    // buscar el index del registro y eliminarlo del arreglo
    const deleteUnit = (nombre) => {
        let newUnits = [...data];
        const unitIndex = newUnits.findIndex(
			(unit) => unit.nombre === nombre
		);
		newUnits.splice(unitIndex,1);
		addData(newUnits);
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
        let newUnits = [...data];
        let { newData, index } = e;
        newUnits[index] = newData;
        addData(newUnits);
    };

    const renderUnit = () => {
        return (
            <>
                <AddUnit onAddUnit={onAddUnit} />
                <DataTable 
                    value={data} header="Unidades de medida" showGridlines stripedRows
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
                        field="clave" 
                        header="Clave" 
                        sortable 
                        editor={(options) => textEditor(options)}
                    ></Column>
                    <Column 
                        field="estatus" 
                        header="Estatus" 
                        sortable 
                        body={(rowData) => rowData.estatus === 1 
                            ? <Badge value="Activo"></Badge> 
                            : <Badge value="Inactivo" severity="warning"></Badge>}
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
            { renderUnit() }
        </>
    )
}
