import "./App.css";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import Landing from "../domain/landing/landing";
import Waiting from "../components/Waiting";
import { Route, Switch } from "react-router";
import { AnimatePresence } from "framer-motion";
function getLibrary(provider: any) {
  return new Web3(provider);
}
// const Landing = lazy(() => import('../domain/landing/landing'));
function App() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AnimatePresence exitBeforeEnter>
        <div className="MainApp">
          <Switch>
            <Route path="/" component={Waiting} exact />
            <Route path="/enter" component={Landing} />
          </Switch>
        </div>
      </AnimatePresence>
    </Web3ReactProvider>
  );
}

export default App;
