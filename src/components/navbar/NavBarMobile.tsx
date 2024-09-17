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

import NotificationsIcon from '@mui/icons-material/Notifications';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountMenu from "../users/AccountMenu";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const NavBarMobile: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();
  const { user} = useAuth();

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
    navbar_dashboard
  } = navBarLabels;

  return (
    <>
      <NavBarContainer>
        <NavBarTitle>
          <ListItemButton onClick={handleHomeRedirection}>
            {user ? (
              <>
                <ListItemText
                  primary={navbar_dashboard}
                  primaryTypographyProps={primaryTypographyHeaderStyleMobile}
                  sx={textStyleListItemText}
                />
              </>
            ) : (
              <ListItemText
                primary={website_name}
                primaryTypographyProps={primaryTypographyHeaderStyleMobile}
                sx={textStyleListItemText}
              />
            )}
          </ListItemButton>
        </NavBarTitle>

        <IconButton aria-label="menu-icon" onClick={toggleMenu}>
          <MenuOpenIcon sx={{ fontSize: "1.3em" }} />
        </IconButton>

        <Drawer anchor="top" open={menuOpen} onClose={toggleMenu}>
          <IconButton
            aria-label="close-menu-icon"
            onClick={toggleMenu}
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

          {user ? (
            <NavBarItemsContainerLoginSignUp types="rows">
              <IconButton aria-label="favorite-icon">
                <FavoriteIcon sx={{ fontSize: "1.2em" }} />
              </IconButton>
              <IconButton aria-label="save-icon">
                <SaveAltIcon sx={{ fontSize: "1.2em" }} />
              </IconButton>
              <IconButton aria-label="notifications-icon">
                <NotificationsIcon sx={{ fontSize: "1.2em" }} />
              </IconButton>
              <AccountMenu />
              
            </NavBarItemsContainerLoginSignUp>
          ) : (
            <NavBarItemsContainerLoginSignUp types="rows">
              <ListItemButton onClick={handleClickLogin}>
                <ListItemText
                  primary={navbar_login}
                  primaryTypographyProps={primaryTypographyStyle}
                  sx={textStyleListItemText}
                ></ListItemText>
              </ListItemButton>

              <ListItemButton onClick={handleClickRegister}>
                <ListItemText
                  primary={navbar_signup}
                  primaryTypographyProps={primaryTypographyStyleSignUp}
                  sx={textStyleListItemText}
                ></ListItemText>
              </ListItemButton>
            </NavBarItemsContainerLoginSignUp>
          )}
        </Drawer>
      </NavBarContainer>
    </>
  );
};

export default NavBarMobile;
