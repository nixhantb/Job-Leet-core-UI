import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/basetheme";
import { Button } from "@mui/material";
export const SearchBarContainer = styled(Box)(({ theme }) => ({
  width: "auto",
  height: "10vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  marginRight: '35em',
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
