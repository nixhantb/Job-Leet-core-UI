import { FC } from "react";
import { navBarLabels } from "../../../config/data/home";
import {
  ListItemButtonStyle,
  NavBarContainer,
  NavBarIcon,
  NavBarItemsContainer,
  NavBarItemsContainerLoginSignUp,
  NavBarTitle,
  primaryTypographyDashboardStyle,
  primaryTypographyHeaderStyle,
  primaryTypographyStyle,
  primaryTypographyStyleSignUp,
  textStyleListItemText,
} from "../../styles/navbar/navbar.styles";
import { IconButton, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavIcon from "../../../public/JobLeet_logo.svg";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
    navbar_logout,
    navbar_dashboard,
    navbar_employers
  } = navBarLabels;

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleClickRegister = () => {
    navigate("/register");
  };

  const handleClickLogin = () => {
    navigate("/login");
  }
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const handleHomeRedirection = () => {
    navigate("/");
  };
  return (
    <NavBarContainer>
      <NavBarTitle>

        {user? <NavBarIcon src={NavIcon}/>
        : 
        <ListItemButton onClick={handleHomeRedirection}>
        <ListItemText
          primary={website_name}
          primaryTypographyProps={primaryTypographyHeaderStyle}
          sx={textStyleListItemText}
        ></ListItemText>
      </ListItemButton>
        }
        
          <ListItemText
            primary={navbar_dashboard}
            primaryTypographyProps={primaryTypographyDashboardStyle}
            sx={textStyleListItemText}
          ></ListItemText>
      </NavBarTitle>

      <NavBarItemsContainer types="rows">
        {user ? <ListItemButton sx={ListItemButtonStyle}>
          <ListItemText
            primary={navbar_employers}
            primaryTypographyProps={primaryTypographyStyle}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton> : 
         <ListItemButton sx={ListItemButtonStyle}>
         <ListItemText
           primary={navbar_home}
           primaryTypographyProps={primaryTypographyStyle}
           sx={textStyleListItemText}
         ></ListItemText>
       </ListItemButton>
        }
       
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
      {user ? <NavBarItemsContainerLoginSignUp types="rows">
        
      <IconButton aria-label="menu-icon">
          <FavoriteIcon sx={{ fontSize: "1.2em" }} />
        </IconButton>
        <IconButton aria-label="menu-icon">
          <SaveAltIcon sx={{ fontSize: "1.2em" }} />
        </IconButton>
      <IconButton aria-label="menu-icon">
          <NotificationsIcon sx={{ fontSize: "1.2em" }} />
        </IconButton>

        <IconButton aria-label="menu-icon">
          <AccountCircleIcon sx={{ fontSize: "1.2em" }} />
        </IconButton>
        
        <ListItemButton onClick={handleLogout}>
          <ListItemText
            primary={navbar_logout}
            primaryTypographyProps={primaryTypographyStyleSignUp}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton>
      </NavBarItemsContainerLoginSignUp>
        :
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
      }

    </NavBarContainer>
  );
};

export default NavBarDesktop;
