import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import Results from './components/body/result';
import Measurements from './components/body/measurement';
import DryMass from './components/body/dry_mas';
import Preparation from './components/body/preparation';
import "./app.scss"
const App = () => {

  const [resultM, setResultM] = useState(null);

  const handleMaterialWestM = (v) => {

    setResultM(v);
  }
  return (
    <Fragment>
      <Navbar />

      <div className='section' >
        <div className="body container">
          <Preparation />
          <Measurements handleMaterialWestM={handleMaterialWestM} />
          <DryMass />
          <Results />
        </div>

      </div>



    </Fragment>



  );
}

export default App;
