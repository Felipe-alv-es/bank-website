import { SxProps, TextFieldProps, Box } from "@mui/material/";
import React from "react";

export const getNavbarStyles = (): SxProps => ({
  display: "flex",
  width: "100%",
  height: "80px",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#5271FF",
  padding: "0 80px 0 80px",
  "> ul": {
    display: "flex",
    listStyle: "none",
    cursor: "pointer",
    marginLeft: "32px",
    "> li": {
      "> *": {
        color: "#FFFFFF",
        textDecoration: "none",
        borderRadius: "5px",
        transition: ".5s",
        fontSize: "16px",
        fontWeight: "bold",
        height: "40px",
        padding: "16px",
        ":hover": {
          background: "#3F8AE8",
        },
        ":active": {
          background: "#4567FF",
        },
      },
    },
  },
});

export const getDrawerMenuStyle = (): SxProps => ({
  width: "187px",

  "> ul": {
    listStyle: "none",
    marginTop: "2em",
    "> li": {
      padding: "20px 4%",
      transition: ".5s",
      ":active": {
        background: "#C4C4C4",
      },
      "> *": {
        color: "#1a1a1a",
        textDecoration: "none",
        fontSize: "20px",
        marginLeft: "10px",
        lineHeight: "31px",
      },
    },
  },
});

export const getImageStyle = (): SxProps => ({
  height: "60px",
});

export const StyledTextField = React.forwardRef<HTMLElement, TextFieldProps>(
  (props) => (
    <Box
      sx={{
        display: "flex",
        width: "184px",
        height: "54px",
        background: "#ffffff",
        borderRadius: "4px",
      }}
    ></Box>
  )
);
