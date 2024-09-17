
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { Controller, useForm } from "react-hook-form";
import { Box, FormHelperText } from "@mui/material";

const PhoneExt = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Phone number is required",
          validate: {
            validPhoneNumber: (value) => {
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
              helperText={errors.phone?.message}
              fullWidth
              label = "Phone Number"
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