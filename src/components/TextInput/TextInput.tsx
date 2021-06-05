import React from "react";
import { Container, InputStyles, rootInputStyles2 } from "./Styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

interface Props {}

const ValidationTextField = withStyles({ root: InputStyles })(TextField);
const CssTextField = withStyles(rootInputStyles2)(TextField);

const TextInput = ({ ...rest }: Props) => {
  return (
    <Container>
      <ValidationTextField
        id="validation-outlined-input"
        label="instrument"
        // defaultValue="instrument"
        placeholder="instrument"
        variant="outlined"
        required
      />

      <CssTextField
        id="custom-css-standard-input"
        label="brand"
        // defaultValue="brand"
        placeholder="brand"
        variant="outlined"
        required
      />
    </Container>
  );
};

export default TextInput;
