// TestComponent.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TestComponent() {
    return (
        <Container>
            <Row>
                <Col><h2>Hello</h2></Col>
                <Col><p>World</p></Col>
            </Row>
        </Container>
    );
}

export default TestComponent;
