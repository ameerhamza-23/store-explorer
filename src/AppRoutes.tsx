import { Routes, Route } from "react-router-dom";
import MainLayout from "components/MainLayout.tsx";
import HomePage from "pages/HomePage";
import ProductPage from "pages/ProductPage";
import CartPage from "pages/CartPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Route>
        </Routes>
    )
}