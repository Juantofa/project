import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const AddProyecto = ({ setProyectos }) => {

    const [show, setShow] = useState(false);
    const [values, setValues] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const guardaDatos = (e) => {
        e.preventDefault();
        setProyectos(projects => [...projects, values]);
        handleClose();
    }
    
    return (
        <div>
            <Card className="text-center" style={{ width: "95%" }}>
                <Card.Body>
                    <Button variant="primary" onClick={handleShow}>Agregar</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar un Proyecto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={guardaDatos}>
                        <Form.Group controlId="formNombre">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa el nombre del Proyecto" onChange={e => setValues({ ...values, titulo: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formJefe">
                            <Form.Label>Jefe</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa el nombre del Jefe" onChange={e => setValues({ ...values, jefe: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formDescripcion">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa una Descripción" onChange={e => setValues({ ...values, descripcion: e.target.value })} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Agregar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
