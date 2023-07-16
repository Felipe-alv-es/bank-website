import { Button, Box, Typography } from "@mui/material";

function Item({ item }) {
  return (
    <Box>
      <Box
        component="img"
        alt={item.title}
        src={item.image}
        sx={{ width: "100%", position: "relative" }}
      />
      <Box
        sx={{
          position: "absolute",
          marginLeft: "64px",
          top: "40%",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={"bold"}
          color={"#f3f3f3"}
          sx={{ whiteSpace: "pre-line" }}
        >
          {item.title}
        </Typography>
        <Box sx={{ m: 3 }} />
        <Typography
          variant="h5"
          color={"#f3f3f3"}
          sx={{ whiteSpace: "pre-line" }}
        >
          {item.text}
        </Typography>
        <Box sx={{ m: 3 }} />
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            textTransform: "none",
            padding: "12px 28px 12px 28px",
            fontSize: "24px",
            ":hover": {
              borderColor: "#E6E6E6",
            },
          }}
        >
          Confira
        </Button>
      </Box>
    </Box>
  );
}

export default Item;
