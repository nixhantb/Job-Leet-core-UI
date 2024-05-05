import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/basetheme";

import { Typography } from "@mui/material";
import "@fontsource-variable/open-sans";
export const HeroBodyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const HeroBodyImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "28vw",
  height: "45vh",
  margin: "0% auto",
  
}));

export const HeroBodyDescriptionContainer = styled(Box)(({ theme }) => ({
  margin: "0.7% auto 1%",
  paddingTop: '1em',
  width: "58vw",
  height: "30vh",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const HeroBodyDescriptionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.6vw",
  fontWeight: "600",
  lineHeight: "1.3",
  textAlign: 'left',
  marginTop: '2vw',
  width: '40vw',
  color: Colors.jungleGreen,
}));
export const HeroBodyDescriptionContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.2vw",
  fontWeight: "400",
  width: "27em",
  textAlign: 'left',
  margin: "2em 5.5em",
  lineHeight: "1.2",
  letterSpacing: 1.25,
  color: Colors.pewter,
  marginRight: '12em'
}));

export const HeroContainerSearch = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
