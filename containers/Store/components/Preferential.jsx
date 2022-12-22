import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import HeadCategory from "../../../components/HeadCategory";
import { COLOR_HEAD_CATEGORY, SVG_HEAD_CATEGORY } from "../../../contants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPreferential from "../../../components/CardItem/CardPreferential";

const settings = {
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
};

export default function Preferential() {
  const slickRef = useRef();

  useEffect(() => {
    if (slickRef.current) {
      slickRef.current.innerSlider.list.style.padding = "0 75px 0 0";
    }
  }, [slickRef]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <HeadCategory
          title="Ưu Đãi"
          color={COLOR_HEAD_CATEGORY.PREFERENTIAL}
          svg={SVG_HEAD_CATEGORY.PREFERENTIAL}
        />
      </Grid>

      <Grid item xs={12}>
        <Box
          sx={{
            overflowX: "hidden",
            paddingLeft: "24px",
            "& .slick-slide": {
              width: "100%",
              marginRight: "5px",
            },
            "& button": {
              display: "none",
            },
            "& .slick-track": {
              display: "flex",
            },
            "& .slick-list": {
              padding: "0 !important",
            },
            "& .MuiGrid-root": {
              borderRadius: "2rem",
              maxWidth: "100% !important",
            },
          }}
        >
          <Slider {...settings}>
            <Grid item xs={6}>
              <CardPreferential />
            </Grid>
            <Grid item xs={6}>
              <CardPreferential />
            </Grid>
            <Grid item xs={6}>
              <CardPreferential />
            </Grid>
          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
}
