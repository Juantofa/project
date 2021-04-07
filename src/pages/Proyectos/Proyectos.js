import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import { Cards } from '../../components/Cards/Cards';
import Row from 'react-bootstrap/Row';
import { AddProyecto } from '../../components/AddProyecto/AddProyecto';

export const Proyectos = () => {

    const [proyectos, setProyectos] = useState([
        {
            titulo: "React",
            jefe: "Cristian",
            descripcion: "Hacer un proyecto usando ReactJS"
        }, {
            titulo: "Python",
            jefe: "Félix",
            descripcion: "Hacer un proyecto usando Python"
        }, {
            titulo: "Angular",
            jefe: "Jose",
            descripcion: "Hacer un proyecto usando Angular"
        }, {
            titulo: "Vue",
            jefe: "Jose",
            descripcion: "Hacer un proyecto usando Vue"
        }, {
            titulo: "Java",
            jefe: "Jose",
            descripcion: "Hacer un proyecto usando Java"
        }
    ]);


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
                                <AddProyecto setProyectos = {setProyectos}/>
                                {proyectos.map(proyecto => <Cards proyecto={proyecto}/>)}
                            </Row>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
