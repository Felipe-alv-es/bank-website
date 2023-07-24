export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px 32px 16px 32px",
});

export const getIconButtonStyle = () => ({
  borderStyle: "solid",
  borderWidth: "1px",
  background: "#f3f3f3",
  borderRadius: "8px",
});

export const getTextBoxStyle = () => ({
  padding: "32px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "8px",
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
  margin: "32px",
  color: "#374957",
  whiteSpace: "pre-line",
});
