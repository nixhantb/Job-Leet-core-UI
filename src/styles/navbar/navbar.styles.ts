import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { List, Typography, colors } from "@mui/material";
import { Colors } from "../basetheme/basetheme";
import "@fontsource-variable/montserrat";

interface NavBarItemsProps {
  types: "rows" | "block";
}
export const NavBarContainer = styled(Box)(() => ({
  padding: "0.5em 0.6em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  color: Colors.black,
  background: "white",
  position: "sticky",
  top: 0,
  zIndex: 1000,
}));

export const NavBarTitle = styled(Typography)(() => ({}));

export const NavBarTitleCustomStyles = {};

export const NavBarItemsContainer = styled(List)<NavBarItemsProps>((props) => ({
  display: props.types === "rows" ? "flex" : "block",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.4em",
}));

export const primaryTypographyHeaderStyle = {
  fontSize: "36px",
  fontWeight: "600",
  color: Colors.jungleGreen,
};

export const primaryTypographyStyle = {
  fontSize: "17px",
  fontFamily: "'Montserrat Variable', 'sans-serif'",
  fontWeight: "600",
};

export const primaryTypographyStyleSignUp = {
  ...primaryTypographyStyle,
  fontWeight: "800",
  color: Colors.title,
};

export const textStyleListItemText = {
  textAlign: "center",
};

export const NavBarItemsCustomStyles = {};
