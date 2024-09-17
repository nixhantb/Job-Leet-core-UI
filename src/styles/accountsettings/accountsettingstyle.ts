import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

import { Typography } from "@mui/material";
import "@fontsource-variable/open-sans";
import { Colors } from "../basetheme/basetheme";
export const AccountSettingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60%",           
  margin: "0 auto",    
  marginTop: "3em",  
  boxSizing: "border-box", 
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    width: "90%",          
  },
}));
 

  export const AccountBasicInfoTitle = styled(Typography)(() => ({
    fontSize: "1em",
    fontWeight: "600",
    lineHeight: "1.3",
    textAlign: "left",
    marginTop: "1.4vw",
    marginBottom: "1.4vw",
    marginRight: "3em",
    width: "30vw",
    color: Colors.biscay
  }));

  export const AccountSettingTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.5vw",
    fontWeight: "400",
    lineHeight: "1.3",
    textAlign: "left",
    marginTop: "2vw",
    marginRight: "3em",
    width: "30vw",
    color: Colors.jungleGreen,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4em",
      width: "60%",
      textAlign: "center",
      marginLeft: "1.2em",
      color: Colors.jungleGreen,
      fontWeight: "400",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em"
    },
  }));