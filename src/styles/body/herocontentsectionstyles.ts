import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/basetheme";
import { Typography } from "@mui/material";
import "@fontsource-variable/open-sans";

export const HeroBodyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const HeroBodyImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "28vw",
  height: "45vh",
  margin: "0% auto",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    height: "25em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "15em",
  },
}));

export const HeroBodyDescriptionContainer = styled(Box)(({ theme }) => ({
  margin: "0.7% auto 1%",
  paddingTop: "1em",
  width: "58vw",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const HeroBodyDescriptionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.6vw",
  fontWeight: "600",
  lineHeight: "1.3",
  textAlign: "left",
  marginTop: "2vw",
  marginRight: "3em",
  width: "40vw",
  color: Colors.jungleGreen,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.4em",
    width: "60%",
    textAlign: "center",
    marginLeft: "1.2em",
    color: Colors.jungleGreen,
    fontWeight: "600",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const HeroBodyDescriptionContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.2vw",
  fontWeight: "400",
  width: "27em",
  textAlign: "left",
  margin: "2em",
  lineHeight: "1.2",
  letterSpacing: 1.25,
  color: Colors.pewter,
  marginRight: "15em",
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
    textAlign: "center",
    marginLeft: "12em",
    width: "60%",
  },
}));

export const HeroContainerSearch = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
