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
import { useNavigate } from "react-router-dom";
import { Colors } from "../../styles/basetheme/basetheme";
import {
  NavBarContainer,
  NavBarItemsContainerLoginSignUp,
  NavBarTitle,
  primaryTypographyHeaderStyle,
  primaryTypographyStyleSignUp,
  textStyleListItemText,
} from "../../styles/navbar/navbar.styles";
import { ListItemButton, ListItemText } from "@mui/material";
import { navBarLabels } from "../../../config/data/home";
import Divider from '@mui/material/Divider';
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
const { website_name, navbar_signup } = navBarLabels;

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register");
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
                fontSize: "33px",
              }}
              sx={textStyleListItemText}
            ></ListItemText>
          </ListItemButton>
        </NavBarTitle>
        <NavBarItemsContainerLoginSignUp types="rows">
          <ListItemButton onClick={handleClickRegister}>
            <ListItemText
              primary={navbar_signup}
              primaryTypographyProps={{
                ...primaryTypographyStyleSignUp,
                fontSize: "1.4rem",fontWeight: '600'
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
            <Avatar sx={{ m: 1, bgcolor: Colors.jungleGreen }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://job-leet-core-ui.vercel.app/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
