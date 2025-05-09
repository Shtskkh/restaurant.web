import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { authStore } from "./context/auth.ts";
import { queryClient } from "./utils/clients.ts";
import { router } from "./utils/router.ts";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const auth = authStore();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} context={{ auth }} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
