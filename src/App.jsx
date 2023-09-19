import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <img src="public/avatar_oculos_2.jpg" alt="Carlos Oliveira" className="img" />
        <h1 className="h1">Carlos Eduardo Oliveira</h1>
        <p className="p">Desenvolvedor Full Stack</p>
      </header>
      <main>
        <p className="p">Olá! Sou Carlos, um profissional de desenvolvimento web baseado em São Paulo. Diga olá!</p>
        <input type="email" placeholder="Digite seu e-mail" className="input" />
        <button className="button">Enviar</button>
      </main>
      <footer>
        <p>"site desenvolvido em React Vite"</p>
      </footer>
    </div>
  );
}

export default App;
