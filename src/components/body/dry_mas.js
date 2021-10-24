import React, { useState } from "react";
import "./style.scss"
import { Container } from 'react-bootstrap';

const DryMass = ({ tareMass, handleMaterialDryM }) => {
    const [dryMB, setDryMB] = useState("01BAL");
    const [tareMDM, setTareMDM] = useState("");





    return (
        <div className=" main ">

            <h5>Dry Mass</h5>
            <Container className="card ">
                <div className="  col">
                    <div className="  d-flex flex-wrap justify-content-between">
                        <div className="col-lg-5 col-12 Input">
                            <label>Dry Mass Balance: </label>
                            <input

                                placeholder='01BAL'
                                required
                                onChange={(e) => setDryMB(e.target.value)}
                            />

                        </div>

                        <div className="col-12 col-lg-5 Input">
                            <label>Tare and Material Dry Mass (g): </label>
                            <input

                                placeholder=''
                                required
                                onChange={(e) => setTareMDM(e.target.value)}
                            />

                        </div>
                    </div>



                    <div className="col-lg-5 col-12 Input">
                        <label>Material Dry Mass (g): </label>
                        <div>
                            {tareMass != "" && tareMDM != "" ? <span>{handleMaterialDryM(tareMDM)}</span> : null}
                        </div>


                    </div>

                </div>
            </Container>



        </div>
    );
};

export default DryMass;