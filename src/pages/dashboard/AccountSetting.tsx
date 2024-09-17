import { Box, TextField, Divider, Typography, Button } from "@mui/material";
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
          sx={{ "& .MuiTextField-root": { m: 1, width: "20ch" } }}
          noValidate
          autoComplete="off"
        >
          {/* Basic Information */}
          <AccountSettingTitle>
            Hi, {user?.personName?.firstName}
          </AccountSettingTitle>
          <AccountBasicInfoTitle>Basic Information</AccountBasicInfoTitle>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user?.personName?.firstName || ""}
          />
          <TextField
            label="Middle Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user?.personName?.middleName || ""}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user?.personName?.lastName || ""}
          />
          <TextField
            label="Email Address"
            disabled
            variant="outlined"
            fullWidth
            margin="normal"
            value={user?.emailAddress || ""}
          />
          <CalendarHelper/>
          <PhoneExt/>
         
            
          {/* Profile Summary */}
          <AccountBasicInfoTitle>Summary</AccountBasicInfoTitle>
          <TextField
            label="Profile Summary"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4} 
            sx={{ width: '100%' }} 
          />

          {/* Address */}
          <AccountBasicInfoTitle>Address</AccountBasicInfoTitle>
          <TextField
            label="Street"
            variant="outlined"
            fullWidth
            margin="normal"
           
          />
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
           
          />
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <TextField
            label="Postal Code"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <TextField
            label="Country"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />

          {/* Education */}
          <AccountBasicInfoTitle>Education</AccountBasicInfoTitle>
          <TextField
            label="Degree"
            variant="outlined"
            fullWidth
            margin="normal"
           
          />
          <TextField
            label="Major"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <TextField
            label="Institution"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <TextField
            label="Graduation Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="CGPA"
            variant="outlined"
            fullWidth
            margin="normal"
           
          />

          {/* Skills */}
          <AccountBasicInfoTitle>Skills</AccountBasicInfoTitle>
          <TextField
            label="Skills Title"
            variant="outlined"
            fullWidth
            margin="normal"
           
          />
          <TextField
            label="Skills Description"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />

          {/* Experience */}
          <AccountBasicInfoTitle>Experience</AccountBasicInfoTitle>
          <TextField
            label="Experience Level"
            variant="outlined"
            fullWidth
            margin="normal"
          
          />

         
          {/* Qualifications */}
          <AccountBasicInfoTitle>Qualifications</AccountBasicInfoTitle>
          <TextField
            label="Qualification Type"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <TextField
            label="Qualification Information"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />

          {/* LinkedIn Profile */}
          <AccountBasicInfoTitle>Others</AccountBasicInfoTitle>
          <TextField
            label="LinkedIn Profile"
            variant="outlined"
            fullWidth
            margin="normal"
           
          />

          {/* Portfolio */}
         
          <TextField
            label="Portfolio"
            variant="outlined"
            fullWidth
            margin="normal"
           
          />


          {/* Interests */}
         
          <TextField
            label="Interests"
            variant="outlined"
            fullWidth
            margin="normal"
           
          />

          {/* Achievements */}
          <TextField
            label="Achievements"
            variant="outlined"
            fullWidth
            margin="normal"
           
          />
          {/* Save Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mb:3 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
            >
              Save
            </Button>
          </Box>
        </Box>
      </AccountSettingContainer>
      <Footer/>
    </>
  );
};

export default AccountSetting;
