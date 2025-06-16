import { Box } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import Sidebar from "../Sidebar/Sidebar.tsx";

function AuthLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Outlet />
    </Box>
  );
}

export default AuthLayout;
