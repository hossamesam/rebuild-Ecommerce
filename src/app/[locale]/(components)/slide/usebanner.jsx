"use client";
// for nextjs 13.4 user
import React from "react";
import Slider from "./slidera";
import "./slider.css";
import { Box } from "@mui/material";

const images = [
  {
    url: "https://marketplace.canva.com/EAFEH3mIUaM/1/0/1600w/canva-dark-grey-and-white-minimalist-new-fashion-collection-banner-nvaqxg-8iXI.jpg",
  },
  {
    url: "https://shopping.saigoncentre.com.vn/Data/Sites/1/News/1120/topbanner.jpg",
  },
  {
    url: "https://web.larue.com.kh/image/vcache/catalog/Men-Fashion-1920x550.webp",
  },
];

const Usebanner = () => {
  return (
    <>
      <Box className={"h-96"}>
        <Slider imageList={images} width="100%" height={"400px"} />
      </Box>
    </>
  );
};
export default Usebanner;
