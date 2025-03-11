import {Box, Button, Container, FormControl, Input, InputLabel, Paper, Typography} from "@mui/material";
import {useNavigate} from "react-router";

function LoginForm(props) {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/home");
    }

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
                <Typography variant="h5" component="h1" textAlign="center"> Вход </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" mt={1}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="login">Логин</InputLabel>
                        <Input required id="login" name="login" />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="password">Пароль</InputLabel>
                        <Input required id="password" name="password" type="password" />
                    </FormControl>
                    <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 4}}>Войти</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default LoginForm;