import { Box } from "@mui/material";
import React from "react";
import ServiceItems from "../Carousel/ServicesItems";
import ServicesSlider from "../../assets/utils/servicesSlider.json";
import StyledCarousel from "../Carousel/Carousel";
import Chevron from "../../assets/icons/chevron.png";

const Services = () => {
  return (
    <Box margin={"16px"}>
      <StyledCarousel
        autoPlay={false}
        navButtonsAlwaysVisible
        indicatorContainerProps={{
          style: {
            display: "none",
          },
        }}
        navButtonsProps={{
          style: {
            height: "222px",
            background: "#f3f3f3",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "8px",
            borderColor: "#374957",
          },
        }}
        NextIcon={
          <img src={Chevron} alt="chevron icon" style={{ height: "16px" }} />
        }
        PrevIcon={
          <img
            src={Chevron}
            alt="chevron icon"
            style={{ height: "16px", transform: "scaleX(-1)" }}
          />
        }
        sx={{
          "> div > div": {
            marginLeft: "60px",
            marginRight: "60px",
            width: "fit-content",
            // background: "lightBlue",
            // overflow: "hidden",
          },
          "> div": {
            height: "fit-content",
            // background: "lightGreen",
          },
        }}
      >
        {ServicesSlider.map((item) => (
          <ServiceItems key={item.id} item={item} />
        ))}
      </StyledCarousel>
    </Box>
  );
};

export default Services;
