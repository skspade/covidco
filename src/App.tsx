import React from "react";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import CompanyForm from "./components/Admin/CompanyForm/Container";
import CompanyContainer from "./components/Company/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

Amplify.configure(awsmobile);
function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-5xl text-gray-800 text-center">CovidCo</h1>
        <h2 className="text-xl text-gray-800 text-center">
          Holding companies accountable for their response to the COVID19
          pandemic
        </h2>
        <NavBar />
        <div className="container px-10 mx-auto">
          <Switch>
            <Route path="/company-form">
              <CompanyForm />
            </Route>
            <Route path="/">
              <CompanyContainer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
