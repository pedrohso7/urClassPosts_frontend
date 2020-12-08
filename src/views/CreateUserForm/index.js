import React, {useState} from 'react';
import { Container, Row, Card, Form, Button } from 'react-bootstrap';

const CreateUserForm = () => {
  return (
    <Container>
      <Card>
        <Card.Header className="bg-dark text-white" border="warning" as="h4">Cadastro</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Nome Sobrenome" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" />
              <Form.Text className="text-muted">
                Nós não iremos compartilhar seu email para ninguém.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirmar Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Cadastrar
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CreateUserForm;
