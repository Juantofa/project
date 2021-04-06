import React from 'react';
import './Footer.css';

import Card from 'react-bootstrap/Card';

export const Footer = () => {
    return (
        <footer className="footer"> 
            <Card>
                <Card.Body>
                    <Card.Title>Lux Project</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">&copy; Todos los derechos reservados.</small>
                </Card.Footer>
            </Card>
        </footer>
    )
}
