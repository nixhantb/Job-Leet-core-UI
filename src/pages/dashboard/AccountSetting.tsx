import { Box, TextField, Divider, Button, Grid } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import NavBar from "../../components/navbar/NavBar";
import {
  AccountBasicInfoTitle,
  AccountSettingContainer,
  AccountSettingTitle,
} from "../../styles/accountsettings/accountsettingstyle";
import Footer from "../../components/footer/footer";
import { ChangeEvent, FormEvent, useState } from "react";
import PhoneNumber from "../../components/users/phoneNumber";
interface FormData {
  phone: {
    countryCode: number;
    phoneNumber: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  skills: {
    title: [string];
    description: [string];
  };
  education: {
    degree: string;
    major: string;
    institution: string;
    graduationDate: string;
    cgpa: number;
  };
  experience: {
    experienceLevel: string;
  };
  dateOfBirth: string;
  qualifications: {
    qualificationType: string;
    qualificationInformation: string[];
  };
  profileSummary: string;
  linkedInProfile: string;
  portfolio: string;
  interests: string[];
  achievements: string[];
}

const AccountSetting: React.FC = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState<FormData>({
    phone: {
      countryCode: 0,
      phoneNumber: "",
    },
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
    skills: {
      title: [""],
      description: [""],
    },
    education: {
      degree: "",
      major: "",
      institution: "",
      graduationDate: "",
      cgpa: 0,
    },
    experience: {
      experienceLevel: "",
    },
    dateOfBirth: "",
    qualifications: {
      qualificationType: "",
      qualificationInformation: [""],
    },
    profileSummary: "",
    linkedInProfile: "",
    portfolio: "",
    interests: [""],
    achievements: [""],
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setFormData((prevData) => {
      let updatedData: any = { ...prevData };
      let current: any = updatedData;

      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      if (
        [
          "achievements",
          "interests",
          "qualifications.qualificationInformation",
        ].includes(name)
      ) {
        current[keys[keys.length - 1]] = value.split("\n");
      } else {
        current[keys[keys.length - 1]] = value;
      }

      return updatedData;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const updateData = { ...formData };

    try {
      const response = await axios.post(
        "http://localhost:5184/api/v1/Seekers",
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Data updated successfully");
      }
    } catch (error) {
      console.error("Failed to update data");
    }
  };

  return (
    <>
      <NavBar />
      <Divider orientation="horizontal" flexItem />
      <AccountSettingContainer>
        <Box
          component="form"
          sx={{ m: 2 }}
          onSubmit={handleSubmit}
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
                name="personName.firstName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={user?.personName?.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Middle Name"
                name="personName.middleName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={user?.personName?.middleName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Last Name"
                name="personName.lastName"
                variant="outlined"
                fullWidth
                margin="normal"
                value={user?.personName?.lastName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                name="emailAddress"
                disabled
                variant="outlined"
                fullWidth
                margin="normal"
                value={user?.emailAddress}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Phone and Date of Birth */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of birth"
                name="dateOfBirth"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
   
              <Grid item xs={12} md={6}>
              <PhoneNumber 
                value={formData.phone}
                onChange={(newPhone) => 
                  setFormData((prevData) => ({
                    ...prevData,
                    phone: newPhone,
                  }))
                }
              />
            </Grid>

            {/* Profile Summary */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Summary</AccountBasicInfoTitle>
              <TextField
                label="Profile Summary"
                name="profileSummary"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.profileSummary}
                onChange={handleInputChange}
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
                name="address.street"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.address.street}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="City"
                name="address.city"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.address.city}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="State"
                name="address.state"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.address.state}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Postal Code"
                name="address.postalCode"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.address.postalCode}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Country"
                name="address.country"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.address.country}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Education */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Education</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Degree"
                name="education.degree"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.education.degree}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Major"
                name="education.major"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.education.major}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Institution"
                name="education.institution"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.education.institution}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Graduation Date"
                name="education.graduationDate"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                value={formData.education.graduationDate}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CGPA"
                name="education.cgpa"
                variant="outlined"
                fullWidth
                value={formData.education.cgpa}
                onChange={handleInputChange}
                type="number"
              />
            </Grid>

            {/* Experience */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Experience</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Experience Level"
                name="experience.experienceLevel"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.experience.experienceLevel}
                onChange={handleInputChange}
              />
            </Grid>

            {/* Qualifications */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Qualifications</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Qualification Type"
                name="qualifications.qualificationType"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.qualifications.qualificationType}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Qualification Information"
                name="qualifications.qualificationInformation"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.qualifications.qualificationInformation.join(
                  "\n"
                )}
                multiline
                onChange={handleInputChange}
                data-array="true"
              />
            </Grid>

            {/* Other Information */}
            <Grid item xs={12}>
              <AccountBasicInfoTitle>Other Information</AccountBasicInfoTitle>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="LinkedIn Profile"
                name="linkedInProfile"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.linkedInProfile}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Portfolio"
                name="portfolio"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.portfolio}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Interests"
                name="interests"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.interests.join("\n")}
                onChange={handleInputChange}
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Achievements"
                name="achievements"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.achievements.join("\n")}
                onChange={handleInputChange}
                multiline
                rows={3}
              />
            </Grid>

            {/* Save Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Box>
      </AccountSettingContainer>
      <Footer />
    </>
  );
};

export default AccountSetting;
