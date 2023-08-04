import React from "react";
import { Box, Icon, Typography } from "@mui/material";
import { BsHouseDoor, BsShieldCheck } from "react-icons/bs";
import {
  getContainerStyle,
  getPageTitleStyle,
  getPageSubtitleStyle,
  getContentContainerStyle,
  getHouseInsuranceStyle,
  getInsuranceNameStyle,
  getSubtitleNameStyle,
  getBodyTextStyle,
  getOurInsurancesContainerStyles,
  StyledButton,
} from "./Insurance.style.tsx";

const Insurance = () => {
  return (
    <Box sx={getContainerStyle}>
      <Typography sx={getPageTitleStyle}>{"Está sem seguro ?"}</Typography>
      <Typography sx={getPageSubtitleStyle}>{"Não corra risco!"}</Typography>
      <Box sx={{ m: 3 }} />
      <Box sx={getContentContainerStyle}>
        <Box sx={getHouseInsuranceStyle}>
          <Box sx={getInsuranceNameStyle}>
            <Typography>{"Seguro Casa"}</Typography>
            <Icon>
              <BsHouseDoor />
            </Icon>
          </Box>
          <Box sx={{ m: 2 }} />
          <Typography sx={getSubtitleNameStyle}>
            {"Seguros para sua Casa."}
          </Typography>
          <Box sx={{ m: 1 }} />
          <Typography sx={getBodyTextStyle}>
            {
              "Segurança e tranquilidade para o seu lar, \n com o seguro de casa que você pode confiar."
            }
          </Typography>
          <Box sx={{ m: 2 }} />
          <StyledButton>{"Confira"}</StyledButton>
        </Box>
        <Box sx={getOurInsurancesContainerStyles}>
          <Box sx={getInsuranceNameStyle}>
            <Typography>{"Nossos seguros"}</Typography>
            <Icon>
              <BsShieldCheck />
            </Icon>
          </Box>
          <Box sx={{ m: 2 }} />
          <Typography sx={getSubtitleNameStyle}>
            {"Mais de 30 seguros para você"}
          </Typography>
          <Box sx={{ m: 1 }} />
          <Box sx={getBodyTextStyle}>
            <Typography>
              {"Deixe tudo que importa com nosso seguro Fictional Bank"}
            </Typography>
            <Box sx={{ m: 2 }} />
            <lu>
              <li>{"Seguro de Carro"}</li>
              <li>{"Seguro de Vida"}</li>
              <li>{"Seguro Viagem"}</li>
              <li>{"Seguro Patrimonial"}</li>
            </lu>
            <Box sx={{ m: 2 }} />
            <Typography>{"Não perca essa chance"}</Typography>
          </Box>
          <Box sx={{ m: 2 }} />
          <StyledButton>{"Confira"}</StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Insurance;
