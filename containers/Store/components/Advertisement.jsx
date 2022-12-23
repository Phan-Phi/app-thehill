import { Box, Grid } from "@mui/material";
import React from "react";
import HeadCategory from "../../../components/HeadCategory";
import { COLOR_HEAD_CATEGORY, SVG_HEAD_CATEGORY } from "../../../contants";
import CardAdvertisement from "../../../components/CardItem/CardAdvertisement";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
};

export default function Advertisement() {
  return (
    <Grid container paddingBottom={20}>
      <Grid item xs={12}>
        <HeadCategory
          title="Quảng Cáo"
          color={COLOR_HEAD_CATEGORY.ADVERTISEMENT}
          svg={SVG_HEAD_CATEGORY.ADVERTISEMENT}
        />
      </Grid>

      <Grid item xs={12}>
        <Box
          sx={{
            overflowX: "hidden",
            paddingLeft: "24px",
            "& .slick-slide": {
              width: "100%",
              marginRight: "10px",
            },
            "& button": {
              display: "none",
            },
            "& .slick-track": {
              display: "flex",
            },
            "& .slick-list": {
              padding: "0 !important",
              "& .slick-track": {
                marginBottom: "20px",
              },
            },

            // "& .slick-track": {
            //   marginBottom: "20px",
            // },

            "& .MuiGrid-root": {
              borderRadius: "2rem",
              maxWidth: "100% !important",
            },
          }}
        >
          <Slider {...settings}>
            <Grid item xs={6}>
              <CardAdvertisement />
            </Grid>
            <Grid item xs={6}>
              <CardAdvertisement />
            </Grid>
            <Grid item xs={6}>
              <CardAdvertisement />
            </Grid>
          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
}
