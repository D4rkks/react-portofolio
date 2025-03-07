import './Portfolio.css';
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import Fade from 'react-reveal/Fade';

function Portfolio() {
  return (
    <main className="Portfolio">
      <Fade>
        <div className="port-title">
        <h1>Portfolio</h1>
        <h2>Projetos mais recentes em que eu trabalhei</h2>
      </div>
      </Fade>
      <Link to="/" className="port-subtitle"> 
      <span className="overlay-text">Meu Portfolio</span> {/* Texto sobreposto */}
      </Link>
      <Link to="/projects" className="port-subtitle2"> 
      <span className="overlay-text2">Linktree Discord Skin</span> {/* Texto sobreposto */}
      </Link>
    </main>
  );
}

export default Portfolio;
