import { FC, useState } from "react";
import { navBarLabels } from "../../../config/data/home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import {
  NavBarContainer,
  NavBarItemsContainer,
  NavBarTitle,
  primaryTypographyHeaderStyle,
  primaryTypographyStyle,
  primaryTypographyStyleSignUp,
  textStyleListItemText,
} from "../../styles/navbar/navbar.styles";
import { ListItemButton, ListItemText, IconButton, Drawer, } from "@mui/material";

const NavBarMobile: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <NavBarContainer>
        <IconButton aria-label="menu-icon" onClick={toggleMenu}>
          <MenuOpenIcon sx={{ fontSize: "1.3em" }} />
        </IconButton>
      </NavBarContainer>
      <>Helloooo</>
    </>
  );
};

export default NavBarMobile;
