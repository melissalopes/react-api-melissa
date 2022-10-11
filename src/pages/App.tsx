import React from 'react';
import Formulario from '../components/form';
import Lista from '../components/list';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario></Formulario>
      <Lista></Lista>
    </div>
  );
}

export default App;
 