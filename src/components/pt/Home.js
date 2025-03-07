// Home.js
import './Home.css';
import will from './assets/will.jpg';
import cf from './assets/cf.png';
import discord from './assets/discord.png';
import git from './assets/git.png';
import instagram from './assets/instagram.png';
import telegram from './assets/telegram.png';
import horn from './assets/mlg.mp3';
import { useState, useRef } from 'react';
import Zoom from 'react-reveal/Zoom'; 
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';
import CardSlider from "./CardSlider/CardSlider";
import CardSlider2 from "./CardSlider/CardSlider2";

function Home() {
    const [crosshairs, setCrosshairs] = useState([]);
    const isPlaying = useRef(false); // Ref para controlar se o som está tocando

    const handleImageClick = () => {
      if (isPlaying.current) return; // Não faz nada se o som já estiver tocando
  
      const newCrosshairs = Array.from({ length: 10 }, () => {
        const size = 50; // Tamanho da crosshair
        const x = Math.random() * (window.innerWidth - size); // Posição horizontal
        const y = Math.random() * (window.innerHeight - size); // Posição vertical
        return {
          top: `${y}px`,
          left: `${x}px`,
          opacity: 1,
        };
      });
      setCrosshairs(newCrosshairs);
  
      // Reproduz o som de buzina
      const audio = new Audio(horn);
      audio.play();
      isPlaying.current = true; // Marca que o som está tocando
  
      // Remove as crosshairs após 1 segundo
      setTimeout(() => {
        setCrosshairs([]);
      }, 1000);
  
      // Para o som após 15 segundos
      setTimeout(() => {
        isPlaying.current = false; // Marca que o som parou
      }, 7500);
    };

    const handleDragStart = (e) => {
        e.preventDefault(); // Previne o arrasto da imagem
    };

    // Dados da experiência
    const experiences = [
        {
            title: "Desenvolvedor Solo",
            company: "Discord",
            date: "Jan 2016 - 2018",
            description: "Desenvolvimento de bots (atendimento automático de pessoas) para servidores."
        },
        {
            title: "Desenvolvedor Front-End",
            company: "Freelancer",
            date: "Jul 2017 - Presente",
            description: "Desenvolvimento de front-ends para websites."
        },
        {
            title: "Desenvolvedor de Cheats",
            company: "Vários Clientes",
            date: "Jan 2020 - Jan 2024",
            description: "Desenvolvimento avançado de cheats, por meio de tecnicas de bypass do Vanguard/EAC/BE via kernel de cheats como ESP/Aimbot/ColorBot e Spoofers."
        },
        {
            title: "Estudante de Ciência da Computação",
            company: "UDESC",
            date: "Jul 2024 - Presente",
            description: "Cursando Ciência da Computação pela UDESC"
        },
        // Adicione mais experiências conforme necessário
    ];

    return (
        <main className="content">
            <div className="title-container">
                <div className="title">
                    <Fade delay={201}>
                        <label className="name">Gustavo "Dark" Lass</label>
                        <div className="divider"></div>
                        <label className="undertext">Full-Stack Developer - Bacharelado em Ciência da Computação pela UDESC. <br /> 17 Anos, 7 anos+ de experiência em desenvolvimento</label>
                    </Fade>
                    <Fade delay={501}>
                        <ul className="buttons"> 
                            <li><a target="_blank" href="https://github.com/D4rkks"><img title="Github" className="img" src={git} /></a></li>
                            <li><a target="_blank" href="https://codeforces.com/profile/D4rkks"><img title="Codeforces" className="img" src={cf} /></a></li>
                            <li><a target="_blank" href="https://discord.com/users/247726496435666944/"><img title="Discord" className="img" src={discord} /></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/gustavo.lass/"><img title="Instagram" className="img" src={instagram} /></a></li>
                            <li><a href=""><img title="Telegram" className="img" src={telegram} /></a></li>
                        </ul>
                    </Fade>
                </div>
                <Bounce>
                    <div className="will-smith" onClick={handleImageClick}>
                        <img 
                            src={will} 
                            alt="Im Jobless" 
                            className="will-smith" 
                            onDragStart={handleDragStart} 
                        />
                    </div>
                </Bounce>
            </div>

            {crosshairs.map((style, index) => (
                <div key={index} className="crosshair" style={style}></div>
            ))}

            <Fade delay={1001}>
                <div className="skills">
                    <label className="title">Skills</label>
                    <CardSlider />
                    <CardSlider2 />
                </div>
            </Fade>
            <div className="experience">
                <Fade delay={2001}>
                    <label className="title">Experiência</label>
                </Fade>
                <Fade delay={2501}>
                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div className="timeline-item" key={index}>
                                <h3>{exp.title} - <span>{exp.company}</span></h3>
                                <p className="date">{exp.date}</p>
                                <p>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
            <Fade delay={2001}>
            <div className="historia">

                    <label className="title">História</label>
                    <div className="historia-item">
                        <h2>Introdução</h2>
                        <h3>Comecei na programação aos 9 anos, entorno de 2015/16, quando comecei a ver video-aulas de como se faziam bots no discord.<br/><br/>
                            Por volta de 2017/18 Comecei a me interessar por injetores de script para roblox, onde aprendi um pouco de Windows Forms (C#)
                        </h3>
                    </div>
            </div>
            <div className="historia2">
                    <div className="historia-item">
                        <h2>Desenvolvimento Web</h2>
                        <h3>Eu já me interessava por desenvolvimento web desde pequeno, tendo feito websites com wordpress/wix para meu canal do youtube muito tempo antes<br/><br/>
                            Mas foi só mais tarde que comecei a me interessar por por a mão na massa e começar a desenvolver websites realmente.
                            </h3>
                    </div>
            </div>
            <div className="historia3">
                    <div className="historia-item">
                        <h2>Desenvolvimento Kernel</h2>
                        <h3>Após o lançamento do Valorant, comecei a me interessar por desenvolvimento de cheats para jogos com
                            Anti-Cheats no Ring0. <br/><br/> Com isso adquiri experiencia em criação de drivers para Windows, manipulação de memória, engenharia reversa (IDA/x64)
                            além de desenvolvimento de UI's em C++ com bibliotecas como GDI+/IMGui além de desenvolvimento com OpenGL e Directx
                        </h3>
                    </div>
            </div>
            </Fade>
        </main>
    );
}

export default Home;
