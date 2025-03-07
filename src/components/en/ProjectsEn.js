import './ProjectsEn.css';
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <main className="Projects">
        <Fade>
      <div className="proj-title">
        <h1>Projects</h1>
        <h2>Personal projects, and others..</h2>
      </div>
      </Fade>
      <Link to="https://github.com/D4rkks" className="proj-subtitle"> 
      <span className="proj-text">My Projects (Github)</span> {/* Texto sobreposto */}
      </Link>
      <Link to="/projects" className="proj-subtitle2"> 
      <span className="proj-text2">Linktree Discord Skin</span> {/* Texto sobreposto */}
      </Link>
    </main>
  );
}

export default Projects;
