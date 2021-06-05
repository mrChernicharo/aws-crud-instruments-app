import React from "react";
import { Container } from "./Styles";
import { motion as m } from "framer-motion";

interface Props {}

const h1Vars = {
  enter: { x: ["-600px", "0px"] },
  leave: { x: ["0px", "-400px"] },
};

const Header = () => {
  return (
    <Container>
      <m.h1 variants={h1Vars} animate="enter">
        AWS Instruments
      </m.h1>
    </Container>
  );
};

export default Header;
