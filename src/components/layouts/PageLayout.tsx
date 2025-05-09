import { Box } from "@mui/material";
import { ReactNode } from "react";

function PageLayout({ children }: { children: ReactNode }) {
  return <Box>{children}</Box>;
}

export default PageLayout;
