import { TypographyProps } from "@mui/system";

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
  "> *": {
    variant: "subtitle1",
    fontWeight: "medium",
    color: "#5271FF",
    whiteSpace: "pre-line",
    marginRight: "16px",
  },
  "> span > svg": {
    fontSize: "20px",
  },
});

export const getTextStyle = () => ({
  variant: "body1",
  whiteSpace: "pre-line",
});

export const getPageTitleStyle = (): TypographyProps => ({
  typography: "h4",
  fontWeight: "bold",
  whiteSpace: "pre-line",
  margin: "32px",
  color: "#374957",
});
