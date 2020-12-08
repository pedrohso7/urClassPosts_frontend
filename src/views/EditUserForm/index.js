import React, {useState, useEffect} from 'react';
import { useRouteMatch } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import firebase from 'firebase';

const initialFormState = {
  isValid: false,
  loading: true,
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
    name: false,
    email: false,
    password: false,
    passwordConfirmation: false,
    bio: false,
    avatar: false
  }
}

const EditUserForm = () => {
  const routerMatch = useRouteMatch("/user/edit/:id");
  const id = routerMatch.params.id;
  const database = firebase.database();
  const [fileName, setFileName] = useState("Insira um arquivo válido");
  const [formState, setFormState] = useState(initialFormState);


  console.log(formState.values);
  const queryUserByID = () => {
    if(formState.loading) return (

      firebase.database().ref('Users').child(`${id}`).once('value', (snapshot) => {
        setFormState(formState => ({
          ...formState,
          loading: false,
          values: {
            ...formState.values,
            name: snapshot.val().name,
            bio: snapshot.val().bio ? snapshot.val().bio : '',
            password: snapshot.val().password,
            avatar: snapshot.val().avatar ? snapshot.val().avatar : '' 
          },
          touched: {          
            ...formState.touched,
            name: true,
            password: true,
            bio: snapshot.val().bio ? true : false,
            avatar: snapshot.val().avatar ? true : false          
          }
        }))
      })
    ) 
  }

  useEffect(() => {
    //Buscando usuário
    queryUserByID();
  });  
  
  const handleFieldChange = (e, field, value) => {
    
    
    e.persist && e.persist();
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [field]: value
      },
      touched: {
        ...formState.touched,
        [field]: true
      }
    });

    
  };

  const handleAvatarChange = (e) => {
    setFileName(e.target.files[0].name);
    handleFieldChange(e, 'avatar', e.target.value);
  }

  return (
    <Container>
      
      <Card>
        <Card.Header  className="bg-dark text-white" border="warning" as="h4">Editar</Card.Header>
        <Card.Body>

          <Form>
            <Form.Group controlId="formBasicAvatar">
              
              <Form.Label>Avatar Personalizado</Form.Label>
              <Row className="justify-content-center margin-bottom-2">
                         
                <Image
                  width={100}
                  height={100}
                  alt="171x180"
                  src="https://elaele.com.br/img/anonimo.png"
                  roundedCircle
                />
              </Row>
              
              
              
                <Form.File 
                  id="inputGroupFile01"
                  label={fileName}
                  value={formState.values.avatar}
                  data-browse="Insira uma imagem"
                  onChange={(e) => handleAvatarChange(e)}
                  custom                
                />
                
                <Form.Text className="text-muted">
                  Formatos válidos: PNG, JPEG, JPG.
                </Form.Text>
            </Form.Group>   

            <Form.Group controlId="formBasicBio">
              <Form.Label>Descrição do seu perfil</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Descrição" 
                value={formState.values.bio}
                onChange={e => handleFieldChange(e, 'bio', e.target.value)}
              />
            </Form.Group>
            
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Nome Sobrenome"             
                value={formState.values.name}
                onChange={e => handleFieldChange(e, 'name', e.target.value)}
             />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha Atual</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Senha" 
                value={formState.values.password}
                onChange={e => handleFieldChange(e, 'password', e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Nova Senha</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Confirme sua senha" 
                value={formState.values.passwordConfirmation}
                onChange={e => handleFieldChange(e, 'passwordConfirmation', e.target.value)}
              />
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
