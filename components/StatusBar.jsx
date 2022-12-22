import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "./Image";

export default function StatusBar() {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingY={1}
      >
        <Typography>9:41</Typography>
        <Stack direction="row">
          <Image
            src="/img/Cellular Connection.png"
            width={20}
            height={10}
            alt="image"
          />
          <Image src="/img/Wifi.png" width={20} height={10} alt="image" />
          <Image src="/img/Battery.png" width={20} height={10} alt="image" />
        </Stack>
      </Stack>
    </Container>
  );
}
