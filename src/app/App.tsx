import "./App.css";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import Landing from "../domain/landing/landing";
import { Route, Switch } from "react-router";
import { AnimatePresence } from "framer-motion";
function getLibrary(provider: any) {
  return new Web3(provider);
}

function App() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AnimatePresence exitBeforeEnter>
        <div className="MainApp">
          <Switch>
            <Route path="/" component={Landing} exact />
          </Switch>
        </div>
      </AnimatePresence>
    </Web3ReactProvider>
  );
}

export default App;
