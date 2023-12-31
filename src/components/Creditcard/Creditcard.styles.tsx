import React from "react";
import { Button } from "@mui/material";

export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px 32px 16px 32px",
  "> div > div > .swiper-slide": {
    transform: "scale(0.95)",
    background: "#f3f3f3",
    borderRadius: "8px",
  },
  "@media(max-width: 544px)": {
    padding: 0,
    "> div": {
      padding: "2em",
      "> .swiper": {
        background: "red",
      },
      "> div": {
        "> .swiper-slide": {
          transform: "scale(0.95)",
          background: "#f3f3f3",
          borderRadius: "8px",
        },
        "> .swiper-slide-active": {
          transition: "250ms",
          transform: "scale(1.05)",
          zIndex: 1,
        },
      },
    },
  },
});

export const getIconButtonStyle = () => ({
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#8C8C8C",
  background: "#f3f3f3",
  borderRadius: "8px",
  height: "280px", // Verificar o Height para ficar responsivo
  alignSelf: "center",
  "@media(max-width: 544px)": {
    display: "none",
  },
});

export const getTextBoxStyle = () => ({
  padding: "32px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "8px",
  height: "100%",
  cursor: "pointer",
  borderColor: "#8C8C8C",
});

export const getTitleStyle = () => ({
  display: "flex",
  lineHeight: "24px",
  color: "#374957",
  "> p": {
    typography: "h5",
    fontWeight: "bold",
    marginRight: "16px",
  },
});

export const getTextStyle = () => ({
  color: "#374957",
  variant: "body1",
  whiteSpace: "pre-line",
});

export const getPageTitleStyle = () => ({
  typography: "h4",
  fontWeight: "bold",
  margin: "32px 32px 32px 72px",
  color: "#374957",
  whiteSpace: "pre-line",
  "@media(max-width: 544px)": {
    margin: "46px 24px 24px 24px",
    typography: "h5",
    fontWeight: "bold",
  },
});

export const getImageBoxStyle = () => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  height: "50%",
});

export const StyledButton = (props) => {
  return (
    <Button
      variant="outlined"
      fullWidth
      sx={{
        color: "#374957",
        borderColor: "#374957",
        padding: "8px 20px 8px 20px",
        borderRadius: "8px",
        fontWeight: "bold",
        textTransform: "none",
        fontSize: "16px",
        ":hover": {
          color: "#27333D",
          borderColor: "#27333D",
        },
      }}
      {...props}
    />
  );
};
