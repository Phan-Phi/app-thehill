import { Box, Grid } from "@mui/material";
import React, { useCallback, useEffect, useRef } from "react";
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

const arr = [
  {
    img: "/img/thecoffeehouse.png",
    title: "The Coffee House",
    text: "Thức Uống",
    pointer: "-30%",
  },

  {
    img: "/img/phuclong.jpeg",
    title: "Phuc Long",
    text: "Thức Uống",
    pointer: "-20%",
  },
  {
    img: "/img/gongcha.jpeg",
    title: "Gong Cha",
    text: "Thức Uống",
    pointer: "-50%",
  },
];

export default function Preferential() {
  const slickRef = useRef();

  useEffect(() => {
    if (slickRef.current) {
      slickRef.current.innerSlider.list.style.padding = "0 75px 0 0";
    }
  }, [slickRef]);

  const renderItem = useCallback(() => {
    return arr.map((el, idx) => {
      console.log("🚀 ~ file: Preferential.jsx:53 ~ returnarr.map ~ el", el);
      return (
        <Grid item xs={6}>
          <CardPreferential key={idx} el={el} />
        </Grid>
      );
    });
  }, []);

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
              // "& .slick-track": {
              //   marginBottom: "20px",
              // },
            },

            "& .MuiGrid-root": {
              borderRadius: "2rem",
              maxWidth: "100% !important",
            },
          }}
        >
          <Slider {...settings}>
            {renderItem}
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
