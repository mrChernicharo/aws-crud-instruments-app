import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import InstrumentForm from "../components/InstrumentForm/InstrumentForm";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listInstruments } from "../graphql/queries";

interface Props {}

const Home = () => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    fetchInstruments();
  }, []);

  const fetchInstruments = async () => {
    try {
      const instrumentsData: any = await API.graphql(
        graphqlOperation(listInstruments)
      );
      console.log(instrumentsData);

      const instrumentsList = instrumentsData.data.listInstruments.items;
      console.log("instruments list ", instrumentsList);
      // setInstruments(instrumentsList);
    } catch (err) {
      console.log("error fetching instruments ", err);
    }
  };

  return (
    <div>
      <Header />
      home
      <InstrumentForm />
    </div>
  );
};

export default Home;
