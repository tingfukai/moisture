import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import Results from './components/body/result';
import Measurements from './components/body/measurement';
import DryMass from './components/body/dry_mas';
import Preparation from './components/body/preparation';
import "./app.scss"
const App = () => {

  const [resultWM, setResultWM] = useState(null);
  const [resultDM, setResultDM] = useState(null);
  const [fResult, setFResult] = useState(null);
  const [Mc, setMc] = useState(null);
  const [Mcms, setMcms] = useState(null);
  const [Mcds, setMcds] = useState(null);

  //Wet
  const handleMaterialWetM = (v, tareM, tareMWM) => {
    setMc(tareM);
    setMcms(tareMWM);
    setResultWM(v);
  }

  //Dry
  const handleMaterialDryM = (v) => {
    const result = ((v - Mc)).toFixed(1)
    setResultDM(result)
    setMcds(v)
    return (
      result
    )
  }

  const handleResult = () => {
    const result = Math.round(((Mcms - Mcds) / resultDM) * 100);
    console.log(((Mcms - Mcds) / resultDM))
    setFResult(result)
    return (
      result
    )
  }


  return (
    <Fragment>
      <Navbar />

      <div className='section' >
        <div className="body container">
          {/*  <Preparation /> */}
          <Measurements handleMaterialWetM={handleMaterialWetM} />
          <DryMass Mc={Mc} handleMaterialDryM={handleMaterialDryM} />
          <Results handleResult={handleResult} />
        </div>

      </div>



    </Fragment>



  );
}

export default App;
