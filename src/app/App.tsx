import "./App.css";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import Waiting from "../components/Waiting";
function getLibrary(provider: any) {
  return new Web3(provider);
}
const Landing = lazy(() => import('../domain/landing/landing'));
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Suspense fallback={<Waiting />}>
        <div className="MainApp">
          <Switch>
            <Route path="/" component={Landing} exact />
          </Switch>
        </div>
      </Suspense>
    </Web3ReactProvider>
  );
}

export default App;
