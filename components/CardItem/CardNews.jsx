import { Box, Stack, Typography, useTheme } from "@mui/material";

import Image from "../Image";

const CardNews = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "0.75rem",
        backgroundColor: theme.palette.common.white,
        borderRadius: "1rem",
        border: "1px solid red",
      }}
    >
      <Box>
        <Box>
          <Image
            src="/img/Carousel.png"
            width="100%"
            height="150px"
            alt="image"
          />
        </Box>

        <Box>
          <Typography variant="h6" color={theme.palette.neutral.neutral8}>
            Lovy Food Restaurant
          </Typography>
          <Typography variant="body1" color={theme.palette.neutral.neutral2}>
            We are one of the best restaurants in the city of Surabaya with
            years of experience...
          </Typography>
          <Typography
            variant="subtitle2"
            color={theme.palette.neutral.neutral5}
          >
            02/07/2022
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardNews;
