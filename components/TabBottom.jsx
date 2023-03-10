import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Image from "./Image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function TabBottom({ width }) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        display: router.pathname == "/" ? "none" : "flex",
        width: width,
        height: "5.5rem",
        position: "fixed",
        backgroundColor: theme.palette.common.white,
        bottom: 0,
        paddingX: "2rem",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <HomeRoundedIcon
          sx={{
            color: theme.palette.primary.main,
            width: 30,
            height: 30,
            cursor: "pointer",
          }}
        />
        <Image
          color={theme.palette.primary.dark}
          src="/img/Coupon Discount.svg"
          width={30}
          height={30}
          alt="image"
          style={{ cursor: "pointer" }}
        />
        <Image
          color={theme.palette.primary.dark}
          src="/img/Auto Layout Horizontal (1).png"
          width={70}
          height={70}
          alt="image"
          style={{ cursor: "pointer" }}
        />
        <Image
          src="/img/map.svg"
          width={30}
          height={30}
          alt="image"
          style={{ cursor: "pointer" }}
        />
        <Link href="/">
          <Image
            src="/img/person.svg"
            width={30}
            height={30}
            alt="image"
            style={{ cursor: "pointer", "& rect": { fill: "red" } }}
          />
        </Link>
      </Stack>
    </Box>
  );
}
