import { Pagination as MUIPagination, Stack } from "@mui/material";
import { paginationStyles } from "./styles";

const Pagination = () => {
  return (
    <Stack direction="row" justifyContent="center">
      <MUIPagination
        count={3}
        variant="outlined"
        shape="rounded"
        sx={paginationStyles}
      />
    </Stack>
  );
};

export default Pagination;
