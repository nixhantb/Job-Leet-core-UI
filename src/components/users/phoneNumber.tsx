import { TextField, Grid } from "@mui/material";
import { ChangeEvent } from "react";

interface PhoneNumberProps {
  value: {
    countryCode: number;
    phoneNumber: string;
  };
  onChange: (newPhone: { countryCode: number; phoneNumber: string }) => void;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ value, onChange }) => {
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value: newValue } = e.target;

    if (name === "countryCode") {
      onChange({
        ...value,
        countryCode: parseInt(newValue),
      });
    } else if (name === "phoneNumber") {
      onChange({
        ...value,
        phoneNumber: newValue,
      });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          label="Country Code"
          name="countryCode"
          variant="outlined"
          fullWidth
          margin="normal"
          value={value.countryCode}
          onChange={handlePhoneChange}
          type="number"
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          variant="outlined"
          fullWidth
          margin="normal"
          value={value.phoneNumber}
          onChange={handlePhoneChange}
        />
      </Grid>
    </Grid>
  );
};

export default PhoneNumber;
