import {Navigate, Outlet} from "react-router";
function AuthorizeView() {
    const user = true;
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthorizeView;