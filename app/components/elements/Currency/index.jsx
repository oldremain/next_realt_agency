import useMediaQuery from "@mui/material/useMediaQuery";

import { CURRENCY_VALUE } from "@components/modules/Header";
import { MenuItem, TextField } from "@mui/material";

import { selectStyle, optionStyle } from "./styles";

const Currency = ({ value, onChange }) => {
  const matches = useMediaQuery("(min-width: 653px)");

  return (
    <>
      {matches && (
        <TextField
          select
          value={value}
          onChange={onChange}
          SelectProps={{
            renderValue: (value) => value,
          }}
          sx={selectStyle}
        >
          <MenuItem value={CURRENCY_VALUE.USD} sx={optionStyle}>
            USD ($)
          </MenuItem>

          <MenuItem value={CURRENCY_VALUE.EUR} sx={optionStyle}>
            EUR (€)
          </MenuItem>
        </TextField>
      )}
    </>
  );
};

export default Currency;
