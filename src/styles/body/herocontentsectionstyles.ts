import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../basetheme/basetheme";

import { Typography } from "@mui/material";
import "@fontsource-variable/open-sans";
export const HeroBodyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1em",
}));

export const HeroBodyImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "40em",
  height: "45vh",
  margin: "0% auto",
}));

export const HeroBodyDescriptionContainer = styled(Box)(({ theme }) => ({
  margin: "0% auto 1%",
  width: "55em",
  height: "24vh",
}));

export const HeroBodyDescriptionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "50px",
  fontWeight: "600",
  lineHeight: "1.3",
  margin: "0 1em",
  color: Colors.jungleGreen,
}));
export const HeroBodyDescriptionContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.1em",
  fontWeight: "400",
  width: "30em",
  margin: "2em 3em",
  lineHeight: "1.2",
  letterSpacing: 1.25,
  color: Colors.pewter,
}));

export const HeroContainerSearch = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
