import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CalendarHelper() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Birth"
        slotProps={{ textField: { size: "medium" } }}
      />
    </LocalizationProvider>
  );
}
