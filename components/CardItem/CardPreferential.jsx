import { Box, Stack, Typography, useTheme } from "@mui/material";

import Image from "../Image";

const CardPreferential = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "rem",
        backgroundColor: "white",
        borderRadius: "1rem",
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 5px",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        // sx={{
        //   boxShadow:
        //     "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        // }}
      >
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
