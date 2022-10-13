import { useEffect, useRef } from "react";
import { Box, FormControl, Input, InputLabel, IconButton } from "@mui/material";

import SearchIcon from "@public/icons/search.svg";

import styles from "./SearchForm.module.scss";

const SearchForm = ({ value, onChange, onSubmit }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Box component="form" autoComplete="off" onSubmit={onSubmit}>
      <FormControl className={styles["form-control"]}>
        <InputLabel htmlFor="search" className={styles.label}>
          Search
        </InputLabel>
        <Input
          id="search"
          value={value}
          placeholder="Поиск по лоту"
          onChange={onChange}
          className={styles.input}
          ref={inputRef}
        />
        <IconButton aria-label="search" className={styles["submit-button"]}>
          <SearchIcon />
        </IconButton>
      </FormControl>
    </Box>
  );
};

export default SearchForm;
