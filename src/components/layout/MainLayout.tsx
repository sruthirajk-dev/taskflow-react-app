import { Box, Container } from "@mui/material";
import type { ReactNode } from "react";

import Header from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Header />

      <Container
        maxWidth="lg"
        sx={{
          py: 4,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;