import "./App.css";
import Home from "./pages/Home";
import Amplify from "aws-amplify";
import awsConfig from "./aws-exports";
import {
  AmplifyContainer,
  AmplifySignOut,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { FiBookOpen, FiAirplay, FiAlertOctagon } from "react-icons/fi";

Amplify.configure(awsConfig);

function App() {
  return (
    <>
      <Home />

      <AmplifyContainer>
        <FiAlertOctagon size={50} className="App-logo" />
        <AmplifySignOut />
      </AmplifyContainer>
    </>
  );
}

export default withAuthenticator(App);
