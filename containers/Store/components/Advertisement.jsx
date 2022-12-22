import { Grid } from "@mui/material";
import React from "react";
import HeadCategory from "../../../components/HeadCategory";
import { COLOR_HEAD_CATEGORY, SVG_HEAD_CATEGORY } from "../../../contants";

export default function Advertisement() {
  return (
    <Grid container marginBottom="52rem">
      <Grid item xs={12}>
        <HeadCategory
          title="Quảng Cáo"
          color={COLOR_HEAD_CATEGORY.ADVERTISEMENT}
          svg={SVG_HEAD_CATEGORY.ADVERTISEMENT}
        />
      </Grid>
    </Grid>
  );
}
