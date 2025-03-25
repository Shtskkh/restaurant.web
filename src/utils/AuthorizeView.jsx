import {Navigate, Outlet} from "react-router";

function AuthorizeView() {
    const user = null;
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthorizeView;