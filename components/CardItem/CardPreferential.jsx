import { Box, Stack, Typography, useTheme } from "@mui/material";

import Image from "../Image";

const CardPreferential = ({ el }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "0.4rem",
        backgroundColor: "white",
        borderRadius: "1rem",
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 5px",
        marginBottom: "0.5rem",
      }}
    >
      {/* <Stack direction="row" spacing={1} >
          <Box width="30%">
            <Image src={el.img} width="100%" height="100%" alt="image" />
          </Box>

          <Box>
            <Typography variant="h6">{el.title}</Typography>
            <Typography variant="body1">{el.text}</Typography>
            <Typography variant="h6" color={theme.palette.primary.main}>
              {el.pointer}
            </Typography>
          </Box>
        </Stack> */}
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
