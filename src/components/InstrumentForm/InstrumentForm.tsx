import React from "react";
import { Container, InputStyles, rootInputStyles2 } from "./Styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

interface Props {}

const InstrumentField = withStyles({ root: InputStyles })(TextField);
const BrandField = withStyles(rootInputStyles2)(TextField);
const PriceField = withStyles({ root: InputStyles })(TextField);

const InstrumentForm = ({ ...rest }: Props) => {
  return (
    <Container>
      <InstrumentField
        id="validation-outlined-input"
        label="instrument"
        // defaultValue=""
        placeholder="instrument"
        variant="outlined"
      />

      <BrandField
        id="custom-css-standard-input"
        label="brand"
        // defaultValue="brand"
        placeholder="brand"
        variant="outlined"
      />

      <PriceField
        id="outlined-number"
        label="price"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Input
        id="outlined-number"
        type="number"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />

      <Button>Salvar</Button>
    </Container>
  );
};

export default InstrumentForm;
