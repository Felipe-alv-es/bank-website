import {
  SxProps,
  TextFieldProps,
  Box,
  IconButton,
  IconButtonProps,
  Divider,
  Button,
  ButtonProps,
} from "@mui/material/";
import React from "react";

export const getNavbarStyles = (): SxProps => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  // justifyContent: "space-between",
  background: "#5271FF",
  padding: "0 48px 0 48px",
  paddingBottom: "12px",
  paddingTop: "12px",
  "> ul": {
    display: "flex",
    listStyle: "none",
    cursor: "pointer",
    marginLeft: "16px",
    "> li": {
      "> *": {
        color: "#f3f3f3",
        textDecoration: "none",
        borderRadius: "5px",
        transition: ".5s",
        fontSize: "12px",
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

export const getImageStyle = (): SxProps => ({
  height: "40px",
});

export const StyledTextField = React.forwardRef<HTMLElement, TextFieldProps>(
  () => (
    <Box
      sx={{
        display: "flex",
        background: "#f3f3f3",
        borderRadius: "4px",
        padding: "4px",
      }}
    >
      <input
        placeholder="Agência"
        style={{
          borderStyle: "none",
          width: "64px",
          textAlign: "center",
        }}
      />
      <Divider
        orientation="vertical"
        sx={{
          background: "#374957",
          borderRadius: "4px",
          borderWidth: "3px",
          margin: "0 8px 0 8px",
        }}
      />
      <input
        placeholder="Conta"
        style={{ borderStyle: "none", width: "68px", textAlign: "center" }}
      />
    </Box>
  )
);

export const StyledLockButton = React.forwardRef<HTMLElement, IconButtonProps>(
  (props) => (
    <IconButton
      sx={{
        width: "40px",
        height: "40px",
        background: "#f3f3f3",
        borderRadius: "4px",
        marginLeft: "20px",
      }}
      {...props}
    ></IconButton>
  )
);

export const StyledOutlineButton = React.forwardRef<HTMLElement, ButtonProps>(
  (props) => (
    <Button
      variant="outlined"
      sx={{
        color: "white",
        borderColor: "white",
        textTransform: "none",
      }}
      {...props}
    />
  )
);

export const getDrawerMenuStyle = (): SxProps => ({
  width: "200px",

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
        marginLeft: "10px",
        lineHeight: "31px",
      },
    },
  },
});
