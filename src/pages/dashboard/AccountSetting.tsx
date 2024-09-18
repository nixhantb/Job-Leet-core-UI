import { Box, TextField, Divider, Button, Grid } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import NavBar from "../../components/navbar/NavBar";
import {
  AccountBasicInfoTitle,
  AccountSettingContainer,
  AccountSettingTitle,
} from "../../styles/accountsettings/accountsettingstyle";
import PhoneExt from "../../components/users/Phone";
import CalendarHelper from "../../components/calendar/CalendarHelper";
import Footer from "../../components/footer/footer";

const AccountSetting = () => {
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      <Divider orientation="horizontal" flexItem />
      <AccountSettingContainer>
        <Box
          component="form"
          sx={{ m: 2 }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            {/* Basic Information */}
            <Grid item xs={12}>
              <AccountSettingTitle>
                Hi, {user?.personName?.firstName}
              </AccountSettingTitle>
              <AccountBasicInfoTitle>Basic Information</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={user?.personName?.firstName || ""}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Middle Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={user?.personName?.middleName || ""}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={user?.personName?.lastName || ""}
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                disabled
                variant="outlined"
                fullWidth
                margin="normal"
                value={user?.emailAddress || ""}
              />
            </Grid>
          {/* Calendar and Phone */}

          <Grid item xs={12} md={6}>
              <CalendarHelper />
            </Grid>
            <Grid item xs={12} md={6}>
              <PhoneExt />
            </Grid>
            
            {/* Profile Summary */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Summary</AccountBasicInfoTitle>
              <TextField
                label="Profile Summary"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Address</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Street"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="State"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Postal Code"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Country"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

            {/* Education */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Education</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Degree"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Major"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Institution"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Graduation Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CGPA"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

            {/* Skills */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Skills</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Skills Title"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Skills Description"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

            {/* Experience */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Experience</AccountBasicInfoTitle>
              <TextField
                label="Experience Level"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

            {/* Qualifications */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Qualifications</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Qualification Type"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Qualification Information"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

            {/* LinkedIn Profile */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Others</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="LinkedIn Profile"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Portfolio"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Interests"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Achievements"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>

            {/* Save Button */}
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mb: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AccountSettingContainer>
      <Footer />
    </>
  );
};

export default AccountSetting;
