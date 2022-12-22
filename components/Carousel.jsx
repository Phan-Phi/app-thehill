import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Box } from "@mui/material";
import Image from "./Image";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <Box sx={{ backgroundColor: "red", borderRadius: "0.7rem" }}>
        <Image
          src="/img/Carousel.png"
          width="380"
          height="163px"
          style={{ objectFit: "cover", borderRadius: "0.7rem" }}
          alt="image"
        />
      </Box>

      <Box sx={{ backgroundColor: "red", borderRadius: "0.7rem" }}>
        <Image
          src="/img/Carousel.png"
          width="380"
          height="163px"
          style={{ objectFit: "cover", borderRadius: "0.7rem" }}
          alt="image"
        />
      </Box>

      <Box sx={{ backgroundColor: "red", borderRadius: "0.7rem" }}>
        <Image
          src="/img/Carousel.png"
          width="380"
          height="163px"
          style={{ objectFit: "cover", borderRadius: "0.7rem" }}
          alt="image"
        />
      </Box>
    </Slider>
  );
}
