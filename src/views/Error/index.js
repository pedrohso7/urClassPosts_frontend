import React from 'react';
import './style.css';

const Error = () => {
    return (
      <div className = "containerError">
        {/*Página de erro para rotas inexistentes*/}
        <p className = "errorMessage">ERRO: Página inexistente!</p>
      </div>
    );
}

export default Error;
