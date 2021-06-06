import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Amplify from "aws-amplify";
import awsConfig from "./aws-exports";
import {
  AmplifyContainer,
  AmplifySignOut,
  withAuthenticator,
} from "@aws-amplify/ui-react";

Amplify.configure(awsConfig);

function App() {
  return (
    <>
      <Home />

      <AmplifyContainer>
        <AmplifySignOut />
      </AmplifyContainer>
    </>
  );
}

export default withAuthenticator(App);
