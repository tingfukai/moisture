import React, { useState } from "react";
import "./style.scss"
import { Container } from 'react-bootstrap';
const Results = ({ handleResult }) => {
    return (
        <div className=" main ">

            <h5>Results</h5>
            <Container className="card ">
                <div className="col-lg-5 col-12 Input">
                    <label>Water Content (%): </label>
                    <div>
                        <span>{handleResult()}</span>
                    </div>


                </div>
            </Container>



        </div>
    );
};

export default Results;