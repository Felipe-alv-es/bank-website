import { Box, Typography } from "@mui/material";

function Item({ item }) {
  return (
    <Box
      sx={{
        padding: "32px 32px 24px 32px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight={"bold"}
        color={"#5271FF"}
        sx={{ whiteSpace: "pre-line" }}
      >
        {item.title}
      </Typography>
      <Box sx={{ m: 2 }} />
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {item.text}
      </Typography>
      <Box sx={{ m: 3 }} />
    </Box>
  );
}

export default Item;
