import React from "react";
import { Button } from "@mui/material";

export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px 32px 16px 32px",
  "@media(max-width: 544px)": {
    padding: 0,
    "> div": {
      padding: "2em",
      "> div": {
        "> .swiper-slide": {
          transform: "scale(0.95)",
        },
        "> .swiper-slide-active": {
          transition: "250ms",
          transform: "scale(1.05)",
          zIndex: 1,
          background: "#f3f3f3",
        },
      },
    },
  },
});

export const getIconButtonStyle = () => ({
  borderStyle: "solid",
  borderWidth: "1px",
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
});

export const getTitleStyle = () => ({
  display: "flex",
  lineHeight: "24px",
  "> p": {
    typography: "h5",
    fontWeight: "bold",
    marginRight: "16px",
  },
});

export const getTextStyle = () => ({
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
  height: "200px",
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
