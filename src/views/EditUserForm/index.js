import React, {useState, useEffect} from 'react';
import { useRouteMatch } from "react-router-dom";
import { Container, Row, Card, Form, Button, Image } from 'react-bootstrap';
import firebase from 'firebase';

const initialFormState = {
  isValid: false,
  values: {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    bio: '',
    avatar: ''
  },
  errors: {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    bio: '',
    avatar: ''
  },
  touched: {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    bio: '',
    avatar: ''
  }
}

const EditUserForm = (props) => {
  const routerMatch = useRouteMatch("/user/edit/:id");
  const id = routerMatch.params.id;
  const [fileName, setFileName] = useState("Insira um arquivo válido");

  const [formState, setFormState] = useState(initialFormState);
  if (firebase.apps.length === 0) {
    firebase.initializeApp({});
  }
  firebase.database().ref('Users').child(`${id}`).once((snapshot) => {
    setFormState(formState => ({
      ...formState,
      values: snapshot.val()
    }))
  });
  
  

  const handleAvatarImage = () => {
    /*if()
    bsCustomFileInput.init()

    var btn = document.getElementById('btnResetForm')
    var form = document.querySelector('form')
    btn.addEventListener('click', function () {
      form.reset()
    })*/
  }

  return (
    <Container>
      <Card>
        <Card.Header  className="bg-dark text-white" border="warning" as="h4">Editar</Card.Header>
        <Card.Body>
          <Form>

            <Form.Group controlId="formBasicAvatar">
              <Form.Label>Avatar Personalizado</Form.Label>
              
              <Image /*src={handleAvatarImage}*/ roundedCircle />

              <Form.File 
                id="inputGroupFile01"
                label={fileName}
                data-browse="Insira uma imagem"
                onChange={(e) => setFileName(e.target.files[0].name)}
                custom                
              />
              
              <Form.Text className="text-muted">
                Formatos válidos: PNG, JPEG, JPG.
              </Form.Text>
            </Form.Group>   

            <Form.Group controlId="formBasicBio">
              <Form.Label>Descrição do seu perfil</Form.Label>
              <Form.Control type="text" placeholder="Descrição" />
            </Form.Group>
            
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Nome Sobrenome" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Confirmar Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Atualizar
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditUserForm;
