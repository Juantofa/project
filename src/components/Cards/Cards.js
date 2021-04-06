import React from 'react';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Cards = (props) => {
    return (
        <div>
            <Card className="text-center" style={{width:"95%"}}>
                <Card.Body>
                    <Card.Title>{props.proyecto.titulo}</Card.Title>
                    <Card.Text>
                        {props.proyecto.descripcion}
                    </Card.Text>
                    <Button variant="primary">Detalles</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Proyecto liderado por: {props.proyecto.jefe}</Card.Footer>
            </Card>
            
        </div>
    )
}
