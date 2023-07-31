import { Button } from "@mui/material";
import React from "react";

export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px 32px 16px 32px",
});

export const getIconButtonStyle = () => ({
  borderStyle: "solid",
  borderWidth: "1px",
  background: "#f3f3f3",
  borderRadius: "8px",
  height: "280px", // Verificar o Height para ficar responsivo
  alignSelf: "center",
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
