import React, {useState} from 'react';
import { Container, Row, Card, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container>

      <Card bg="dark" text="white">
        <Card.Header border="warning" as="h4">Login</Card.Header>
        <Card.Body>
          <Form>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Button variant="warning" type="submit">
              Entrar
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
