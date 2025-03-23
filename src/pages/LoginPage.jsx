import LoginForm from "../components/LoginForm.jsx";
import {Box, CssBaseline} from "@mui/material";
import PageTitle from "../utils/PageTitle.jsx";

function LoginPage() {
    return (
        <>
            <PageTitle title="Вход" />
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CssBaseline />
                <LoginForm />
            </Box>
        </>
    )
}

export default LoginPage;