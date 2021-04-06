import React from 'react'

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Login = () => {
    return (
        <div style={{ textAlign: "-webkit-center" }}>
            <Card border="primary" style={{ width: "70%" }}>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa el Correo" />
                            <Form.Text className="text-muted">
                                ejemplo@ejemplo.com
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa la Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Iniciar Sesión
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
