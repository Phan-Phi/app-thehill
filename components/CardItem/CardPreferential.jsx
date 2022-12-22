import { Box, Stack, Typography, useTheme } from "@mui/material";

import Image from "../Image";

const CardPreferential = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "0.75rem",
        backgroundColor: "red",
        borderRadius: "1rem",
      }}
    >
      <Stack direction="row" spacing={1}>
        <Box width="30%">
          <Image
            src="/img/thecoffeehouse.png"
            width="100%"
            height="100%"
            alt="image"
          />
        </Box>

        <Box>
          <Typography variant="h6">The Coffee House</Typography>
          <Typography variant="body1">Thức Uống</Typography>
          <Typography variant="h6" color={theme.palette.primary.main}>
            -30%
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default CardPreferential;
