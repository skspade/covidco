import React from "react";
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
import CompanyForm from "./components/Admin/CompanyForm";


Amplify.configure(awsmobile);
function App() {
  return (
    <div className="App">
      <h1 className="text-5xl text-gray-800 text-center">CovidCo</h1>
      <h2 className="text-xl text-gray-800 text-center">
        Holding companies accountable for their response to the COVID19 pandemic
      </h2>
      <div className="container px-10 mx-auto">
        <CompanyForm/>
        {/*<CompanyContainer/>*/}
      </div>
    </div>
  );
}

export default App;
