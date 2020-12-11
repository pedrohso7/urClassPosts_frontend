import React from 'react';
import Routes from './routes'
import firebase from './firebaseConnection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'


function App() {
  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;
