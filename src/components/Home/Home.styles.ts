export const getImageStyle = () => ({
  width: "100%",
  position: "relative",
});

export const getContentBoxStyle = () => ({
  position: "absolute",
  marginLeft: "64px",
  top: "40%",
});

export const getTitleStyle = () => ({
  typography: "h3",
  fontWeight: "bold",
  color: "#f3f3f3",
  whiteSpace: "pre-line",
});

export const getTextStyle = () => ({
  typography: "h5",
  color: "#f3f3f3",
  whiteSpace: "pre-line",
});

export const getButtonStyle = () => ({
  color: "white",
  borderColor: "white",
  textTransform: "none",
  padding: "12px 28px 12px 28px",
  fontSize: "24px",
  ":hover": {
    borderColor: "#E6E6E6",
  },
});
