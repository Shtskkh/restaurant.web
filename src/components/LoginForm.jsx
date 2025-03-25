import {Box, Button, Container, FormControl, Input, InputLabel, Paper, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import {useState} from "react";

function LoginForm() {

    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin= (e) => {
        setLogin(e.currentTarget.value)
    }

    const handlePassword = (e) => {
        setPassword(e.currentTarget.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("login", login);
        data.append("password", password);

        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: data,
        })

        if (response.ok) {
            const data = await response.json();
            console.log(data.value)
            navigate("/dashboard");
        }

        if (response.status === 401) {
            console.log("Пользователь не авторизирован")
        }
    }

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
                <Typography variant="h5" component="h1" textAlign="center"> Вход </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" mt={1}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="login">Логин</InputLabel>
                        <Input required id="login" name="login" onChange={handleLogin} />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="password">Пароль</InputLabel>
                        <Input required id="password" name="password" type="password" onChange={handlePassword} />
                    </FormControl>
                    <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 4}}>Войти</Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default LoginForm;