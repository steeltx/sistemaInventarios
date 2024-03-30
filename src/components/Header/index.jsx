import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    const end = (
        <div className="gap-2">
            <i className="pi pi-sign-out" style={{ fontSize: '2rem' }}></i>
        </div>
    );

    const items = [
        {
            id: 1,
            label: 'Inicio',
            icon: 'pi pi-home'
        },
        {
            id: 2,
            label: 'Catálogos',
            icon: 'pi pi-align-justify',
            items: [
                {
                    id: 2.1,
                    label: 'Unidad de medida',
                    icon: 'pi pi-chevron-right',
                    command: () => {
                        navigate('/unidadMedida')
                    }
                },
                {
                    id: 2.2,
                    label: 'Categorias',
                    icon: 'pi pi-chevron-right',
                    command: () => {
                        navigate('/categorias')
                    }
                },
                {
                    id: 2.3,
                    label: 'Productos',
                    icon: 'pi pi-chevron-right'
                },
            ]
        },
        {
            id: 3,
            label: 'Almacenes',
            icon: 'pi pi-building'
        },
        {
            id: 4,
            label: 'Reportes',
            icon: 'pi pi-file'
        },
    ];

    return (
        <div className="card mb-5">
            <Menubar model={items}  end={end} />
        </div>
    )
}
