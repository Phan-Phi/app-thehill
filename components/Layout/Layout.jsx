import { Box, Container } from "@mui/material";
import React from "react";
import StatusBar from "../StatusBar";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        width: "428px",
        backgroundColor: "white",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <StatusBar />
      <Container>{children}</Container>
    </Box>
  );
}
