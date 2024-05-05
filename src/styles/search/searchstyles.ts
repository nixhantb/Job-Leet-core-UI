import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/basetheme";
import { Button } from "@mui/material";

export const SearchBarContainer = styled(Box)(({ theme }) => ({
  width: "100%", 
  maxWidth: "40em", 
  height: "10vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  marginTop: '1em'
}));

export const SearchBar = styled(Box)(({ theme }) => ({
  margin: "0em",
}));

export const SearchButton = styled(Box)(() => ({
  ...SearchBar,
}));

export const StyledButton = styled(Button)`
  && {
    margin-left: 0.7em;
    padding: 15px;
    width: 10em;
    color: ${Colors.pampas};
    background-color: ${Colors.title};
  }
`;
export const searchFormStyles = {
  margin: 1,
  width: 242
};
export const searchFormCountryStyles = {
  margin: 1,
  width: 200
};