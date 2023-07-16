import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";
import StyledCarousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <StyledCarousel />
    </Box>
  );
};

export default Home;
