import { FC } from "react";
import { navBarLabels } from "../../../config/data/home";
import {
  ListItemButtonStyle,
  NavBarContainer,
  NavBarItemsContainer,
  NavBarItemsContainerLoginSignUp,
  NavBarTitle,
  primaryTypographyHeaderStyle,
  primaryTypographyStyle,
  primaryTypographyStyleSignUp,
  textStyleListItemText,
} from "../../styles/navbar/navbar.styles";
import { ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NavBarDesktop: FC = () => {
  // customizable label names for navbar
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

  const navigate = useNavigate();
  const handleClickRegister = () => {
    navigate("/register");
  };

  const handleClickLogin = () => {
    navigate("/login");
  }

  const handleHomeRedirection = () => {
    navigate("/");
  };
  return (
    <NavBarContainer>
      <NavBarTitle>
        <ListItemButton onClick={handleHomeRedirection}>
          <ListItemText
            primary={website_name}
            primaryTypographyProps={primaryTypographyHeaderStyle}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton>
      </NavBarTitle>

      <NavBarItemsContainer types="rows">
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
    </NavBarContainer>
  );
};

export default NavBarDesktop;
