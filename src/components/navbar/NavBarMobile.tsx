import { FC, useState } from "react";
import { navBarLabels } from "../../../config/data/home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import {
  ListItemButtonStyle,
  NavBarContainer,
  NavBarItemsContainer,
  NavBarItemsContainerLoginSignUp,
  NavBarTitle,
  primaryTypographyHeaderStyleMobile,
  primaryTypographyStyle,
  primaryTypographyStyleSignUp,
  textStyleListItemText,
} from "../../styles/navbar/navbar.styles";
import {
  ListItemButton,
  ListItemText,
  IconButton,
  Drawer,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const NavBarMobile: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };
  const handleHomeRedirection = () => {
    navigate("/");
  };

  const {
    website_name,
    navbar_company,
    navbar_home,
    navbar_jobs,
    navbar_salaries,
    navbar_resume,
    navbar_login,
    navbar_signup,
  } = navBarLabels;

  return (
    <>
      <NavBarContainer>
        <NavBarTitle>
          <ListItemButton onClick={handleHomeRedirection}>
            <ListItemText
              primary={website_name}
              primaryTypographyProps={primaryTypographyHeaderStyleMobile}
              sx={textStyleListItemText}
            ></ListItemText>
          </ListItemButton>
        </NavBarTitle>
        <IconButton aria-label="menu-icon" onClick={toggleMenu}>
          <MenuOpenIcon sx={{ fontSize: "1.3em" }} />
        </IconButton>

        <Drawer anchor="top" open={menuOpen} onClose={toggleMenu}>
          <IconButton
            aria-label="close-menu-icon"
            onClick={closeMenu}
            sx={{
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            <CloseIcon sx={{ fontSize: "2em" }} />
          </IconButton>
          <NavBarItemsContainer types="block">
            <ListItemButton sx={ListItemButtonStyle}>
              <ListItemText
                primary={navbar_home}
                primaryTypographyProps={primaryTypographyStyle}
                sx={textStyleListItemText}
              ></ListItemText>
            </ListItemButton>

            <ListItemButton sx={ListItemButtonStyle}>
              <ListItemText
                primary={navbar_company}
                primaryTypographyProps={primaryTypographyStyle}
                sx={textStyleListItemText}
              ></ListItemText>
            </ListItemButton>

            <ListItemButton sx={ListItemButtonStyle}>
              <ListItemText
                primary={navbar_salaries}
                primaryTypographyProps={primaryTypographyStyle}
                sx={textStyleListItemText}
              ></ListItemText>
            </ListItemButton>

            <ListItemButton sx={ListItemButtonStyle}>
              <ListItemText
                primary={navbar_jobs}
                primaryTypographyProps={primaryTypographyStyle}
                sx={textStyleListItemText}
              ></ListItemText>
            </ListItemButton>

            <ListItemButton sx={ListItemButtonStyle}>
              <ListItemText
                primary={navbar_resume}
                primaryTypographyProps={primaryTypographyStyle}
                sx={textStyleListItemText}
              ></ListItemText>
            </ListItemButton>
          </NavBarItemsContainer>

          <NavBarItemsContainerLoginSignUp types="rows">
            <ListItemButton onClick={handleClickRegister}>
              <ListItemText
                primary={navbar_login}
                primaryTypographyProps={primaryTypographyStyle}
                sx={textStyleListItemText}
              ></ListItemText>
            </ListItemButton>

            <ListItemButton onClick={handleClickLogin}>
              <ListItemText
                primary={navbar_signup}
                primaryTypographyProps={primaryTypographyStyleSignUp}
                sx={textStyleListItemText}
              ></ListItemText>
            </ListItemButton>
          </NavBarItemsContainerLoginSignUp>
        </Drawer>
      </NavBarContainer>
    </>
  );
};

export default NavBarMobile;
