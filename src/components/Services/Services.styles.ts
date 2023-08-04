export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px 32px 16px 32px",
  "@media(max-width: 544px)": {
    padding: 0,
  },
});

export const getIconButtonStyle = () => ({
  borderStyle: "solid",
  borderWidth: "1px",
  background: "#f3f3f3",
  borderRadius: "8px",
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
    variant: "subtitle1",
    fontWeight: "medium",
    color: "#5271FF",
    whiteSpace: "pre-line",
    marginRight: "16px",
  },
  "> span > svg": {
    fontSize: "20px",
    color: "#5271FF",
  },
});

export const getTextStyle = () => ({
  variant: "body1",
  whiteSpace: "pre-line",
});

export const getPageTitleStyle = () => ({
  typography: "h4",
  fontWeight: "bold",
  margin: "32px 32px 0px 72px",
  color: "#374957",
  whiteSpace: "pre-line",
  "@media(max-width: 544px)": {
    typography: "h5",
    fontWeight: "bold",
    margin: "24px 24px 0px 24px",
  },
});

export const getPageSubtitleStyle = () => ({
  typography: "h5",
  fontWeight: "medium",
  color: "#374957",
  margin: "0px 32px 32px 72px",
  "@media(max-width: 544px)": {
    typography: "h6",
    fontWeight: "medium",
    margin: "0px 24px 24px 24px",
  },
});
