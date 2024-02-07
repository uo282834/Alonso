import React from 'react';
import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <div className ="home">
      <h1>
        Hola, soy Alonso Antuña Gómez, un estudiante de Ingeniería Informática y <strong>Desarrollador de Software</strong>.
        Actualmente, estoy haciendo mi cuarto año de carrera de Erasmus en Bialystok (Polonia), donde estoy ampliando mis conocimientos a través de diversas formas de aprendizaje y tecnologías.
      </h1>
      <h2>
        Si tienes alguna pregunta o quieres trabajar conmigo,
        <Link className='link' to="/contact">
          <span className='link-text'>Contáctame.</span>
        </Link>
      </h2>
    </div>
  );
};
