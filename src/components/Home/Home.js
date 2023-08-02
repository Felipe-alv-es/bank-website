import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import homeSlider from "../../assets/utils/homeSlider.json";
import {
  getImageStyle,
  getContentBoxStyle,
  getTitleStyle,
  getTextStyle,
  getButtonStyle,
  getContainerStyle,
} from "./Home.styles.ts";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const params = {
    slidesPerView: 1,
    navigation: isMobile ? false : true,
    pagination: { clickable: true },
    autoplay: true,
  };

  return (
    <Box sx={getContainerStyle}>
      <Navbar />
      <Swiper {...params}>
        {homeSlider.map((item) => (
          <SwiperSlide key={item.id}>
            <Box>
              <Box
                component="img"
                alt={item.title}
                src={item.image}
                sx={getImageStyle}
              />
              <Box sx={getContentBoxStyle}>
                <Typography sx={getTitleStyle} variant="">
                  {item.title}
                </Typography>
                <Box sx={{ m: 3 }} />
                <Typography sx={getTextStyle}>{item.text}</Typography>
                <Box sx={{ m: 3 }} />
                <Button variant="outlined" sx={getButtonStyle}>
                  Confira
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Home;
