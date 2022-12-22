import { Box, Container } from "@mui/material";
import React from "react";
import { useMeasure } from "react-use";
import StatusBar from "../StatusBar";
import TabBottom from "../TabBottom";

export default function Layout({ children }) {
  const [ref, { width }] = useMeasure();

  return (
    <Box
      ref={ref}
      sx={{
        width: "428px",
        backgroundColor: "white",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <StatusBar />
      {children}

      <TabBottom width={width} />
    </Box>
  );
}
