import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/basetheme";
import "@fontsource-variable/montserrat";

export const JobCategoriesContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "8em",
  height: "auto",
}));

export const CategoryHeader = styled(Typography)(({ theme }) => ({
  fontSize: "45px",
  fontWeight: "600",
  letterSpacing: "3px",
  color: Colors.jungleGreen,
  fontFamily: "'Montserrat Variable', 'sans-serif'",
  marginBottom: "2em",
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
    width: "100%",
    textAlign: "center",
  },
}));

export const JobCategory = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "80%",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const IndividualSubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${Colors.pampas}`,
  width: "calc((100% - 20em) / 4)",
  height: "auto",
  padding: "2em",
  margin: "2em",
  transition: "box-shadow 0.6s, border-color 0.6s",
  "&:hover": {
    borderColor: Colors.pampas,
    boxShadow: theme.shadows[7],
  },
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

export const CategoryBoxStyle = {
  fontSize: "60px",
};

export const PrimaryHeaderInsideBox = styled(Typography)(() => ({
  fontSize: "18px",
  marginTop: "1.5em",
  width: "100%",
  textAlign: "center",
  fontFamily: "'Montserrat Variable', 'sans-serif'",
  fontWeight: "500",
  color: Colors.biscay,
}));

export const PrimaryDescriptionInsideBox = styled(Typography)(() => ({
  fontSize: "18px",
  marginTop: "1.5em",
  marginBottom: "1.5em",
  width: "100%",
  textAlign: "center",
  fontFamily: "'Montserrat Variable', 'sans-serif'",
  fontWeight: "500",
  color: Colors.cardinal,
}));
