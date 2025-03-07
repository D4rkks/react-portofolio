// src/components/NotFound.js

import React, { useRef } from 'react';
import './Error404.css'; // Se você quiser adicionar estilos personalizados
import rock from './components/pt/assets/sus.gif';
import sound from './components/pt/assets/sus.mp3'; // Importe seu arquivo de som

function NotFound() {
  const audioRef = useRef(new Audio(sound)); // Use useRef para manter a referência do áudio

  const playSound = () => {
    audioRef.current.pause(); // Para o som se já estiver tocando
    audioRef.current.currentTime = 0; // Reinicia o som
    audioRef.current.play(); // Toca o som
  };

  return (
    <div className="not-found">
      <img className="sus" src={rock} alt="Sus GIF" onClick={playSound} />
      <h1>404 - Page not found!</h1>
      <p>Sorry, this page does not exist, please go back to home.</p>
      <a href="/">Click here to go back to the Home Page</a>
    </div>
  );
}

export default NotFound;
