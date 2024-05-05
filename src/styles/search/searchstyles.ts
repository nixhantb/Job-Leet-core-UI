import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/basetheme";
import { Button } from "@mui/material";

export const SearchBarContainer = styled(Box)(({ theme }) => ({
  width: "100%", 
  maxWidth: "100em", 
  height: "10vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  marginTop: '1.5em',
  [theme.breakpoints.down("md")]: {
    display: "block",
    height: "auto"
  }
}));

export const SearchBar = styled(Box)(() => ({
  margin: "0em",
}));

export const SearchButton = styled(Box)(() => ({
  ...SearchBar
}));

export const StyledButton = styled(Button)`
  && {
    margin-left: 0.7em;
    padding: 15px;
    width: 14vw;
    color: ${Colors.pampas};
    background-color: ${Colors.title};
  }
`;
export const StyledButtonMobile = styled(Button)`
  && {
    margin-left: 0.7em;
    padding: 15px;
    width: 100%;
    color: ${Colors.pampas};
    background-color: ${Colors.title};
  }
`;
export const searchFormStyles = {
  margin: 1,
  width: '26vw'
};
export const searchFormCountryStyles = {
  margin: 1,
  width: '18vw',
};

export const searchFormCountryStylesMobile = {
  margin: '0.5em',
  width: '100%',
};

export const searchKeywordsStylesMobile = {
  margin: '0.5em',
  width: '100%',
};