import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Portfolio from './components/pt/Portfolio';
import Projects from './components/pt/Projects';
import Contact from './components/pt/Contacts';
import English from './components/en/En.js';
import EnContact from './components/en/ContactEN.js';
import EnPortfolio from './components/en/PortfolioEn.js';
import EnProjects from './components/en/ProjectsEn.js';
import Home from './components/pt/Home.js';
import usa from './components/pt/assets/usa.png'
import br from './components/pt/assets/brazil.png'
import Fade from 'react-reveal/Fade';
import NotFound from './Error404'; // Importando o componente de erro 404


function Navigation({ toggleMenu, toggleTheme, isDarkMode, menuOpen }) {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const [emojiTransition, setEmojiTransition] = useState(false);

  const handleToggleTheme = () => {
    setEmojiTransition(true);
    toggleTheme();
    setTimeout(() => {
      setEmojiTransition(false);
    }, 500); // Tempo igual ao da transição CSS
  };

  return (
    <nav className="navbar">
      <a className="logo" href={isEnglish ? "/en/" : "/pt/"}>Lass DEV</a>
      <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </button>
      <ul className={`menu ${menuOpen ? 'active' : ''}`}>
        <li><a href={isEnglish ? "/en/" : "/pt/"} className="active">{isEnglish ? "About" : "Sobre"}</a></li>
        <li><a href={isEnglish ? "/en/portfolio" : "/pt/portfolio"} className="active">{isEnglish ? "Portfolio" : "Portfolio"}</a></li>
        <li><a href={isEnglish ? "/en/projects" : "/pt/projects"} className="active">{isEnglish ? "Projects" : "Projetos"}</a></li>
        <li><a href={isEnglish ? "/en/contact" : "/pt/contact"} className="active">{isEnglish ? "Contact" : "Contato"}</a></li>
      </ul>
      <ul className="menu2">
        <li>
          <a href={isEnglish ? "/pt/" : "/en/"} className="active">
            <img
              src={isEnglish ? usa : br}
              alt={isEnglish ? 'USA Flag' : 'Bandeira do Brasil'}
              style={{ width: '24px', height: '24px', marginLeft: '5px' }} 
            />
          </a>
        </li>
        <button className={`theme-toggle ${emojiTransition ? 'emoji-transition' : ''}`} onClick={handleToggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </ul>
    </nav>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verifica o localStorage para a preferência do tema
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light'); // Armazena a preferência no localStorage
      return newMode;
    });
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className="App">
        <Fade>
          <header className="site-header">
            <Navigation 
              toggleMenu={toggleMenu} 
              toggleTheme={toggleTheme} 
              isDarkMode={isDarkMode} 
              menuOpen={menuOpen} 
            />
          </header>
        </Fade>

        <Routes>
          <Route path="/" element={<Navigate to="/pt/" />} />
          <Route path="/pt/" element={<Home />} />
          <Route path="/pt/portfolio" element={<Portfolio />} />
          <Route path="/pt/projects" element={<Projects />} />
          <Route path="/pt/contact" element={<Contact />} />
          <Route path="/en/" element={<English />} />
          <Route path="/en/contact" element={<EnContact />} />
          <Route path="/en/portfolio" element={<EnPortfolio />} />
          <Route path="/en/projects" element={<EnProjects />} />
          <Route path="*" element={<NotFound />} /> {/* Captura todas as rotas não definidas */}
        </Routes>
        <footer>
          <p>© Gustavo Lass [2024]</p>
          <p>Made in ReactJS</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
