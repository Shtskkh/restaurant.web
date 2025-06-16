import { Box, CircularProgress } from "@mui/material";
import PageLayout from "./layouts/PageLayout.tsx";

export const PendingComponent = () => {
  return (
    <PageLayout>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    </PageLayout>
  );
};
