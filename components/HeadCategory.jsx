import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Image from "./Image";

export default function HeadCategory({ title, color, svg }) {
  return (
    <Container>
      <Grid container marginY="2rem">
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h5">{title}</Typography>
              <Image src={svg} width={25} height={25} alt="image" />
            </Stack>

            <Typography
              variant="subtitle1"
              sx={{ cursor: "pointer", color: color }}
            >
              Xem Thêm
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
