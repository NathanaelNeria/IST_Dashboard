import React from "react";
import { Card, CardGroup, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import CIcon from "@coreui/icons-react";

function Login() {
    return(
        <div className="bg-dark min-vh-100 d-flex flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col>
                    <CardGroup>
                        <Card className='p-4'>
                            <Card.Body>
                                <Form>
                                    <h1>Login</h1>
                                    <p>Sign in to your account</p>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>
                                            <CIcon icon='cis-user' />
                                        </InputGroup.Text>

                                    </InputGroup>
                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login