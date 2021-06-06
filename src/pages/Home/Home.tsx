import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import InstrumentForm from "../../components/InstrumentForm/InstrumentForm";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listInstruments } from "../../graphql/queries";

import { FiChevronRight, FiDelete, FiTrash } from "react-icons/fi";
import { Paper, IconButton } from "@material-ui/core";
import { Instrument } from "../../interfaces/Instrument";
import { InstrumentsContainer } from "./styles";

import { nanoid } from "nanoid";

interface Props {}

const Home = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);

  useEffect(() => {
    fetchInstruments();
  }, []);

  const fetchInstruments = async () => {
    try {
      const instrumentsData: any = await API.graphql(
        graphqlOperation(listInstruments)
      );

      const instrumentsList: Instrument[] =
        instrumentsData.data.listInstruments.items;

      setInstruments(instrumentsList);
    } catch (err) {
      console.log("error fetching instruments ", err);
    }
  };

  return (
    <div>
      <Header />
      home
      <InstrumentForm />
      <InstrumentsContainer>
        {instruments.map((instr, i) => (
          <Paper key={nanoid()} variant="outlined" elevation={2}>
            <p>
              <FiChevronRight />
              {i} {instr.brand} {instr.instrument}
            </p>
            <span>year: {instr.year}</span>
            <p>
              ${instr.price}
              <IconButton>
                <FiTrash />
              </IconButton>
            </p>
          </Paper>
        ))}
      </InstrumentsContainer>
    </div>
  );
};

export default Home;
