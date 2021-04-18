import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Cards } from '../../components/Cards/Cards';
import Row from 'react-bootstrap/Row';
import { AddProyecto } from '../../components/AddProyecto/AddProyecto';
import apiCall from "../../api/apiCall";

export const Proyectos = () => {

    const [proyectos, setProyectos] = useState([]);

    useEffect(async() => {
        try {
            const result =   await apiCall({ url: "https://api.npoint.io/48d507b58a262376515d" });
            setProyectos(result);
        } catch (error) {
            console.log(error);
        }
    }, []);



    return (
        <div>
            <Card border="primary" >
                <Card.Body>
                    <div className="container">
                        <div style={{ textAlign: "center" }}>
                            <h3>Actualmente estás en los siguientes proyectos:</h3>
                            <br></br>
                        </div>
                        <div style={{ textAlign: "-webkit-center" }}>
                            <Row className="justify-content-md-center">
                                <AddProyecto setProyectos={setProyectos} />
                                {proyectos?.map((proyecto, index) => <Cards key={index} proyecto={proyecto} />)}
                            </Row>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
