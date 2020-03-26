import React from "react";
import CompanyRow from "./components/Company/Row";

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl text-gray-800 text-center">CovidCo</h1>
      <h2 className="text-xl text-gray-800 text-center">
        Holding companies accountable for their response to the COVID19 pandemic
      </h2>
      <div className="container mx-auto">
        <section className="mt-20">
          <h3 className="text-xl text-gray-800 text-center">Companies</h3>
          <CompanyRow name="Amazon" />
        </section>
      </div>
    </div>
  );
}

export default App;
