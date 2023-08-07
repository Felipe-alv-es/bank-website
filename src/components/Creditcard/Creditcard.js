import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, IconButton, Typography } from "@mui/material";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import creditCardSlider from "../../assets/utils/creditCardSlider.tsx";
import {
  getIconButtonStyle,
  getTextBoxStyle,
  getTitleStyle,
  getTextStyle,
  getContainerStyle,
  getPageTitleStyle,
  StyledButton,
  getImageBoxStyle,
} from "./Creditcard.styles.tsx";

const Creditcard = () => {
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
    spaceBetween: isMobile ? 0 : "36px",
    onSwiper: setSwiper,
    breakpoints: {
      200: {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
      },
      850: {
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
      },
      1500: {
        slidesPerView: 4, // loop não funciona com +4 slides, quebra o stilo
      },
      1750: {
        slidesPerView: 5,
      },
    },
    style: {
      margin: isMobile ? "" : "0 36px 0 36px",
      background: "transparent",
    },
  };

  return (
    <Box>
      <Typography sx={getPageTitleStyle}>
        {"Cartões de crédito mais populares"}
      </Typography>
      <Box sx={getContainerStyle}>
        <IconButton onClick={swipePreviousPage} sx={getIconButtonStyle}>
          <BsChevronLeft />
        </IconButton>
        <Swiper {...params}>
          {creditCardSlider.map((item) => (
            <SwiperSlide key={item.id}>
              <Box sx={getTextBoxStyle}>
                <Box sx={{ height: "80%" }}>
                  <Box sx={getImageBoxStyle}>
                    <Box component="img" alt={item.title} src={item.img} />
                  </Box>
                  <Box sx={{ m: 3 }} />
                  <Box sx={getTitleStyle}>
                    <Typography>{item.title}</Typography>
                  </Box>
                  <Box sx={{ m: 2 }} />
                  <Typography sx={getTextStyle}>{item.text}</Typography>
                </Box>
                <Box sx={{ m: 5 }} />
                <StyledButton>{"Confira"}</StyledButton>
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

export default Creditcard;
