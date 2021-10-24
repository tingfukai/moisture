import React, { useState } from "react";
import "./style.scss"
import { Container } from 'react-bootstrap';
const Measurements = ({ handleMaterialWetM }) => {

    const [tareId, setTareId] = useState("MT001");
    const [tareMass, setTareMass] = useState("");
    const [tareMWM, setTareMWM] = useState("");



    const handleResult = () => {
        const cal = ((tareMWM - tareMass)).toFixed(1)
        handleMaterialWetM(cal, tareMass, tareMWM)
        return (
            cal
        )

    };


    return (
        <div className=" main ">

            <h5>Measurements</h5>
            <Container className="card ">
                <div className="row">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-lg-5 col-12 Input">
                            <label>Tare ID: </label>
                            <input

                                placeholder='MT001'
                                required
                                onChange={(e) => setTareId(e.target.value)}
                            />

                        </div>

                        <div className="col-lg-5 col-12 Input">
                            <label>Tare Mass (g): </label>
                            <input

                                placeholder='The mass of the container'
                                required
                                onChange={(e) => setTareMass(e.target.value)}
                            />

                        </div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-12 col-lg-5 Input">
                            <label>Tare and Material Wet Mass (g): </label>
                            <input

                                placeholder=''
                                required
                                onChange={(e) => setTareMWM(e.target.value)}
                            />

                        </div>

                        <div className="col-lg-5 col-12 Input">
                            <label>Material Wet Mass (g): </label>
                            <div>
                                {tareMass != "" && tareMWM != "" ? <span>{handleResult()}</span> : null}
                            </div>


                        </div>
                    </div>
                </div>
            </Container >



        </div >
    );
};

export default Measurements;