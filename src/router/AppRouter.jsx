import { Routes, Route, Navigate } from "react-router-dom";
import { CategoriesPage } from "../pages/CategoriesPage";
import { UnitMeasurePage } from "../pages/UnitMeasurePage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="unidadMedida" element={<UnitMeasurePage /> } />
            <Route path="categorias" element={<CategoriesPage /> } />

            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    )
}
