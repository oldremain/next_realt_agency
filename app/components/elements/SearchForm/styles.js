export const formControlStyles = {
  "& .MuiFormControl-root": {
    position: "relative",
    margin: 0,
  },
  "& .MuiFormLabel-root": {
    display: "none",
  },
  "& .MuiFormLabel-root[data-shrink=false]+.MuiInput-root .MuiInput-input::-webkit-input-placeholder":
    {
      opacity: "1 !important",
      fontWeight: 500,
      fontSize: "1.2rem",
      lineHeight: 1.31,
      color: "#ffffff",
    },
  "& .MuiInput-root .MuiInput-input::-webkit-input-placeholder": {
    fontWeight: 500,
    fontSize: "1.2rem",
    lineHeight: 1.31,
    color: "#ffffff",
  },
  "& .MuiInput-root": {
    marginTop: 0,
    padding: "10px 11px",
    fontWeight: 500,
    fontSize: "1.2rem",
    lineHeight: 1.3,
    color: "#ffffff",
    border: "1px solid #828282",
    borderRadius: "4px",
    width: 215,
    height: 36,
    transition: "all 280ms",
  },
  "& .MuiInput-root:hover": {
    borderColor: "#ebebeb",
  },
  "& .MuiInput-root:focus-within": {
    borderColor: "#ebebeb",
  },
  "& .MuiInput-root .MuiInput-input": {
    padding: 0,
  },
  "& .MuiInput-root::after, & .MuiInput-root::before,  & .MuiInput-root:hover::before":
    {
      borderBottom: "none !important",
    },
};

export const buttonStyles = {
  "&": {
    position: "absolute",
    top: "50%",
    right: 0,
    width: 38,
    transform: "translateY(-50%)",
  },
};
