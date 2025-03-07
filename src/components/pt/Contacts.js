import './Contacts.css';
import discord from './assets/discord.png';
import instagram from './assets/instagram.png';
import telegram from './assets/telegram.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';

function Contacts() {
  return (
    <main className="Contacts">
      <Fade>
      <div className="card">
      <Fade delay={500}>
        <h1 className="title">Entre em Contato</h1>
        </Fade>
        <Fade delay={700}>
        <h2 className="undertitle">Para respostas imediatas, entre em contato via discord, ou instagram</h2>
        </Fade>
        <Fade delay={900}>
        <ul className="buttons2"> 
            <li>
              <a target="_blank" href="https://discord.com/users/247726496435666944/">
                <div className="button-content">
                  <img title="Discord" className="imgc" src={discord} />
                  <p className="username">dark.dev</p> {/* Nome de usuário para Discord */}
                  Discord
                </div>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/gustavo.lass/">
                <div className="button-content">
                  <img title="Instagram" className="imgc" src={instagram} />
                  <p className="username">gustavo.lass</p> {/* Nome de usuário para Instagram */}
                  Instagram
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="button-content">
                  <img title="Telegram" className="imgc" src={telegram} />
                  <p className="username">gustavo.lass</p> {/* Nome de usuário para Telegram */}
                  Telegram
                </div>
              </a>
            </li>
        </ul>
        </Fade>
      </div>
      </Fade>
    </main>
  );
}

export default Contacts;
