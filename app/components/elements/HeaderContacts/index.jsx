import { MenuItem, TextField } from "@mui/material";

import { selectStyle, optionStyle } from "./styles";

export const CONTACTS_VALUE = {
  TEL1: "8 (029) 207-11-44",
  TEL2: "9 (029) 111-11-11",
};

const HeaderContacts = () => {
  return (
    <TextField
      select
      label="Квартирный отдел"
      defaultValue={CONTACTS_VALUE.TEL1}
      SelectProps={{
        renderValue: (value) => value,
      }}
      sx={selectStyle}
    >
      <MenuItem sx={optionStyle}>{CONTACTS_VALUE.TEL1}</MenuItem>
      <MenuItem sx={optionStyle}>{CONTACTS_VALUE.TEL2}</MenuItem>
    </TextField>
  );
};

export default HeaderContacts;
