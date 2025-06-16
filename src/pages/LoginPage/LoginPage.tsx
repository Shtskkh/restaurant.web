import { Box } from "@mui/material";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useStore } from "zustand/react";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
import { authStore } from "../../context/auth.ts";

const route = getRouteApi("/login/");

function LoginPage() {
  const auth = useStore(authStore);
  const navigate = useNavigate();
  const { redirect } = route.useSearch();

  const handleSuccess = (login: string, token: string) => {
    auth.username = login;
    auth.accessToken = token;
    auth.isAuthenticated = true;
    if (!redirect) navigate({ to: "/dashboard", replace: true }).then();
    navigate({ to: redirect, replace: true }).then();
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <LoginForm onSuccess={handleSuccess} />
    </Box>
  );
}

export default LoginPage;
