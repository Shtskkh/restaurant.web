import LoginForm from "../components/LoginForm.jsx";
import {Box} from "@mui/material";

function LoginPage() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <LoginForm />
        </Box>
    )
}

export default LoginPage;