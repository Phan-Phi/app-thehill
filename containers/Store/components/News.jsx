import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import HeadCategory from "../../../components/HeadCategory";
import { COLOR_HEAD_CATEGORY, SVG_HEAD_CATEGORY } from "../../../contants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardNews from "../../../components/CardItem/CardNews";

const settings = {
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
};

export default function News() {
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
          title="Tin Tức"
          color={COLOR_HEAD_CATEGORY.NEWS}
          svg={SVG_HEAD_CATEGORY.NEWS}
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
              <CardNews />
            </Grid>
            <Grid item xs={6}>
              <CardNews />
            </Grid>
            <Grid item xs={6}>
              <CardNews />
            </Grid>
          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
}
