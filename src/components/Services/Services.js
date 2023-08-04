import React, { useState } from "react";
import { Box, Icon, IconButton, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import serviceSlider from "../../assets/utils/serviceSlider.tsx";
import {
  getIconButtonStyle,
  getTextBoxStyle,
  getTitleStyle,
  getTextStyle,
  getContainerStyle,
  getPageTitleStyle,
  getPageSubtitleStyle,
} from "./Services.styles.ts";

const Services = () => {
  const [swiper, setSwiper] = useState();
  const swipeNextPage = () => swiper.slideNext();
  const swipePreviousPage = () => swiper.slidePrev();

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
    spaceBetween: "36px",
    onSwiper: setSwiper,
    centeredSlides: true,
    loop: true,
    pagination: isMobile ? true : false,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      850: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4,
      },
    },
    style: {
      margin: isMobile ? "0 24px 0 24px" : "0 36px 0 36px",
      background: "transparent",
    },
  };

  return (
    <Box>
      <Typography sx={getPageTitleStyle}>
        {"Confira nossos serviços"}
      </Typography>
      <Typography sx={getPageSubtitleStyle}>
        {"Para o seu dia a dia!"}
      </Typography>
      <Box sx={getContainerStyle}>
        <IconButton onClick={swipePreviousPage} sx={getIconButtonStyle}>
          <BsChevronLeft />
        </IconButton>
        <Swiper {...params}>
          {serviceSlider.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={getTextBoxStyle}>
                <Box sx={getTitleStyle}>
                  <Typography>{item.title}</Typography>
                  <Icon>{item.icon}</Icon>
                </Box>
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
    </Box>
  );
};

export default Services;
