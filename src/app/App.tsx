import "./App.css";

import Landing from "../domain/landing/landing";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { Minting } from "../domain/minter/Minting";
import {Route, Switch } from "react-router-dom";
    

function getLibrary(provider: any) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="MainApp">
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/mint" component={Minting} />
        </Switch>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
