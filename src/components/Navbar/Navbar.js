import React, { useState } from "react";
import { Box, Drawer, IconButton, Icon, Divider, Link } from "@mui/material";
import {
  getNavbarStyles,
  getDrawerMenuStyle,
  getImageStyle,
  StyledTextField,
  StyledLockButton,
  StyledOutlineButton,
} from "./Navbar.styles.tsx";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillHome,
  AiFillDatabase,
  AiFillProject,
  AiFillMessage,
} from "react-icons/ai";
import FBLogo from "../../assets/images/FictionalBankLogo.png";
import Lock from "../../assets/images/Cadeado.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const menuOptions = [
    { text: "Inicio", icon: <AiFillHome /> },
    { text: "Para Clientes", icon: <AiFillDatabase /> },
    { text: "Para Empresas", icon: <AiFillProject /> },
    { text: "Benefícios", icon: <AiFillMessage /> },
    { text: "Ajuda", icon: <AiFillMessage /> },
  ];

  return (
    <>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <IconButton
            size="large"
            onClick={() => setIsOpen(isOpen ? false : true)}
          >
            <GiHamburgerMenu />
          </IconButton>
          <Drawer
            PaperProps={{ sx: { background: "#e7e7e7" } }}
            open={isOpen}
            anchor="left"
            onClose={() => setIsOpen(false)}
          >
            <Box sx={getDrawerMenuStyle}>
              <IconButton
                size="large"
                onClick={() => setIsOpen(isOpen ? false : true)}
              >
                <GiHamburgerMenu />
              </IconButton>
              <ul>
                {menuOptions.map((item) => (
                  <>
                    <li key={item.text}>
                      <Icon>{item.icon}</Icon>
                      <Link onClick={() => setIsOpen(false)}>{item.text}</Link>
                    </li>
                    <Divider
                      variant="inset"
                      sx={{ marginLeft: "10px", marginRight: "10px" }}
                    />
                  </>
                ))}
              </ul>
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Box sx={getNavbarStyles}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={getImageStyle}
              component="img"
              src={FBLogo}
              alt="FictionalBank Logo"
            />
            <ul>
              {menuOptions.map((item) => (
                <li key={item.text}>
                  <Link>{item.text}</Link>
                </li>
              ))}
            </ul>
          </Box>
          <Box display={"flex"}>
            <StyledTextField />
            <StyledLockButton>
              <img alt="Lock Icon" src={Lock} style={{ width: "20px" }} />
            </StyledLockButton>
          </Box>
          <StyledOutlineButton>Abra sua conta</StyledOutlineButton>
        </Box>
      )}
    </>
  );
};

export default Navbar;
