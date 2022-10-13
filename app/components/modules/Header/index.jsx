import { useState } from "react";
import { Box, FormControl, Input, InputLabel, IconButton } from "@mui/material";
import Logo from "@components/elements/Logo";
import Container from "@components/layouts/Container";
import SearchForm from "@components/elements/SearchForm";
import FavCounter from "@components/elements/FavCounter";
import Currency from "@components/elements/Currency";
import HeaderContacts from "@components/elements/HeaderContacts";

import styles from "./Header.module.scss";

export const CURRENCY_VALUE = {
  USD: "USD ($)",
  EUR: "EUR (€)",
};

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currency, setCurrency] = useState(CURRENCY_VALUE.USD);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log(searchValue);
  };

  const handleSelectCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const handleSelectContact = (e) => {};

  return (
    <header className={styles.header}>
      <Container>
        <Box className={styles.content}>
          <Logo />
          <Box className={styles.controls}>
            <SearchForm
              value={searchValue}
              onChange={handleSearch}
              onSubmit={handleSubmit}
            />
            <FavCounter />
            <Currency value={currency} onChange={handleSelectCurrency} />
            <HeaderContacts />
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
