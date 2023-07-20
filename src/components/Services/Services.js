import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import chevron from "../../assets/icons/chevron.png";

const Services = () => {
  const servicesOptions = [
    {
      id: 1,
      title: "Meus Cartões",
      text: "Gerencie suas opções \n de pagamento desfrutando de \n uma experiência \n personalizada para você ",
    },
    {
      id: 2,
      title: "Fatura Digital",
      text: "Gerencie suas opções \n de pagamento desfrutando de \n uma experiência \n personalizada para você ",
    },
    {
      id: 3,
      title: "Atendimento",
      text: "Gerencie suas opções \n de pagamento desfrutando de \n uma experiência \n personalizada para você ",
    },
    {
      id: 4,
      title: "Emprestimos",
      text: "Gerencie suas opções \n de pagamento desfrutando de \n uma experiência \n personalizada para você ",
    },
  ];

  const params = {
    navigation: true,
    pagination: { clickable: true },
    slidesPerView: 3,
  };

  return (
    <Box margin={"16px 0 16px 0"}>
      <Swiper {...params}>
        {servicesOptions.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{
                padding: "32px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "8px",
                marginLeft: "8px",
                marginRight: "8px",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={"bold"}
                color={"#5271FF"}
                sx={{ whiteSpace: "pre-line" }}
              >
                {item.title}
              </Typography>
              <Box sx={{ m: 2 }} />
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {item.text}
              </Typography>
              <Box sx={{ m: 3 }} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Services;
