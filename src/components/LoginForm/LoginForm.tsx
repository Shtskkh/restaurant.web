import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { FormEvent, useState } from "react";
import { useAuth } from "../../utils/apiHooks.ts";
import { testPassword } from "../../utils/regex.ts";
import { LoginFormProps } from "./types.ts";

function LoginForm({ onSuccess }: LoginFormProps) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState<string>("");
  const [helperText, setHelperText] = useState<string>("");
  const [errorValidation, setErrorValidation] = useState<boolean>(false);
  const { error, refetch, isLoading } = useAuth(login, password);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!testPassword(password)) {
      setErrorValidation(true);
      setHelperText(
        "Пароль должен содержать от 8 символов, спец. символы и цифры.",
      );
      return;
    } else {
      setErrorValidation(false);
      setHelperText("");
    }

    const { data } = await refetch();

    if (data?.token) onSuccess(login, data.token);
  };

  return (
    <Container maxWidth="xs">
      <Paper
        component="form"
        elevation={5}
        sx={{ padding: "1rem" }}
        onSubmit={handleSubmit}
      >
        <Stack spacing={3}>
          <Typography variant="h5" align="center">
            Вход
          </Typography>
          {error ? (
            <Box bgcolor={red[500]} borderRadius={1} padding={1}>
              <Typography color={"white"} variant="h6" align="center">
                {error.message != null
                  ? "Ошибка сервера, попробуйте позже."
                  : error.title}
              </Typography>
            </Box>
          ) : null}
          <TextField
            id="login"
            name="Login"
            label="Логин"
            variant="outlined"
            required
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <TextField
            id="password"
            name="Password"
            label="Пароль"
            variant="outlined"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            error={errorValidation}
            helperText={helperText}
          />
          <Button
            sx={{ height: 50 }}
            type="submit"
            variant="contained"
            loading={isLoading}
          >
            Войти
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default LoginForm;
