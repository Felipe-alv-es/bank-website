import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";
import StyledCarousel from "../Carousel/Carousel";
import BannerItems from "../Carousel/BannerItems";
import homeSlider from "../../assets/utils/homeSlider.json";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <StyledCarousel interval={12000}>
        {homeSlider.map((item) => (
          <BannerItems key={item.id} item={item} />
        ))}
      </StyledCarousel>
    </Box>
  );
};

export default Home;
