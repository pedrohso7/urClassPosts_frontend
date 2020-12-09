import React from 'react';
import firebase from 'firebase';
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
      
const firebaseConfig = {
  apiKey: "AIzaSyDaWaI9ry5vMYdA962hpMISIFw2oiWq2jA",
  authDomain: "urclassposts.firebaseapp.com",
  databaseURL: "https://urclassposts-default-rtdb.firebaseio.com/",
  projectId: "urclassposts",
  storageBucket: "urclassposts.appspot.com",
  messagingSenderId: "631514982159",
  appId: "1:631514982159:web:112eb6174639010ddd807a",
  measurementId: "G-SY3MVFLS8Q"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;
