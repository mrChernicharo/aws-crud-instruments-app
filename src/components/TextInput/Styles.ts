import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const appGreen = "#00c37d";

export const Container = styled.div`
  padding: 1rem;
  border: 1px solid #cdcdcd;
`;

export const InputStyles = {
  "& input:invalid + fieldset": {
    borderColor: "#fc8e34",
    borderWidth: 2,
  },
  "& input:valid + fieldset": {
    borderColor: appGreen,
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
    borderColor: appGreen,
  },
  "& input:focus + fieldset": {
    borderColor: "#fc8e34",
    borderWidth: 2,
  },
};

export const rootInputStyles2 = {
  root: {
    "& label.Mui-focused": {
      color: appGreen,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: appGreen,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: appGreen,
      },
      "&.Mui-valid fieldset": {
        borderLeftWidth: 6,
        padding: "4px !important", // override inline-style
      },
    },
  },
};
