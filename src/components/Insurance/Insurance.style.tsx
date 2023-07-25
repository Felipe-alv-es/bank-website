import { Button } from "@mui/material";
import React from "react";

export const getContainerStyle = () => ({
  margin: "76px",
});

export const getPageTitleStyle = () => ({
  typography: "h4",
  fontWeight: "bold",
  color: "#374957",
});

export const getPageSubtitleStyle = () => ({
  typography: "h5",
  fontWeight: "medium",
  color: "#374957",
});

export const getContentContainerStyle = () => ({
  display: "flex",
  justifyContent: "space-between",
});

export const getHouseInsuranceStyle = () => ({
  borderStyle: "solid",
  borderWidth: "1px",
  padding: "24px",
  borderRadius: "8px",
  width: "65%",
  background: "#f3f3f3",
});

export const getInsuranceNameStyle = () => ({
  lineHeight: "20px",
  display: "flex",
  "> p": {
    typography: "subtitle1",
    color: "#374957",
    marginRight: "12px",
  },
  "> span > *": {
    color: "#374957",
    height: "20px",
  },
});

export const getSubtitleNameStyle = () => ({
  typography: "h5",
  fontWeight: "bold",
  color: "#374957",
});

export const getBodyTextStyle = () => ({
  typography: "body1",
  color: "#374957",
  whiteSpace: "pre-line",
});

export const getOurInsurancesContainerStyles = () => ({
  borderStyle: "solid",
  padding: "24px",
  borderWidth: "1px",
  borderRadius: "8px",
  width: "30%",
  background: "#f3f3f3",
});

export const StyledButton = (props) => {
  return (
    <Button
      variant="outlined"
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
