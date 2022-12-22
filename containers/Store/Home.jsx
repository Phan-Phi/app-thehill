import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Image from "../../components/Image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "../../components/Carousel";
import Preferential from "./components/Preferential";
import News from "./components/News";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Stack direction="row" marginBottom="2rem">
              <Stack direction="row" spacing={1} alignItems="center">
                <Image
                  src="/img/Image.png"
                  width={62}
                  height={62}
                  alt="image"
                />
                <Box>
                  <Typography variant="h5">Xin chào, Nam 👋</Typography>
                  <Stack direction="row">
                    <Typography variant="subtitle2">CẬP NHẬT </Typography>
                    <ChevronRightIcon />
                  </Stack>
                </Box>
              </Stack>

              <Box>
                <Image
                  src="/img/Auto Layout Horizontal.png"
                  width={40}
                  height={40}
                  alt="image"
                />
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} marginBottom="2rem">
            <Box
              sx={{
                border: `0.3px solid ${theme.palette.primary.main}`,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                backgroundColor: "white",
                borderRadius: "1.5rem",
              }}
            >
              <Box padding="1.5rem">
                <Typography variant="subtitle1">Điểm thưởng</Typography>
                <Typography variant="h1">51000</Typography>
              </Box>

              <Stack
                padding="1rem 1.5rem"
                direction="row"
                sx={{
                  color: theme.palette.common.white,
                  borderRadius: "0 0 1.5rem 1.5rem",
                  background:
                    "linear-gradient(90deg, rgba(179,246,246,1) 1%, rgba(21,224,212,1) 100%)",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="subtitle1"
                  color={theme.palette.common.white}
                >
                  Lịch sử tích điểm
                </Typography>
                <ChevronRightIcon />
              </Stack>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              "& .slick-dots": {
                width: "20%",
                bottom: "10px",
                right: "1px",
                "& li": {
                  width: "1px",
                },
              },
            }}
          >
            <Carousel />
          </Grid>
        </Grid>
      </Container>

      <Grid item xs={12}>
        <Preferential />
      </Grid>

      <Grid item xs={12}>
        <News />
      </Grid>

      <Grid item xs={12}></Grid>
    </>
  );
}
