import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import serviceSlider from "../../assets/utils/serviceSlider.json";
import {
  getIconButtonStyle,
  getTextBoxStyle,
  getTitleStyle,
  getTextStyle,
  getContainerStyle,
} from "./Services.styles.ts";

const Services = () => {
  const [swiper, setSwiper] = useState(null);
  const swipeNextPage = () => swiper.slideTo(+1);
  const swipePreviousPage = () => swiper.slideTo(-1);

  const params = {
    slidesPerView: 3,
    spaceBetween: "36px",
    onSwiper: { setSwiper },
    style: {
      margin: "0 36px 0 36px",
      background: "#f3f3f3",
    },
  };

  return (
    <Box sx={getContainerStyle}>
      <IconButton onClick={swipePreviousPage} sx={getIconButtonStyle}>
        <BsChevronLeft />
      </IconButton>
      <Swiper {...params}>
        {serviceSlider.map((item) => (
          <SwiperSlide key={item.id}>
            <Box sx={getTextBoxStyle}>
              <Typography sx={getTitleStyle}>{item.title}</Typography>
              <Box sx={{ m: 2 }} />
              <Typography sx={getTextStyle}>{item.text}</Typography>
              <Box sx={{ m: 3 }} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton onClick={swipeNextPage} sx={getIconButtonStyle}>
        <BsChevronRight />
      </IconButton>
    </Box>
  );
};

export default Services;
