import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";
import StyledCarousel from "../Carousel/Carousel";
import Item from "../Carousel/BannerItems";
import homeSlider from "../../assets/utils/homeSlider.json";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <StyledCarousel>
        {homeSlider.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </StyledCarousel>
    </Box>
  );
};

export default Home;
