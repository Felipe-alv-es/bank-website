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
  const swipeNextPage = () => swiper.slideTo(+1);
  const swipePreviousPage = () => swiper.slideTo(-1);

  const params = {
    slidesPerView: 3,
    spaceBetween: "36px",
    onSwiper: setSwiper,
    style: {
      margin: "0 36px 0 36px",
      background: "#f3f3f3",
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
                  <Box sx={{ m: 3 }} />
                  <Box sx={{ paddingLeft: "32px" }}>{item.list}</Box>
                  <Box sx={{ m: 5 }} />
                </Box>
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
