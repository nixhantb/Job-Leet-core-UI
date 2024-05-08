import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../basetheme/basetheme";
export const FooterContainer = styled(Box)(({theme}) => ({
    background: Colors.footerbg,
    height: "70vh",
    padding: "2em",
    [theme.breakpoints.down("md")]: {
        height: "auto",
    }
  }));

  export const FooterResources = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: '4em',
    [theme.breakpoints.down("md")]: {
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    }
  }));
  export const FooterSocials = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2em',
  }));
  
  export const FooterBox = styled(Box)(() => ({
    margin: "12px",
  }));
  
  export const FooterTitle = styled(Typography)(({theme}) => ({
    color: "white",
    fontSize: "22px",
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    [theme.breakpoints.down("md")]: {
        fontSize: "20px"
    }
  }));
  
  export const FooterDescription = styled(Typography)(({theme}) => ({
    marginTop: "0.5em",
    marginLeft :'1em',
    fontSize: "15px",
    color: "white",
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    [theme.breakpoints.down("md")]: {
        fontSize: "12px",
    }
  }));
  
  export const FooterLink = styled("a")(({theme}) => ({
    display: "block",
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: "'Montserrat Variable', 'sans-serif'",
    marginTop: "0.5em",
    transition: "color 0.3s ease-out",
    "&:hover": {
      color: Colors.cardinal,

    },
    [theme.breakpoints.down("md")]: {
        fontSize: "12px"
    }
  }));

  export const IconStyles = {
    fontSize: "1.2em",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "color 0.3s ease-out",
    "&:hover": {
      color: Colors.jungleGreen
    },
  };