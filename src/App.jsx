import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AuthorizeView from "./utils/AuthorizeView.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<AuthorizeView />}>
                    <Route path="/home" element={<HomePage />} />
                </Route>
                <Route path="*" element={<Navigate to={"/login"} />} />
            </Routes>
        </BrowserRouter>
    )
}