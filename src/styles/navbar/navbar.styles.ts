import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { List, Typography } from "@mui/material";
import { Colors } from "../basetheme/basetheme";
import "@fontsource/poppins";

interface NavBarItemsProps {
  types: "rows" | "block";
}
export const NavBarContainer = styled(Box)(() => ({
  background: Colors.pumice,
}));

export const NavBarTitle = styled(Typography)(() => ({}));

export const NavBarTitleCustomStyles = {};

export const NavBarItems = styled(List)<NavBarItemsProps>((props) => ({}));

export const NavBarItemsCustomStyles = {};
