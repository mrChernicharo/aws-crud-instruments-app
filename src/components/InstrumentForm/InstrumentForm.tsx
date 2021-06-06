import React, {
  BaseSyntheticEvent,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { Container, InputStyles, rootInputStyles2 } from "./Styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";

interface Props {}

const InstrumentField = withStyles({ root: InputStyles })(TextField);
const BrandField = withStyles(rootInputStyles2)(TextField);
const YearField = withStyles({ root: InputStyles })(TextField);

const InstrumentForm = () => {
  const [formData, setFormData] = useState({
    instrument: "",
    brand: "",
    price: 500,
    year: 2000,
  });

  function handleInput(e: BaseSyntheticEvent, inputName: string) {
    const inputsData = {
      ...formData,
      [inputName]:
        inputName === "price" || inputName === "year"
          ? Number(e.target.value)
          : e.target.value,
    };
    setFormData(inputsData);
  }

  function submit() {
    console.log(formData);
  }

  return (
    <Container>
      <InstrumentField
        id="validation-outlined-input"
        label="instrument"
        placeholder="instrument"
        variant="outlined"
        // value={formData.instrument}
        onChange={(e) => handleInput(e, "instrument")}
        // defaultValue=""
      />

      <BrandField
        id="custom-css-standard-input"
        label="brand"
        placeholder="brand"
        variant="outlined"
        // value={formData.brand}
        onChange={(e) => handleInput(e, "brand")}

        // onChange={}
      />
      <YearField
        id="outlined-number"
        label="year"
        type="number"
        defaultValue={formData.year}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => handleInput(e, "year")}
      />

      <InputLabel htmlFor="price-input">Price</InputLabel>
      <Input
        id="price-input"
        type="number"
        defaultValue={formData.price}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        onChange={(e) => handleInput(e, "price")}
      />

      <Button onClick={submit}>Save Instrument</Button>

      <pre>{JSON.stringify(formData)}</pre>
    </Container>
  );
};

export default InstrumentForm;
