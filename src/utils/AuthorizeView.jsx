import {Navigate} from "react-router";
function AuthorizeView({ children }) {
    const user = null;
    return user ? children : <Navigate to="/login" />;
}

export default AuthorizeView;