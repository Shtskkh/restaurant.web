import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { authStore } from "./context/auth.ts";
import { queryClient } from "./utils/clients.ts";
import { router } from "./utils/router.ts";
import { theme } from "./utils/themes.ts";

function App() {
  const auth = authStore();
  return (
    <ThemeProvider theme={theme} defaultMode={"dark"}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} context={{ auth }} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
