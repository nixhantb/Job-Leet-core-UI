import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { Controller, useForm} from "react-hook-form";
import { Box, FormHelperText } from "@mui/material";


interface FormData {
  phone: string;
}

const PhoneExt = () => {
  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      phone: "",
    },
  });

  return (
    <form>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Phone number is required",
          validate: {
            validPhoneNumber: (value: string) => {
              if (!matchIsValidTel(value)) {
                return "Invalid phone number";
              }
              return true;
            },
          },
        }}
        render={({ field }) => (
          <Box mb={2}>
            <MuiTelInput
              {...field}
              defaultCountry="US"
              error={Boolean(errors.phone)}
              fullWidth
              label="Phone Number"
            />
            {errors.phone && (
              <FormHelperText error>{errors.phone.message}</FormHelperText>
            )}
          </Box>
        )}
      />
    </form>
  );
};

export default PhoneExt;
