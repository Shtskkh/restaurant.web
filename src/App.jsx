import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import AuthorizeView from "./utils/AuthorizeView.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import DishesPage from "./pages/DishesPage.jsx";
import StaffPage from "./pages/StaffPage.jsx";
import SuppliesPage from "./pages/SuppliesPage.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<AuthorizeView />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/dishes" element={<DishesPage />} />
                    <Route path="/staff" element={<StaffPage />} />
                    <Route path="/supplies" element={<SuppliesPage />} />
                </Route>
                <Route path="*" element={<Navigate to={"/login"} />} />
            </Routes>
        </BrowserRouter>
    )
}