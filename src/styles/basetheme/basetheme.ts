import { createTheme, Theme } from "@mui/material";

export const Colors: Record<string, string> = {
  // Homepage Color Palette
  pampas: "#FAF9F8",
  black: "#000000",
  biscay: "#1F2C69",
  cardinal: "#C71E3F",
  pewter: "#93A3A2",
  jungleGreen: "#2BAA99",
  whiskey: "#D7986D",
  pumice: "#CACCCB",
  foggyGray: "#C7CAAE",
  petiteOrchid: "#D79F98",
};

const baseTheme: Theme = createTheme({
  palette: {
    primary: {
      main: Colors.biscay,
    },
    secondary: {
      main: Colors.black,
    },
    error: {
      main: Colors.cardinal,
    },
    background: {
      default: Colors.pampas,
    },
  },
});

export default baseTheme;
