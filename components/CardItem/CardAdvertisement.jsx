import { Box, Typography, useTheme } from "@mui/material";

import Image from "../Image";

const CardAdvertisement = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "0.75rem",
        backgroundColor: theme.palette.common.white,
        borderRadius: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 5px",
        cursor: "pointer",
      }}
    >
      <Box>
        <Box sx={{ position: "relative" }}>
          <Image
            src="/img/Advertisement.png"
            width="100%"
            height="150px"
            alt="image"
          />

          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: theme.palette.common.white,
              borderRadius: "2rem",
              padding: "0.5rem",
            }}
          >
            <Image
              src="/img/event note.svg"
              width="30px"
              height="30px"
              alt="image"
            />
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" color={theme.palette.neutral.neutral9}>
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

export default CardAdvertisement;
