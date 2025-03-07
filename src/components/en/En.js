// Home.js
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
            title: "Solo Developer",
            company: "Discord",
            date: "Jan 2016 - 2018",
            description: "Bot Development for Discord servers."
        },
        {
            title: "Front-End Developer",
            company: "Freelancer",
            date: "Jul 2017 - Present",
            description: "Front-End development for Websites"
        },
        {
            title: "Cheat Developer",
            company: "Many Customers",
            date: "Jan 2020 - Jan 2024",
            description: "Advanced cheat development, through Vanguard/EAC/BE bypass techniques via cheat kernels such as ESP/Aimbot/ColorBot and Spoofers."
        },
        {
            title: "Computer Science Student",
            company: "UDESC",
            date: "Jul 2024 - Present",
            description: "Studying Computer Science at UDESC"
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
                        <label className="undertext">Full-Stack Developer - Bachelor in Computer Science by UDESC. <br /> 17 years, 7 years+ of experience in development</label>
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
                    <label className="title">Experience</label>
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

                    <label className="title">History</label>
                    <div className="historia-item">
                        <h2>Introduction</h2>
                        <h3>I started programming when I was 9 years old, around 2015/16, when I started watching video lessons on how to make bots on Discord.<br/><br/>
                           Around 2017/18 I started getting interested in script injectors for roblox, where I learned a bit of Windows Forms (C#)
                        </h3>
                    </div>
            </div>
            <div className="historia2">
                    <div className="historia-item">
                        <h2>Web Development</h2>
                        <h3>I've been interested in web development since I was little, having made websites with wordpress/wix for my youtube channel a long time before.<br/><br/>
                            But it was only later that I became interested in getting my hands dirty and actually developing websites..
                            </h3>
                    </div>
            </div>
            <div className="historia3">
                    <div className="historia-item">
                        <h2>Kernel Development</h2>
                        <h3>After the release of Valorant, I started to get interested in developing cheats for games with
                            Anti-Cheats on Ring0. <br/><br/> With this I gained experience in creating drivers for Windows, memory manipulation, reverse engineering. (IDA/x64)
                            in addition to UI development in C++ with libraries such as GDI+/IMGui in addition to development with OpenGL and Directx
                        </h3>
                    </div>
            </div>
            </Fade>
        </main>
    );
}

export default Home;
