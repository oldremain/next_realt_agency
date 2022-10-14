import { useState } from "react";
import { MenuItem, FormControl, Select } from "@mui/material";

import { productFilterStyles, menuItemStyles } from "./styles";

const filterValues = [
  {
    id: 1,
    label: "Выберите категорию",
    value: "",
  },
  {
    id: 2,
    label: "По спец. предложениям",
    value: "special",
  },
  {
    id: 3,
    label: "Другая категория",
    value: "others",
  },
];

const ProductFilter = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <FormControl sx={productFilterStyles}>
      <Select
        value={filter}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {filterValues.map((option) => (
          <MenuItem key={option.id} value={option.value} sx={menuItemStyles}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProductFilter;
