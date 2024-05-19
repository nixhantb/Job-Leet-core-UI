import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Colors } from "../../styles/basetheme/basetheme";
import { ListItemButton, ListItemText } from "@mui/material";
import {
  NavBarContainer,
  NavBarItemsContainerLoginSignUp,
  NavBarTitle,
  primaryTypographyHeaderStyle,
  primaryTypographyStyleSignUp,
  textStyleListItemText,
} from "../../styles/navbar/navbar.styles";
import { useNavigate } from "react-router-dom";
import { navBarLabels } from "../../../config/data/home";
import Divider from '@mui/material/Divider';
import axios from "axios";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://job-leet-core-ui.vercel.app/">
        Job Leet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();
const { website_name, navbar_login } = navBarLabels;

export default function Register() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    // prepare the payload
    const userName = `${data.get("firstName")} ${data.get("lastName")}`;

    const userInformationPayload = {
      userName, 
      userEmail : {
          emailAddress: data.get("email"), 
      },
      password: data.get("password"),
      confirmPassword: data.get("confirm-password"),
    }
     

    try {
      const RegisterUserResponse = await axios.post("http://localhost:8080/api/v1/RegisterUser", userInformationPayload);
      
      if(RegisterUserResponse.status == 200){
        setSuccessMessage("Registration successful! Redirecting to login page...");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
    catch(error){
      console.error("There was an error registering the user!", error);
      setSuccessMessage("Registration failed! Please try again.");
    }
  };
 

 
  const handleClickLogin = () => {
    navigate("/login");
  };
  const handleHomeRedirection = () => {
    navigate("/");
  };
  return (
    <>
      <NavBarContainer sx={{ justifyContent: "space-around" }}>
        <NavBarTitle>
          <ListItemButton onClick={handleHomeRedirection}>
            <ListItemText
              primary={website_name}
              primaryTypographyProps={{
                ...primaryTypographyHeaderStyle,
                fontSize: "33px"
              }}
              sx={textStyleListItemText}
            ></ListItemText>
          </ListItemButton>
        </NavBarTitle>
        <NavBarItemsContainerLoginSignUp types="rows">
          <ListItemButton onClick={handleClickLogin}>
            <ListItemText
              primary={navbar_login}
              primaryTypographyProps={{
                ...primaryTypographyStyleSignUp,
                fontSize: "1.4rem",fontWeight: "600"
              }}
              sx={textStyleListItemText}
            ></ListItemText>
          </ListItemButton>
        </NavBarItemsContainerLoginSignUp>
       
      </NavBarContainer>
      <Divider orientation="horizontal" flexItem />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ListItemButton>
              <Avatar sx={{ m: 1, bgcolor: Colors.jungleGreen }}>
                <LockOutlinedIcon />
              </Avatar>
            </ListItemButton>

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm-password"
                    label="Confirm Password"
                    type="password"
                    id="confirm-password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="By clicking the checkbox, I agree to the Terms and Conditions"
                  />
                </Grid>
              </Grid>
              {successMessage && (
                <Typography color={Colors.jungleGreen} sx={{mt: 2}}>{successMessage}</Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="https://job-leet-core-ui.vercel.app/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
