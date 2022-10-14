import { Box, FormControl, Input, InputLabel, IconButton } from "@mui/material";

import SearchIcon from "@public/icons/search.svg";

import { formControlStyles, buttonStyles } from "./styles";

const SearchForm = ({ value, onChange, onSubmit }) => {
  return (
    <Box component="form" autoComplete="off" onSubmit={onSubmit}>
      <FormControl sx={formControlStyles}>
        <InputLabel htmlFor="search">Search</InputLabel>
        <Input
          id="search"
          value={value}
          placeholder="Поиск по лоту"
          onChange={onChange}
        />
        <IconButton aria-label="search" sx={buttonStyles}>
          <SearchIcon />
        </IconButton>
      </FormControl>
    </Box>
  );
};

export default SearchForm;
