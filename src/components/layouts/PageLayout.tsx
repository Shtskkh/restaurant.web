import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

function PageLayout({
  children,
  title,
}: {
  children?: ReactNode;
  title?: string;
}) {
  return (
    <Box padding={3} width={"100%"}>
      <Typography
        variant="h4"
        color="textPrimary"
        mt={3}
        mb={3}
        sx={{ fontWeight: "bold" }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default PageLayout;
