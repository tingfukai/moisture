import React from "react";
import "./style.scss"
import { Container } from 'react-bootstrap';
const Measurements = () => {
    return (
        <div className=" main ">

            <h5>Measurements</h5>
            <Container className="card ">
                <div className="row">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-lg-5 col-12 Input">
                            <label>Tare ID:</label>
                            <input

                                placeholder='MT001'
                                required
                            />

                        </div>

                        <div className="col-lg-5 col-12 Input">
                            <label>Tare Mass (g):</label>
                            <input

                                placeholder='The mass of the container'
                                required
                            />

                        </div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-12 col-lg-5 Input">
                            <label>Tare and Material Wet Mass (g):</label>
                            <input

                                placeholder=''
                                required
                            />

                        </div>

                        <div className="col-lg-5 col-12 Input">
                            <label>Material Wet Mass (g):</label>
                            <div><span>zzz</span></div>


                        </div>
                    </div>
                </div>
            </Container>



        </div>
    );
};

export default Measurements;