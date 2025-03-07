import './PortfolioEn.css';
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import Fade from 'react-reveal/Fade';
function Portfolio() {
  return (
    <main className="Portfolio">
        <Fade>
      <div className="port-title">
        <h1>Portfolio</h1>
        <h2>Most recent projects that i worked on</h2>
      </div>
      </Fade>
      <Link to="/" className="port-subtitle"> 
      <span className="overlay-text">My Portfolio</span> {/* Texto sobreposto */}
      </Link>
      <Link to="/projects" className="port-subtitle2"> 
      <span className="overlay-text2">Linktree Discord Skin</span> {/* Texto sobreposto */}
      </Link>
    </main>
  );
}

export default Portfolio;
