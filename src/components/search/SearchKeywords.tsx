import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, searchKeywords: string[], theme: Theme) {
  return {
    fontWeight:
      searchKeywords.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
interface SearchKeywordsProps {
  label: string;
  keywords: string[];
}
export default function SearchKeywords(props: SearchKeywordsProps) {
  const theme = useTheme();
  const [searchKeyword, setSearchkeyword] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof searchKeyword>) => {
    const {
      target: { value },
    } = event;
    setSearchkeyword(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-keywords-label"> {props.label}</InputLabel>
        <Select
          labelId="multiple-keywords-label"
          id="multiple-keyword-id"
          multiple
          value={searchKeyword}
          onChange={handleChange}
          input={<OutlinedInput label={props.label} />}
          MenuProps={MenuProps}
        >
          {props.keywords.map((keyword) => (
            <MenuItem
              key={keyword}
              value={keyword}
              style={getStyles(keyword, searchKeyword, theme)}
            >
              {keyword}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
